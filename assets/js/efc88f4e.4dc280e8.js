"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[62844],{61968:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var i=n(74848),s=n(28453);const r={},o="Polkadot Contract Wizard",l={id:"applications/polkadot-contract-wizard",title:"Polkadot Contract Wizard",description:"- Team Name: Protofire",source:"@site/applications/polkadot-contract-wizard.md",sourceDirName:"applications",slug:"/applications/polkadot-contract-wizard",permalink:"/applications/polkadot-contract-wizard",draft:!1,unlisted:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/applications/polkadot-contract-wizard.md",tags:[],version:"current",frontMatter:{}},a={},c=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-page_facing_up",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"<a></a>1.-  Redesign frontend interface (in progress)",id:"1---redesign-frontend-interface-in-progress",level:4},{value:"User Personas",id:"user-personas",level:4},{value:"<a></a>2.- Develop the interface based on the previous task result",id:"2--develop-the-interface-based-on-the-previous-task-result",level:4},{value:"<a></a>3.- Compose the contract based on the selection.",id:"3--compose-the-contract-based-on-the-selection",level:4},{value:"<a></a>4.- Add syntax highlighting to the displayed smart contract code.",id:"4--add-syntax-highlighting-to-the-displayed-smart-contract-code",level:4},{value:"<a></a>5.- Create a service that allows on demand contract compilation and deployment.",id:"5--create-a-service-that-allows-on-demand-contract-compilation-and-deployment",level:4},{value:"<a></a>6.- Develop Instance functionality.",id:"6--develop-instance-functionality",level:4},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-busts_in_silhouette",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team LinkedIn Profiles",id:"team-linkedin-profiles",level:3},{value:"Development Status \ud83d\udcd6",id:"development-status-open_book",level:2},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-nut_and_bolt",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 \u2014 UI and Code Generation",id:"milestone-1--ui-and-code-generation",level:3},{value:"Milestone 2 \u2014 Smart Contracts Deployment and Instantiation functionality",id:"milestone-2--smart-contracts-deployment-and-instantiation-functionality",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information \u2795",id:"additional-information-heavy_plus_sign",level:2}];function d(e){const t={a:"a",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"polkadot-contract-wizard",children:"Polkadot Contract Wizard"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Team Name:"})," Protofire"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Payment Address:"})," 0xD662E05ce522B3861b70FC376F60bF50E200abfA (USDC - Ethereum network)"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsxs)(t.strong,{children:[(0,i.jsx)(t.a,{href:"https://github.com/w3f/Grants-Program/tree/master#level_slider-levels",children:"Level"}),":"]})," 2"]}),"\n"]}),"\n",(0,i.jsxs)(t.h2,{id:"project-overview-page_facing_up",children:["Project Overview ","\ud83d\udcc4"]}),"\n",(0,i.jsxs)(t.p,{children:["This project is an application for a grant after getting ",(0,i.jsx)(t.a,{href:"https://polkadothackathonlatam.com/proyecto-inner/LactobaciloGG",children:"the first prize on Polkadot Hackathon LATAM"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"We firmly believe that web3 has to be easy to use, this project is based on that premise and from the mock-up developed in the hackathon, we are going to take the next steps to make this experience frictionless."}),"\n",(0,i.jsx)(t.h3,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(t.p,{children:"The Polkadot Contract Wizard aims to be the project that provides the entry point for the next generation of web3 users, developers and non developers in the Polkadot ecosystem. It will achieve that goal by enabling new users creating their own contracts in a few steps. We want to provide the possibility to anyone to be able to create their own smart contracts as a tool for their work. The users need to focus on what they do, so we make the access to smart contracts easy for them. They don\u2019t need to care about programming, but they need to be able to customize their smart contracts in a simple way with the support of the developer community around the world."}),"\n",(0,i.jsx)(t.h3,{id:"project-details",children:"Project Details"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"https://alongoni.github.io/polkadot-contract-wizard/#",children:"Here"})," you can find our first approach of the contract wizard. And ",(0,i.jsx)(t.a,{href:"https://github.com/alongoni/polkadot-contract-wizard",children:"here"})," is the repo containing what we already did."]}),"\n",(0,i.jsx)(t.p,{children:"We learned from this experience that this kind of implementations are not friendly enough to non technical users, so we decided to do something about it."}),"\n",(0,i.jsx)(t.p,{children:"We plan to use the following tech stack in the latest stable version: React, Next.js, MUI, PolkadotJS wallet extension, Docker, Git."}),"\n",(0,i.jsx)(t.p,{children:"These are the steps that will be done to implement the proposed solution:"}),"\n",(0,i.jsxs)(t.h4,{id:"1---redesign-frontend-interface-in-progress",children:[(0,i.jsx)("a",{name:"step1"}),"1.-  Redesign frontend interface (in progress)"]}),"\n",(0,i.jsxs)(t.p,{children:["The development needs to be focused on making a better user experience.\nThere are already some tools that we can use as a reference. E.g: ",(0,i.jsx)(t.a,{href:"https://mintplex.xyz/",children:"https://mintplex.xyz/"}),", ",(0,i.jsx)(t.a,{href:"https://www.coinvise.co/",children:"https://www.coinvise.co/"})]}),"\n",(0,i.jsx)(t.h4,{id:"user-personas",children:"User Personas"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"A non-technical user that needs to create a new NFT contract for publishing his own content or needs to create a new Token for being able to finance his own project."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["A developer that wants to bootstrap a quick template of a standard contract (based on ",(0,i.jsx)(t.a,{href:"https://github.com/w3f/PSPs",children:"PSP"}),") with different features."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"If we want to onboard more people to Polkadot Ecosystem and achieve mass adoption we need to make the user experience easier."}),"\n",(0,i.jsxs)(t.p,{children:["We have already started with a ",(0,i.jsx)(t.a,{href:"https://www.figma.com/proto/XhwRgBUg7oSDncX0w1byfV/Contract-Wizzard?node-id=1%3A3&viewport=-714%2C541%2C0.39&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A3",children:"prototype"})," on Figma."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://gcdnb.pbrd.co/images/RgPC3fQshqt8.png",alt:"Figma Prototype Contract Wizard",title:"Polkadot Contract Wizard Design"})}),"\n",(0,i.jsxs)(t.h4,{id:"2--develop-the-interface-based-on-the-previous-task-result",children:[(0,i.jsx)("a",{name:"step2"}),"2.- Develop the interface based on the previous task result"]}),"\n",(0,i.jsx)(t.p,{children:"Based on the mock-up created in the previous step make it something usable."}),"\n",(0,i.jsx)(t.p,{children:"We need to be very careful about the look and feel."}),"\n",(0,i.jsx)(t.p,{children:"For the login we will use PolkadotJS wallet."}),"\n",(0,i.jsx)(t.p,{children:"The user will be guided step by step to create the contract he needs. At the end, the generated smart contract code is displayed with the possibility to copy and download it."}),"\n",(0,i.jsxs)(t.h4,{id:"3--compose-the-contract-based-on-the-selection",children:[(0,i.jsx)("a",{name:"step3"}),"3.- Compose the contract based on the selection."]}),"\n",(0,i.jsx)(t.p,{children:"All the contracts need to be composable based on the modifiers selected by the user:"}),"\n",(0,i.jsx)(t.p,{children:"PSP22:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Modifiers: Metadata, Mintable, Burnable, Wrapper, FlashMint, Pausable, Capped."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Security modifiers: Ownable, Access Control, Access Control Enumerable, None."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"PSP37"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Modifiers: Batch, Metadata, Mintable, Burnable, Enumerable."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Security modifiers: Ownable, Access Control, Access Control Enumerable, None."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"PSP34"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Modifiers: Metadata, Mintable, Burnable, Enumerable."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Security modifiers: Ownable, Access Control, Access Control Enumerable, None."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["At first, we will only use OpenBrush contracts than can be found here: ",(0,i.jsx)(t.a,{href:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/contracts/src/token",children:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/contracts/src/token"})]}),"\n",(0,i.jsxs)(t.h4,{id:"4--add-syntax-highlighting-to-the-displayed-smart-contract-code",children:[(0,i.jsx)("a",{name:"step4"}),"4.- Add syntax highlighting to the displayed smart contract code."]}),"\n",(0,i.jsx)(t.p,{children:"At first, the syntax hihlighter will only be used for Rust programming language."}),"\n",(0,i.jsx)(t.p,{children:"To allow compatibility with future plans we will research for a library that covers not only Rust, but can also be used with AssemblyScript or any other language that is compatible with WASM."}),"\n",(0,i.jsxs)(t.h4,{id:"5--create-a-service-that-allows-on-demand-contract-compilation-and-deployment",children:[(0,i.jsx)("a",{name:"step5"}),"5.- Create a service that allows on demand contract compilation and deployment."]}),"\n",(0,i.jsx)(t.p,{children:"In order to allow users to only instance the smart contracts, we will have to deploy the smart contracts first. We'll build a backend service that receives the generated code and compiles it. Once the contract is deployed, we will store the code hash so that it can be used later."}),"\n",(0,i.jsx)(t.p,{children:'We need a map containing the parachain, type of the contract, the modifiers used and the code hash of the deployed contract.\nE.g: (Contracts Rococo - PSP22 - [burnable,mintable] => "CODE HASH")'}),"\n",(0,i.jsx)(t.p,{children:"Research what\u2019s the best place to store this and what\u2019s the most efficient way."}),"\n",(0,i.jsx)(t.p,{children:"At first, it will only be done in Contracts Parachain on Rococo Testnet"}),"\n",(0,i.jsxs)(t.p,{children:["Check documentation here: ",(0,i.jsx)(t.a,{href:"https://substrate.io/developers/rococo-network/",children:"https://substrate.io/developers/rococo-network/"})]}),"\n",(0,i.jsxs)(t.h4,{id:"6--develop-instance-functionality",children:[(0,i.jsx)("a",{name:"step6"}),"6.- Develop Instance functionality."]}),"\n",(0,i.jsx)(t.p,{children:"Once the user has finished defining the functionality of the contract, the associated code hash from the previous step is obtained.\nNow, the user is able to fill the required fields of the contract constructor in order to instance it succesfully."}),"\n",(0,i.jsx)(t.h3,{id:"ecosystem-fit",children:"Ecosystem Fit"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Polkadot Contract Wizard aims to be a bridge between people with great ideas and the entire Polkadot Ecosystem."})}),"\n",(0,i.jsx)(t.p,{children:"This project will help providing a solution for all type of users to create standard smart contracts such as tokens, NFTs, etc in a very simple way."}),"\n",(0,i.jsxs)(t.h2,{id:"team-busts_in_silhouette",children:["Team ","\ud83d\udc65"]}),"\n",(0,i.jsx)(t.h3,{id:"team-members",children:"Team members"}),"\n",(0,i.jsx)(t.p,{children:"The project will be led by Diego Torres, protofires field CTO\nOur Developer will be Henry Palacios\nAnd the UI/UX expert is Agustin Longoni"}),"\n",(0,i.jsx)(t.h3,{id:"contact",children:"Contact"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Contact Name:"})," Diego Torres Borda"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Contact Email:"})," ",(0,i.jsx)(t.a,{href:"mailto:diego@protofire.io",children:"diego@protofire.io"})]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Website:"})," ",(0,i.jsx)(t.a,{href:"https://protofire.io/",children:"protofire.io"})]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"legal-structure",children:"Legal Structure"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Registered Address:"})," 1607 Ponce de Leon Avenue, GM-06, San Juan, PR, 00909"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Registered Legal Entity:"})," Altoros LLC (DBA Protofire)"]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"teams-experience",children:"Team's experience"}),"\n",(0,i.jsx)(t.p,{children:"Protofire has proven expertise in building decentralized infrastructure, protocols, applications, and developer platforms to accelerate growth of network\u2019s ecosystems. By delivering hands-on coding and contributions, Protofire specializes in supercharging developer adoption, bootstrapping, and network usage\nWe are not only a dev shop company, but we create long term partnerships with the projects we are part of, building and working as ambassadors for the community. We believe in the projects and also participate by running nodes and taking the validator or staker roles."}),"\n",(0,i.jsx)(t.h3,{id:"team-code-repos",children:"Team Code Repos"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/protofire/filecoin-CID-checker",children:"https://github.com/protofire/filecoin-CID-checker"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/protofire/moonbeam-web-core",children:"https://github.com/protofire/moonbeam-web-core"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/protofire/solhint",children:"https://github.com/protofire/solhint"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/protofire/eth-cli",children:"https://github.com/protofire/eth-cli"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/protofire/blockchain-learning-path",children:"https://github.com/protofire/blockchain-learning-path"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/protofire/maker-governance-dashboard",children:"https://github.com/protofire/maker-governance-dashboard"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/protofire/omen-exchange",children:"https://github.com/protofire/omen-exchange"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/protofire/kyber-pool-master-proxy-contract",children:"https://github.com/protofire/kyber-pool-master-proxy-contract"})}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"GitHub accounts of team members."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/henrypalacios",children:"https://github.com/henrypalacios"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/alongoni",children:"https://github.com/alongoni"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/DiegoTorresborda",children:"https://github.com/DiegoTorresborda"})}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"team-linkedin-profiles",children:"Team LinkedIn Profiles"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"linkedin.com/in/henrydpalacios"}),"\n",(0,i.jsx)(t.li,{children:"linkedin.com/in/agustinlongoni"}),"\n",(0,i.jsx)(t.li,{children:"linkedin.com/in/diego-torres-borda-94b70912"}),"\n"]}),"\n",(0,i.jsxs)(t.h2,{id:"development-status-open_book",children:["Development Status ","\ud83d\udcd6"]}),"\n",(0,i.jsx)(t.p,{children:"As explained in step 1 of project details section, our first approach was a contract wizard similar to the one built by OpenZeppelin on Ethereum."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://polkadothackathonlatam.com/proyecto-inner/LactobaciloGG",children:"Link"})," to project presented on Polkadot Hackathon LATAM."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"After that, we realized that if we wanted our tool to be useful for all types of users, we needed to redesign the UX and add further functionalities."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["We are already working on a ",(0,i.jsx)(t.a,{href:"https://www.figma.com/proto/XhwRgBUg7oSDncX0w1byfV/Contract-Wizzard?node-id=1%3A3&viewport=-714%2C541%2C0.39&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A3",children:"prototype"})," of how the proposed project will work."]}),"\n"]}),"\n",(0,i.jsxs)(t.h2,{id:"development-roadmap-nut_and_bolt",children:["Development Roadmap ","\ud83d\udd29"]}),"\n",(0,i.jsx)(t.p,{children:"Described in project details."}),"\n",(0,i.jsx)(t.h3,{id:"overview-1",children:"Overview"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Total Estimated Duration:"})," 4 months"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Full-Time Equivalent (FTE):"}),"  2"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Total Costs:"})," 28,000 USD"]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"milestone-1--ui-and-code-generation",children:"Milestone 1 \u2014 UI and Code Generation"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Estimated duration:"})," 3 months"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"FTE:"}),"  2"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Costs:"})," 21,000 USD"]}),"\n"]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"right"},children:"Number"}),(0,i.jsx)(t.th,{children:"Deliverable"}),(0,i.jsx)(t.th,{children:"Specification"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:(0,i.jsx)(t.strong,{children:"0a."})}),(0,i.jsx)(t.td,{children:"License"}),(0,i.jsx)(t.td,{children:"Apache 2.0"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:(0,i.jsx)(t.strong,{children:"0b."})}),(0,i.jsx)(t.td,{children:"Documentation"}),(0,i.jsx)(t.td,{children:"We will provide both inline documentation of the code and a basic tutorial that explains how a user can generate its own smart contracts."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:(0,i.jsx)(t.strong,{children:"0c."})}),(0,i.jsx)(t.td,{children:"Testing and Testing Guide"}),(0,i.jsx)(t.td,{children:"The code will have unit-test coverage to ensure functionality and robustness. In the guide, we will describe how to run these tests."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:(0,i.jsx)(t.strong,{children:"0d."})}),(0,i.jsx)(t.td,{children:"Docker"}),(0,i.jsx)(t.td,{children:"We will provide a docker container with current milestones deliverables to easily run the application."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"1."}),(0,i.jsx)(t.td,{children:"Redesign frontend interface"}),(0,i.jsxs)(t.td,{children:["The functionality to be implemented corresponds to ",(0,i.jsx)(t.a,{href:"#step1",children:"step 1"})," of the Project Details section."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"2."}),(0,i.jsx)(t.td,{children:"Develop the interface based on the previous task result"}),(0,i.jsxs)(t.td,{children:["The functionality to be implemented corresponds to ",(0,i.jsx)(t.a,{href:"#step2",children:"step 2"})," of the Project Details section."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"3."}),(0,i.jsx)(t.td,{children:"Compose the contract based on the selection"}),(0,i.jsxs)(t.td,{children:["The functionality to be implemented corresponds to ",(0,i.jsx)(t.a,{href:"#step3",children:"step 3"})," of the Project Details section."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"4."}),(0,i.jsx)(t.td,{children:"Add syntax highlighting to the displayed smart contract code"}),(0,i.jsxs)(t.td,{children:["The functionality to be implemented corresponds to ",(0,i.jsx)(t.a,{href:"#step4",children:"step 4"})," of the Project Details section."]})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"milestone-2--smart-contracts-deployment-and-instantiation-functionality",children:"Milestone 2 \u2014 Smart Contracts Deployment and Instantiation functionality"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Estimated duration:"})," 1 month"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"FTE:"}),"  2"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Costs:"})," 7,000 USD"]}),"\n"]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"right"},children:"Number"}),(0,i.jsx)(t.th,{children:"Deliverable"}),(0,i.jsx)(t.th,{children:"Specification"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:(0,i.jsx)(t.strong,{children:"0a."})}),(0,i.jsx)(t.td,{children:"License"}),(0,i.jsx)(t.td,{children:"Apache 2.0"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:(0,i.jsx)(t.strong,{children:"0b."})}),(0,i.jsx)(t.td,{children:"Documentation"}),(0,i.jsx)(t.td,{children:"We will provide both inline documentation of the code and a basic tutorial that explains how a user can instantiate a smart contract."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:(0,i.jsx)(t.strong,{children:"0c."})}),(0,i.jsx)(t.td,{children:"Testing and Testing Guide"}),(0,i.jsx)(t.td,{children:"The code will have unit-test coverage to ensure functionality and robustness. In the guide, we will describe how to run these tests."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:(0,i.jsx)(t.strong,{children:"0d."})}),(0,i.jsx)(t.td,{children:"Docker"}),(0,i.jsx)(t.td,{children:"We will provide a docker container with current milestones deliverables to easily run the application."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"0e."}),(0,i.jsx)(t.td,{children:"Article"}),(0,i.jsx)(t.td,{children:"We will publish an article that explains what we have achieved building this project and how this will impact the ecosystem ."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"1."}),(0,i.jsx)(t.td,{children:"Create a service that allows on demand contract compilation and deployment."}),(0,i.jsxs)(t.td,{children:["The functionality to be implemented corresponds to ",(0,i.jsx)(t.a,{href:"#step5",children:"step 5"})," of the Project Details section."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"2."}),(0,i.jsx)(t.td,{children:"Develop Instance functionality"}),(0,i.jsxs)(t.td,{children:["The functionality to be implemented corresponds to ",(0,i.jsx)(t.a,{href:"#step6",children:"step 6"})," of the Project Details section."]})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"future-plans",children:"Future Plans"}),"\n",(0,i.jsx)(t.p,{children:"After the completion of this project, we would love to broaden its scope."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Multiple Chains"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Provide a set of tools that will allow users to connect to parachains which implement the contracts pallet."}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Custom contracts"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Add the possibility of creating custom contracts, not only with the modifiers but adding the ability to write code using the interface."}),"\n",(0,i.jsx)(t.li,{children:"Compile the generated code and deploy it to different parachains."}),"\n",(0,i.jsxs)(t.li,{children:["Following the comments made on the ",(0,i.jsx)(t.a,{href:"https://github.com/w3f/Grants-Program/pull/1413#pullrequestreview-1234970716",children:"pull request"}),", our approach will be based on the ",(0,i.jsx)(t.a,{href:"https://github.com/paritytech/ink-playground",children:"ink-playground"})," in order to integrate writing custom code and compiling it."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Social Interaction"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Create an account to store information."}),"\n",(0,i.jsx)(t.li,{children:"Save your created smart contracts."}),"\n",(0,i.jsx)(t.li,{children:"Be able to share them with the community and ask for help."}),"\n",(0,i.jsx)(t.li,{children:"Provide assistance to other community members."}),"\n"]}),"\n",(0,i.jsxs)(t.h2,{id:"additional-information-heavy_plus_sign",children:["Additional Information ","\u2795"]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"How did you hear about the Grants Program?"})," Web3 Foundation Website"]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>l});var i=n(96540);const s={},r=i.createContext(s);function o(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);