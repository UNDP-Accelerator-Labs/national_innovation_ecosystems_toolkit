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




index.add({
    title: "How to support a national innovation ecosystem",
    content: "About supporting national innovation ecosystems\n\nNot all interventions on innovation ecosystems stem from the public sector. UNDP’s Accelerator Labs have been working on actions like mapping the actors in national innovation ecosystems and supporting early-stage innovators.\n\n",
    tags: null,
    sdg: null,
    url: "/Ecosystem/About%20supporting%20national%20innovation%20ecosystems.html",
    id: 0
});












index.add({
    title: "Digital Standards for development solutions - Chief Digital Office",
    content: "UNDP DIGITAL STANDARDS\n\nWhat it does. This tool provides guidance for UNDP teams on best practices when creating digital solutions for development. They are shared publicly as they may help other teams across the development sector identify how best to explore digital tools and technologies.\n\nValue proposition for the government/other partner and SDG alignment. By making use of the Digital Standards, you will be able to provide a framework for new and ongoing projects on how digital information is managed and exchanged, and how digital products are created to ensure that new technologies are used effectively, efficiently, and ethically to support development goals.\n\nWhy and when to use it. This tool is useful to support partners and stakeholders to evaluate new technologies and ensure that they are compatible with existing systems avoiding investments in outdated or incompatible technologies. This tool includes a total of 10 digital standards, each standard explains its purpose, when and how to best be applied, and has useful resources. Digitalization is one of the three enablers of UNDP Strategic Plan 2022-2025 to support countries to build inclusive, ethical, and sustainable digital societies.\n\nKnown issues and troubleshooting. This tool is not trying to claim that all development solutions must be digital. In fact, it is important to reflect and analyze whether the effective implementation of a development solution requires a digital mean.\n\nContext. This tool builds upon the Principles for Digital Development, which have been endorsed by the international development community. The Principles for Digital Development are a set of living guidance intended to help practitioners succeed in applying digital technologies to development programs.\n\nCost. Free to use.\n\nTime. Not applicable\n\nPeople. Self-led.\n\nFocal point. Christof Hawle.\n\nCountry, year, and language. Global, 2021\n\nResources\n\n\n  Digital Standards website\n\n\n",
    tags: null,
    sdg: null,
    url: "/Upskill/digital-standards/CDO.html",
    id: 1
});












index.add({
    title: "Data-to-policy navigator - Chief Digital Office",
    content: "Data to Policy Navigator\n\nWhat it does. The Data to Policy Navigator is designed to assist government executives and policymakers in grasping the fundamentals of data-driven decision-making. It provides a step-by-step guide and a range of practical examples from across the globe on how to integrate data into policy and programme development.\n\nValue proposition for the government/other partner. Addressing crises like climate change, the recovery from the COVID-19 pandemic, and gender inequality requires effective, transparent, and evidence-based government policies. ‍ The advancements in digital technologies and the data they generate are game-changers for policymakers around the world. Today, ministries working on any given issue can use a range of new data sources like satellite imagery, social media, and mobile data that they could rely on to back their policies and programme proposals. ‍ Many countries, however, are still unable to leverage this new data reality – impeding the development of more effective policies that are informed and backed by evidence. ‍ The Data to Policy Navigator aims to give policymakers the know-how to systematically integrate new data sources into their decision-making and policy-development processes. ‍\n\nWhy and when to use it. The Data to Policy Navigator is specifically designed for government officials with no or with basic prior data science knowledge and experience. It offers step-by-step actionable recommendations and examples throughout the policy development process, starting with problem definition to policy design and evaluation. This tool is most useful for policymakers who are starting to develop a data-driven policy in any sector or region. The Data to Policy Navigator sets out four key stages that break down the process of using data when developing policies, starting with problem definition from a data-angle and concluding with policy evaluation. Beyond these four stages, the Navigator covers four overarching themes on ensuring data governance and ethics, building data capacities, fostering a data culture, and developing institutional mechanism for continued use of data. The tool also provides use-cases from across regions and different sectors, to inspire policymakers.\n\nKnown issues and troubleshooting. Data can play a valuable role in shaping, developing, and implementing policies – from understanding the needs of citizens, to identifying the impact of policies and other interventions. With this in mind, the Data to Policy Navigator can be useful for policymakers working on a wide-range of different topics. Ideally, policymakers should engage with the tools and resources available on the Navigator early in the policymaking process – in order to best leverage the role and potential of data. The four-stage guidance in the Navigator will be most useful if policymakers have access to technical experts (or have a data expertise themselves), who can support them along the journey of integrating data into their policy design. Other parts of the Navigator, such as the collection of use cases, may be used any time.\n\nContext. Several initiatives and projects have exerted a lot of effort to improve the quality of the data collected and produced in many developing countries around the world. However, according to research conducted by GIZ and the Open Data Institute not enough focus has been given to building the capacities of policymakers, who are the primary data consumers. ‍ To address this gap, GIZ’s Data4Policy Initiative and UNDP’s Digital Office developed the Data to Policy Navigator. A resource, specifically designed for government officials with no or with basic prior data science knowledge and experience. It aims to give policymakers the know-how to systematically integrate new data sources into their decision-making and policy-development processes.\n\nCost. The Data to Policy Navigator is a free-to-use tool. Although designed as a self-led and self-paced platform, governments may want to contract external expertise to facilitate key discussions or activities highlighted by the Navigator.\n\nPeople. The Data to Policy Navigator is a self-led tool. However, managers may want to consider facilitating group discussions, learning, and broader mentoring to embed data-driven policymaking.\n\nFocal point. Alena Klatte\n\nCountry, year, and language. Global, 2023, English (translation to French &amp; Spanish planned in 2023)\n\nResources\n\n\n  Data to Policy Navigator: https://www.datatopolicy.org/\n  Op-Ed by UNDP on importance of data-informed policies: https://www.mei.edu/publications/future-climate-technology-data-informed-policies-are-indispensable-mitigating-climate\n  Press release from beta launch event: https://www.undp.org/news/undp-mitigating-data-challenges-imperative-human-development-and-getting-sdgs-back-track\n\n",
    tags: null,
    sdg: null,
    url: "/Upskill/Data-to-policy%20navigator%20/CDO2.html",
    id: 2
});












index.add({
    title: "A step-by-step journey to a national innovation policy - Dominican Republic",
    content: "A step-by-step to draft a National Innovation Policy\n\nWhat it does. Helps you prepare an enabling environment for the government as it drafts its first national innovation policy. This component will provide you with examples of how to prepare the ground to facilitate the drafting of National Innovation Policy, design a theory of change for national innovation policy and give you access to a National Innovation Strategy for Dominican Republic.\n\nValue proposition for the government or other partner. Serves as an overarching reference model to identify, structure and prioritize national digital transformation efforts and agendas. Framing for UNDP support.\n\nWhy and when to use it. This approach is most useful when a government is taking its first steps towards taking an active role in the support of a national innovation ecosystem, and no official policy exists yet. This situation calls for quickly socializing senior officials to the domain of innovation policy.\n\nKnown issues and troubleshooting. This process takes you to a final draft of the policy. Full It is important then to have a follow up for implementation of the strategy (from paper to practice).\n\nContext. In 2021, the Dominican Republic’s government created the Innovation Cabinet, an inter-ministerial coordination taskforce mandated to craft a National Innovation Policy. The presidential decree directed the work of the cabinet’s affiliated institutions into five working themes: 1) governance, 2) human capital, 3) investment and partnerships, 4) culture and citizenry, and 5) energy transition and sustainability. To speed up the process, the government has requested technical assistance from UNDP. As an agile incubator of ideas and solutions, the UNDP Accelerator Lab took charge of helping the government in drafting its first national innovation policy.\n\nThey embarked on this journey by understanding the regional landscape of innovation. The Dominican Republic Accelerator Lab facilitated a series of workshops to gain insights from the Latin America region. For this, they invited ministries from Chile, Colombia, Costa Rica, and Paraguay to participate in the workshop and share their learnings and insights on innovation.\n\nThe workshops aimed at three things:\n\n\n  Building consensus on what is the definition of innovation among stakeholders.\n  Sharing learnings and insights from different countries in the region.\n  Introduce and practice innovation tools such as stakeholder mapping, issue mapping and portfolio approaches.\n\n\nDuring the workshop, the Lab invited experts from cross-cutting areas in education, governance, environment, human capital and investment. The Lab itself provided technical assistance and held sessions informed by human-centered design best practices and providing a systemic analysis. To make this practical, it linked findings from the workshop to current government challenges. They engaged with government officials and conducted an issue mapping- and a stakeholder mapping exercise to give them hands-on experience on using these innovation tools.\n\nBy the end of the session, its participants had gathered insights from the region, new tools on innovation, and understood how to link these regional views and innovation tools to the Dominican ecosystem. They drafted a national strategy innovation proposal highlighting the focus areas of the government and reached out to UNDP to design the theory of change underpinning this new vision.\n\nThe Lab took on the task of designing theory of change for the national innovation strategy. They also vetted the draft by experts in various domains within UNDP, like the governance expert, senior economist, gender specialist etc. to provide a comprehensive review of the document. The final national innovation policy is complete and highlights ways to approach digitalization, strategic innovation, and development finance for advancing the country’s long-term vision.\n\nCost to implement (in USD). Unknown\n\nTime (in calendar time): 2 years implementation time\n\nPeople. Two UNDP Staff working full time.\n\nFocal point. Jerson del Rosario.\n\nCountry and year : Dominican Republic 2021\n\nResources.\n\n\n  National innovation policy, final draft (Spanish)\n  Blog post\n\n",
    tags: null,
    sdg: null,
    url: "/Innovation-Policy/policy-DRepublic/DOM.html",
    id: 3
});












index.add({
    title: "Playbook for a digital innovation lab - Dominican Republic",
    content: "Benchmarking participatory innovation processes with a playbook for a digital innovation unit or laboratory (Dominican Republic)\n\nWhat it does. Spells out a five-steps methodology for an innovation unit or lab to develop participatory solutions to problems of common interest. It includes elements like criteria for evaluating ideas, methods to guide their development, deployment and evaluation, design of the roles and job profiles for the Digital Lab. Additionally, it clearly spells out the values that an innovation unit or lab run by the public sector should put front and center, starting with “empathy for the users”.\n\nValue proposition. By benchmarking the process of creating new solutions, the playbook helps an innovation unit or lab maintain a clear vision of its work as it rolls out new products and services, and stay true to its mandate.\n\nWhy and when to use it. A playbook is like a constitution for an innovation unit or lab. It is appropriate to adopt it in the early stages of creating the unit or lab, or as a part of a re-organization or revamping.\n\nKnown issues and troubleshooting. Adopting a playbook, rather than creating one from scratch, is much faster and more efficient, but might engender less of a buy-in from staff than a playbook they have written themselves. The playbook needs translation in the official language (from the Spanish).\n\nContext. The Dominican Republic’s UNDP Accelerator Lab pitched a strategic proposal on a national innovation policy to the Presidential Innovation Cabinet where they identified opportunities for promoting innovation and digital capabilities of the government. The proposal focused on presenting the innovation ecosystem in the Latin American region. Next, UNDP organized a masterclass to show how innovation is not limited to the private sector and share examples of using innovation in the public sector to improve the lives of the citizens. Digital tools, it argued, can be leveraged to make solutions more inclusive and citizen centered.\n\nFinally, in a COVID-19 pandemic context, the newly established Digital Innovation Laboratory co-designed a digital consultation process. The idea was to take advantage of its digital nature to reach most citizens (and engage the youth) and to offer a platform for citizens to channel their concerns and feedback.\n\nCost to implement (in USD): not reported, but modest.\n\nTime (in calendar time): not reported, but modest.\n\nPeople (team numerosity): not reported\n\nFocal point. Sandy Ramirez\n\nCountry and year. Dominican Republic, 2021-2022\n\nResources\n\n\n  The playbook (Spanish)\n  Blog post\n\n",
    tags: null,
    sdg: null,
    url: "/Mapping/Playbook/DRepublic.html",
    id: 4
});












index.add({
    title: "Multistakeholder governance model for an innovation lab - Ecuador",
    content: "A governance model for an innovation lab or unit run by diverse actors\n\nWhat it does.\n\nThis tool allows you to have a governance model for an innovation unit in which the government has the lead, but the decision-making process and implementation of actions is done along with a diverse group of actors coming from the academia, private sector, civil society organizations, and cooperation. The governance model gives detail about the organization and dynamic between actors, the responsibility of each member, and financing methods for the innovation unit to be run.\n\nValue proposition for the government/other partner and SDG alignment.\n\nBy having a decentralized and multi-actor governance model you will enable the government to have a more transparent and participatory public management. Also, this governance model will set the path for the government to have a clear working dynamic with the rest of the national innovation ecosystem in social and public matters since the it provides guidance on how to share governance with other stakeholders and form a coalition. This tool contributes to SDG 16 “Peace, Justice, and Strong Institutions” and target 16.7 “ensure responsive, inclusive, participatory and representative decision-making at all levels”.\n\nWhy and when to use it.\n\nThis tool is most useful when the government has an existence framework that enables public management to be more accountable, transparent, and open. This framework could be set by a law, an international treaty, or the generation of a new public innovation unit. Once you have identified the framework, map the actors involve, and their agendas to be able to convene these actors more easily. The governance model needs translation in the official language from Spanish.\n\nKnown issues and troubleshooting.\n\nIf the government counterpart is recently showing interest to understand and work on citizen participation and public innovation, this tool will not be as effective since it requires a higher comprehension and commitment from civil servants. To adopt this model, rather than creating one from scratch, is much faster and more efficient, but might engender less of a buy-in from local government counterparts and actors.\n\nContext.\n\nAs a member of the Open Government Partnership (OGP), Ecuador is committed to have a more open and participatory government. In this line, as part of the OGP Action Plan 2019-2022 it aimed to have an Innovation Citizen Lab for the first time in the country. UNDP´s Acc Lab played a key role offering in 2022 technical assistance to design, implement and operate the Citizen Lab called Thinkia. The Secretariat of Higher Education and Innovation of Ecuador has the lead of this Lab and runs it along with other 7 actors from the academia (2), civil society organizations (2), other public institutions (2), and cooperation sector (UNDP). The government uses a shared and decentralized governance model for Thinkia: citizen lab to include other actors as part of the management team and decision-making process. UNDP´s Accelerator Lab elaborated the governance model proposal and supported its implementation.\n\nCost\n\nUSD 3,000 - 6,000\n\nTime\n\nTo identify actors, convene, and coordinate their collaboration on a common agenda it will take 3 to 4 months.\n\nPeople\n\nTo use this tool the following team members will be required:\n\n\n  A person to pitch key ideas to the government to have multi-actor governance model. Also, to convene and coordinate joint work between actors and set a common agenda.\n  A person to support all the logistics of the coordination work and set first drafts on a common agenda.\n\n\nFocal point. Ana M. Grijalva\n\nCountry, year, and language\n\nEcuador, 2022, Spanish\n\nResources\n\n\n  Governance model (Spanish)\n  Blog post\n  Flyer (Spanish)\n  TORs for one of the team members\n\n",
    tags: null,
    sdg: null,
    url: "/Mapping/Governance-model/Ecuador.html",
    id: 5
});












index.add({
    title: "MOOC public and social innovation concepts and tools - Ecuador",
    content: "MOOC ON PUBLIC AND SOCIAL INNOVATION CONCEPTS AND TOOLS\n\nWhat it does. This massive open online course (MOOC) allows you to build capacities on the main concepts of public and social innovation, and to strengthen practical skills by learning how to use methodologies and tools. The MOOC suits various types of profiles such as: civil servants, civil society organizations, academia, or private sectors counterparts. The course in on Moodle, it is self-paced, it has short and explanatory videos, complemented with readings, fun quizzes, and a final assignment. Only participants that complete all modules and work get certified for learning for 22 hours. The topics covered are: (1) Citizen labs, (2) Open culture, (3) Public Innovation Hexagon, (4) Behavioral Approach for Public Interventions, (5) Design Thinking, (6) Participative Methodologies, and (7) Social innovation and Future Thinking.\n\nValue proposition for the government/other partner. By making use of this MOOC you will enable potential allies and counterparts to understand the concepts of public and social innovation and have more clarity on how it is done. This will facilitate actors to advocate and commit to use public and social innovation as a new mechanism for public governance and citizen participation. Also, strengthening capacities and practices will allow local government to include an innovation-oriented approach in the design, development, and improvement of public services which will lead to more effective and transparent processes. This tool contributes to SDG 16 “Peace, Justice, and Strong Institutions” and target 16.7 “ensure responsive, inclusive, participatory and representative decision-making at all levels”.\n\nWhy and when to use it.This tool is most useful when there is an interested government counterpart that is actively seeking to have a public and social innovation approach to its works and supply of public services. It is cost-effective to train many civil servants simultaneously and located in diverse geographical areas. Also, it is suggested that the participation in this learning journey is done by senior management, as well as analysts. As a result of this course and clear commitment from the government side, it could be expected to see how the inclusion of social and innovation process have been included in the workflow of the institution so that the process is institutionalized.\n\nKnown issues and troubleshooting.\n\n\n  If there is a lack of commitment and engagement from participants results will be partial and not fully satisfactory for the organizer of the MOOC.\n  The content of the course is introductory, if participants want to deepen their knowledge of the topics covered, it is recommended that they take additional courses.\n\n\nContext. As a member of the Open Government Partnership (OGP), Ecuador is committed to have a more open and participatory government. In this line, as part of the OGP Action Plan 2019-2022 it aimed to have an Innovation Citizen Lab for the first time in the country. UNDP´s Acc Lab played a key role offering in 2022 technical assistance to design, implement and operate the Citizen Lab called Thinkia. The Secretariat of Higher Education and Innovation of Ecuador has the lead of this Lab and runs it along with other 7 actors from the academia (2), civil society organizations (2), other public institutions (2), and cooperation sector (UNDP). The government uses a shared and decentralized governance model for Thinkia: citizen lab to include other actors as part of the management team and decision-making process. UNDP´s Accelerator Lab elaborated the governance model proposal and supported its implementation.\n\nOne of the first results of the collaboration among the various actors running Thinkia was to create a massive open online course on public and social innovation by tapping on the expertise of each of the actors. Thus, each member was responsible for creating the content of one of the modules. UNDP´s Accelerator Lab created the structure of the course by generating and organizing the learning materials and taking responsibility to manage the course on Moodle.\n\nCost. USD 4,000 – 4,500 (to build the MOOC from zero)\n\nTime. To organize the launch of the course 1 month is required. To hold the course and receive feedback 1 month and a half is needed.\n\nPeople. To run this course and make it available to the public the following team members will be required:\n\n\n  A course leader who strategizes the use of the course and generates the needed partnerships.\n  A course administrator in charge of solving all enquiries related to the platform and managing the registration process.\n\n\nFocal point. Ana Grijalva\n\nCountry, year, and language. Ecuador, 2022, Spanish\n\nResources.\n\n\n  Moodle Platform of UNDP Ecuador\n\n\nPlease contact the focal point if you want to make use of the course.\n",
    tags: null,
    sdg: null,
    url: "/Upskill/MOOC%20public%20and%20social%20innovation%20concepts%20and%20tools%20-%20Ecuador/Ecuador.html",
    id: 6
});












index.add({
    title: "Online and collaborative mapping NIE - Ecuador",
    content: "ONLINE AND COLLABORATIVE MAPPING OF THE NATIONAL INNOVATION ECOSYSTEM\n\nWhat it does.\n\nThis online collaborative mapping of the national innovation ecosystem (NIE) allows you to do two things. First, it identifies and tracks actors working on sustainable development issues with a social and/or public innovation approach based on their geographical location. Second, it strengthens synergies among actors of the national innovation ecosystem since they can learn about each other´s work and explore potential collaborations based on commonalities. Also, this tool generates (potentially open) data by collecting information about the initiatives and actors.\n\nValue proposition for the government/other partner.\n\nBy having an online and collaborative mapping of the national innovation ecosystem, you will enable the community of such ecosystem to address social, cultural, environmental, and economic challenges efficiently and effectively, as they identify common interests, exchange experiences, tap on collective knowledge, collaborate, and create synergies. This tool contributes to SDG 17 “Partnerships for the goals” and target 17.7 “encourage and promote effective public, public-private and civil society partnerships, building on the experience and resourcing strategies of partnerships”.\n\nWhy and when to use it.\n\nThis tool is most useful when there is an existing long-term strategy for the public sector to build trust among actors of the national innovation ecosystem and facilitate the construction of a common work agenda around a specific SDG. Promoting collaborative work should be done by using participatory and co-creation methods and supported by an effective communication strategy to convene actors.\n\nKnown issues and troubleshooting.\n\n\n  If there are only a few well-known actors as part of the national innovation ecosystem this tool will not be as effective since it aims to facilitate the coordination and collaboration of a large group of actors.\n  If there is no strategy to convene and promote collaborative work among actors of the innovation ecosystem, online mapping by itself will not be enough to promote synergies within the ecosystem.\n  If there is limited access to connectivity, low digital skills, and scarce digital devices, opting for an online and collaborative mapping will not be the most suited option.\n  If there is no long-term vision and strategy to map collaborative initiatives, the data can be quickly outdated.\n\n\nContext.\n\nAs a member of the Open Government Partnership (OGP), Ecuador is committed to have a more open and participatory government. In this line, as part of the OGP Action Plan 2019-2022 it aimed to have an Innovation Citizen Lab for the first time in the country. UNDP´s Acc Lab played a key role offering in 2022 technical assistance to design, implement and operate the Citizen Lab called Thinkia. The Secretariat of Higher Education and Innovation of Ecuador has the lead of this Lab and runs it along with other 7 actors from the academia (2), civil society organizations (2), other public institutions (2), and cooperation sector (UNDP). The government uses a shared and decentralized governance model for Thinkia: citizen lab to include other actors as part of the management team and decision-making process. Also, the government uses an online platform as a mechanism to promote citizen engagement in public innovation work. UNDP´s Accelerator Lab not only elaborated the governance model proposal and supported its implementation, but also design, develop, and transfer and online platform for Thinkia: citizen lab.\n\nCost.\n\nUSD 18,000 - 20,000\n\nTime (in calendar time): To design and develop an online platform 6 months are required. To transfer the e-tool to a government counterpart 4 months are needed. To transfer the platform should be considered and plan from the design phase of it.\n\nPeople.\n\nTo design, develop, and implement a similar tool the following team members will be required:\n\n\n  A software development firm with experience in open code and collaborative platforms.\n  An ally institution within the public innovation sector that aims to contribute to the NIE, and within that institution two focal points which are an IT person and program officer person.\n\n\nFocal point. Ana M. Grijalva\n\nCountry, year, and language.\n\nEcuador, 2023, Spanish\n\nResources (in Spanish).\n\n\n  National innovation ecosystem mapping tool\n  Manual of how to use the national innovation ecosystem mapping tool\n  Directory of actors registered on the innovation ecosystem\n  Dashboard of actors and initiatives registered\n\n",
    tags: null,
    sdg: null,
    url: "/Ecosystem/Online%20and%20collaborative%20mapping%20NIE%20-%20Ecuador/Factsheet.html",
    id: 7
});












