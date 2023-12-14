module Jekyll
  class ContributorPageGenerator < Generator
    priority :lowest

    def generate(site)
      contributors = site.data["contributors"]

      contributors.each do |contributor_id, contributor_data|
        contributor = ContributorPage.new(site, site.source, "_layouts", contributor_id, contributor_data)
        contributor.render(site.layouts, site.site_payload)
        contributor.write(site.dest)
        site.pages << contributor
      end
    end
  end

  class ContributorPage < Page
    def initialize(site, base, dir, contributor_id, contributor_data)
      @site = site
      @base = base
      @dir  = "/contributors"
      @name = "#{contributor_id}.html"

      self.process(@name)
      self.read_yaml(File.join(base, "_layouts"), "contributor.html")
      self.data["title"] = contributor_data["name"]
      self.data["contributor"] = contributor_data
      self.data["contributor"]["id"] = contributor_id
      self.data["contributor"]["href"] = "/contributors" + "/#{contributor_id}.html"
    end
  end
end
