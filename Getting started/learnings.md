---
title: Lessons learned
parent: Getting Started
layout: default
nav_order: 3

menu_parent: 1
---
## Making this toolkit 

The [UNDP Accelerator Labs](https://acceleratorlabs.undp.org) created this website in 2023 as part of a R&D cycle on supporting national ecosystems of innovation. The rationale for doing so is explained in the [About page](../Getting started/about.html). The timeline is as follows: 

* **April**: the Accelerator Labs' global team assembles a small curation task force of four people. We, the curation force, meet physically in New York for a one-week production sprint and put together a lo-fi prototype, in the form of a hierarchy of folders on UNDP's OneDrive facility, which contains 8 tools. As the week draws to a close, we present the prototype to our team leader and colleagues and gather early feedback. 
* **May**. We document more tools and migrate the prototype to a barebones website. 
* **June**, we started a phase of socialization and sharing of the prototype. We organize a number of presentations to various teams and bureaus of UNDP, as well as to the broader Accelerator Labs network. In parallel, we continue to improve the website and add yet more tools, ending at 16. As a consequence of one of these presentations, we are asked to join a new initiative, still being discussed with the Executive Office of the Secretary General.
* **July**. The proposal is approved. The initiative is branded "the FutureGov facility" ([pre-launch home page](https://www.un.org/en/conferences/SDGSummit2023/SDG-Action-Weekend/futuregov)). It is led by UNDP, and specifically by the Governance team of the Bureau for Policy and Programme Support, the Accelerator Labs and the Chief Digital Office; UNDESA is also a participant. 
* **August**. We give the website a final once-over as the R&D cycle moves onto the next phase. We imagine the next iteration of the toolkit to be a part of the FutureGov facility's offer. 
* **September**. FutureGov launches at the SDG summit. Ecuador and Paraguay, two governments whose work with the Labs is featured in the toolkit, join the FutureGov facility as founding members. After launch, we proceed to joint resource mobilization with the other entities involved.

Overall, we observed a satisfyingly fast turnaround. The added value of curating the most actionable learnings of the Accelerator Labs network around national innovation ecosystems was fairly easy to communicate. 

## Lessons learned

* If we think of a toolkit as a self-contained artifact, we are up against the eternal challenge of turning contextual-and-implicit knowledge into universal-and-codified. So, **this toolkit has *two* components: an artifact (the website), but also several human agents, the focal points**.  Every tool in the toolkit comes with the name and contact information of someone who understands the full story behind our simple web pages, and who agreed to make themselves available should they receive a request for more information. To highlights the toolkit's human component, we insisted on building a [Team page](../Team.html) and individual pages for each contributor. This gestures towards what we see as a possible next iteration: a shopfront website from which people and organization who want to expand the capacity to innovate in their economies can invoke human expertise, the real  precious resource UNDP has to offer. This implies sophisticated service design, and we will not attempt it without allies and extra resources.
* **The choice of a very simple website hit a sweet spot, which we might dub "a mid-fi prototype"**. It was simple to do technically (see below), and, while very basic visually (so, not hi-fi), it still was far better than a hierarchy of folder or a PDF (so, not lo-fi either). Our colleagues in the Regional Bureau for Latin America and the Caribbean asked us to provide them with a whitelabel version of our website for their own use.
* **The returns to improvements in the website's design and tech are rapidly diminishing**. At first, you can achieve a lot with little extra work. But very soon, noticeable improvements require substantial extra effort. In our case, the [Team page](../Team.html) and individual contributors pages, *and only them*, required an extra page template, a file containing the data (in YAML, which is indentation-sensitive and easy to break) and a folder full of photographs. Resisting requests for aesthetic improvements is almost always the right thing to do when prototyping.
* **We were able to achieve additional speed by sharing the toolkit while we were still building it**. It turns out that, if supported by a robust narrative, a sketchy toolkit was good enough for sharing and socializing.  
* **We chose to roll out the website with [GitHub Pages](https://pages.github.com/) for decentralized collaboration**. This turned out to be a great choice, because it involved only a minimal time commitment by the team's developer. Once the site was setup, anybody in the curation task force could easily edit and add pages, with little or no knowledge about website development. We find this solution empowering and resilient (since the bottleneck of the developer is removed for basic updates, which means most updates). 
* **Open sourcing our content helps with spreading the toolkit**. Possible partners can be simply given a live link, and have the opportunity to get an idea of what is going on. Problems remain: the IPR status of internal UNDP documents (like terms of reference or slide decks) is ambiguous, and it is not even clear what steps we should take to take them into the public domain. We decided to keep those documents (resources) on UNDP servers, which means that website visitors are asked for UNDP corporate login if they click on those links. This has the advantage of simplicity, but is not a clean solution, nor a fully open one.