index.add({
    title: "Pitching for NIEs and PSI",
    content: "Talking points and slide deck to pitch for supporting National Innovation Ecosystems\n\nWhat it does. Makes a case for getting involved in supporting innovation ecosystems.\n\nValue proposition. By making a clear, evidence-supported argument for supporting innovation ecosystems, you will enable UNDP and government officials to make an informed decision on whether to support their national innovation ecosystem.\n\nWhy and when to use it. There are two use cases. The first one: when you wish to enlist the support of senior UNDP officials. The second one: when you wish to enlist the support of government officials. You can think of it as a pitch, to be delivered in a meeting or in a carefully crafted email, that opens a conversation.\n\nKnown issues and troubleshooting. Risks are low, the worst that can happen is that you get turned down.\n\nContext. The Global Team in the UNDP Accelerator Labs produced these talking points on the basis of a survey conducted in the summer of 2022, to which 84 Labs in as many Country Offices responded. A longer write-up about the results of the survey is available in this toolkit.\n\nCost to implement (in USD): zero\n\nTime (in calendar time): negligible.\n\nPeople (team numerosity): 1\n\nFocal point. Alberto Cottica and Eduardo Gustale\n\nCountry and year. Global Team, 2023\n\nResources.\n\n\n  A slide deck containing one slide each for the two use cases of talking to UNDP officials and talking to government officials.\n  A 1,100 words essay unpacking the survey on which the talking points are based, as well as its main results.\n\n\n",
    tags: null,
    sdg: null,
    url: "/pitching/talking-points/Factsheet.html",
    id: 8
});












index.add({
    title: "How to map a national innovation ecosystem - Kenya",
    content: "An in-depth mapping of an innovation ecosystem to help innovators make sense of the landscape (Kenya)\n\nWhat it does. The map illustrates the key actors and stakeholders in Kenya’s innovation ecosystem.\n\nValue proposition for the government or other partner. The ecosystem research and mapping exercise helped Kenya’s National Innovation agency understand the landscape and provided data and evidence that builds a case for the agency, i.e. why it should be supported, why there should be a strategy for innovation and ecosystem engagement. For Konza Technopolis (Kenya’s “smart city), which will become the center of Kenya’s innovation ecosystem from an infrastructure perspective, insights from the mapping will prevent the project from perpetuating the challenges that innovation hubs have faced.\n\nWhy and when to use it. A mapping exercise is useful when there is a  gap in publicly available information and analysis on the innovation landscape particularly from an innovator’s perspective, i.e. when it not clear to all where an innovator with an idea would go for support, and where s/he would be most likely to find success or face challenges.\n\nKnown issues and troubleshooting. There might be pushback from ecosystem actors who might question the “right” of the mapping entity to do the work.\n\nContext. Kenya is a leader in the digital innovation space, but there’s a lack of coordination, organization, and clarity within the ecosystem and innovators suffer as a result. Despite this, Kenya attracts a lot of investors and innovators who come in to take advantage of fast-growing environment and human capital to establish hubs and startups. UNDP Accelerator Lab Kenya saw the gap in public ecosystem information for innovators and decided to conduct a research and ecosystem mapping effort.\n\nCost to implement (in USD). Approximately 500K, which includes a co-creative process to design and conduct the mapping and research, travel, stakeholder engagement, data collection, analysis, validation, and publish and managing a knowledge product.\n\nTime (in calendar time): Approximately 1 year\n\nPeople (team numerosity): 3 Accelerator Labs staff\n\nFocal point. Caroline Kiarie-Kimondo\n\nCountry and year. Kenya, December 2021 – December 2022\n\nResources.\n\n\n  Digital map\n  Ecosystem research report\n  Kenya innovation outlook (prepared by the Kenya Innovation Agency)\n\n\n",
    tags: null,
    sdg: null,
    url: "/Ecosystem/How%20to%20map%20a%20national%20innovation%20ecosystem%20-%20Kenya/Factsheet_Mapping_innovation_ecosystem_Kenya.html",
    id: 9
});












index.add({
    title: "Innovators journey - Zambia",
    content: "A mapping of an innovator’s journey from inception to maturation to help coordinate support provided by government stakeholders (Zambia)\n\nWhat it does. The innovator’s journey provides a holistic understanding of an innovator’s pathway and their sequential steps to scale. It also aims to describe the players and key opportunities within the innovation ecosystem in Zambia.\n\nValue proposition for the government or other partner. The innovator’s journey can be used by a government and its partners to map and coordinate the ecosystem, as well as make critical linkages between actors. It is also a tool for innovators to identify where they are in their journey, and where they can find help to continue to develop their innovations.\n\nWhy and when to use it. Mapping an innovator’s journey helps government agencies and their partners understand what path(s) innovators take from the inception of their innovation to scale, which clarifies how and when they can intervene, as well as how their support might complement what is provided by others.\n\nKnown issues and troubleshooting. It may be worth paying particular attention to IP ownership for innovators. In Zambia, IP retention is a serious issue. When an innovator applies for IP protection they’re not covered internationally, which has resulted in idea theft.\n\nContext. In 2020, Accelerator Lab Zambia introduced three nationwide innovation initiatives, the National Innovation Initiative (NII), the Experimentation Programme (EP) and the Waste Management and Youth Innovation Challenge (WMYIC) in collaboration with government, quasi government, academia, CSOs and innovators. Close to 3,000 submissions have been received over the three years, and the accelerator lab has provided monetary business development support, mentorship, research and product development, and access to networking platforms.\nThe innovator’s journey concept emerged from the lab’s experience navigating its learning cycle and collaborating with partners through the NII and EP, recognizing the need to break silos, promote coordination, and create a conducive innovation ecosystem that enables innovators to scale.\n\nCost to implement (in USD). Approximately 10K\n\nTime (in calendar time): Approximately 1 year\n\nPeople (team numerosity): 3 Labbers\n\nFocal point. Nampaka Nkumbula.\n\nCountry and year. Zambia, 2022-2023 (ongoing)\n\nResources.\n\n\n  Innovator’s Journey pathway\n  Innovator’s Journey concept note\n\n\n",
    tags: null,
    sdg: null,
    url: "/Ecosystem/Innovators%20journey%20-%20Zambia/Factsheet_innovators_journey_Zambia.html",
    id: 10
});












index.add({
    title: "How to incubate an innovation unit or lab",
    content: "About incubating an innovation unit or lab\n\nDedicated innovation units, or labs, can be powerful enablers of national innovation ecosystems. Typically embedded within governments, innovation units and labs have staff and budgets whose sole job is to make innovation happen. The UNDP Accelerator Labs’ 2022 survey showed a surge of interest in innovation units and labs in the Global South.\n\n",
    tags: null,
    sdg: null,
    url: "/Mapping/Index.html",
    id: 11
});












index.add({
    title: "Digitising the induction process for civil servants - Namibia",
    content: "An interactive employee handbook to digitalize and enhance the onboarding experience of civil servants (Namibia)\n\nWhat it does. In collaboration with the government, it designs a digital set of products to replace the current process of onboarding for civil servants. Onboarding is now delivered via asynchronous learning using a digital, open source platform. This impacts the 125,000 Namibian civil servants.\n\nValue proposition for the government or other partner. By replacing the off-line process of onboarding for civil servants with a digital one, we will “packetize” their learning experience into smaller units, and make the latter highly interactive and gamified. This makes the civil servants’ learning task easier to digest and cheaper for the administration. The new process also teaches civil servants essential digital skills.\n\nWhy and when to use it. When the need to modernize the civil service combines with time constraints. By using Fuel 50, a talent marketplace, as well as the Accelerator Labs network (which overlaps with UNDP’s Digital Advocates network), UNDP can source the work quickly and without resorting to a Request For Proposals.\n\nKnown issues and troubleshooting. Senior political support is essential.\n\nContext. Namibia’s Directorate of Human Resource Development under the Office of the Prime Minister requested UNDP’s assistance to digitize their employee manual (called “the pocket guide to being a public servant in Namibia”) and enhance the employee experience of onboarding and induction for the public service. This request was addressed by drawing on the internal capacity of UNDP’s talent through a platform called Fuel 50 and handled by the Namibia Accelerator Lab, which has good relationships with UNDP’s Chief Digital Office and Talent Development Unit at the Office of Human Resources (the latter runs Fuel 50). The government is the largest employer in Namibia; the new employee manual impacts all 125,000 Namibian civil servants.\n\nCost to implement. About 20,000 USD for catering, workshops and training, plus 5,000 for three international colleagues to attend a two week in person event to conduct the user acceptance training and hand over the developed products / solutions.\n\nTime : Approximately 6 months to a year to implement.\n\nPeople : 3 digital advocates from the Accelerator Labs; 6 technical staff from the Office of the Prime Minister\n\nFocal point. Yrika Maritz\n\nCountry and year. Namibia 2023\n\nResources.\n\n\n  Concept note\n  Presentation deck\n  Results of a survey on the perception of the pocket guide\n\n",
    tags: null,
    sdg: null,
    url: "/Upskill/digitising/Namibia.html",
    id: 12
});












index.add({
    title: "Embedding innovation methods into the civil service via a course on ethics and integrity - Namibia",
    content: "A course on Ethics and Integrity in public services to embed innovation Practices and Methods through the Ethics and Integrity Champions (Namibia)\n\nWhat it does. Helps embedding into government the practice of social innovation through functional service areas such as HR, Procurement, Security, Finance, Public Relations and Ethics / Integrity Officers.\n\nValue proposition for the government or other partner. By finding alternative structures within government to introduce innovation methods and tools in solving problems for them and practicing how the innovation tools and methods are used, we will enable the public service to use various tools and techniques such as behavioral insights, design thinking, citizen assemblies, legislative theatres, sentiment analysis and other innovation practices to come up with new ways of improving public service delivery. Additional value: by leveraging UNDP and UNDESA resources, implementing parties won’t need to go through a Request for Proposals, thus speeding up implementation.\n\nWhy and when to use it. Use this example when you aim to socialize to the use of innovation methods any category of civil servants, even if they don’t work in innovation units.\n\nKnown issues and troubleshooting. Unknown.\n\nContext. Previously to this project, UNDP Namibia Accelerator Lab had developed a toolkit aimed at the 300 innovation champions within the Namibian government. Sadly, the innovation champions failed to adopt the practices documented in the toolkit in their everyday work. When the government’s Ethics and Integrity Division asked UNDP for an international consultant to train their 350 Integrity Champions in Ethics and Professionalism, the Lab contacted UNDESA and requested, and obtained, access to their Ethics Course and the permission to contextualize the material, inserting innovation methods therein. After receiving training, the participants had to complete an on-line ethics test and sign an integrity pledge which committed them to carry out certain actions over a period of 90 days.\n\nCost to implement (in USD). About USD 12,000.\n\nTime (in calendar time): Approximately 6 months to a year to implement.\n\nPeople (team numerosity): Accelerator Lab + 2 key technical Ethics and Integrity staff from the Office of the Prime Minister\n\nFocal point. Yrika Maritz\n\nCountry and year. Namibia 2022\n\nResources\n\n\n  Ethics and integrity course concept note and learning report (folder)\n  Ethics and integrity course curriculum and slide decks (folder)\n  Blog post\n\n",
    tags: null,
    sdg: null,
    url: "/Upskill/innovation-methods/Namibia2.html",
    id: 13
});












index.add({
    title: "Public Innovators Program Paraguay",
    content: "Mentoring and training civil servants in innovation methods\n\nWhat it does. The Public Innovators Program provides national level public servants with training, mentoring, and practice of R&amp;D + innovation methods and tools, applied to public policy and service challenges they identify in their own institutions. The Agile Public Innovation toolkit is used, a  toolkit that was co-designed between national institutions in Paraguay and the Government Laboratory of Chile, with support from UNDP’s AccLab in Paraguay.\n\nValue proposition for the government/other partner. Through this program, our partners in government are receiving an influx of new capacities that will benefit their innovation culture, allowing them to achieve the goals of designing, developing and testing new policies and services to improve how they achieve their mission. This is a Governance Signature Solution that contributes towards achieving SDG 16.\n\nWhy and when to use it. The Public Innovators Program is most useful when participants are committed public servants, who also happen to have higher levels of security and stability in their positions (for example, career public servants better than consultants or short-terms contractors), and who are part of teams that come from institutions with clear missions and goals.\n\nKnown issues and troubleshooting. Like many public sector initiatives, this programme needs to solve the problem of continuity across political cycles, as its owners within the government may leave to take on positions elsewhere. On a more operational level, when participants are appointed but do not have commitment, the teamwork suffers. This suggests an opt-in approach to recruiting participants.\n\nContext. The programme emerged from previous initiatives and policies of the National Innovation Strategy (ENI) – a  public-private initiative led by the Presidential Delivery Unit – and the National Science and Technology Council (CONACYT). UNDP Paraguay has been part of ENI since its onset, supporting its coordinating team in organizing and facilitating participatory workshops to identify national innovation challenges, supporting and funding the mapping and articulation of citizen-led initiatives during the pandemic, and both coordinating and funding learning cycles as public innovation processes in focalized challenges that emerged from the work done during the pandemic.\n\nWith CONACYT, the UNDP Paraguay Accelerator lab has collaborated with mentoring and training during several editions of its Social Innovation Challenge, funded by CONACYT under one of its flagship programs to invest directly in applied R&amp;D for innovation. The combined history of collaboration in these engagements by the end of 2021 to the design and further launch of the Public Innovators Program, which we have described briefly in this document.\n\nCost. The training program cost around $30k, and that included a team of 2-3 instructors who developed the program in 2 months consisting of 8 modules, along with some international mentors who accompanied the teams on a weekly basis. Then, 2 pilots were funded, each with $15k, for 2 teams (out of the 10 participants). Throughout the program, we hired an R&amp;D methodology specialist for $10k and an articulator to facilitate the emergence of a network of public innovators for another $10k.\n\nPeople. At least 2-3 hours per week from 2 of the Lab heads, plus a similar number of hours from our associate researcher for program monitoring, which could also be monetized. And finally, there is the ENI team, consisting of 2 individuals plus 1 focal point at Conacyt.\n\nFocal point. Cristhian Parra and Mónica Ríos\n\nCountry, year, and language. Paraguay 2022, Spanish\n\nResources.\n\n\n  \n    Program Brochure \n  \n  \n    Program Syllabus\n  \n  \n    Content, Slides and Recordings of 15 workshops from the Public Innovators Program\n  \n  \n    Materials used to run the 15 workshops\n  \n\n",
    tags: null,
    sdg: null,
    url: "/Upskill/Public%20Innovators%20Program%20Paraguay/Paraguay.html",
    id: 14
});












index.add({
    title: "Understanding and pitching NIEs",
    content: "Understanding and pitching national innovation ecosystems\n\nThis part of the toolkit contains materials to explain what innovation ecosystems are, and what the value proposition is for supporting them.\n\n",
    tags: null,
    sdg: null,
    url: "/pitching/README.html",
    id: 15
});












index.add({
    title: "Contributors",
    content: "Meet the Contributors\n\n\n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Ana M. Grijalva\n        \n        UNDP Ecuador Accelerator Lab\n        Head of Exploration\n      \n    \n    Ana M. Grijalva is an economist, education specialist, and social innovator with 10 years of experience. She has a vast experience in program development, management, implementation, monitoring, and evaluation, but also in cutting-edge research and data analysis. She has expertise on key issues related to education, labor market, MSME productivity and governance. She has worked for different agencies of the United Nations (International Institute for Educational Planning and Economic Commission for Latin America and the Caribbean) and for international organizations such as University of Oxford, Inter-American Development Bank, and World Bank. Also, she has experience in Ecuador´s public sector, and has worked for the academia in the United Kingdom and Ecuador. She is excited to collaborate to the change of the status quo through public and social innovation, data analysis, technology, and civic engagement.\n    \n\n    \n      \n      Contact \n      \n\n      \n\n      \n      \n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Jerson del Rosario\n        \n        UNDP Dominican Republic Accelerator Lab\n        Head of Solutions Mapping\n      \n    \n    As a sociologist, qualitative researcher and development practitioner, Jerson has worked as local development facilitator for grassroots community organizations and was a researcher and social policy analyst for the Social Policy Coordination Cabinet of the Dominican Republic. He has conducted ethnographic research on education, youth and teen pregnancy, precarious livelihoods and income generation policies, with a strong interest in small-scale entrepreneurs and the ways they understand the economic complexities of globalization. Jerson holds a bachelor’s in International Relations, a master’s in Local Development and International Cooperation, a master’s in Sociology and Education and is currently pursuing doctoral studies in Sociology.\n    \n\n    \n      \n      Contact \n      \n\n      \n\n      \n      \n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Nguyen Tuan Luong\n        \n        UNDP Viet Nam Accelerator Lab\n        Head of Solutions Mapping\n      \n    \n    Luong grew up around the world as a “third culture kid” and now sees himself as a global citizen. Having worked with the Innovation Partnership Programme between Finland and Vietnam, and contributed towards developing a thriving innovation ecosystem in Vietnam, Luong brings expertise in public-private partnerships. He is passionate about helping changemaker communities such as Knowmads Hanoi and Art of Hosting in creating space for meaningful conversations.  \nLuong is a Swedish Institute alumnus and graduated in Master’s in strategic leadership toward Sustainability from Sweden. By combining his cross-cultural understanding, tech-savviness, and business sense, he hopes to facilitate organizations transformation toward greater sustainability, collaboration and creativity.  \nIn his spare time, you can find him learning and practicing his hobbies. He is always excited to meet new people and looks forward to listening and sharing good stories with them.  \n\n    \n\n    \n      \n      Contact \n      \n\n      \n\n      \n      \n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Sandy Ramirez\n        \n        UNDP Dominican Republic Accelerator Lab\n        Head of Exploration\n      \n    \n    Innovation and digital business specialist. Sandy has worked in promoting and developing policies to strengthen MSMEs and before joining the lab was the coordinator of Digital Economy for the Ministry of Industry, Commerce and MSMEs. Sandy has coordinated the execution of cooperation projects to promote innovation with governments of Taiwan, Korea and Spain. Sandy holds a masters degree in Digital Business and Digital Marketing as well as a masters in Business Administration.\n    \n\n    \n      \n      Contact \n      \n\n      \n\n      \n      \n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Caroline Kiarie-Kimondo\n        \n        UNDP Kenya Accelerator Lab\n        Head of Exploration\n      \n    \n    Caroline Kiarie-Kimondo is the Head of Exploration, Kenya Accelerator Lab. Caroline is a social impact strategist with a passion for framing and reframing positive social impact narratives. She has 15 years of experience in philanthropy, movement building, social innovation, and strategic communications. She's also skilled in leadership coaching, human-centered design thinking, decision architecture, agile project management, and adaptive leadership.\n    \n\n    \n      \n      Contact \n      \n\n      \n\n      \n      \n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Nampaka Nkumbula\n        \n        UNDP Zambia Accelerator Lab\n        Head of Experimentation\n      \n    \n    Nampaka is currently the Zambia Accelerator Lab Head of Experimentation and is a seasoned researcher within experience supporting the Zambian Innovation ecosystem with a bias on strengthening Research and development pathways for the growth of innovations by influencing government approach and methods towards responding aptly to grassroots innovations. Prior to joining UNDP, Nampaka worked at Innovations for Poverty Action. She has experience working in the development sector, promoting the use of rigorously generated evidence with partners, conducting policy driven research, and leveraging large administrative data systems to inform decision making processes and develop scaling pathways to move promising interventions from research to scale. Working in the Health, Education and Financial Inclusion sectors in Zambia, Nampaka also has experience in agricultural policy analysis and banking with a specific focus on fund management and marketing. As a successful applicant to the B360 internship at Credit Suisse, Nampaka worked in the Export Finance Department under Corporate and Specialty Lending as a Junior Portfolio Manager. She holds a Master of Arts Degree in Economics from the University of Zambia (UNZA) and a Bachelor of Arts Degree in Economics with Mathematics and Statistics from UNZA.\n    \n\n    \n      \n      Contact \n      \n\n      \n\n      \n      \n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Alena Klatte\n        \n        UNDP Chief Digital Office\n        Global Project Manager, Strategic Data Initiatives\n      \n    \n    \n    \n\n    \n      \n      Contact \n      \n\n      \n\n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Christof Hawle\n        \n        UNDP Chief Digital Office\n        Digital Innovation and Transformation Specialist\n      \n    \n    Christof has a background in private sector digital transformation consulting and development innovation and has been with the CDO since 2021. He has been supporting individual digital innovation projects and Digital X, and coordinates efforts to implement \"Digital by Default\": assuring digital is embedded in our business processes and programming life cycle. \n    \n\n    \n      \n      Contact \n      \n\n      \n\n      \n      \n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Yrika Maritz\n        \n        UNDP Namibia Accelerator Lab\n        Head of Experimentation\n      \n    \n    Yrika Vanessa Maritz is the Head of Experimentation at the UNDP Accelerator Lab Namibia. She previously worked at the Office of the Prime Minister in various roles, including Learning and Development Officer and Deputy Director of the Efficiency and Charter Unit.  She also served as the former Director of the Centre for Management and Leadership Development at the National School of Government, NIPAM.  Yrika is a Clinical Psychologist by profession and holds a Master in Public Administration, as well as a PhD in Public and Development Management.  She has been trained in various specialized learning and development models and schools in Tanzania, the UK, Germany, Sweden, Japan, and China. She is an accredited Management Consultant with the CIMC in the UK and registered with the Social Work and Psychology Council of Namibia.\n    \n\n    \n      \n      Contact \n      \n\n      \n\n      \n      \n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Cristhian Parra\n        \n        UNDP Paraguay Accelerator Lab\n        Head of Experimentation\n      \n    \n    Cristian Parra has a Ph.D. in Information and Communication Technologies from University of Trento, Italy, and an Informatics Engineering degree from the Polytechnic School of UNA. For the past 10 years, he has been working in social informatics R&amp;D projects, using participatory design and human-centered design approaches to topics in community-based public health, social inclusion, civic technologies and citizen participation. He was a postdoctoral researcher at the University of California, Berkeley, where he led the projects of the Social Apps Lab (CITRIS). As consultant, he helped organizations like the World Bank, the IADB, the SSI of Berkeley, among others. Before joining AccLab, he was working as a Senior Researcher at the Catholic University of Asunción, where he led projects like TopaDengue, which combines community participation with technologies to fight the spread of the Aedes Aegypti through a bottom-up citizen science approach, within a controlled experiment. In 2018, with his team, he was the recipient of one of the Honorific Mentions of the National Prize for Science for some of these works. Cristhian has always had a passion for initiatives at intersections, bridging Computer and Social Sciences to inform research, development, and implementation of innovative socio-technical solutions for social or community challenges. This passion led him straight to this lab, where he sees a unique opportunity to contribute to the already great work that UNDP is doing in solving the big societal and development challenges of our century.\n    \n\n    \n      \n      Contact \n      \n\n      \n\n      \n      \n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Eduardo Gustale\n        \n        UNDP Accelerator Labs\n        Monitoring, Experimentation and Learning Specialist\n      \n    \n    Experienced in Sustainable Development and Social Innovation. Worked repeated times in academic research, survey development and market insight. Elected Global Shaper by the World Economic Forum &amp; Chevening Scholar for an MSc in Innovation and Entrepreneurship at University of Warwick.\n    \n\n    \n      \n      Contact \n      \n\n      \n\n      \n      \n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Tayo Akinyemi\n        \n        UNDP Accelerator Labs\n        Learning and Community Manager\n      \n    \n    I have spent most of my career creating order from ambiguity, whether it's charting my own vocational journey, supporting an African entrepreneurial leadership center launch, building the first pan-African network of tech hubs, or decoding early stage investing in Africa. In other words, I like to help great people build great things, ideally by marrying vision (dream+strategy) with implementation (getting stuff done). African tech entrepreneurship and innovation trends on all of my feeds, with a special emphasis on building enabling infrastructure (think hubs and accelerators) enhancing, the capacity of those enablers (especially early stage investors).\n    \n\n    \n      \n      Contact \n      \n\n      \n\n      \n      \n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Calum Handforth\n        \n        UNDP Chief Digital Office\n        Digital Programmes Strategic Manager\n      \n    \n    UN Advisor and Fellow - focusing on data, innovation, and digital tech in international development and government.\n    \n\n    \n      \n      Contact \n      \n\n      \n\n      \n      \n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Nicola Holden\n        \n        UNDP Chief Digital Office\n        Digital Experience Advisor\n      \n    \n    \n    \n\n    \n      \n      Contact \n      \n\n      \n\n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Adedapo Aderemi\n        \n        UNDP Accelerator Labs\n        Software Developer\n      \n    \n    Adedapo is an inventive and dynamic software developer with experience designing state-of-the-art web, mobile, IoT, and cloud engineering solutions. He is proficient in a variety of frameworks and programming languages, specializing in developing scalable and resilient applications. He utilizes cutting-edge technologies to address intricate challenges, propel digital revolutionization, and generate memorable user experiences.\n    \n\n    \n      \n      Contact \n      \n\n      \n\n      \n      \n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Mónica Ríos\n        \n        UNDP Paraguay Accelerator Labs\n        Head of Exploration\n      \n    \n    Mónica Rios has a Business Administration Degree, holds a Master’s Degree in Creation and Management of Innovative and Technology Based Companies (Barcelona, Spain) as part of the National Scholarship Program “BECAL” and a Diploma in Corporate Social Responsibility (Santiago, Chile). She worked with the private sector, NGOs and multilateral funds in subjects related to corporate social responsibility, sustainability, marketing, strategy and innovation. Before joining UNDP he designed and coordinated incubation and acceleration processes for MSMEs in the creative sector in Paraguay and social innovation projects through the IDB LAB. Her main motivation lies in lies in maximize innovative projects developed in Paraguay, which can inspire others to think big, as well as learn from other practices developed by others AccLabs worldwide.\n    \n\n    \n      \n      Contact \n      \n\n      \n\n      \n      \n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Alberto Cottica\n        \n        UNDP Accelerator Labs\n        R&amp;D Specialist\n      \n    \n    Originally a development/environmental economist, now more of a quantitative social scientist. Anthropology, ethnography, network science. Interested in epistemology. Committed citizen. Runner. Ex-minor rockstar.\n    \n\n    \n      \n      Contact \n      \n\n      \n\n      \n      \n      \n\n      \n\n    \n  \n  \n\n\n",
    tags: null,
    sdg: null,
    url: "/Team.html",
    id: 16
});












