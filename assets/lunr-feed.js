---

---
// builds lunr
var index = lunr(function () {
  this.field('title')
  this.field('content', {boost: 10})
  this.field('sdg')
  this.field('tags')
  this.field('url')
  this.ref('id')
});

window.tags = []
window.sdg = []

{% assign count = 0 %}
{% for post in site.pages %}
{% unless post.url contains 'assets/' %}
index.add({
    title: {{post.title | jsonify}},
    content: {{post.content | strip_html | jsonify}},
    tags: {{ post.tags | jsonify }},
    sdg: {{ post.sdg | jsonify }},
    url: {{ post.url | jsonify }},
    id: {{count}}
});

{% assign tags = "" | split: "," %}
{% for tg in post.tags %}
    {% unless tags contains tg %}
        {% assign tags = tags | push: tg %}
    {% endunless %}
    window.tags = {{ tags | jsonify}}
{% endfor %}

{% assign sdg = "" | split: "," %}
{% for cg in post.sdg %}
    {% unless sdg contains cg %}
        {% assign sdg = sdg | push: cg %}
    {% endunless %}
    window.sdg = {{ sdg | jsonify}}
{% endfor %}


{% endunless %}
{% assign count = count | plus: 1 %}
{% endfor %}


// builds reference data
var store = [{% for post in site.pages %}{
  "title": {{post.title | jsonify}},
  "url": {{ post.url | jsonify  }},
  "content": {{post.content | strip_html | jsonify}},
  "tags": {{ post.tags | jsonify }},
  "sdg": {{ post.sdg | jsonify }},
  "excerpt": {{ post.content | strip_html | truncatewords: 20 | jsonify }},
  "id": {{ count }}
}{% unless forloop.last %},{% endunless %}{% endfor %}]


// builds search
$(document).ready(function() {
  $('input#search').on('keyup', function () {
    var resultdiv = $('#results');
    var contentdiv = $('#content');

    var query = $(this).val();
    var result = index.search(query);
    resultdiv.empty();
    contentdiv.empty()
    
    // Add status
    resultdiv.prepend('<h6 class="">Found '+result.length+' result(s)</h6>');
    // Loop through, match, and add results
    for (var item in result) {
      var ref = result[item].ref;
      var searchitem = `
      <div class="tertiary">
        <h5 class="" tabindex="0" data-viewport="false">
        <a href="{{site.baseurl}}${store[ref]?.url}">
            ${store[ref]?.title}
        </a>
        </h5>
        <p>
            ${store[ref].excerpt}
        </p>
    </div>
      `

      resultdiv.append(searchitem);
    }
  });
  

  //POPULATE TAGS AND SDG FILTER
var tagsdiv = $('#tag-div');
var sdgdiv = $('#sdg-div')

if(tags.length > 0){
    let tg = `
    <div class="multi-select" data-multi-select="">
        <button aria-label="Region" aria-expanded="false" data-id="tag">
        Tags
        </button>
        <ul
        data-type="region"
        role="listbox"
        aria-multiselectable="true"
        aria-hidden="true"
        aria-modal="true"
        >
    `;

    for(let i = 0; i < tags.length; i++) {
        tg += `
            <li role="option">
                <div class="form-check">
                    <label for="tag${i+1}">${tags[i]?.toUpperCase()}</label>
                    <input
                        type="checkbox"
                        id="${tags[i]}"
                        name="tags"
                        value="${tags[i]}"
                    />
                </div>
            </li>  
        `;
    }

    tg += `
            </ul>
        </div>
    `;

    tagsdiv.append(tg)
}

if(sdg.length > 0){
    let tg = `
    <div class="multi-select" data-multi-select="">
        <button aria-label="Region" aria-expanded="false" data-id="sdg">
        SDG
        </button>
        <ul
        data-type="region"
        role="listbox"
        aria-multiselectable="true"
        aria-hidden="true"
        aria-modal="true"
        >
    `;

    for(let i = 0; i < sdg.length; i++) {
        tg += `
            <li role="option">
                <div class="form-check">
                    <label for="sdg${i+1}">${sdg[i]}</label>
                    <input
                        type="checkbox"
                        id="${sdg[i]}"
                        name="sdg"
                        value="${sdg[i]}"
                    />
                </div>
            </li>  
        `;
    }

    tg += `
            </ul>
        </div>
    `;

    sdgdiv.append(tg)
}

let taglist = []
let sdglist = []

let searchitemfn = post => `
<div class="tertiary">
    <h5 class="" tabindex="0" data-viewport="false">
    <a href="{{site.baseurl}}${post?.url}">
        ${post?.title}
    </a>
    </h5>
    <p>
        ${post.excerpt}
    </p>
</div>
`

let resultdiv = $('#results');
let contentdiv = $('#content');
let contentCopy = $("#content").html(); // Store the current content

let filterresult = () => {
    resultdiv.empty()
    resultdiv.prepend('<h6 class="">Showing results for  ' + [...sdglist, ...taglist].toString() + '</h6>');
    for(post of store){
        if(post?.tags?.some(tg => taglist.includes(tg) )){
            contentdiv.empty()
            var searchitem = searchitemfn(post)

            resultdiv.append(searchitem);
        }
        else if(post?.sdg?.some(tg => sdglist.includes(tg) )){
            contentdiv.empty()
            var searchitem = searchitemfn(post)

            resultdiv.append(searchitem);
        }
    };
}

$(document).on('multiSelectInputToggle', (e) => {
    let { value, checked, name } = e.target;
    
    if(checked && name === 'tags') taglist.push(value)
    else if(checked && name === 'sdg') sdglist.push(value)
    else if(!checked && name === 'sdg' && sdglist.includes(value)) sdglist.splice(sdglist.indexOf(value), 1)
    else if(taglist.includes(value)) taglist.splice(taglist.indexOf(value), 1)
  
    filterresult()

});

$(document).on('filterSearchChipRemoval', (e) => {
    let textContent = e.target.getAttribute('option-name');
    sdglist.includes(textContent) && sdglist.splice(sdglist.indexOf(textContent), 1)
    taglist.includes(textContent) && taglist.splice(taglist.indexOf(textContent), 1)
    filterresult()
});

$(document).on('filterSearchClear', (e) => {
    sdglist = [];
    taglist =  [];
    resultdiv.empty()
    $("#content").html(contentCopy);
});

//GET ELEMTENTS WITH ID TAGS AND SDG
$('.tag-chip').on('click', e =>{
    let textContent = e.target.getAttribute('text-value');
    taglist = [ textContent ]
    sdglist = []
    contentdiv.empty()
    filterresult()
} )

$('.sdg-chip').on('click', e =>{
    let textContent = e.target.getAttribute('text-value');
    sdglist = [textContent]
    taglist = []
    contentdiv.empty()
    filterresult()
} )

})