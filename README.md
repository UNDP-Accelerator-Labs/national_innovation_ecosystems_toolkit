---
title: Background and purpose 
parent: Getting Started
layout: default
nav_order: 1

menu_parent: 1
---

## Background and purpose 

In 2022, the UNDP Accelerator Labs launched a survey to get a big picture view on the work that its global network of 91 labs was doing to support innovation ecosystems. The results were surprisingly clear-cut and coherent.  

First, **we learned that a solid majority of Labs had partnered with governments to deploy interventions in support of national innovation ecosystems, or was planning to do so in the near future**. We were looking at a surge of government investment in innovation across the Global South. Furthermore, these Global South governments were looking beyond the usual Global North example of policies to support innovation and learning from each other.  

Second, **we learned that UNDP was widely recognized as the leading organization in supporting Global South governments in this journey**. And third, **we learned that collaboration with governments that have invested in innovation becomes smoother and more impactful**.  

In 2023, as the Accelerator Labs move to contribute more deliberately to UNDP’s R&D function, we partnered up with the Chief Digital Office to offer the experience accumulated by our network of labs in tens of countries in curated form. We are making it a toolkit, that is a collection of documented resources. It is meant to inspire would-be champions of their national innovation ecosystems. More than that, though, it is meant to empower them, by offering ready-made resources that can be re-used after having been adapted to a new context. In this sense, it is a first attempt (still in prototype as we write this) at an R&D product.  

Many champions of innovation in the Global South are to be found within UNDP itself. In particular, we hope this toolkit will help the (many!) Country Offices that are moving to support their government partners on nurturing national innovation ecosystems; the Regional Bureaus of Africa and Asia Pacific (and hopefully the others, soon) in their work on public sector innovation; and – since innovation ecosystems are by definition multistakeholder and need constructive government-civil society partnerships – the Governance Community of Practice in its drive to expand civic spaces. 


## Architecture

This website uses the metaphor of a toolkit, consisting of several "tools". Please visit [this page](https://github.com/UNDP-Accelerator-Labs/national_innovation_ecosystems_toolkit/blob/main/Getting%20started/how-to-use-the-toolkit.md) for a full explanation. 

## Adding a tool 

Each tool consists of a *Factsheet*, that lives as a markdown page in the website; and of one or more *resources*, which live in UNDP's corporate filesystem. Resources are linked from the corresponding factsheet. 

To add a tool, duplicate one of the factsheet files and keep the structure (items are marked in bold). Do not forget to insert a live link to the contributor's page (see below).

## Adding a contributor

The file `contributors.yml` contains the data about contributors. The website uses it to generate dynamically each contributor's page, as well as the [contributors page](/Team.html). To add a new contributor, you must: 

1. Add a picture of the contributor in the `public/imgs/contributors` folder.
1. Create an entry in the `contributors.yml` file. Each entry has a key of the form NAME-SURNAME (do not forget the hyphen between the two), and a value in the form of a set of key:value pairs. Follow the structure provided.
3. You can now create live links to the contributor's page from the factsheets of the tool she or he has helped create. The link takes the form `[Name Surname](/contributors/NAME-SURNAME.html)`. Remember these links are case-sensitive. 

### Monitoring usage

As of 2023-08-23, we have added a simple pageviews counter. We chose [Goat Counter](https://www.goatcounter.com) because it's completely open source, independent, and free for small sites. If you are duplicating the repo, remember to replace the snippet of code that calls the usage monitoring script: you will find it at the end of the `default.htlm` file, before the `</body>` tag. Usage statistics are visible here: https://undp-nie-toolkit.goatcounter.com/.  [Alberto Cottica](mailto:alberto.cottica@undp.org) is the admin of the Goat Counter account. 