index.add({
    title: "TORs for a consultant to build up the National Innovation Center - Viet Nam",
    content: "Terms of reference to introduce a National Innovation Lab from paper to practice (Viet Nam)\n\nWhat it does. Deploys the expertise necessary to bootstrapping a National Innovation Center. This includes defining success and performance indicators; assembling and upskilling a public sector innovation task force within the government: and getting it to cut its teeth by hosting some innovation policy debates.\n\nValue proposition. By unpacking the concept of Public Sector Innovation; agreeing, across relevant stakeholders, on indicators of success; creating and upskilling a government task force; and testing it as a convener and host of innovation policy debates, we will help the government establish an authoritative platform for innovation policy making.\n\nWhy and when to use it. Bootstrapping a National Innovation Lab is appropriate when the political will and the funding to create a dedicated government unit are in place.\n\nKnown issues and troubleshooting. Use these TORs as a canvas to make your own version. The exact deliverables and timeline need to be co-created with your government partner, so that their need can be met.\n\nContext. In 2019, Viet Nam’s Ministry of Planning and Investment plan to establish an innovation hub with the aim to develop the ecosystem, innovation and finding new drive for economic growth based on science and technology. For this purpose, they fundraised $30 million to establish a National Innovation Center under the Ministry of Planning and Investment (MPI). MPI hired a high-profile consulting company from the Global North for $2 million to provide the initial blueprint for NIC. This company did research and mapping of innovation hubs around the world. Then recommended NIC should follow certain international trend. This wasn’t bad, but not enough. This blueprint turned out to be unimplementable, failing to take into consideration local regulation, culture, NIC team capacity and so on. The government then reached out to UNDP to help them design a strategy for a National Innovation Ecosystem that was context appropriate.\n\nCost to implement (in USD): 65,000\n\nTime (in calendar time): 8 months, not counting procurement.\n\nPeople (team numerosity): about 64 (from UNDP) and 10 (from NIC)\n\nFocal point. Nguyen Tuan Luong\n\nCountry and year. Viet Nam, 2022\n\nResources\n\n\n  Terms of reference for a consulting organization\n  Slide deck, used to present the work plan to the government.\n\n",
    tags: null,
    sdg: null,
    url: "/Mapping/Consultant/Vietnam.html",
    id: 17
});












index.add({
    title: "About",
    content: "About\n\nIn 2022, the UNDP Accelerator Labs launched a survey to get a big picture view on the work that its global network of 91 labs was doing to support innovation ecosystems. The results were surprisingly clear-cut and coherent.\n\nFirst, we learned that a solid majority of Labs had partnered with governments to deploy interventions in support of national innovation ecosystems, or was planning to do so in the near future. We were looking at a surge of government investment in innovation across the Global South. Furthermore, these Global South governments were looking beyond the usual Global North example of policies to support innovation and learning from each other.\n\nSecond, we learned that UNDP was widely recognized as the leading organization in supporting Global South governments in this journey. And third, we learned that collaboration with governments that have invested in innovation becomes smoother and more impactful.\n\nIn 2023, as the Accelerator Labs move to contribute more deliberately to UNDP’s R&amp;D function, we partnered up with the Chief Digital Office to offer the experience accumulated by our network of labs in tens of countries in curated form. We are making it a toolkit, that is a collection of documented resources. It is meant to inspire would-be champions of their national innovation ecosystems. More than that, though, it is meant to empower them, by offering ready-made resources that can be re-used after having been adapted to a new context. In this sense, it is a first attempt (still in prototype as we write this) at an R&amp;D product.\n\nMany champions of innovation in the Global South are to be found within UNDP itself. In particular, we hope this toolkit will help the (many!) Country Offices that are moving to support their government partners on nurturing national innovation ecosystems; the Regional Bureaus of Africa and Asia Pacific (and hopefully the others, soon) in their work on public sector innovation; and – since innovation ecosystems are by definition multistakeholder and need constructive government-civil society partnerships – the Governance Community of Practice in its drive to expand civic spaces.\n",
    tags: null,
    sdg: null,
    url: "/Getting%20started/about.html",
    id: 18
});












index.add({
    title: "How to design an innovation policy",
    content: "About designing an innovation policy\n\nAn innovation policy or strategy is a formal document outlining a government’s stance towards innovation, its values, objectives and indicators of success. It can have substantial impact in orienting the expectations of all actors in the ecosystem: for example, if the policy insists on using innovation to bring about digital inclusion, private sector companies and nonprofits alike will learn this is a national priority, and work in this direction will be followed with interest by the government.\n\n",
    tags: null,
    sdg: null,
    url: "/Innovation-Policy/design.html",
    id: 19
});












index.add({
    title: "How to use the toolkit",
    content: "How to use this toolkit\n\nArchitecture\n\nWe use the metaphor of the toolkit to emphasize the operational, enabling nature of the work you are reading right now.\n\n\n  The Toolkit is a set of resources and their documentation materials meant to help people and organizations who want to support innovation ecosystems.\n  The toolkit contains tools. Each tool consists of one or more resources, documented in a page of this website.\n  A resource is a document that can be re-used, in part or as a whole. Examples are talking points or slide decks to argue for supporting innovation ecosystems; workplans and lists of deliverables to achieve operational status for a government innovation unit; agendas for workshops meant to socialize key concepts around innovation with senior civil servants; curricula for courses on key skills useful to employees of an innovation unit. Resources are accessible via live links from the factsheets, with a UNDP corporate login.\n  Website pages contain resources metadata, accessible to everyone. Each page is dedicated to one tool, and explains what the tool is good for; what it is not good for; the context in which it was produced; how much money and time you will need to deploy it, and so on. You will also find a reference to the person or people who created the resource in the first place.\n\n\nUsing this toolkit in four easy steps\n\n1. Decide what you want to do and browse the catalogue\n\nThe tools in this kit are labelled according to function, with names like “How to map the innovation ecosystem” and “How to take a newly created innovation unit to fully operational status”. They  are sorted into into four main categories, based on the requests that UNDP’s government partners have brought to the Accelerator Labs in the period 2019-2022. Tools within the same category combine naturally. The navigation bar on the left of the screen acts as a catalogue: browse it and navigate to any tool you like.\n\n2. Read the description from this website\n\nEach tool’s website page contains information you can use to decide if that tool is useful to you after all. Is it function aligned with your own purpose? Is it compatible with your time and money budget? Did its deployment run into problems, and how were they addressed? And so on.\n\n3. Read and reuse the resources\n\nIf the description of the tool looks interesting, you can move on to the resource itself. This might be a slightly harder read (it was not written with your case in mind!), and almost certainly you will need to make changes to it. Hopefully that still saves you time and effort with respect to starting from scratch. In the prototype version, you will need a undp.org email address to access resources.\n\n4. Ask for support\n\nAll resources have a lead author, or “focal point”. The ethos of UNDP’s Accelerator Labs and Chief Digital Office is one of sharing knowledge, so you can reach out to the focal point if you need more information and support.\n\n",
    tags: null,
    sdg: null,
    url: "/Getting%20started/how-to-use-the-toolkit.html",
    id: 20
});












index.add({
    title: "Getting Started",
    content: "Background and purpose\n\nIn 2022, the UNDP Accelerator Labs launched a survey to get a big picture view on the work that its global network of 91 labs was doing to support innovation ecosystems. The results were surprisingly clear-cut and coherent.\n\nFirst, we learned that a solid majority of Labs had partnered with governments to deploy interventions in support of national innovation ecosystems, or was planning to do so in the near future. We were looking at a surge of government investment in innovation across the Global South. Furthermore, these Global South governments were looking beyond the usual Global North example of policies to support innovation and learning from each other.\n\nSecond, we learned that UNDP was widely recognized as the leading organization in supporting Global South governments in this journey. And third, we learned that collaboration with governments that have invested in innovation becomes smoother and more impactful.\n\nIn 2023, as the Accelerator Labs move to contribute more deliberately to UNDP’s R&amp;D function, we partnered up with the Chief Digital Office to offer the experience accumulated by our network of labs in tens of countries in curated form. We are making it a toolkit, that is a collection of documented resources. It is meant to inspire would-be champions of their national innovation ecosystems. More than that, though, it is meant to empower them, by offering ready-made resources that can be re-used after having been adapted to a new context. In this sense, it is a first attempt (still in prototype as we write this) at an R&amp;D product.\n\nMany champions of innovation in the Global South are to be found within UNDP itself. In particular, we hope this toolkit will help the (many!) Country Offices that are moving to support their government partners on nurturing national innovation ecosystems; the Regional Bureaus of Africa and Asia Pacific (and hopefully the others, soon) in their work on public sector innovation; and – since innovation ecosystems are by definition multistakeholder and need constructive government-civil society partnerships – the Governance Community of Practice in its drive to expand civic spaces.\n\nYour feedback is hugely appreciated, even (especially!) if critical. Please direct it to anyone in the curation task force.\n\nTeam\n\nHuge thanks to everyone who contributed to creating this prototype. Contact information for all contributors is visible on the Team page.\n\nContributors: See the Contributors page.\n\nCuration task force: Tayo Akinyemi (Global Team), Alberto Cottica (Global Team), Ana Grijalva (Ecuador), Eduardo Gustale (Global Team), Calum Handforth (Chief Digital Office), Nicola Holden (Chief Digital Office).\n\nPeer review: Lazar Pop Ivanov (North Macedonia), Paola Costantino (Guatemala).\n\nTechnical support: Adedapo Aderemi, Jeremy Boy (Global Team).\n\nDesign guru: Bas Leurs (Global Team)\n\nLicense\n\nThe content of this website is property of the United Nations Development Programme, and published under a Creative Commons 4.0 Attribution license.\n",
    tags: null,
    sdg: null,
    url: "/",
    id: 21
});












index.add({
    title: "Lessons learned",
    content: "Making this toolkit and lessons learned\n\nMaking this toolkit\n\nThe UNDP Accelerator Labs created this website in 2023 as part of a R&amp;D cycle on supporting national ecosystems of innovation. The rationale for doing so is explained in the About page. We followed a logic of build, engage, scale: starting from an idea, first build a prototype you can show to prospective allies and partners. Next, look for allies via activities to socialize and disseminate the prototype to others. Once you have found them, go – with your new partners – to look for the resources to scale up your prototype into a fully developed project or service.\n\nThe timeline of this work is as follows:\n\n\n  April: the Accelerator Labs’ global team assembles a small curation task force of four people. We, the curation force, meet physically in New York for a one-week production sprint and put together a lo-fi prototype, in the form of a hierarchy of folders on UNDP’s OneDrive facility, which contains 8 tools. As the week draws to a close, we present the prototype to our team leader and colleagues and gather early feedback.\n  May. We document more tools and migrate the prototype to a barebones website.\n  June, we started a phase of socialization and sharing of the prototype. We organize a number of presentations to various teams and bureaus of UNDP, as well as to the broader Accelerator Labs network. In parallel, we continue to improve the website and add yet more tools, ending at 16. As a consequence of one of these presentations, we are asked to join a new initiative, still being discussed with the Executive Office of the Secretary General.\n  July. The proposal is approved. The initiative is branded “the FutureGov facility” (pre-launch home page). It is led by UNDP, and specifically by the Governance team of the Bureau for Policy and Programme Support, the Accelerator Labs and the Chief Digital Office; UNDESA is also a participant.\n  August. We give the website a final once-over as the R&amp;D cycle moves onto the next phase. We imagine the next iteration of the toolkit to be a part of the FutureGov facility’s offer.\n  September. FutureGov launches at the SDG summit. Ecuador and Paraguay, two governments whose work with the Labs is featured in the toolkit, join the FutureGov facility as founding members. After launch, we proceed to joint resource mobilization with the other entities involved.\n\n\nOverall, we observed a satisfyingly fast turnaround. The added value of curating the most actionable learnings of the Accelerator Labs network around national innovation ecosystems was fairly easy to communicate.\n\nLessons learned\n\n\n  A toolkit is about turning contextual-and-implicit knowledge into universal-and-codified. This is a notoriously difficult task. Instead of attempting to write the perfect documentation, we decided that this toolkit would have two components: this website and human focal points. Each tool in the toolkit comes with the name and contact information of someone who understands the full (contextual) story behind our simple web pages, and who agreed to make themselves available should they receive a request for more information. To highlight the toolkit’s human component, we insisted on building a Team page and individual pages for each contributor. This gestures towards what we see as a possible next iteration: a shopfront website from which people and organization who want to expand the capacity to innovate in their economies can invoke human expertise, the real  precious resource UNDP has to offer. This implies sophisticated service design, and we will not attempt it without allies and extra resources.\n  Building the toolkit as a basic website hit a sweet spot, which we might dub a “mid-fi prototype”. It was simple to do technically (see below), and, while very basic visually (so, not hi-fi), it still was far better than a hierarchy of folder or a PDF (so, not lo-fi either). Our colleagues in the Regional Bureau for Latin America and the Caribbean asked us to provide them with a whitelabel version of our website for their own use.\n  The returns on improvements to the website’s design and tech are rapidly diminishing. At first, you can achieve a lot with little extra work. As you continue to develop, though, improvements require more and more effort. In our case, the Team page and individual contributors pages, and only them, required an extra page template, a file containing the data (in YAML, which is indentation-sensitive and easy to break) and a folder full of photographs. For the reasons explained in 1., we decided to saddle this extra complexity. Despite this, resisting requests for purely aesthetic improvements is almost always the right thing to do when prototyping.\n  We were able to achieve additional speed by sharing the toolkit while we were still building it. It turns out that, if supported by a robust narrative, a sketchy toolkit is good enough for sharing and socializing.\n  We chose to roll out the website with GitHub Pages for decentralized collaboration. This turned out to be a great choice, because it involved only a minimal time commitment by the team’s developer. Once the site was set up, anybody in the curation task force could easily edit and add pages, with little or no knowledge about website development. We find this solution empowering and resilient (since the bottleneck of the developer is removed for content updates, which means most updates). This toolkit’s GitHub repository is here.\n  Open sourcing our content helps with spreading the toolkit. Possible partners can be simply given a live link, and have the opportunity to get an idea of what is going on. Problems remain: the IPR status of internal UNDP documents (like terms of reference or slide decks) is ambiguous, and it is not even clear what we would need to do in order to take them into the public domain. We decided to keep those documents (resources) on UNDP servers, which means that website visitors are asked for UNDP corporate login if they click on those links. This has the advantage of simplicity, but is not a clean solution, nor a fully open one.\n\n\n",
    tags: null,
    sdg: null,
    url: "/Getting%20started/learnings.html",
    id: 22
});















index.add({
    title: "Understanding National Innovation Ecosystems (NIEs) and Public sector innovation (PSI)",
    content: "# Understanding National Innovation Ecosystems (NIEs) and Public sector innovation (PSI)\n\n**As part of its mandate, UNDP contributes to building national innovation ecosystems**. Two thirds of UNDP's Accelerator Labs are already supporting national innovation, and most of the remaining third plan to do so.\n\n**We focus on supporting the ecosystem's foundations**. Like biological ecosystems, innovation ecosystems require a nourishing foundation, the equivalent of the coral branches in coral reefs. Built by coral polyps, reefs provide an environment for many species to grow and thrive. We see the role of UNDP and its government partners as analogous to that of coral: focus on building the infrastructure that will make the ecosystem hospitable to the diverse actor on the innovation ecosystem. Ecosystem-building activities are highly context-specific and will differ depending on the conditions on the ground.\n\n**Public sector innovation contributes to the foundations for national innovation ecosystems**. Public sector innovation has evolved from focusing on the innovative, technology-enabled delivery of public services to the practice of using innovation to advance economic and social progress across the board.\n\n**The public sector is the natural candidate to provide the foundations for national innovation ecosystems**. In many countries, governments play a catalytic role in boosting national innovation ecosystems by making policy, convening key stakeholders, and sustaining key activities.\n\n**UNDP's role is to help engineer national innovation ecosystems that prioritize sustainable development goals (SDGs)**. We will help governments understand and capture the opportunity to build national innovation ecosystems that are inclusive and use innovation as an enabler of the SDGs.\n\n![without PSI](../../public/imgs/NIE1.png)\n\n![with PSI](../../public/imgs/NIE2.png)\n",
    tags: null,
    sdg: null,
    url: "/pitching/understanding/understanding.html",
    id: 24
});












index.add({
    title: "How to upskill civil servants for innovation",
    content: "## About upskilling civil servants\n\nInnovation was not always recognized as being part of the job of the public sector. Civil servants are often unfamiliar with the methods and techniques we associate with innovation. UNDP’s Accelerator Labs and Chief Digital Office have accumulated substantial experience in helping Global South governments acquire and hone such skills.   \n",
    tags: null,
    sdg: null,
    url: "/Upskill/upskill.html",
    id: 25
});












