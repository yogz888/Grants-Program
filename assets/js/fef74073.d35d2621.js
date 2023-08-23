"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[45591],{89660:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>n,metadata:()=>r,toc:()=>p});var l=a(87462),o=(a(67294),a(3905));a(8209);const n={},i="Polkadot Collator Setup",r={unversionedId:"docs/RFPs/Closed/polkadot-collator-setup",id:"docs/RFPs/Closed/polkadot-collator-setup",title:"Polkadot Collator Setup",description:"- Status: Implemented",source:"@site/docs/RFPs/Closed/polkadot-collator-setup.md",sourceDirName:"docs/RFPs/Closed",slug:"/docs/RFPs/Closed/polkadot-collator-setup",permalink:"/docs/RFPs/Closed/polkadot-collator-setup",draft:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/docs/RFPs/Closed/polkadot-collator-setup.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"PHP Version of SCALE Codec",permalink:"/docs/RFPs/Closed/php-scale"},next:{title:"Social Recovery Wallet",permalink:"/docs/RFPs/Closed/social-recovery-wallet"}},s={},p=[{value:"Project Description \ud83d\udcc4",id:"project-description-",level:2},{value:"Deliverables \ud83d\udd29",id:"deliverables-",level:2},{value:"Milestone 1",id:"milestone-1",level:3}],d={toc:p},u="wrapper";function m(t){let{components:e,...a}=t;return(0,o.kt)(u,(0,l.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"polkadot-collator-setup"},"Polkadot Collator Setup"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Status:")," ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/w3f/Grants-Program/blob/master/applications/unified_collator_node_deployment.md"},"Implemented")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Proposer:")," mmagician"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Your Project(s):")," ",(0,o.kt)("a",{parentName:"li",href:"https://mmagician.github.io/"},"https://mmagician.github.io/")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Projects you think this work could be useful for")," Any parachain team")),(0,o.kt)("h2",{id:"project-description-"},"Project Description \ud83d\udcc4"),(0,o.kt)("p",null,"This is meant as a companion repository to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/w3f/polkadot-validator-setup"},"polkadot-validator-setup"),", which allows anyone to launch a validator node in an automated and secure fashion."),(0,o.kt)("p",null,"I would like to standardize (as much as possible) the process of spinning up new collator nodes for different parachains."),(0,o.kt)("p",null,"I understand it might be tricky to bundle all the parachain launch setups into one repository, but there are some ideas of how this can be tackled:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Have a single collator ansible role, and each branch would correspond to a specific parachain"),(0,o.kt)("li",{parentName:"ol"},"Have multiple ansible roles, and the main.yml in the project root to coordinate which roles get deployed.")),(0,o.kt)("p",null,"I would lean towards the second option. While it might lead to large repo size due to multiple collator setups (and multiple networks - the setup might be different on Kusama or Polkadot), it gives more flexibility to spin up multiple collators for independant chains without meddling with git branching too much."),(0,o.kt)("h2",{id:"deliverables-"},"Deliverables \ud83d\udd29"),(0,o.kt)("p",null,"Ideally the PoC would\nPlease list the deliverables of the project in as much detail as possible. Please also estimate the amount of work required and try to divide the project into meaningful milestones."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," Duration of the whole project"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Full-time equivalent (FTE):"),"  Amount of time (in days) required for a single person to complete this project (",(0,o.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Full-time_equivalent"},"see"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Total Costs:")," Amount of Payment in USD for the whole project.")),(0,o.kt)("h3",{id:"milestone-1"},"Milestone 1"),(0,o.kt)("p",null,"Please add additional milestones in the same way:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Estimated Duration:")," Duration of milestone 1"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"FTE:"),"  Amount of time (in days) required for a single person to complete this milestone"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Costs:")," Amount of Payment in USD for milestone 1")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Number"),(0,o.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,o.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"1."),(0,o.kt)("td",{parentName:"tr",align:null},"Title of the deliverable"),(0,o.kt)("td",{parentName:"tr",align:null},"Please describe the deliverable here as detailed as possible")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"2."),(0,o.kt)("td",{parentName:"tr",align:null},"..."),(0,o.kt)("td",{parentName:"tr",align:null},"...")))))}m.isMDXComponent=!0}}]);