index.add({
    title: "Values and attitude",
    content: "## Values and attitude\n\n### Values\n\nThis toolkit was produced in the cultural context of UNDP's Accelerator Labs and Chief Digital Office. It inherits their culture of deep listening, immersion within the everyday reality of the Global South, respect for grassroots innovation, openness, and epistemological humility. It does not seek to provide turnkey solutions, but to share the knowledge accumulated along the way, in the hope of making the task of supporting innovation ecosystems a little less difficult.\n\n### Support, nurture and take stock\n\nInnovation is an important ingredient of development. It helps national communities find ways to confront new, emerging challenges, and new ways to confront old ones.\n\nInnovation is rarely done in isolation. Behind any successful innovation stands a plurality of agents (businesses, government agencies, education establishments...), and artifacts (legal frameworks, physical infrastructure, market institutions, financial services...). This is why we talk of innovation _ecosystems_, using a metaphor from ecology. Just like with actual ecosystems, innovation ecosystems are healthier when they are denser (more individual animals and plants) and more diverse (more species thereof).\n\nFor this reason, good interventions on innovation are supportive and nurturing of national actors. Before you make a decisive move, it's a good idea to take stock of what is already there. In this toolkit you will find resources to help you design and run a mapping exercise.\n\n### Don't compete with extant actors\n\nIf you see actors performing a role in an innovation ecosystem, do not try to outcompete them. Maybe someone is running an incubator, or an innovation challenge; even if you think you can do better than them, it is almost always a bad idea to launch your own initiative. Rather than replace, add to the system: maybe provide something they are not doing yet, or launch an initiative to help them do better. This makes ecological sense; also, it makes your initiative more politically acceptable, and hopefully welcome.\n\n### Don't try to control\n\nLike all complex systems, an innovation ecosystem cannot be controlled. You are a contributor to it, not its boss. Listen, stay open, seek alignment, put actors in line of sight of one another.\n\n\n",
    tags: null,
    sdg: null,
    url: "/Getting%20started/values.html",
    id: 26
});












index.add({
    title: "Ana M. Grijalva",
    content: "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Ana M. Grijalva\n            \n            UNDP Ecuador Accelerator Lab\n            Head of Exploration\n          \n        \n        \n          Ana M. Grijalva is an economist, education specialist, and social innovator with 10 years of experience. She has a vast experience in program development, management, implementation, monitoring, and evaluation, but also in cutting-edge research and data analysis. She has expertise on key issues related to education, labor market, MSME productivity and governance. She has worked for different agencies of the United Nations (International Institute for Educational Planning and Economic Commission for Latin America and the Caribbean) and for international organizations such as University of Oxford, Inter-American Development Bank, and World Bank. Also, she has experience in Ecuador´s public sector, and has worked for the academia in the United Kingdom and Ecuador. She is excited to collaborate to the change of the status quo through public and social innovation, data analysis, technology, and civic engagement.\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n          \n          \n\n          \n\n        \n      \n    \n  \n\n",
    tags: null,
    sdg: null,
    url: "/contributors/Ana-Grijalva.html",
    id: 27
});












index.add({
    title: "Jerson del Rosario",
    content: "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Jerson del Rosario\n            \n            UNDP Dominican Republic Accelerator Lab\n            Head of Solutions Mapping\n          \n        \n        \n          As a sociologist, qualitative researcher and development practitioner, Jerson has worked as local development facilitator for grassroots community organizations and was a researcher and social policy analyst for the Social Policy Coordination Cabinet of the Dominican Republic. He has conducted ethnographic research on education, youth and teen pregnancy, precarious livelihoods and income generation policies, with a strong interest in small-scale entrepreneurs and the ways they understand the economic complexities of globalization. Jerson holds a bachelor’s in International Relations, a master’s in Local Development and International Cooperation, a master’s in Sociology and Education and is currently pursuing doctoral studies in Sociology.\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n          \n          \n\n          \n\n        \n      \n    \n  \n\n",
    tags: null,
    sdg: null,
    url: "/contributors/Jerson-del-Rosario.html",
    id: 28
});












index.add({
    title: "Nguyen Tuan Luong",
    content: "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Nguyen Tuan Luong\n            \n            UNDP Viet Nam Accelerator Lab\n            Head of Solutions Mapping\n          \n        \n        \n          Luong grew up around the world as a “third culture kid” and now sees himself as a global citizen. Having worked with the Innovation Partnership Programme between Finland and Vietnam, and contributed towards developing a thriving innovation ecosystem in Vietnam, Luong brings expertise in public-private partnerships. He is passionate about helping changemaker communities such as Knowmads Hanoi and Art of Hosting in creating space for meaningful conversations.  \nLuong is a Swedish Institute alumnus and graduated in Master’s in strategic leadership toward Sustainability from Sweden. By combining his cross-cultural understanding, tech-savviness, and business sense, he hopes to facilitate organizations transformation toward greater sustainability, collaboration and creativity.  \nIn his spare time, you can find him learning and practicing his hobbies. He is always excited to meet new people and looks forward to listening and sharing good stories with them.  \n\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n          \n          \n\n          \n\n        \n      \n    \n  \n\n",
    tags: null,
    sdg: null,
    url: "/contributors/Nguyen-Tuan-Luong.html",
    id: 29
});












index.add({
    title: "Sandy Ramirez",
    content: "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Sandy Ramirez\n            \n            UNDP Dominican Republic Accelerator Lab\n            Head of Exploration\n          \n        \n        \n          Innovation and digital business specialist. Sandy has worked in promoting and developing policies to strengthen MSMEs and before joining the lab was the coordinator of Digital Economy for the Ministry of Industry, Commerce and MSMEs. Sandy has coordinated the execution of cooperation projects to promote innovation with governments of Taiwan, Korea and Spain. Sandy holds a masters degree in Digital Business and Digital Marketing as well as a masters in Business Administration.\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n          \n          \n\n          \n\n        \n      \n    \n  \n\n",
    tags: null,
    sdg: null,
    url: "/contributors/Sandy-Ramirez.html",
    id: 30
});












index.add({
    title: "Caroline Kiarie-Kimondo",
    content: "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Caroline Kiarie-Kimondo\n            \n            UNDP Kenya Accelerator Lab\n            Head of Exploration\n          \n        \n        \n          Caroline Kiarie-Kimondo is the Head of Exploration, Kenya Accelerator Lab. Caroline is a social impact strategist with a passion for framing and reframing positive social impact narratives. She has 15 years of experience in philanthropy, movement building, social innovation, and strategic communications. She's also skilled in leadership coaching, human-centered design thinking, decision architecture, agile project management, and adaptive leadership.\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n          \n          \n\n          \n\n        \n      \n    \n  \n\n",
    tags: null,
    sdg: null,
    url: "/contributors/Caroline-Kiarie.html",
    id: 31
});












index.add({
    title: "Nampaka Nkumbula",
    content: "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Nampaka Nkumbula\n            \n            UNDP Zambia Accelerator Lab\n            Head of Experimentation\n          \n        \n        \n          Nampaka is currently the Zambia Accelerator Lab Head of Experimentation and is a seasoned researcher within experience supporting the Zambian Innovation ecosystem with a bias on strengthening Research and development pathways for the growth of innovations by influencing government approach and methods towards responding aptly to grassroots innovations. Prior to joining UNDP, Nampaka worked at Innovations for Poverty Action. She has experience working in the development sector, promoting the use of rigorously generated evidence with partners, conducting policy driven research, and leveraging large administrative data systems to inform decision making processes and develop scaling pathways to move promising interventions from research to scale. Working in the Health, Education and Financial Inclusion sectors in Zambia, Nampaka also has experience in agricultural policy analysis and banking with a specific focus on fund management and marketing. As a successful applicant to the B360 internship at Credit Suisse, Nampaka worked in the Export Finance Department under Corporate and Specialty Lending as a Junior Portfolio Manager. She holds a Master of Arts Degree in Economics from the University of Zambia (UNZA) and a Bachelor of Arts Degree in Economics with Mathematics and Statistics from UNZA.\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n          \n          \n\n          \n\n        \n      \n    \n  \n\n",
    tags: null,
    sdg: null,
    url: "/contributors/Nampaka-Nkumbula.html",
    id: 32
});












index.add({
    title: "Alena Klatte",
    content: "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Alena Klatte\n            \n            UNDP Chief Digital Office\n            Global Project Manager, Strategic Data Initiatives\n          \n        \n        \n          \n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n\n          \n\n        \n      \n    \n  \n\n",
    tags: null,
    sdg: null,
    url: "/contributors/Alena-Klatte.html",
    id: 33
});












index.add({
    title: "Christof Hawle",
    content: "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Christof Hawle\n            \n            UNDP Chief Digital Office\n            Digital Innovation and Transformation Specialist\n          \n        \n        \n          Christof has a background in private sector digital transformation consulting and development innovation and has been with the CDO since 2021. He has been supporting individual digital innovation projects and Digital X, and coordinates efforts to implement \"Digital by Default\": assuring digital is embedded in our business processes and programming life cycle. \n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n          \n          \n\n          \n\n        \n      \n    \n  \n\n",
    tags: null,
    sdg: null,
    url: "/contributors/Christof-Hawle.html",
    id: 34
});












index.add({
    title: "Yrika Maritz",
    content: "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Yrika Maritz\n            \n            UNDP Namibia Accelerator Lab\n            Head of Experimentation\n          \n        \n        \n          Yrika Vanessa Maritz is the Head of Experimentation at the UNDP Accelerator Lab Namibia. She previously worked at the Office of the Prime Minister in various roles, including Learning and Development Officer and Deputy Director of the Efficiency and Charter Unit.  She also served as the former Director of the Centre for Management and Leadership Development at the National School of Government, NIPAM.  Yrika is a Clinical Psychologist by profession and holds a Master in Public Administration, as well as a PhD in Public and Development Management.  She has been trained in various specialized learning and development models and schools in Tanzania, the UK, Germany, Sweden, Japan, and China. She is an accredited Management Consultant with the CIMC in the UK and registered with the Social Work and Psychology Council of Namibia.\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n          \n          \n\n          \n\n        \n      \n    \n  \n\n",
    tags: null,
    sdg: null,
    url: "/contributors/Yrika-Maritz.html",
    id: 35
});












index.add({
    title: "Cristhian Parra",
    content: "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Cristhian Parra\n            \n            UNDP Paraguay Accelerator Lab\n            Head of Experimentation\n          \n        \n        \n          Cristian Parra has a Ph.D. in Information and Communication Technologies from University of Trento, Italy, and an Informatics Engineering degree from the Polytechnic School of UNA. For the past 10 years, he has been working in social informatics R&D projects, using participatory design and human-centered design approaches to topics in community-based public health, social inclusion, civic technologies and citizen participation. He was a postdoctoral researcher at the University of California, Berkeley, where he led the projects of the Social Apps Lab (CITRIS). As consultant, he helped organizations like the World Bank, the IADB, the SSI of Berkeley, among others. Before joining AccLab, he was working as a Senior Researcher at the Catholic University of Asunción, where he led projects like TopaDengue, which combines community participation with technologies to fight the spread of the Aedes Aegypti through a bottom-up citizen science approach, within a controlled experiment. In 2018, with his team, he was the recipient of one of the Honorific Mentions of the National Prize for Science for some of these works. Cristhian has always had a passion for initiatives at intersections, bridging Computer and Social Sciences to inform research, development, and implementation of innovative socio-technical solutions for social or community challenges. This passion led him straight to this lab, where he sees a unique opportunity to contribute to the already great work that UNDP is doing in solving the big societal and development challenges of our century.\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n          \n          \n\n          \n\n        \n      \n    \n  \n\n",
    tags: null,
    sdg: null,
    url: "/contributors/Cristhian-Parra.html",
    id: 36
});












index.add({
    title: "Eduardo Gustale",
    content: "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Eduardo Gustale\n            \n            UNDP Accelerator Labs\n            Monitoring, Experimentation and Learning Specialist\n          \n        \n        \n          Experienced in Sustainable Development and Social Innovation. Worked repeated times in academic research, survey development and market insight. Elected Global Shaper by the World Economic Forum & Chevening Scholar for an MSc in Innovation and Entrepreneurship at University of Warwick.\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n          \n          \n\n          \n\n        \n      \n    \n  \n\n",
    tags: null,
    sdg: null,
    url: "/contributors/Eduardo-Gustale.html",
    id: 37
});












index.add({
    title: "Tayo Akinyemi",
    content: "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Tayo Akinyemi\n            \n            UNDP Accelerator Labs\n            Learning and Community Manager\n          \n        \n        \n          I have spent most of my career creating order from ambiguity, whether it's charting my own vocational journey, supporting an African entrepreneurial leadership center launch, building the first pan-African network of tech hubs, or decoding early stage investing in Africa. In other words, I like to help great people build great things, ideally by marrying vision (dream+strategy) with implementation (getting stuff done). African tech entrepreneurship and innovation trends on all of my feeds, with a special emphasis on building enabling infrastructure (think hubs and accelerators) enhancing, the capacity of those enablers (especially early stage investors).\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n          \n          \n\n          \n\n        \n      \n    \n  \n\n",
    tags: null,
    sdg: null,
    url: "/contributors/Tayo-Akinyemi.html",
    id: 38
});












index.add({
    title: "Calum Handforth",
    content: "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Calum Handforth\n            \n            UNDP Chief Digital Office\n            Digital Programmes Strategic Manager\n          \n        \n        \n          UN Advisor and Fellow - focusing on data, innovation, and digital tech in international development and government.\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n          \n          \n\n          \n\n        \n      \n    \n  \n\n",
    tags: null,
    sdg: null,
    url: "/contributors/Calum-Handforth.html",
    id: 39
});












index.add({
    title: "Nicola Holden",
    content: "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Nicola Holden\n            \n            UNDP Chief Digital Office\n            Digital Experience Advisor\n          \n        \n        \n          \n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n\n          \n\n        \n      \n    \n  \n\n",
    tags: null,
    sdg: null,
    url: "/contributors/Nicola-Holden.html",
    id: 40
});












index.add({
    title: "Adedapo Aderemi",
    content: "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Adedapo Aderemi\n            \n            UNDP Accelerator Labs\n            Software Developer\n          \n        \n        \n          Adedapo is an inventive and dynamic software developer with experience designing state-of-the-art web, mobile, IoT, and cloud engineering solutions. He is proficient in a variety of frameworks and programming languages, specializing in developing scalable and resilient applications. He utilizes cutting-edge technologies to address intricate challenges, propel digital revolutionization, and generate memorable user experiences.\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n          \n          \n\n          \n\n        \n      \n    \n  \n\n",
    tags: null,
    sdg: null,
    url: "/contributors/Adedapo-Aderemi.html",
    id: 41
});












index.add({
    title: "Mónica Ríos",
    content: "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Mónica Ríos\n            \n            UNDP Paraguay Accelerator Labs\n            Head of Exploration\n          \n        \n        \n          Mónica Rios has a Business Administration Degree, holds a Master’s Degree in Creation and Management of Innovative and Technology Based Companies (Barcelona, Spain) as part of the National Scholarship Program “BECAL” and a Diploma in Corporate Social Responsibility (Santiago, Chile). She worked with the private sector, NGOs and multilateral funds in subjects related to corporate social responsibility, sustainability, marketing, strategy and innovation. Before joining UNDP he designed and coordinated incubation and acceleration processes for MSMEs in the creative sector in Paraguay and social innovation projects through the IDB LAB. Her main motivation lies in lies in maximize innovative projects developed in Paraguay, which can inspire others to think big, as well as learn from other practices developed by others AccLabs worldwide.\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n          \n          \n\n          \n\n        \n      \n    \n  \n\n",
    tags: null,
    sdg: null,
    url: "/contributors/Monica-Rios.html",
    id: 42
});












index.add({
    title: "Alberto Cottica",
    content: "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Alberto Cottica\n            \n            UNDP Accelerator Labs\n            R&D Specialist\n          \n        \n        \n          Originally a development/environmental economist, now more of a quantitative social scientist. Anthropology, ethnography, network science. Interested in epistemology. Committed citizen. Runner. Ex-minor rockstar.\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n          \n          \n\n          \n\n        \n      \n    \n  \n\n",
    tags: null,
    sdg: null,
    url: "/contributors/Alberto-Cottica.html",
    id: 43
});













// builds reference data
var store = [{
  "title": "How to support a national innovation ecosystem",
  "url": "/Ecosystem/About%20supporting%20national%20innovation%20ecosystems.html",
  "content": "About supporting national innovation ecosystems\n\nNot all interventions on innovation ecosystems stem from the public sector. UNDP’s Accelerator Labs have been working on actions like mapping the actors in national innovation ecosystems and supporting early-stage innovators.\n\n",
  "tags": null,
  "sdg": null,
  "excerpt": "About supporting national innovation ecosystems Not all interventions on innovation ecosystems stem from the public sector. UNDP’s Accelerator Labs have...",
  "id": 44
},{
  "title": "Digital Standards for development solutions - Chief Digital Office",
  "url": "/Upskill/digital-standards/CDO.html",
  "content": "UNDP DIGITAL STANDARDS\n\nWhat it does. This tool provides guidance for UNDP teams on best practices when creating digital solutions for development. They are shared publicly as they may help other teams across the development sector identify how best to explore digital tools and technologies.\n\nValue proposition for the government/other partner and SDG alignment. By making use of the Digital Standards, you will be able to provide a framework for new and ongoing projects on how digital information is managed and exchanged, and how digital products are created to ensure that new technologies are used effectively, efficiently, and ethically to support development goals.\n\nWhy and when to use it. This tool is useful to support partners and stakeholders to evaluate new technologies and ensure that they are compatible with existing systems avoiding investments in outdated or incompatible technologies. This tool includes a total of 10 digital standards, each standard explains its purpose, when and how to best be applied, and has useful resources. Digitalization is one of the three enablers of UNDP Strategic Plan 2022-2025 to support countries to build inclusive, ethical, and sustainable digital societies.\n\nKnown issues and troubleshooting. This tool is not trying to claim that all development solutions must be digital. In fact, it is important to reflect and analyze whether the effective implementation of a development solution requires a digital mean.\n\nContext. This tool builds upon the Principles for Digital Development, which have been endorsed by the international development community. The Principles for Digital Development are a set of living guidance intended to help practitioners succeed in applying digital technologies to development programs.\n\nCost. Free to use.\n\nTime. Not applicable\n\nPeople. Self-led.\n\nFocal point. Christof Hawle.\n\nCountry, year, and language. Global, 2021\n\nResources\n\n\n  Digital Standards website\n\n\n",
  "tags": null,
  "sdg": null,
  "excerpt": "UNDP DIGITAL STANDARDS What it does. This tool provides guidance for UNDP teams on best practices when creating digital solutions...",
  "id": 44
},{
  "title": "Data-to-policy navigator - Chief Digital Office",
  "url": "/Upskill/Data-to-policy%20navigator%20/CDO2.html",
  "content": "Data to Policy Navigator\n\nWhat it does. The Data to Policy Navigator is designed to assist government executives and policymakers in grasping the fundamentals of data-driven decision-making. It provides a step-by-step guide and a range of practical examples from across the globe on how to integrate data into policy and programme development.\n\nValue proposition for the government/other partner. Addressing crises like climate change, the recovery from the COVID-19 pandemic, and gender inequality requires effective, transparent, and evidence-based government policies. ‍ The advancements in digital technologies and the data they generate are game-changers for policymakers around the world. Today, ministries working on any given issue can use a range of new data sources like satellite imagery, social media, and mobile data that they could rely on to back their policies and programme proposals. ‍ Many countries, however, are still unable to leverage this new data reality – impeding the development of more effective policies that are informed and backed by evidence. ‍ The Data to Policy Navigator aims to give policymakers the know-how to systematically integrate new data sources into their decision-making and policy-development processes. ‍\n\nWhy and when to use it. The Data to Policy Navigator is specifically designed for government officials with no or with basic prior data science knowledge and experience. It offers step-by-step actionable recommendations and examples throughout the policy development process, starting with problem definition to policy design and evaluation. This tool is most useful for policymakers who are starting to develop a data-driven policy in any sector or region. The Data to Policy Navigator sets out four key stages that break down the process of using data when developing policies, starting with problem definition from a data-angle and concluding with policy evaluation. Beyond these four stages, the Navigator covers four overarching themes on ensuring data governance and ethics, building data capacities, fostering a data culture, and developing institutional mechanism for continued use of data. The tool also provides use-cases from across regions and different sectors, to inspire policymakers.\n\nKnown issues and troubleshooting. Data can play a valuable role in shaping, developing, and implementing policies – from understanding the needs of citizens, to identifying the impact of policies and other interventions. With this in mind, the Data to Policy Navigator can be useful for policymakers working on a wide-range of different topics. Ideally, policymakers should engage with the tools and resources available on the Navigator early in the policymaking process – in order to best leverage the role and potential of data. The four-stage guidance in the Navigator will be most useful if policymakers have access to technical experts (or have a data expertise themselves), who can support them along the journey of integrating data into their policy design. Other parts of the Navigator, such as the collection of use cases, may be used any time.\n\nContext. Several initiatives and projects have exerted a lot of effort to improve the quality of the data collected and produced in many developing countries around the world. However, according to research conducted by GIZ and the Open Data Institute not enough focus has been given to building the capacities of policymakers, who are the primary data consumers. ‍ To address this gap, GIZ’s Data4Policy Initiative and UNDP’s Digital Office developed the Data to Policy Navigator. A resource, specifically designed for government officials with no or with basic prior data science knowledge and experience. It aims to give policymakers the know-how to systematically integrate new data sources into their decision-making and policy-development processes.\n\nCost. The Data to Policy Navigator is a free-to-use tool. Although designed as a self-led and self-paced platform, governments may want to contract external expertise to facilitate key discussions or activities highlighted by the Navigator.\n\nPeople. The Data to Policy Navigator is a self-led tool. However, managers may want to consider facilitating group discussions, learning, and broader mentoring to embed data-driven policymaking.\n\nFocal point. Alena Klatte\n\nCountry, year, and language. Global, 2023, English (translation to French &amp; Spanish planned in 2023)\n\nResources\n\n\n  Data to Policy Navigator: https://www.datatopolicy.org/\n  Op-Ed by UNDP on importance of data-informed policies: https://www.mei.edu/publications/future-climate-technology-data-informed-policies-are-indispensable-mitigating-climate\n  Press release from beta launch event: https://www.undp.org/news/undp-mitigating-data-challenges-imperative-human-development-and-getting-sdgs-back-track\n\n",
  "tags": null,
  "sdg": null,
  "excerpt": "Data to Policy Navigator What it does. The Data to Policy Navigator is designed to assist government executives and policymakers...",
  "id": 44
},{
  "title": "A step-by-step journey to a national innovation policy - Dominican Republic",
  "url": "/Innovation-Policy/policy-DRepublic/DOM.html",
  "content": "A step-by-step to draft a National Innovation Policy\n\nWhat it does. Helps you prepare an enabling environment for the government as it drafts its first national innovation policy. This component will provide you with examples of how to prepare the ground to facilitate the drafting of National Innovation Policy, design a theory of change for national innovation policy and give you access to a National Innovation Strategy for Dominican Republic.\n\nValue proposition for the government or other partner. Serves as an overarching reference model to identify, structure and prioritize national digital transformation efforts and agendas. Framing for UNDP support.\n\nWhy and when to use it. This approach is most useful when a government is taking its first steps towards taking an active role in the support of a national innovation ecosystem, and no official policy exists yet. This situation calls for quickly socializing senior officials to the domain of innovation policy.\n\nKnown issues and troubleshooting. This process takes you to a final draft of the policy. Full It is important then to have a follow up for implementation of the strategy (from paper to practice).\n\nContext. In 2021, the Dominican Republic’s government created the Innovation Cabinet, an inter-ministerial coordination taskforce mandated to craft a National Innovation Policy. The presidential decree directed the work of the cabinet’s affiliated institutions into five working themes: 1) governance, 2) human capital, 3) investment and partnerships, 4) culture and citizenry, and 5) energy transition and sustainability. To speed up the process, the government has requested technical assistance from UNDP. As an agile incubator of ideas and solutions, the UNDP Accelerator Lab took charge of helping the government in drafting its first national innovation policy.\n\nThey embarked on this journey by understanding the regional landscape of innovation. The Dominican Republic Accelerator Lab facilitated a series of workshops to gain insights from the Latin America region. For this, they invited ministries from Chile, Colombia, Costa Rica, and Paraguay to participate in the workshop and share their learnings and insights on innovation.\n\nThe workshops aimed at three things:\n\n\n  Building consensus on what is the definition of innovation among stakeholders.\n  Sharing learnings and insights from different countries in the region.\n  Introduce and practice innovation tools such as stakeholder mapping, issue mapping and portfolio approaches.\n\n\nDuring the workshop, the Lab invited experts from cross-cutting areas in education, governance, environment, human capital and investment. The Lab itself provided technical assistance and held sessions informed by human-centered design best practices and providing a systemic analysis. To make this practical, it linked findings from the workshop to current government challenges. They engaged with government officials and conducted an issue mapping- and a stakeholder mapping exercise to give them hands-on experience on using these innovation tools.\n\nBy the end of the session, its participants had gathered insights from the region, new tools on innovation, and understood how to link these regional views and innovation tools to the Dominican ecosystem. They drafted a national strategy innovation proposal highlighting the focus areas of the government and reached out to UNDP to design the theory of change underpinning this new vision.\n\nThe Lab took on the task of designing theory of change for the national innovation strategy. They also vetted the draft by experts in various domains within UNDP, like the governance expert, senior economist, gender specialist etc. to provide a comprehensive review of the document. The final national innovation policy is complete and highlights ways to approach digitalization, strategic innovation, and development finance for advancing the country’s long-term vision.\n\nCost to implement (in USD). Unknown\n\nTime (in calendar time): 2 years implementation time\n\nPeople. Two UNDP Staff working full time.\n\nFocal point. Jerson del Rosario.\n\nCountry and year : Dominican Republic 2021\n\nResources.\n\n\n  National innovation policy, final draft (Spanish)\n  Blog post\n\n",
  "tags": null,
  "sdg": null,
  "excerpt": "A step-by-step to draft a National Innovation Policy What it does. Helps you prepare an enabling environment for the government...",
  "id": 44
},{
  "title": "Playbook for a digital innovation lab - Dominican Republic",
  "url": "/Mapping/Playbook/DRepublic.html",
  "content": "Benchmarking participatory innovation processes with a playbook for a digital innovation unit or laboratory (Dominican Republic)\n\nWhat it does. Spells out a five-steps methodology for an innovation unit or lab to develop participatory solutions to problems of common interest. It includes elements like criteria for evaluating ideas, methods to guide their development, deployment and evaluation, design of the roles and job profiles for the Digital Lab. Additionally, it clearly spells out the values that an innovation unit or lab run by the public sector should put front and center, starting with “empathy for the users”.\n\nValue proposition. By benchmarking the process of creating new solutions, the playbook helps an innovation unit or lab maintain a clear vision of its work as it rolls out new products and services, and stay true to its mandate.\n\nWhy and when to use it. A playbook is like a constitution for an innovation unit or lab. It is appropriate to adopt it in the early stages of creating the unit or lab, or as a part of a re-organization or revamping.\n\nKnown issues and troubleshooting. Adopting a playbook, rather than creating one from scratch, is much faster and more efficient, but might engender less of a buy-in from staff than a playbook they have written themselves. The playbook needs translation in the official language (from the Spanish).\n\nContext. The Dominican Republic’s UNDP Accelerator Lab pitched a strategic proposal on a national innovation policy to the Presidential Innovation Cabinet where they identified opportunities for promoting innovation and digital capabilities of the government. The proposal focused on presenting the innovation ecosystem in the Latin American region. Next, UNDP organized a masterclass to show how innovation is not limited to the private sector and share examples of using innovation in the public sector to improve the lives of the citizens. Digital tools, it argued, can be leveraged to make solutions more inclusive and citizen centered.\n\nFinally, in a COVID-19 pandemic context, the newly established Digital Innovation Laboratory co-designed a digital consultation process. The idea was to take advantage of its digital nature to reach most citizens (and engage the youth) and to offer a platform for citizens to channel their concerns and feedback.\n\nCost to implement (in USD): not reported, but modest.\n\nTime (in calendar time): not reported, but modest.\n\nPeople (team numerosity): not reported\n\nFocal point. Sandy Ramirez\n\nCountry and year. Dominican Republic, 2021-2022\n\nResources\n\n\n  The playbook (Spanish)\n  Blog post\n\n",
  "tags": null,
  "sdg": null,
  "excerpt": "Benchmarking participatory innovation processes with a playbook for a digital innovation unit or laboratory (Dominican Republic) What it does. Spells...",
  "id": 44
},{
  "title": "Multistakeholder governance model for an innovation lab - Ecuador",
  "url": "/Mapping/Governance-model/Ecuador.html",
  "content": "A governance model for an innovation lab or unit run by diverse actors\n\nWhat it does.\n\nThis tool allows you to have a governance model for an innovation unit in which the government has the lead, but the decision-making process and implementation of actions is done along with a diverse group of actors coming from the academia, private sector, civil society organizations, and cooperation. The governance model gives detail about the organization and dynamic between actors, the responsibility of each member, and financing methods for the innovation unit to be run.\n\nValue proposition for the government/other partner and SDG alignment.\n\nBy having a decentralized and multi-actor governance model you will enable the government to have a more transparent and participatory public management. Also, this governance model will set the path for the government to have a clear working dynamic with the rest of the national innovation ecosystem in social and public matters since the it provides guidance on how to share governance with other stakeholders and form a coalition. This tool contributes to SDG 16 “Peace, Justice, and Strong Institutions” and target 16.7 “ensure responsive, inclusive, participatory and representative decision-making at all levels”.\n\nWhy and when to use it.\n\nThis tool is most useful when the government has an existence framework that enables public management to be more accountable, transparent, and open. This framework could be set by a law, an international treaty, or the generation of a new public innovation unit. Once you have identified the framework, map the actors involve, and their agendas to be able to convene these actors more easily. The governance model needs translation in the official language from Spanish.\n\nKnown issues and troubleshooting.\n\nIf the government counterpart is recently showing interest to understand and work on citizen participation and public innovation, this tool will not be as effective since it requires a higher comprehension and commitment from civil servants. To adopt this model, rather than creating one from scratch, is much faster and more efficient, but might engender less of a buy-in from local government counterparts and actors.\n\nContext.\n\nAs a member of the Open Government Partnership (OGP), Ecuador is committed to have a more open and participatory government. In this line, as part of the OGP Action Plan 2019-2022 it aimed to have an Innovation Citizen Lab for the first time in the country. UNDP´s Acc Lab played a key role offering in 2022 technical assistance to design, implement and operate the Citizen Lab called Thinkia. The Secretariat of Higher Education and Innovation of Ecuador has the lead of this Lab and runs it along with other 7 actors from the academia (2), civil society organizations (2), other public institutions (2), and cooperation sector (UNDP). The government uses a shared and decentralized governance model for Thinkia: citizen lab to include other actors as part of the management team and decision-making process. UNDP´s Accelerator Lab elaborated the governance model proposal and supported its implementation.\n\nCost\n\nUSD 3,000 - 6,000\n\nTime\n\nTo identify actors, convene, and coordinate their collaboration on a common agenda it will take 3 to 4 months.\n\nPeople\n\nTo use this tool the following team members will be required:\n\n\n  A person to pitch key ideas to the government to have multi-actor governance model. Also, to convene and coordinate joint work between actors and set a common agenda.\n  A person to support all the logistics of the coordination work and set first drafts on a common agenda.\n\n\nFocal point. Ana M. Grijalva\n\nCountry, year, and language\n\nEcuador, 2022, Spanish\n\nResources\n\n\n  Governance model (Spanish)\n  Blog post\n  Flyer (Spanish)\n  TORs for one of the team members\n\n",
  "tags": null,
  "sdg": null,
  "excerpt": "A governance model for an innovation lab or unit run by diverse actors What it does. This tool allows you...",
  "id": 44
},{
  "title": "MOOC public and social innovation concepts and tools - Ecuador",
  "url": "/Upskill/MOOC%20public%20and%20social%20innovation%20concepts%20and%20tools%20-%20Ecuador/Ecuador.html",
  "content": "MOOC ON PUBLIC AND SOCIAL INNOVATION CONCEPTS AND TOOLS\n\nWhat it does. This massive open online course (MOOC) allows you to build capacities on the main concepts of public and social innovation, and to strengthen practical skills by learning how to use methodologies and tools. The MOOC suits various types of profiles such as: civil servants, civil society organizations, academia, or private sectors counterparts. The course in on Moodle, it is self-paced, it has short and explanatory videos, complemented with readings, fun quizzes, and a final assignment. Only participants that complete all modules and work get certified for learning for 22 hours. The topics covered are: (1) Citizen labs, (2) Open culture, (3) Public Innovation Hexagon, (4) Behavioral Approach for Public Interventions, (5) Design Thinking, (6) Participative Methodologies, and (7) Social innovation and Future Thinking.\n\nValue proposition for the government/other partner. By making use of this MOOC you will enable potential allies and counterparts to understand the concepts of public and social innovation and have more clarity on how it is done. This will facilitate actors to advocate and commit to use public and social innovation as a new mechanism for public governance and citizen participation. Also, strengthening capacities and practices will allow local government to include an innovation-oriented approach in the design, development, and improvement of public services which will lead to more effective and transparent processes. This tool contributes to SDG 16 “Peace, Justice, and Strong Institutions” and target 16.7 “ensure responsive, inclusive, participatory and representative decision-making at all levels”.\n\nWhy and when to use it.This tool is most useful when there is an interested government counterpart that is actively seeking to have a public and social innovation approach to its works and supply of public services. It is cost-effective to train many civil servants simultaneously and located in diverse geographical areas. Also, it is suggested that the participation in this learning journey is done by senior management, as well as analysts. As a result of this course and clear commitment from the government side, it could be expected to see how the inclusion of social and innovation process have been included in the workflow of the institution so that the process is institutionalized.\n\nKnown issues and troubleshooting.\n\n\n  If there is a lack of commitment and engagement from participants results will be partial and not fully satisfactory for the organizer of the MOOC.\n  The content of the course is introductory, if participants want to deepen their knowledge of the topics covered, it is recommended that they take additional courses.\n\n\nContext. As a member of the Open Government Partnership (OGP), Ecuador is committed to have a more open and participatory government. In this line, as part of the OGP Action Plan 2019-2022 it aimed to have an Innovation Citizen Lab for the first time in the country. UNDP´s Acc Lab played a key role offering in 2022 technical assistance to design, implement and operate the Citizen Lab called Thinkia. The Secretariat of Higher Education and Innovation of Ecuador has the lead of this Lab and runs it along with other 7 actors from the academia (2), civil society organizations (2), other public institutions (2), and cooperation sector (UNDP). The government uses a shared and decentralized governance model for Thinkia: citizen lab to include other actors as part of the management team and decision-making process. UNDP´s Accelerator Lab elaborated the governance model proposal and supported its implementation.\n\nOne of the first results of the collaboration among the various actors running Thinkia was to create a massive open online course on public and social innovation by tapping on the expertise of each of the actors. Thus, each member was responsible for creating the content of one of the modules. UNDP´s Accelerator Lab created the structure of the course by generating and organizing the learning materials and taking responsibility to manage the course on Moodle.\n\nCost. USD 4,000 – 4,500 (to build the MOOC from zero)\n\nTime. To organize the launch of the course 1 month is required. To hold the course and receive feedback 1 month and a half is needed.\n\nPeople. To run this course and make it available to the public the following team members will be required:\n\n\n  A course leader who strategizes the use of the course and generates the needed partnerships.\n  A course administrator in charge of solving all enquiries related to the platform and managing the registration process.\n\n\nFocal point. Ana Grijalva\n\nCountry, year, and language. Ecuador, 2022, Spanish\n\nResources.\n\n\n  Moodle Platform of UNDP Ecuador\n\n\nPlease contact the focal point if you want to make use of the course.\n",
  "tags": null,
  "sdg": null,
  "excerpt": "MOOC ON PUBLIC AND SOCIAL INNOVATION CONCEPTS AND TOOLS What it does. This massive open online course (MOOC) allows you...",
  "id": 44
},{
  "title": "Online and collaborative mapping NIE - Ecuador",
  "url": "/Ecosystem/Online%20and%20collaborative%20mapping%20NIE%20-%20Ecuador/Factsheet.html",
  "content": "ONLINE AND COLLABORATIVE MAPPING OF THE NATIONAL INNOVATION ECOSYSTEM\n\nWhat it does.\n\nThis online collaborative mapping of the national innovation ecosystem (NIE) allows you to do two things. First, it identifies and tracks actors working on sustainable development issues with a social and/or public innovation approach based on their geographical location. Second, it strengthens synergies among actors of the national innovation ecosystem since they can learn about each other´s work and explore potential collaborations based on commonalities. Also, this tool generates (potentially open) data by collecting information about the initiatives and actors.\n\nValue proposition for the government/other partner.\n\nBy having an online and collaborative mapping of the national innovation ecosystem, you will enable the community of such ecosystem to address social, cultural, environmental, and economic challenges efficiently and effectively, as they identify common interests, exchange experiences, tap on collective knowledge, collaborate, and create synergies. This tool contributes to SDG 17 “Partnerships for the goals” and target 17.7 “encourage and promote effective public, public-private and civil society partnerships, building on the experience and resourcing strategies of partnerships”.\n\nWhy and when to use it.\n\nThis tool is most useful when there is an existing long-term strategy for the public sector to build trust among actors of the national innovation ecosystem and facilitate the construction of a common work agenda around a specific SDG. Promoting collaborative work should be done by using participatory and co-creation methods and supported by an effective communication strategy to convene actors.\n\nKnown issues and troubleshooting.\n\n\n  If there are only a few well-known actors as part of the national innovation ecosystem this tool will not be as effective since it aims to facilitate the coordination and collaboration of a large group of actors.\n  If there is no strategy to convene and promote collaborative work among actors of the innovation ecosystem, online mapping by itself will not be enough to promote synergies within the ecosystem.\n  If there is limited access to connectivity, low digital skills, and scarce digital devices, opting for an online and collaborative mapping will not be the most suited option.\n  If there is no long-term vision and strategy to map collaborative initiatives, the data can be quickly outdated.\n\n\nContext.\n\nAs a member of the Open Government Partnership (OGP), Ecuador is committed to have a more open and participatory government. In this line, as part of the OGP Action Plan 2019-2022 it aimed to have an Innovation Citizen Lab for the first time in the country. UNDP´s Acc Lab played a key role offering in 2022 technical assistance to design, implement and operate the Citizen Lab called Thinkia. The Secretariat of Higher Education and Innovation of Ecuador has the lead of this Lab and runs it along with other 7 actors from the academia (2), civil society organizations (2), other public institutions (2), and cooperation sector (UNDP). The government uses a shared and decentralized governance model for Thinkia: citizen lab to include other actors as part of the management team and decision-making process. Also, the government uses an online platform as a mechanism to promote citizen engagement in public innovation work. UNDP´s Accelerator Lab not only elaborated the governance model proposal and supported its implementation, but also design, develop, and transfer and online platform for Thinkia: citizen lab.\n\nCost.\n\nUSD 18,000 - 20,000\n\nTime (in calendar time): To design and develop an online platform 6 months are required. To transfer the e-tool to a government counterpart 4 months are needed. To transfer the platform should be considered and plan from the design phase of it.\n\nPeople.\n\nTo design, develop, and implement a similar tool the following team members will be required:\n\n\n  A software development firm with experience in open code and collaborative platforms.\n  An ally institution within the public innovation sector that aims to contribute to the NIE, and within that institution two focal points which are an IT person and program officer person.\n\n\nFocal point. Ana M. Grijalva\n\nCountry, year, and language.\n\nEcuador, 2023, Spanish\n\nResources (in Spanish).\n\n\n  National innovation ecosystem mapping tool\n  Manual of how to use the national innovation ecosystem mapping tool\n  Directory of actors registered on the innovation ecosystem\n  Dashboard of actors and initiatives registered\n\n",
  "tags": null,
  "sdg": null,
  "excerpt": "ONLINE AND COLLABORATIVE MAPPING OF THE NATIONAL INNOVATION ECOSYSTEM What it does. This online collaborative mapping of the national innovation...",
  "id": 44
},{
  "title": "Pitching for NIEs and PSI",
  "url": "/pitching/talking-points/Factsheet.html",
  "content": "Talking points and slide deck to pitch for supporting National Innovation Ecosystems\n\nWhat it does. Makes a case for getting involved in supporting innovation ecosystems.\n\nValue proposition. By making a clear, evidence-supported argument for supporting innovation ecosystems, you will enable UNDP and government officials to make an informed decision on whether to support their national innovation ecosystem.\n\nWhy and when to use it. There are two use cases. The first one: when you wish to enlist the support of senior UNDP officials. The second one: when you wish to enlist the support of government officials. You can think of it as a pitch, to be delivered in a meeting or in a carefully crafted email, that opens a conversation.\n\nKnown issues and troubleshooting. Risks are low, the worst that can happen is that you get turned down.\n\nContext. The Global Team in the UNDP Accelerator Labs produced these talking points on the basis of a survey conducted in the summer of 2022, to which 84 Labs in as many Country Offices responded. A longer write-up about the results of the survey is available in this toolkit.\n\nCost to implement (in USD): zero\n\nTime (in calendar time): negligible.\n\nPeople (team numerosity): 1\n\nFocal point. Alberto Cottica and Eduardo Gustale\n\nCountry and year. Global Team, 2023\n\nResources.\n\n\n  A slide deck containing one slide each for the two use cases of talking to UNDP officials and talking to government officials.\n  A 1,100 words essay unpacking the survey on which the talking points are based, as well as its main results.\n\n\n",
  "tags": null,
  "sdg": null,
  "excerpt": "Talking points and slide deck to pitch for supporting National Innovation Ecosystems What it does. Makes a case for getting...",
  "id": 44
},{
  "title": "How to map a national innovation ecosystem - Kenya",
  "url": "/Ecosystem/How%20to%20map%20a%20national%20innovation%20ecosystem%20-%20Kenya/Factsheet_Mapping_innovation_ecosystem_Kenya.html",
  "content": "An in-depth mapping of an innovation ecosystem to help innovators make sense of the landscape (Kenya)\n\nWhat it does. The map illustrates the key actors and stakeholders in Kenya’s innovation ecosystem.\n\nValue proposition for the government or other partner. The ecosystem research and mapping exercise helped Kenya’s National Innovation agency understand the landscape and provided data and evidence that builds a case for the agency, i.e. why it should be supported, why there should be a strategy for innovation and ecosystem engagement. For Konza Technopolis (Kenya’s “smart city), which will become the center of Kenya’s innovation ecosystem from an infrastructure perspective, insights from the mapping will prevent the project from perpetuating the challenges that innovation hubs have faced.\n\nWhy and when to use it. A mapping exercise is useful when there is a  gap in publicly available information and analysis on the innovation landscape particularly from an innovator’s perspective, i.e. when it not clear to all where an innovator with an idea would go for support, and where s/he would be most likely to find success or face challenges.\n\nKnown issues and troubleshooting. There might be pushback from ecosystem actors who might question the “right” of the mapping entity to do the work.\n\nContext. Kenya is a leader in the digital innovation space, but there’s a lack of coordination, organization, and clarity within the ecosystem and innovators suffer as a result. Despite this, Kenya attracts a lot of investors and innovators who come in to take advantage of fast-growing environment and human capital to establish hubs and startups. UNDP Accelerator Lab Kenya saw the gap in public ecosystem information for innovators and decided to conduct a research and ecosystem mapping effort.\n\nCost to implement (in USD). Approximately 500K, which includes a co-creative process to design and conduct the mapping and research, travel, stakeholder engagement, data collection, analysis, validation, and publish and managing a knowledge product.\n\nTime (in calendar time): Approximately 1 year\n\nPeople (team numerosity): 3 Accelerator Labs staff\n\nFocal point. Caroline Kiarie-Kimondo\n\nCountry and year. Kenya, December 2021 – December 2022\n\nResources.\n\n\n  Digital map\n  Ecosystem research report\n  Kenya innovation outlook (prepared by the Kenya Innovation Agency)\n\n\n",
  "tags": null,
  "sdg": null,
  "excerpt": "An in-depth mapping of an innovation ecosystem to help innovators make sense of the landscape (Kenya) What it does. The...",
  "id": 44
},{
  "title": "Innovators journey - Zambia",
  "url": "/Ecosystem/Innovators%20journey%20-%20Zambia/Factsheet_innovators_journey_Zambia.html",
  "content": "A mapping of an innovator’s journey from inception to maturation to help coordinate support provided by government stakeholders (Zambia)\n\nWhat it does. The innovator’s journey provides a holistic understanding of an innovator’s pathway and their sequential steps to scale. It also aims to describe the players and key opportunities within the innovation ecosystem in Zambia.\n\nValue proposition for the government or other partner. The innovator’s journey can be used by a government and its partners to map and coordinate the ecosystem, as well as make critical linkages between actors. It is also a tool for innovators to identify where they are in their journey, and where they can find help to continue to develop their innovations.\n\nWhy and when to use it. Mapping an innovator’s journey helps government agencies and their partners understand what path(s) innovators take from the inception of their innovation to scale, which clarifies how and when they can intervene, as well as how their support might complement what is provided by others.\n\nKnown issues and troubleshooting. It may be worth paying particular attention to IP ownership for innovators. In Zambia, IP retention is a serious issue. When an innovator applies for IP protection they’re not covered internationally, which has resulted in idea theft.\n\nContext. In 2020, Accelerator Lab Zambia introduced three nationwide innovation initiatives, the National Innovation Initiative (NII), the Experimentation Programme (EP) and the Waste Management and Youth Innovation Challenge (WMYIC) in collaboration with government, quasi government, academia, CSOs and innovators. Close to 3,000 submissions have been received over the three years, and the accelerator lab has provided monetary business development support, mentorship, research and product development, and access to networking platforms.\nThe innovator’s journey concept emerged from the lab’s experience navigating its learning cycle and collaborating with partners through the NII and EP, recognizing the need to break silos, promote coordination, and create a conducive innovation ecosystem that enables innovators to scale.\n\nCost to implement (in USD). Approximately 10K\n\nTime (in calendar time): Approximately 1 year\n\nPeople (team numerosity): 3 Labbers\n\nFocal point. Nampaka Nkumbula.\n\nCountry and year. Zambia, 2022-2023 (ongoing)\n\nResources.\n\n\n  Innovator’s Journey pathway\n  Innovator’s Journey concept note\n\n\n",
  "tags": null,
  "sdg": null,
  "excerpt": "A mapping of an innovator’s journey from inception to maturation to help coordinate support provided by government stakeholders (Zambia) What...",
  "id": 44
},{
  "title": "How to incubate an innovation unit or lab",
  "url": "/Mapping/Index.html",
  "content": "About incubating an innovation unit or lab\n\nDedicated innovation units, or labs, can be powerful enablers of national innovation ecosystems. Typically embedded within governments, innovation units and labs have staff and budgets whose sole job is to make innovation happen. The UNDP Accelerator Labs’ 2022 survey showed a surge of interest in innovation units and labs in the Global South.\n\n",
  "tags": null,
  "sdg": null,
  "excerpt": "About incubating an innovation unit or lab Dedicated innovation units, or labs, can be powerful enablers of national innovation ecosystems....",
  "id": 44
},{
  "title": "Digitising the induction process for civil servants - Namibia",
  "url": "/Upskill/digitising/Namibia.html",
  "content": "An interactive employee handbook to digitalize and enhance the onboarding experience of civil servants (Namibia)\n\nWhat it does. In collaboration with the government, it designs a digital set of products to replace the current process of onboarding for civil servants. Onboarding is now delivered via asynchronous learning using a digital, open source platform. This impacts the 125,000 Namibian civil servants.\n\nValue proposition for the government or other partner. By replacing the off-line process of onboarding for civil servants with a digital one, we will “packetize” their learning experience into smaller units, and make the latter highly interactive and gamified. This makes the civil servants’ learning task easier to digest and cheaper for the administration. The new process also teaches civil servants essential digital skills.\n\nWhy and when to use it. When the need to modernize the civil service combines with time constraints. By using Fuel 50, a talent marketplace, as well as the Accelerator Labs network (which overlaps with UNDP’s Digital Advocates network), UNDP can source the work quickly and without resorting to a Request For Proposals.\n\nKnown issues and troubleshooting. Senior political support is essential.\n\nContext. Namibia’s Directorate of Human Resource Development under the Office of the Prime Minister requested UNDP’s assistance to digitize their employee manual (called “the pocket guide to being a public servant in Namibia”) and enhance the employee experience of onboarding and induction for the public service. This request was addressed by drawing on the internal capacity of UNDP’s talent through a platform called Fuel 50 and handled by the Namibia Accelerator Lab, which has good relationships with UNDP’s Chief Digital Office and Talent Development Unit at the Office of Human Resources (the latter runs Fuel 50). The government is the largest employer in Namibia; the new employee manual impacts all 125,000 Namibian civil servants.\n\nCost to implement. About 20,000 USD for catering, workshops and training, plus 5,000 for three international colleagues to attend a two week in person event to conduct the user acceptance training and hand over the developed products / solutions.\n\nTime : Approximately 6 months to a year to implement.\n\nPeople : 3 digital advocates from the Accelerator Labs; 6 technical staff from the Office of the Prime Minister\n\nFocal point. Yrika Maritz\n\nCountry and year. Namibia 2023\n\nResources.\n\n\n  Concept note\n  Presentation deck\n  Results of a survey on the perception of the pocket guide\n\n",
  "tags": null,
  "sdg": null,
  "excerpt": "An interactive employee handbook to digitalize and enhance the onboarding experience of civil servants (Namibia) What it does. In collaboration...",
  "id": 44
},{
  "title": "Embedding innovation methods into the civil service via a course on ethics and integrity - Namibia",
  "url": "/Upskill/innovation-methods/Namibia2.html",
  "content": "A course on Ethics and Integrity in public services to embed innovation Practices and Methods through the Ethics and Integrity Champions (Namibia)\n\nWhat it does. Helps embedding into government the practice of social innovation through functional service areas such as HR, Procurement, Security, Finance, Public Relations and Ethics / Integrity Officers.\n\nValue proposition for the government or other partner. By finding alternative structures within government to introduce innovation methods and tools in solving problems for them and practicing how the innovation tools and methods are used, we will enable the public service to use various tools and techniques such as behavioral insights, design thinking, citizen assemblies, legislative theatres, sentiment analysis and other innovation practices to come up with new ways of improving public service delivery. Additional value: by leveraging UNDP and UNDESA resources, implementing parties won’t need to go through a Request for Proposals, thus speeding up implementation.\n\nWhy and when to use it. Use this example when you aim to socialize to the use of innovation methods any category of civil servants, even if they don’t work in innovation units.\n\nKnown issues and troubleshooting. Unknown.\n\nContext. Previously to this project, UNDP Namibia Accelerator Lab had developed a toolkit aimed at the 300 innovation champions within the Namibian government. Sadly, the innovation champions failed to adopt the practices documented in the toolkit in their everyday work. When the government’s Ethics and Integrity Division asked UNDP for an international consultant to train their 350 Integrity Champions in Ethics and Professionalism, the Lab contacted UNDESA and requested, and obtained, access to their Ethics Course and the permission to contextualize the material, inserting innovation methods therein. After receiving training, the participants had to complete an on-line ethics test and sign an integrity pledge which committed them to carry out certain actions over a period of 90 days.\n\nCost to implement (in USD). About USD 12,000.\n\nTime (in calendar time): Approximately 6 months to a year to implement.\n\nPeople (team numerosity): Accelerator Lab + 2 key technical Ethics and Integrity staff from the Office of the Prime Minister\n\nFocal point. Yrika Maritz\n\nCountry and year. Namibia 2022\n\nResources\n\n\n  Ethics and integrity course concept note and learning report (folder)\n  Ethics and integrity course curriculum and slide decks (folder)\n  Blog post\n\n",
  "tags": null,
  "sdg": null,
  "excerpt": "A course on Ethics and Integrity in public services to embed innovation Practices and Methods through the Ethics and Integrity...",
  "id": 44
},{
  "title": "Public Innovators Program Paraguay",
  "url": "/Upskill/Public%20Innovators%20Program%20Paraguay/Paraguay.html",
  "content": "Mentoring and training civil servants in innovation methods\n\nWhat it does. The Public Innovators Program provides national level public servants with training, mentoring, and practice of R&amp;D + innovation methods and tools, applied to public policy and service challenges they identify in their own institutions. The Agile Public Innovation toolkit is used, a  toolkit that was co-designed between national institutions in Paraguay and the Government Laboratory of Chile, with support from UNDP’s AccLab in Paraguay.\n\nValue proposition for the government/other partner. Through this program, our partners in government are receiving an influx of new capacities that will benefit their innovation culture, allowing them to achieve the goals of designing, developing and testing new policies and services to improve how they achieve their mission. This is a Governance Signature Solution that contributes towards achieving SDG 16.\n\nWhy and when to use it. The Public Innovators Program is most useful when participants are committed public servants, who also happen to have higher levels of security and stability in their positions (for example, career public servants better than consultants or short-terms contractors), and who are part of teams that come from institutions with clear missions and goals.\n\nKnown issues and troubleshooting. Like many public sector initiatives, this programme needs to solve the problem of continuity across political cycles, as its owners within the government may leave to take on positions elsewhere. On a more operational level, when participants are appointed but do not have commitment, the teamwork suffers. This suggests an opt-in approach to recruiting participants.\n\nContext. The programme emerged from previous initiatives and policies of the National Innovation Strategy (ENI) – a  public-private initiative led by the Presidential Delivery Unit – and the National Science and Technology Council (CONACYT). UNDP Paraguay has been part of ENI since its onset, supporting its coordinating team in organizing and facilitating participatory workshops to identify national innovation challenges, supporting and funding the mapping and articulation of citizen-led initiatives during the pandemic, and both coordinating and funding learning cycles as public innovation processes in focalized challenges that emerged from the work done during the pandemic.\n\nWith CONACYT, the UNDP Paraguay Accelerator lab has collaborated with mentoring and training during several editions of its Social Innovation Challenge, funded by CONACYT under one of its flagship programs to invest directly in applied R&amp;D for innovation. The combined history of collaboration in these engagements by the end of 2021 to the design and further launch of the Public Innovators Program, which we have described briefly in this document.\n\nCost. The training program cost around $30k, and that included a team of 2-3 instructors who developed the program in 2 months consisting of 8 modules, along with some international mentors who accompanied the teams on a weekly basis. Then, 2 pilots were funded, each with $15k, for 2 teams (out of the 10 participants). Throughout the program, we hired an R&amp;D methodology specialist for $10k and an articulator to facilitate the emergence of a network of public innovators for another $10k.\n\nPeople. At least 2-3 hours per week from 2 of the Lab heads, plus a similar number of hours from our associate researcher for program monitoring, which could also be monetized. And finally, there is the ENI team, consisting of 2 individuals plus 1 focal point at Conacyt.\n\nFocal point. Cristhian Parra and Mónica Ríos\n\nCountry, year, and language. Paraguay 2022, Spanish\n\nResources.\n\n\n  \n    Program Brochure \n  \n  \n    Program Syllabus\n  \n  \n    Content, Slides and Recordings of 15 workshops from the Public Innovators Program\n  \n  \n    Materials used to run the 15 workshops\n  \n\n",
  "tags": null,
  "sdg": null,
  "excerpt": "Mentoring and training civil servants in innovation methods What it does. The Public Innovators Program provides national level public servants...",
  "id": 44
},{
  "title": "Understanding and pitching NIEs",
  "url": "/pitching/README.html",
  "content": "Understanding and pitching national innovation ecosystems\n\nThis part of the toolkit contains materials to explain what innovation ecosystems are, and what the value proposition is for supporting them.\n\n",
  "tags": null,
  "sdg": null,
  "excerpt": "Understanding and pitching national innovation ecosystems This part of the toolkit contains materials to explain what innovation ecosystems are, and...",
  "id": 44
},{
  "title": "Contributors",
  "url": "/Team.html",
  "content": "Meet the Contributors\n\n\n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Ana M. Grijalva\n        \n        UNDP Ecuador Accelerator Lab\n        Head of Exploration\n      \n    \n    Ana M. Grijalva is an economist, education specialist, and social innovator with 10 years of experience. She has a vast experience in program development, management, implementation, monitoring, and evaluation, but also in cutting-edge research and data analysis. She has expertise on key issues related to education, labor market, MSME productivity and governance. She has worked for different agencies of the United Nations (International Institute for Educational Planning and Economic Commission for Latin America and the Caribbean) and for international organizations such as University of Oxford, Inter-American Development Bank, and World Bank. Also, she has experience in Ecuador´s public sector, and has worked for the academia in the United Kingdom and Ecuador. She is excited to collaborate to the change of the status quo through public and social innovation, data analysis, technology, and civic engagement.\n    \n\n    \n      \n      Contact \n      \n\n      \n\n      \n      \n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Jerson del Rosario\n        \n        UNDP Dominican Republic Accelerator Lab\n        Head of Solutions Mapping\n      \n    \n    As a sociologist, qualitative researcher and development practitioner, Jerson has worked as local development facilitator for grassroots community organizations and was a researcher and social policy analyst for the Social Policy Coordination Cabinet of the Dominican Republic. He has conducted ethnographic research on education, youth and teen pregnancy, precarious livelihoods and income generation policies, with a strong interest in small-scale entrepreneurs and the ways they understand the economic complexities of globalization. Jerson holds a bachelor’s in International Relations, a master’s in Local Development and International Cooperation, a master’s in Sociology and Education and is currently pursuing doctoral studies in Sociology.\n    \n\n    \n      \n      Contact \n      \n\n      \n\n      \n      \n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Nguyen Tuan Luong\n        \n        UNDP Viet Nam Accelerator Lab\n        Head of Solutions Mapping\n      \n    \n    Luong grew up around the world as a “third culture kid” and now sees himself as a global citizen. Having worked with the Innovation Partnership Programme between Finland and Vietnam, and contributed towards developing a thriving innovation ecosystem in Vietnam, Luong brings expertise in public-private partnerships. He is passionate about helping changemaker communities such as Knowmads Hanoi and Art of Hosting in creating space for meaningful conversations.  \nLuong is a Swedish Institute alumnus and graduated in Master’s in strategic leadership toward Sustainability from Sweden. By combining his cross-cultural understanding, tech-savviness, and business sense, he hopes to facilitate organizations transformation toward greater sustainability, collaboration and creativity.  \nIn his spare time, you can find him learning and practicing his hobbies. He is always excited to meet new people and looks forward to listening and sharing good stories with them.  \n\n    \n\n    \n      \n      Contact \n      \n\n      \n\n      \n      \n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Sandy Ramirez\n        \n        UNDP Dominican Republic Accelerator Lab\n        Head of Exploration\n      \n    \n    Innovation and digital business specialist. Sandy has worked in promoting and developing policies to strengthen MSMEs and before joining the lab was the coordinator of Digital Economy for the Ministry of Industry, Commerce and MSMEs. Sandy has coordinated the execution of cooperation projects to promote innovation with governments of Taiwan, Korea and Spain. Sandy holds a masters degree in Digital Business and Digital Marketing as well as a masters in Business Administration.\n    \n\n    \n      \n      Contact \n      \n\n      \n\n      \n      \n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Caroline Kiarie-Kimondo\n        \n        UNDP Kenya Accelerator Lab\n        Head of Exploration\n      \n    \n    Caroline Kiarie-Kimondo is the Head of Exploration, Kenya Accelerator Lab. Caroline is a social impact strategist with a passion for framing and reframing positive social impact narratives. She has 15 years of experience in philanthropy, movement building, social innovation, and strategic communications. She's also skilled in leadership coaching, human-centered design thinking, decision architecture, agile project management, and adaptive leadership.\n    \n\n    \n      \n      Contact \n      \n\n      \n\n      \n      \n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Nampaka Nkumbula\n        \n        UNDP Zambia Accelerator Lab\n        Head of Experimentation\n      \n    \n    Nampaka is currently the Zambia Accelerator Lab Head of Experimentation and is a seasoned researcher within experience supporting the Zambian Innovation ecosystem with a bias on strengthening Research and development pathways for the growth of innovations by influencing government approach and methods towards responding aptly to grassroots innovations. Prior to joining UNDP, Nampaka worked at Innovations for Poverty Action. She has experience working in the development sector, promoting the use of rigorously generated evidence with partners, conducting policy driven research, and leveraging large administrative data systems to inform decision making processes and develop scaling pathways to move promising interventions from research to scale. Working in the Health, Education and Financial Inclusion sectors in Zambia, Nampaka also has experience in agricultural policy analysis and banking with a specific focus on fund management and marketing. As a successful applicant to the B360 internship at Credit Suisse, Nampaka worked in the Export Finance Department under Corporate and Specialty Lending as a Junior Portfolio Manager. She holds a Master of Arts Degree in Economics from the University of Zambia (UNZA) and a Bachelor of Arts Degree in Economics with Mathematics and Statistics from UNZA.\n    \n\n    \n      \n      Contact \n      \n\n      \n\n      \n      \n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Alena Klatte\n        \n        UNDP Chief Digital Office\n        Global Project Manager, Strategic Data Initiatives\n      \n    \n    \n    \n\n    \n      \n      Contact \n      \n\n      \n\n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Christof Hawle\n        \n        UNDP Chief Digital Office\n        Digital Innovation and Transformation Specialist\n      \n    \n    Christof has a background in private sector digital transformation consulting and development innovation and has been with the CDO since 2021. He has been supporting individual digital innovation projects and Digital X, and coordinates efforts to implement \"Digital by Default\": assuring digital is embedded in our business processes and programming life cycle. \n    \n\n    \n      \n      Contact \n      \n\n      \n\n      \n      \n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Yrika Maritz\n        \n        UNDP Namibia Accelerator Lab\n        Head of Experimentation\n      \n    \n    Yrika Vanessa Maritz is the Head of Experimentation at the UNDP Accelerator Lab Namibia. She previously worked at the Office of the Prime Minister in various roles, including Learning and Development Officer and Deputy Director of the Efficiency and Charter Unit.  She also served as the former Director of the Centre for Management and Leadership Development at the National School of Government, NIPAM.  Yrika is a Clinical Psychologist by profession and holds a Master in Public Administration, as well as a PhD in Public and Development Management.  She has been trained in various specialized learning and development models and schools in Tanzania, the UK, Germany, Sweden, Japan, and China. She is an accredited Management Consultant with the CIMC in the UK and registered with the Social Work and Psychology Council of Namibia.\n    \n\n    \n      \n      Contact \n      \n\n      \n\n      \n      \n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Cristhian Parra\n        \n        UNDP Paraguay Accelerator Lab\n        Head of Experimentation\n      \n    \n    Cristian Parra has a Ph.D. in Information and Communication Technologies from University of Trento, Italy, and an Informatics Engineering degree from the Polytechnic School of UNA. For the past 10 years, he has been working in social informatics R&amp;D projects, using participatory design and human-centered design approaches to topics in community-based public health, social inclusion, civic technologies and citizen participation. He was a postdoctoral researcher at the University of California, Berkeley, where he led the projects of the Social Apps Lab (CITRIS). As consultant, he helped organizations like the World Bank, the IADB, the SSI of Berkeley, among others. Before joining AccLab, he was working as a Senior Researcher at the Catholic University of Asunción, where he led projects like TopaDengue, which combines community participation with technologies to fight the spread of the Aedes Aegypti through a bottom-up citizen science approach, within a controlled experiment. In 2018, with his team, he was the recipient of one of the Honorific Mentions of the National Prize for Science for some of these works. Cristhian has always had a passion for initiatives at intersections, bridging Computer and Social Sciences to inform research, development, and implementation of innovative socio-technical solutions for social or community challenges. This passion led him straight to this lab, where he sees a unique opportunity to contribute to the already great work that UNDP is doing in solving the big societal and development challenges of our century.\n    \n\n    \n      \n      Contact \n      \n\n      \n\n      \n      \n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Eduardo Gustale\n        \n        UNDP Accelerator Labs\n        Monitoring, Experimentation and Learning Specialist\n      \n    \n    Experienced in Sustainable Development and Social Innovation. Worked repeated times in academic research, survey development and market insight. Elected Global Shaper by the World Economic Forum &amp; Chevening Scholar for an MSc in Innovation and Entrepreneurship at University of Warwick.\n    \n\n    \n      \n      Contact \n      \n\n      \n\n      \n      \n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Tayo Akinyemi\n        \n        UNDP Accelerator Labs\n        Learning and Community Manager\n      \n    \n    I have spent most of my career creating order from ambiguity, whether it's charting my own vocational journey, supporting an African entrepreneurial leadership center launch, building the first pan-African network of tech hubs, or decoding early stage investing in Africa. In other words, I like to help great people build great things, ideally by marrying vision (dream+strategy) with implementation (getting stuff done). African tech entrepreneurship and innovation trends on all of my feeds, with a special emphasis on building enabling infrastructure (think hubs and accelerators) enhancing, the capacity of those enablers (especially early stage investors).\n    \n\n    \n      \n      Contact \n      \n\n      \n\n      \n      \n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Calum Handforth\n        \n        UNDP Chief Digital Office\n        Digital Programmes Strategic Manager\n      \n    \n    UN Advisor and Fellow - focusing on data, innovation, and digital tech in international development and government.\n    \n\n    \n      \n      Contact \n      \n\n      \n\n      \n      \n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Nicola Holden\n        \n        UNDP Chief Digital Office\n        Digital Experience Advisor\n      \n    \n    \n    \n\n    \n      \n      Contact \n      \n\n      \n\n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Adedapo Aderemi\n        \n        UNDP Accelerator Labs\n        Software Developer\n      \n    \n    Adedapo is an inventive and dynamic software developer with experience designing state-of-the-art web, mobile, IoT, and cloud engineering solutions. He is proficient in a variety of frameworks and programming languages, specializing in developing scalable and resilient applications. He utilizes cutting-edge technologies to address intricate challenges, propel digital revolutionization, and generate memorable user experiences.\n    \n\n    \n      \n      Contact \n      \n\n      \n\n      \n      \n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Mónica Ríos\n        \n        UNDP Paraguay Accelerator Labs\n        Head of Exploration\n      \n    \n    Mónica Rios has a Business Administration Degree, holds a Master’s Degree in Creation and Management of Innovative and Technology Based Companies (Barcelona, Spain) as part of the National Scholarship Program “BECAL” and a Diploma in Corporate Social Responsibility (Santiago, Chile). She worked with the private sector, NGOs and multilateral funds in subjects related to corporate social responsibility, sustainability, marketing, strategy and innovation. Before joining UNDP he designed and coordinated incubation and acceleration processes for MSMEs in the creative sector in Paraguay and social innovation projects through the IDB LAB. Her main motivation lies in lies in maximize innovative projects developed in Paraguay, which can inspire others to think big, as well as learn from other practices developed by others AccLabs worldwide.\n    \n\n    \n      \n      Contact \n      \n\n      \n\n      \n      \n      \n\n      \n\n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Alberto Cottica\n        \n        UNDP Accelerator Labs\n        R&amp;D Specialist\n      \n    \n    Originally a development/environmental economist, now more of a quantitative social scientist. Anthropology, ethnography, network science. Interested in epistemology. Committed citizen. Runner. Ex-minor rockstar.\n    \n\n    \n      \n      Contact \n      \n\n      \n\n      \n      \n      \n\n      \n\n    \n  \n  \n\n\n",
  "tags": null,
  "sdg": null,
  "excerpt": "Meet the Contributors Ana M. Grijalva UNDP Ecuador Accelerator Lab Head of Exploration Ana M. Grijalva is an economist, education...",
  "id": 44
},{
  "title": "TORs for a consultant to build up the National Innovation Center - Viet Nam",
  "url": "/Mapping/Consultant/Vietnam.html",
  "content": "Terms of reference to introduce a National Innovation Lab from paper to practice (Viet Nam)\n\nWhat it does. Deploys the expertise necessary to bootstrapping a National Innovation Center. This includes defining success and performance indicators; assembling and upskilling a public sector innovation task force within the government: and getting it to cut its teeth by hosting some innovation policy debates.\n\nValue proposition. By unpacking the concept of Public Sector Innovation; agreeing, across relevant stakeholders, on indicators of success; creating and upskilling a government task force; and testing it as a convener and host of innovation policy debates, we will help the government establish an authoritative platform for innovation policy making.\n\nWhy and when to use it. Bootstrapping a National Innovation Lab is appropriate when the political will and the funding to create a dedicated government unit are in place.\n\nKnown issues and troubleshooting. Use these TORs as a canvas to make your own version. The exact deliverables and timeline need to be co-created with your government partner, so that their need can be met.\n\nContext. In 2019, Viet Nam’s Ministry of Planning and Investment plan to establish an innovation hub with the aim to develop the ecosystem, innovation and finding new drive for economic growth based on science and technology. For this purpose, they fundraised $30 million to establish a National Innovation Center under the Ministry of Planning and Investment (MPI). MPI hired a high-profile consulting company from the Global North for $2 million to provide the initial blueprint for NIC. This company did research and mapping of innovation hubs around the world. Then recommended NIC should follow certain international trend. This wasn’t bad, but not enough. This blueprint turned out to be unimplementable, failing to take into consideration local regulation, culture, NIC team capacity and so on. The government then reached out to UNDP to help them design a strategy for a National Innovation Ecosystem that was context appropriate.\n\nCost to implement (in USD): 65,000\n\nTime (in calendar time): 8 months, not counting procurement.\n\nPeople (team numerosity): about 64 (from UNDP) and 10 (from NIC)\n\nFocal point. Nguyen Tuan Luong\n\nCountry and year. Viet Nam, 2022\n\nResources\n\n\n  Terms of reference for a consulting organization\n  Slide deck, used to present the work plan to the government.\n\n",
  "tags": null,
  "sdg": null,
  "excerpt": "Terms of reference to introduce a National Innovation Lab from paper to practice (Viet Nam) What it does. Deploys the...",
  "id": 44
},{
  "title": "About",
  "url": "/Getting%20started/about.html",
  "content": "About\n\nIn 2022, the UNDP Accelerator Labs launched a survey to get a big picture view on the work that its global network of 91 labs was doing to support innovation ecosystems. The results were surprisingly clear-cut and coherent.\n\nFirst, we learned that a solid majority of Labs had partnered with governments to deploy interventions in support of national innovation ecosystems, or was planning to do so in the near future. We were looking at a surge of government investment in innovation across the Global South. Furthermore, these Global South governments were looking beyond the usual Global North example of policies to support innovation and learning from each other.\n\nSecond, we learned that UNDP was widely recognized as the leading organization in supporting Global South governments in this journey. And third, we learned that collaboration with governments that have invested in innovation becomes smoother and more impactful.\n\nIn 2023, as the Accelerator Labs move to contribute more deliberately to UNDP’s R&amp;D function, we partnered up with the Chief Digital Office to offer the experience accumulated by our network of labs in tens of countries in curated form. We are making it a toolkit, that is a collection of documented resources. It is meant to inspire would-be champions of their national innovation ecosystems. More than that, though, it is meant to empower them, by offering ready-made resources that can be re-used after having been adapted to a new context. In this sense, it is a first attempt (still in prototype as we write this) at an R&amp;D product.\n\nMany champions of innovation in the Global South are to be found within UNDP itself. In particular, we hope this toolkit will help the (many!) Country Offices that are moving to support their government partners on nurturing national innovation ecosystems; the Regional Bureaus of Africa and Asia Pacific (and hopefully the others, soon) in their work on public sector innovation; and – since innovation ecosystems are by definition multistakeholder and need constructive government-civil society partnerships – the Governance Community of Practice in its drive to expand civic spaces.\n",
  "tags": null,
  "sdg": null,
  "excerpt": "About In 2022, the UNDP Accelerator Labs launched a survey to get a big picture view on the work that...",
  "id": 44
},{
  "title": "How to design an innovation policy",
  "url": "/Innovation-Policy/design.html",
  "content": "About designing an innovation policy\n\nAn innovation policy or strategy is a formal document outlining a government’s stance towards innovation, its values, objectives and indicators of success. It can have substantial impact in orienting the expectations of all actors in the ecosystem: for example, if the policy insists on using innovation to bring about digital inclusion, private sector companies and nonprofits alike will learn this is a national priority, and work in this direction will be followed with interest by the government.\n\n",
  "tags": null,
  "sdg": null,
  "excerpt": "About designing an innovation policy An innovation policy or strategy is a formal document outlining a government’s stance towards innovation,...",
  "id": 44
},{
  "title": "How to use the toolkit",
  "url": "/Getting%20started/how-to-use-the-toolkit.html",
  "content": "How to use this toolkit\n\nArchitecture\n\nWe use the metaphor of the toolkit to emphasize the operational, enabling nature of the work you are reading right now.\n\n\n  The Toolkit is a set of resources and their documentation materials meant to help people and organizations who want to support innovation ecosystems.\n  The toolkit contains tools. Each tool consists of one or more resources, documented in a page of this website.\n  A resource is a document that can be re-used, in part or as a whole. Examples are talking points or slide decks to argue for supporting innovation ecosystems; workplans and lists of deliverables to achieve operational status for a government innovation unit; agendas for workshops meant to socialize key concepts around innovation with senior civil servants; curricula for courses on key skills useful to employees of an innovation unit. Resources are accessible via live links from the factsheets, with a UNDP corporate login.\n  Website pages contain resources metadata, accessible to everyone. Each page is dedicated to one tool, and explains what the tool is good for; what it is not good for; the context in which it was produced; how much money and time you will need to deploy it, and so on. You will also find a reference to the person or people who created the resource in the first place.\n\n\nUsing this toolkit in four easy steps\n\n1. Decide what you want to do and browse the catalogue\n\nThe tools in this kit are labelled according to function, with names like “How to map the innovation ecosystem” and “How to take a newly created innovation unit to fully operational status”. They  are sorted into into four main categories, based on the requests that UNDP’s government partners have brought to the Accelerator Labs in the period 2019-2022. Tools within the same category combine naturally. The navigation bar on the left of the screen acts as a catalogue: browse it and navigate to any tool you like.\n\n2. Read the description from this website\n\nEach tool’s website page contains information you can use to decide if that tool is useful to you after all. Is it function aligned with your own purpose? Is it compatible with your time and money budget? Did its deployment run into problems, and how were they addressed? And so on.\n\n3. Read and reuse the resources\n\nIf the description of the tool looks interesting, you can move on to the resource itself. This might be a slightly harder read (it was not written with your case in mind!), and almost certainly you will need to make changes to it. Hopefully that still saves you time and effort with respect to starting from scratch. In the prototype version, you will need a undp.org email address to access resources.\n\n4. Ask for support\n\nAll resources have a lead author, or “focal point”. The ethos of UNDP’s Accelerator Labs and Chief Digital Office is one of sharing knowledge, so you can reach out to the focal point if you need more information and support.\n\n",
  "tags": null,
  "sdg": null,
  "excerpt": "How to use this toolkit Architecture We use the metaphor of the toolkit to emphasize the operational, enabling nature of...",
  "id": 44
},{
  "title": "Getting Started",
  "url": "/",
  "content": "Background and purpose\n\nIn 2022, the UNDP Accelerator Labs launched a survey to get a big picture view on the work that its global network of 91 labs was doing to support innovation ecosystems. The results were surprisingly clear-cut and coherent.\n\nFirst, we learned that a solid majority of Labs had partnered with governments to deploy interventions in support of national innovation ecosystems, or was planning to do so in the near future. We were looking at a surge of government investment in innovation across the Global South. Furthermore, these Global South governments were looking beyond the usual Global North example of policies to support innovation and learning from each other.\n\nSecond, we learned that UNDP was widely recognized as the leading organization in supporting Global South governments in this journey. And third, we learned that collaboration with governments that have invested in innovation becomes smoother and more impactful.\n\nIn 2023, as the Accelerator Labs move to contribute more deliberately to UNDP’s R&amp;D function, we partnered up with the Chief Digital Office to offer the experience accumulated by our network of labs in tens of countries in curated form. We are making it a toolkit, that is a collection of documented resources. It is meant to inspire would-be champions of their national innovation ecosystems. More than that, though, it is meant to empower them, by offering ready-made resources that can be re-used after having been adapted to a new context. In this sense, it is a first attempt (still in prototype as we write this) at an R&amp;D product.\n\nMany champions of innovation in the Global South are to be found within UNDP itself. In particular, we hope this toolkit will help the (many!) Country Offices that are moving to support their government partners on nurturing national innovation ecosystems; the Regional Bureaus of Africa and Asia Pacific (and hopefully the others, soon) in their work on public sector innovation; and – since innovation ecosystems are by definition multistakeholder and need constructive government-civil society partnerships – the Governance Community of Practice in its drive to expand civic spaces.\n\nYour feedback is hugely appreciated, even (especially!) if critical. Please direct it to anyone in the curation task force.\n\nTeam\n\nHuge thanks to everyone who contributed to creating this prototype. Contact information for all contributors is visible on the Team page.\n\nContributors: See the Contributors page.\n\nCuration task force: Tayo Akinyemi (Global Team), Alberto Cottica (Global Team), Ana Grijalva (Ecuador), Eduardo Gustale (Global Team), Calum Handforth (Chief Digital Office), Nicola Holden (Chief Digital Office).\n\nPeer review: Lazar Pop Ivanov (North Macedonia), Paola Costantino (Guatemala).\n\nTechnical support: Adedapo Aderemi, Jeremy Boy (Global Team).\n\nDesign guru: Bas Leurs (Global Team)\n\nLicense\n\nThe content of this website is property of the United Nations Development Programme, and published under a Creative Commons 4.0 Attribution license.\n",
  "tags": null,
  "sdg": null,
  "excerpt": "Background and purpose In 2022, the UNDP Accelerator Labs launched a survey to get a big picture view on the...",
  "id": 44
},{
  "title": "Lessons learned",
  "url": "/Getting%20started/learnings.html",
  "content": "Making this toolkit and lessons learned\n\nMaking this toolkit\n\nThe UNDP Accelerator Labs created this website in 2023 as part of a R&amp;D cycle on supporting national ecosystems of innovation. The rationale for doing so is explained in the About page. We followed a logic of build, engage, scale: starting from an idea, first build a prototype you can show to prospective allies and partners. Next, look for allies via activities to socialize and disseminate the prototype to others. Once you have found them, go – with your new partners – to look for the resources to scale up your prototype into a fully developed project or service.\n\nThe timeline of this work is as follows:\n\n\n  April: the Accelerator Labs’ global team assembles a small curation task force of four people. We, the curation force, meet physically in New York for a one-week production sprint and put together a lo-fi prototype, in the form of a hierarchy of folders on UNDP’s OneDrive facility, which contains 8 tools. As the week draws to a close, we present the prototype to our team leader and colleagues and gather early feedback.\n  May. We document more tools and migrate the prototype to a barebones website.\n  June, we started a phase of socialization and sharing of the prototype. We organize a number of presentations to various teams and bureaus of UNDP, as well as to the broader Accelerator Labs network. In parallel, we continue to improve the website and add yet more tools, ending at 16. As a consequence of one of these presentations, we are asked to join a new initiative, still being discussed with the Executive Office of the Secretary General.\n  July. The proposal is approved. The initiative is branded “the FutureGov facility” (pre-launch home page). It is led by UNDP, and specifically by the Governance team of the Bureau for Policy and Programme Support, the Accelerator Labs and the Chief Digital Office; UNDESA is also a participant.\n  August. We give the website a final once-over as the R&amp;D cycle moves onto the next phase. We imagine the next iteration of the toolkit to be a part of the FutureGov facility’s offer.\n  September. FutureGov launches at the SDG summit. Ecuador and Paraguay, two governments whose work with the Labs is featured in the toolkit, join the FutureGov facility as founding members. After launch, we proceed to joint resource mobilization with the other entities involved.\n\n\nOverall, we observed a satisfyingly fast turnaround. The added value of curating the most actionable learnings of the Accelerator Labs network around national innovation ecosystems was fairly easy to communicate.\n\nLessons learned\n\n\n  A toolkit is about turning contextual-and-implicit knowledge into universal-and-codified. This is a notoriously difficult task. Instead of attempting to write the perfect documentation, we decided that this toolkit would have two components: this website and human focal points. Each tool in the toolkit comes with the name and contact information of someone who understands the full (contextual) story behind our simple web pages, and who agreed to make themselves available should they receive a request for more information. To highlight the toolkit’s human component, we insisted on building a Team page and individual pages for each contributor. This gestures towards what we see as a possible next iteration: a shopfront website from which people and organization who want to expand the capacity to innovate in their economies can invoke human expertise, the real  precious resource UNDP has to offer. This implies sophisticated service design, and we will not attempt it without allies and extra resources.\n  Building the toolkit as a basic website hit a sweet spot, which we might dub a “mid-fi prototype”. It was simple to do technically (see below), and, while very basic visually (so, not hi-fi), it still was far better than a hierarchy of folder or a PDF (so, not lo-fi either). Our colleagues in the Regional Bureau for Latin America and the Caribbean asked us to provide them with a whitelabel version of our website for their own use.\n  The returns on improvements to the website’s design and tech are rapidly diminishing. At first, you can achieve a lot with little extra work. As you continue to develop, though, improvements require more and more effort. In our case, the Team page and individual contributors pages, and only them, required an extra page template, a file containing the data (in YAML, which is indentation-sensitive and easy to break) and a folder full of photographs. For the reasons explained in 1., we decided to saddle this extra complexity. Despite this, resisting requests for purely aesthetic improvements is almost always the right thing to do when prototyping.\n  We were able to achieve additional speed by sharing the toolkit while we were still building it. It turns out that, if supported by a robust narrative, a sketchy toolkit is good enough for sharing and socializing.\n  We chose to roll out the website with GitHub Pages for decentralized collaboration. This turned out to be a great choice, because it involved only a minimal time commitment by the team’s developer. Once the site was set up, anybody in the curation task force could easily edit and add pages, with little or no knowledge about website development. We find this solution empowering and resilient (since the bottleneck of the developer is removed for content updates, which means most updates). This toolkit’s GitHub repository is here.\n  Open sourcing our content helps with spreading the toolkit. Possible partners can be simply given a live link, and have the opportunity to get an idea of what is going on. Problems remain: the IPR status of internal UNDP documents (like terms of reference or slide decks) is ambiguous, and it is not even clear what we would need to do in order to take them into the public domain. We decided to keep those documents (resources) on UNDP servers, which means that website visitors are asked for UNDP corporate login if they click on those links. This has the advantage of simplicity, but is not a clean solution, nor a fully open one.\n\n\n",
  "tags": null,
  "sdg": null,
  "excerpt": "Making this toolkit and lessons learned Making this toolkit The UNDP Accelerator Labs created this website in 2023 as part...",
  "id": 44
},{
  "title": null,
  "url": "/assets/js/lunr-feed.js",
  "content": "// builds lunr\nvar index = lunr(function () {\n  this.field('title')\n  this.field('content', {boost: 10})\n  this.field('sdg')\n  this.field('tags')\n  this.field('url')\n  this.ref('id')\n});\n\nwindow.tags = []\nwindow.sdg = []\n\n{% assign count = 0 %}\n{% for post in site.pages %}\n{% unless post.url contains 'assets/' %}\nindex.add({\n    title: {{post.title | jsonify}},\n    content: {{post.content | strip_html | jsonify}},\n    tags: {{ post.tags | jsonify }},\n    sdg: {{ post.sdg | jsonify }},\n    url: {{ post.url | jsonify }},\n    id: {{count}}\n});\n\n{% assign tags = \"\" | split: \",\" %}\n{% for tg in post.tags %}\n    {% unless tags contains tg %}\n        {% assign tags = tags | push: tg %}\n    {% endunless %}\n    window.tags = {{ tags | jsonify}}\n{% endfor %}\n\n{% assign sdg = \"\" | split: \",\" %}\n{% for cg in post.sdg %}\n    {% unless sdg contains cg %}\n        {% assign sdg = sdg | push: cg %}\n    {% endunless %}\n    window.sdg = {{ sdg | jsonify}}\n{% endfor %}\n\n\n{% endunless %}\n{% assign count = count | plus: 1 %}\n{% endfor %}\n\n\n// builds reference data\nvar store = [{% for post in site.pages %}{\n  \"title\": {{post.title | jsonify}},\n  \"url\": {{ post.url | jsonify  }},\n  \"content\": {{post.content | strip_html | jsonify}},\n  \"tags\": {{ post.tags | jsonify }},\n  \"sdg\": {{ post.sdg | jsonify }},\n  \"excerpt\": {{ post.content | strip_html | truncatewords: 20 | jsonify }},\n  \"id\": {{ count }}\n}{% unless forloop.last %},{% endunless %}{% endfor %}]\n\n\n// builds search\n$(document).ready(function() {\n  $('input#search').on('keyup', function () {\n    var resultdiv = $('#results');\n    var contentdiv = $('#content');\n\n    var query = $(this).val();\n    var result = index.search(query);\n    resultdiv.empty();\n    contentdiv.empty()\n    \n    // Add status\n    resultdiv.prepend('Found '+result.length+' result(s)');\n    // Loop through, match, and add results\n    for (var item in result) {\n      var ref = result[item].ref;\n      var searchitem = `\n      \n        \n        \n            ${store[ref]?.title}\n        \n        \n        \n            ${store[ref].excerpt}\n        \n    \n      `\n\n      resultdiv.append(searchitem);\n    }\n  });\n  \n\n  //POPULATE TAGS AND SDG FILTER\nvar tagsdiv = $('#tag-div');\nvar sdgdiv = $('#sdg-div')\n\nif(tags.length > 0){\n    let tg = `\n    \n        \n        Tags\n        \n        \n    `;\n\n    for(let i = 0; i \n                \n                    ${tags[i]?.toUpperCase()}\n                    \n                \n              \n        `;\n    }\n\n    tg += `\n            \n        \n    `;\n\n    tagsdiv.append(tg)\n}\n\nif(sdg.length > 0){\n    let tg = `\n    \n        \n        SDG\n        \n        \n    `;\n\n    for(let i = 0; i \n                \n                    ${sdg[i]}\n                    \n                \n              \n        `;\n    }\n\n    tg += `\n            \n        \n    `;\n\n    sdgdiv.append(tg)\n}\n\nlet taglist = []\nlet sdglist = []\n\nlet searchitemfn = post => `\n\n    \n    \n        ${post?.title}\n    \n    \n    \n        ${post.excerpt}\n    \n\n`\n\nlet resultdiv = $('#results');\nlet contentdiv = $('#content');\nlet contentCopy = $(\"#content\").html(); // Store the current content\n\nlet filterresult = () => {\n    resultdiv.empty()\n    resultdiv.prepend('Showing results for  ' + [...sdglist, ...taglist].toString() + '');\n    for(post of store){\n        if(post?.tags?.some(tg => taglist.includes(tg) )){\n            contentdiv.empty()\n            var searchitem = searchitemfn(post)\n\n            resultdiv.append(searchitem);\n        }\n        else if(post?.sdg?.some(tg => sdglist.includes(tg) )){\n            contentdiv.empty()\n            var searchitem = searchitemfn(post)\n\n            resultdiv.append(searchitem);\n        }\n    };\n}\n\n$(document).on('multiSelectInputToggle', (e) => {\n    let { value, checked, name } = e.target;\n    \n    if(checked && name === 'tags') taglist.push(value)\n    else if(checked && name === 'sdg') sdglist.push(value)\n    else if(!checked && name === 'sdg' && sdglist.includes(value)) sdglist.splice(sdglist.indexOf(value), 1)\n    else if(taglist.includes(value)) taglist.splice(taglist.indexOf(value), 1)\n  \n    filterresult()\n\n});\n\n$(document).on('filterSearchChipRemoval', (e) => {\n    let textContent = e.target.getAttribute('option-name');\n    sdglist.includes(textContent) && sdglist.splice(sdglist.indexOf(textContent), 1)\n    taglist.includes(textContent) && taglist.splice(taglist.indexOf(textContent), 1)\n    filterresult()\n});\n\n$(document).on('filterSearchClear', (e) => {\n    sdglist = [];\n    taglist =  [];\n    resultdiv.empty()\n    $(\"#content\").html(contentCopy);\n});\n\n//GET ELEMTENTS WITH ID TAGS AND SDG\n$('.tag-chip').on('click', e =>{\n    let textContent = e.target.getAttribute('text-value');\n    taglist = [ textContent ]\n    sdglist = []\n    contentdiv.empty()\n    filterresult()\n} )\n\n$('.sdg-chip').on('click', e =>{\n    let textContent = e.target.getAttribute('text-value');\n    sdglist = [textContent]\n    taglist = []\n    contentdiv.empty()\n    filterresult()\n} )\n\n})",
  "tags": null,
  "sdg": null,
  "excerpt": "// builds lunr var index = lunr(function () { this.field('title') this.field('content', {boost: 10}) this.field('sdg') this.field('tags') this.field('url') this.ref('id') }); window.tags =...",
  "id": 44
},{
  "title": "Understanding National Innovation Ecosystems (NIEs) and Public sector innovation (PSI)",
  "url": "/pitching/understanding/understanding.html",
  "content": "# Understanding National Innovation Ecosystems (NIEs) and Public sector innovation (PSI)\n\n**As part of its mandate, UNDP contributes to building national innovation ecosystems**. Two thirds of UNDP's Accelerator Labs are already supporting national innovation, and most of the remaining third plan to do so.\n\n**We focus on supporting the ecosystem's foundations**. Like biological ecosystems, innovation ecosystems require a nourishing foundation, the equivalent of the coral branches in coral reefs. Built by coral polyps, reefs provide an environment for many species to grow and thrive. We see the role of UNDP and its government partners as analogous to that of coral: focus on building the infrastructure that will make the ecosystem hospitable to the diverse actor on the innovation ecosystem. Ecosystem-building activities are highly context-specific and will differ depending on the conditions on the ground.\n\n**Public sector innovation contributes to the foundations for national innovation ecosystems**. Public sector innovation has evolved from focusing on the innovative, technology-enabled delivery of public services to the practice of using innovation to advance economic and social progress across the board.\n\n**The public sector is the natural candidate to provide the foundations for national innovation ecosystems**. In many countries, governments play a catalytic role in boosting national innovation ecosystems by making policy, convening key stakeholders, and sustaining key activities.\n\n**UNDP's role is to help engineer national innovation ecosystems that prioritize sustainable development goals (SDGs)**. We will help governments understand and capture the opportunity to build national innovation ecosystems that are inclusive and use innovation as an enabler of the SDGs.\n\n![without PSI](../../public/imgs/NIE1.png)\n\n![with PSI](../../public/imgs/NIE2.png)\n",
  "tags": null,
  "sdg": null,
  "excerpt": "# Understanding National Innovation Ecosystems (NIEs) and Public sector innovation (PSI) **As part of its mandate, UNDP contributes to building...",
  "id": 44
},{
  "title": "How to upskill civil servants for innovation",
  "url": "/Upskill/upskill.html",
  "content": "## About upskilling civil servants\n\nInnovation was not always recognized as being part of the job of the public sector. Civil servants are often unfamiliar with the methods and techniques we associate with innovation. UNDP’s Accelerator Labs and Chief Digital Office have accumulated substantial experience in helping Global South governments acquire and hone such skills.   \n",
  "tags": null,
  "sdg": null,
  "excerpt": "## About upskilling civil servants Innovation was not always recognized as being part of the job of the public sector....",
  "id": 44
},{
  "title": "Values and attitude",
  "url": "/Getting%20started/values.html",
  "content": "## Values and attitude\n\n### Values\n\nThis toolkit was produced in the cultural context of UNDP's Accelerator Labs and Chief Digital Office. It inherits their culture of deep listening, immersion within the everyday reality of the Global South, respect for grassroots innovation, openness, and epistemological humility. It does not seek to provide turnkey solutions, but to share the knowledge accumulated along the way, in the hope of making the task of supporting innovation ecosystems a little less difficult.\n\n### Support, nurture and take stock\n\nInnovation is an important ingredient of development. It helps national communities find ways to confront new, emerging challenges, and new ways to confront old ones.\n\nInnovation is rarely done in isolation. Behind any successful innovation stands a plurality of agents (businesses, government agencies, education establishments...), and artifacts (legal frameworks, physical infrastructure, market institutions, financial services...). This is why we talk of innovation _ecosystems_, using a metaphor from ecology. Just like with actual ecosystems, innovation ecosystems are healthier when they are denser (more individual animals and plants) and more diverse (more species thereof).\n\nFor this reason, good interventions on innovation are supportive and nurturing of national actors. Before you make a decisive move, it's a good idea to take stock of what is already there. In this toolkit you will find resources to help you design and run a mapping exercise.\n\n### Don't compete with extant actors\n\nIf you see actors performing a role in an innovation ecosystem, do not try to outcompete them. Maybe someone is running an incubator, or an innovation challenge; even if you think you can do better than them, it is almost always a bad idea to launch your own initiative. Rather than replace, add to the system: maybe provide something they are not doing yet, or launch an initiative to help them do better. This makes ecological sense; also, it makes your initiative more politically acceptable, and hopefully welcome.\n\n### Don't try to control\n\nLike all complex systems, an innovation ecosystem cannot be controlled. You are a contributor to it, not its boss. Listen, stay open, seek alignment, put actors in line of sight of one another.\n\n\n",
  "tags": null,
  "sdg": null,
  "excerpt": "## Values and attitude ### Values This toolkit was produced in the cultural context of UNDP's Accelerator Labs and Chief...",
  "id": 44
},{
  "title": "Ana M. Grijalva",
  "url": "/contributors/Ana-Grijalva.html",
  "content": "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Ana M. Grijalva\n            \n            UNDP Ecuador Accelerator Lab\n            Head of Exploration\n          \n        \n        \n          Ana M. Grijalva is an economist, education specialist, and social innovator with 10 years of experience. She has a vast experience in program development, management, implementation, monitoring, and evaluation, but also in cutting-edge research and data analysis. She has expertise on key issues related to education, labor market, MSME productivity and governance. She has worked for different agencies of the United Nations (International Institute for Educational Planning and Economic Commission for Latin America and the Caribbean) and for international organizations such as University of Oxford, Inter-American Development Bank, and World Bank. Also, she has experience in Ecuador´s public sector, and has worked for the academia in the United Kingdom and Ecuador. She is excited to collaborate to the change of the status quo through public and social innovation, data analysis, technology, and civic engagement.\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n          \n          \n\n          \n\n        \n      \n    \n  \n\n",
  "tags": null,
  "sdg": null,
  "excerpt": "Ana M. Grijalva UNDP Ecuador Accelerator Lab Head of Exploration Ana M. Grijalva is an economist, education specialist, and social...",
  "id": 44
},{
  "title": "Jerson del Rosario",
  "url": "/contributors/Jerson-del-Rosario.html",
  "content": "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Jerson del Rosario\n            \n            UNDP Dominican Republic Accelerator Lab\n            Head of Solutions Mapping\n          \n        \n        \n          As a sociologist, qualitative researcher and development practitioner, Jerson has worked as local development facilitator for grassroots community organizations and was a researcher and social policy analyst for the Social Policy Coordination Cabinet of the Dominican Republic. He has conducted ethnographic research on education, youth and teen pregnancy, precarious livelihoods and income generation policies, with a strong interest in small-scale entrepreneurs and the ways they understand the economic complexities of globalization. Jerson holds a bachelor’s in International Relations, a master’s in Local Development and International Cooperation, a master’s in Sociology and Education and is currently pursuing doctoral studies in Sociology.\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n          \n          \n\n          \n\n        \n      \n    \n  \n\n",
  "tags": null,
  "sdg": null,
  "excerpt": "Jerson del Rosario UNDP Dominican Republic Accelerator Lab Head of Solutions Mapping As a sociologist, qualitative researcher and development practitioner,...",
  "id": 44
},{
  "title": "Nguyen Tuan Luong",
  "url": "/contributors/Nguyen-Tuan-Luong.html",
  "content": "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Nguyen Tuan Luong\n            \n            UNDP Viet Nam Accelerator Lab\n            Head of Solutions Mapping\n          \n        \n        \n          Luong grew up around the world as a “third culture kid” and now sees himself as a global citizen. Having worked with the Innovation Partnership Programme between Finland and Vietnam, and contributed towards developing a thriving innovation ecosystem in Vietnam, Luong brings expertise in public-private partnerships. He is passionate about helping changemaker communities such as Knowmads Hanoi and Art of Hosting in creating space for meaningful conversations.  \nLuong is a Swedish Institute alumnus and graduated in Master’s in strategic leadership toward Sustainability from Sweden. By combining his cross-cultural understanding, tech-savviness, and business sense, he hopes to facilitate organizations transformation toward greater sustainability, collaboration and creativity.  \nIn his spare time, you can find him learning and practicing his hobbies. He is always excited to meet new people and looks forward to listening and sharing good stories with them.  \n\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n          \n          \n\n          \n\n        \n      \n    \n  \n\n",
  "tags": null,
  "sdg": null,
  "excerpt": "Nguyen Tuan Luong UNDP Viet Nam Accelerator Lab Head of Solutions Mapping Luong grew up around the world as a...",
  "id": 44
},{
  "title": "Sandy Ramirez",
  "url": "/contributors/Sandy-Ramirez.html",
  "content": "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Sandy Ramirez\n            \n            UNDP Dominican Republic Accelerator Lab\n            Head of Exploration\n          \n        \n        \n          Innovation and digital business specialist. Sandy has worked in promoting and developing policies to strengthen MSMEs and before joining the lab was the coordinator of Digital Economy for the Ministry of Industry, Commerce and MSMEs. Sandy has coordinated the execution of cooperation projects to promote innovation with governments of Taiwan, Korea and Spain. Sandy holds a masters degree in Digital Business and Digital Marketing as well as a masters in Business Administration.\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n          \n          \n\n          \n\n        \n      \n    \n  \n\n",
  "tags": null,
  "sdg": null,
  "excerpt": "Sandy Ramirez UNDP Dominican Republic Accelerator Lab Head of Exploration Innovation and digital business specialist. Sandy has worked in promoting...",
  "id": 44
},{
  "title": "Caroline Kiarie-Kimondo",
  "url": "/contributors/Caroline-Kiarie.html",
  "content": "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Caroline Kiarie-Kimondo\n            \n            UNDP Kenya Accelerator Lab\n            Head of Exploration\n          \n        \n        \n          Caroline Kiarie-Kimondo is the Head of Exploration, Kenya Accelerator Lab. Caroline is a social impact strategist with a passion for framing and reframing positive social impact narratives. She has 15 years of experience in philanthropy, movement building, social innovation, and strategic communications. She's also skilled in leadership coaching, human-centered design thinking, decision architecture, agile project management, and adaptive leadership.\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n          \n          \n\n          \n\n        \n      \n    \n  \n\n",
  "tags": null,
  "sdg": null,
  "excerpt": "Caroline Kiarie-Kimondo UNDP Kenya Accelerator Lab Head of Exploration Caroline Kiarie-Kimondo is the Head of Exploration, Kenya Accelerator Lab. Caroline...",
  "id": 44
},{
  "title": "Nampaka Nkumbula",
  "url": "/contributors/Nampaka-Nkumbula.html",
  "content": "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Nampaka Nkumbula\n            \n            UNDP Zambia Accelerator Lab\n            Head of Experimentation\n          \n        \n        \n          Nampaka is currently the Zambia Accelerator Lab Head of Experimentation and is a seasoned researcher within experience supporting the Zambian Innovation ecosystem with a bias on strengthening Research and development pathways for the growth of innovations by influencing government approach and methods towards responding aptly to grassroots innovations. Prior to joining UNDP, Nampaka worked at Innovations for Poverty Action. She has experience working in the development sector, promoting the use of rigorously generated evidence with partners, conducting policy driven research, and leveraging large administrative data systems to inform decision making processes and develop scaling pathways to move promising interventions from research to scale. Working in the Health, Education and Financial Inclusion sectors in Zambia, Nampaka also has experience in agricultural policy analysis and banking with a specific focus on fund management and marketing. As a successful applicant to the B360 internship at Credit Suisse, Nampaka worked in the Export Finance Department under Corporate and Specialty Lending as a Junior Portfolio Manager. She holds a Master of Arts Degree in Economics from the University of Zambia (UNZA) and a Bachelor of Arts Degree in Economics with Mathematics and Statistics from UNZA.\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n          \n          \n\n          \n\n        \n      \n    \n  \n\n",
  "tags": null,
  "sdg": null,
  "excerpt": "Nampaka Nkumbula UNDP Zambia Accelerator Lab Head of Experimentation Nampaka is currently the Zambia Accelerator Lab Head of Experimentation and...",
  "id": 44
},{
  "title": "Alena Klatte",
  "url": "/contributors/Alena-Klatte.html",
  "content": "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Alena Klatte\n            \n            UNDP Chief Digital Office\n            Global Project Manager, Strategic Data Initiatives\n          \n        \n        \n          \n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n\n          \n\n        \n      \n    \n  \n\n",
  "tags": null,
  "sdg": null,
  "excerpt": "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Alena Klatte\n            \n            UNDP Chief Digital Office\n            Global Project Manager, Strategic Data Initiatives\n          \n        \n        \n          \n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n\n          \n\n        \n      \n    \n  \n\n",
  "id": 44
},{
  "title": "Christof Hawle",
  "url": "/contributors/Christof-Hawle.html",
  "content": "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Christof Hawle\n            \n            UNDP Chief Digital Office\n            Digital Innovation and Transformation Specialist\n          \n        \n        \n          Christof has a background in private sector digital transformation consulting and development innovation and has been with the CDO since 2021. He has been supporting individual digital innovation projects and Digital X, and coordinates efforts to implement \"Digital by Default\": assuring digital is embedded in our business processes and programming life cycle. \n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n          \n          \n\n          \n\n        \n      \n    \n  \n\n",
  "tags": null,
  "sdg": null,
  "excerpt": "Christof Hawle UNDP Chief Digital Office Digital Innovation and Transformation Specialist Christof has a background in private sector digital transformation...",
  "id": 44
},{
  "title": "Yrika Maritz",
  "url": "/contributors/Yrika-Maritz.html",
  "content": "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Yrika Maritz\n            \n            UNDP Namibia Accelerator Lab\n            Head of Experimentation\n          \n        \n        \n          Yrika Vanessa Maritz is the Head of Experimentation at the UNDP Accelerator Lab Namibia. She previously worked at the Office of the Prime Minister in various roles, including Learning and Development Officer and Deputy Director of the Efficiency and Charter Unit.  She also served as the former Director of the Centre for Management and Leadership Development at the National School of Government, NIPAM.  Yrika is a Clinical Psychologist by profession and holds a Master in Public Administration, as well as a PhD in Public and Development Management.  She has been trained in various specialized learning and development models and schools in Tanzania, the UK, Germany, Sweden, Japan, and China. She is an accredited Management Consultant with the CIMC in the UK and registered with the Social Work and Psychology Council of Namibia.\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n          \n          \n\n          \n\n        \n      \n    \n  \n\n",
  "tags": null,
  "sdg": null,
  "excerpt": "Yrika Maritz UNDP Namibia Accelerator Lab Head of Experimentation Yrika Vanessa Maritz is the Head of Experimentation at the UNDP...",
  "id": 44
},{
  "title": "Cristhian Parra",
  "url": "/contributors/Cristhian-Parra.html",
  "content": "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Cristhian Parra\n            \n            UNDP Paraguay Accelerator Lab\n            Head of Experimentation\n          \n        \n        \n          Cristian Parra has a Ph.D. in Information and Communication Technologies from University of Trento, Italy, and an Informatics Engineering degree from the Polytechnic School of UNA. For the past 10 years, he has been working in social informatics R&D projects, using participatory design and human-centered design approaches to topics in community-based public health, social inclusion, civic technologies and citizen participation. He was a postdoctoral researcher at the University of California, Berkeley, where he led the projects of the Social Apps Lab (CITRIS). As consultant, he helped organizations like the World Bank, the IADB, the SSI of Berkeley, among others. Before joining AccLab, he was working as a Senior Researcher at the Catholic University of Asunción, where he led projects like TopaDengue, which combines community participation with technologies to fight the spread of the Aedes Aegypti through a bottom-up citizen science approach, within a controlled experiment. In 2018, with his team, he was the recipient of one of the Honorific Mentions of the National Prize for Science for some of these works. Cristhian has always had a passion for initiatives at intersections, bridging Computer and Social Sciences to inform research, development, and implementation of innovative socio-technical solutions for social or community challenges. This passion led him straight to this lab, where he sees a unique opportunity to contribute to the already great work that UNDP is doing in solving the big societal and development challenges of our century.\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n          \n          \n\n          \n\n        \n      \n    \n  \n\n",
  "tags": null,
  "sdg": null,
  "excerpt": "Cristhian Parra UNDP Paraguay Accelerator Lab Head of Experimentation Cristian Parra has a Ph.D. in Information and Communication Technologies from...",
  "id": 44
},{
  "title": "Eduardo Gustale",
  "url": "/contributors/Eduardo-Gustale.html",
  "content": "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Eduardo Gustale\n            \n            UNDP Accelerator Labs\n            Monitoring, Experimentation and Learning Specialist\n          \n        \n        \n          Experienced in Sustainable Development and Social Innovation. Worked repeated times in academic research, survey development and market insight. Elected Global Shaper by the World Economic Forum & Chevening Scholar for an MSc in Innovation and Entrepreneurship at University of Warwick.\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n          \n          \n\n          \n\n        \n      \n    \n  \n\n",
  "tags": null,
  "sdg": null,
  "excerpt": "Eduardo Gustale UNDP Accelerator Labs Monitoring, Experimentation and Learning Specialist Experienced in Sustainable Development and Social Innovation. Worked repeated times...",
  "id": 44
},{
  "title": "Tayo Akinyemi",
  "url": "/contributors/Tayo-Akinyemi.html",
  "content": "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Tayo Akinyemi\n            \n            UNDP Accelerator Labs\n            Learning and Community Manager\n          \n        \n        \n          I have spent most of my career creating order from ambiguity, whether it's charting my own vocational journey, supporting an African entrepreneurial leadership center launch, building the first pan-African network of tech hubs, or decoding early stage investing in Africa. In other words, I like to help great people build great things, ideally by marrying vision (dream+strategy) with implementation (getting stuff done). African tech entrepreneurship and innovation trends on all of my feeds, with a special emphasis on building enabling infrastructure (think hubs and accelerators) enhancing, the capacity of those enablers (especially early stage investors).\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n          \n          \n\n          \n\n        \n      \n    \n  \n\n",
  "tags": null,
  "sdg": null,
  "excerpt": "Tayo Akinyemi UNDP Accelerator Labs Learning and Community Manager I have spent most of my career creating order from ambiguity,...",
  "id": 44
},{
  "title": "Calum Handforth",
  "url": "/contributors/Calum-Handforth.html",
  "content": "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Calum Handforth\n            \n            UNDP Chief Digital Office\n            Digital Programmes Strategic Manager\n          \n        \n        \n          UN Advisor and Fellow - focusing on data, innovation, and digital tech in international development and government.\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n          \n          \n\n          \n\n        \n      \n    \n  \n\n",
  "tags": null,
  "sdg": null,
  "excerpt": "Calum Handforth UNDP Chief Digital Office Digital Programmes Strategic Manager UN Advisor and Fellow - focusing on data, innovation, and...",
  "id": 44
},{
  "title": "Nicola Holden",
  "url": "/contributors/Nicola-Holden.html",
  "content": "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Nicola Holden\n            \n            UNDP Chief Digital Office\n            Digital Experience Advisor\n          \n        \n        \n          \n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n\n          \n\n        \n      \n    \n  \n\n",
  "tags": null,
  "sdg": null,
  "excerpt": "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Nicola Holden\n            \n            UNDP Chief Digital Office\n            Digital Experience Advisor\n          \n        \n        \n          \n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n\n          \n\n        \n      \n    \n  \n\n",
  "id": 44
},{
  "title": "Adedapo Aderemi",
  "url": "/contributors/Adedapo-Aderemi.html",
  "content": "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Adedapo Aderemi\n            \n            UNDP Accelerator Labs\n            Software Developer\n          \n        \n        \n          Adedapo is an inventive and dynamic software developer with experience designing state-of-the-art web, mobile, IoT, and cloud engineering solutions. He is proficient in a variety of frameworks and programming languages, specializing in developing scalable and resilient applications. He utilizes cutting-edge technologies to address intricate challenges, propel digital revolutionization, and generate memorable user experiences.\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n          \n          \n\n          \n\n        \n      \n    \n  \n\n",
  "tags": null,
  "sdg": null,
  "excerpt": "Adedapo Aderemi UNDP Accelerator Labs Software Developer Adedapo is an inventive and dynamic software developer with experience designing state-of-the-art web,...",
  "id": 44
},{
  "title": "Mónica Ríos",
  "url": "/contributors/Monica-Rios.html",
  "content": "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Mónica Ríos\n            \n            UNDP Paraguay Accelerator Labs\n            Head of Exploration\n          \n        \n        \n          Mónica Rios has a Business Administration Degree, holds a Master’s Degree in Creation and Management of Innovative and Technology Based Companies (Barcelona, Spain) as part of the National Scholarship Program “BECAL” and a Diploma in Corporate Social Responsibility (Santiago, Chile). She worked with the private sector, NGOs and multilateral funds in subjects related to corporate social responsibility, sustainability, marketing, strategy and innovation. Before joining UNDP he designed and coordinated incubation and acceleration processes for MSMEs in the creative sector in Paraguay and social innovation projects through the IDB LAB. Her main motivation lies in lies in maximize innovative projects developed in Paraguay, which can inspire others to think big, as well as learn from other practices developed by others AccLabs worldwide.\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n          \n          \n\n          \n\n        \n      \n    \n  \n\n",
  "tags": null,
  "sdg": null,
  "excerpt": "Mónica Ríos UNDP Paraguay Accelerator Labs Head of Exploration Mónica Rios has a Business Administration Degree, holds a Master’s Degree...",
  "id": 44
},{
  "title": "Alberto Cottica",
  "url": "/contributors/Alberto-Cottica.html",
  "content": "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Alberto Cottica\n            \n            UNDP Accelerator Labs\n            R&D Specialist\n          \n        \n        \n          Originally a development/environmental economist, now more of a quantitative social scientist. Anthropology, ethnography, network science. Interested in epistemology. Committed citizen. Runner. Ex-minor rockstar.\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          \n          Contact \n          \n\n          \n          \n          \n          \n          \n\n          \n\n        \n      \n    \n  \n\n",
  "tags": null,
  "sdg": null,
  "excerpt": "Alberto Cottica UNDP Accelerator Labs R&D Specialist Originally a development/environmental economist, now more of a quantitative social scientist. Anthropology, ethnography,...",
  "id": 44
}]


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
        <a href="https://nie.sdg-innovation-commons.org/${store[ref]?.url}">
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
    <a href="https://nie.sdg-innovation-commons.org/${post?.url}">
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