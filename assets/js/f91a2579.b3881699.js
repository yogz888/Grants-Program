"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[34661],{33648:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>a,toc:()=>d});var i=t(74848),s=t(28453);const l={},r="zk plonk",a={id:"applications/zk-plonk",title:"zk plonk",description:"Team Name:* Plasm Network (Shinsaku Ashizawa, Sota Watanabe)",source:"@site/applications/zk-plonk.md",sourceDirName:"applications",slug:"/applications/zk-plonk",permalink:"/applications/zk-plonk",draft:!1,unlisted:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/applications/zk-plonk.md",tags:[],version:"current",frontMatter:{}},o={},d=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-page_facing_up",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-busts_in_silhouette",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team LinkedIn Profiles",id:"team-linkedin-profiles",level:3},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-nut_and_bolt",level:2},{value:"Summary",id:"summary",level:3},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 Example \u2014 Implement Substrate Modules",id:"milestone-1-example--implement-substrate-modules",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information \u2795",id:"additional-information-heavy_plus_sign",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"zk-plonk",children:"zk plonk"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Team Name:"})," Plasm Network (Shinsaku Ashizawa, Sota Watanabe)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Payment Address:"})," 0xb82EdE43D03fD23dcdb2d066720b3E77F3bedf6d"]}),"\n"]}),"\n",(0,i.jsxs)(n.h2,{id:"project-overview-page_facing_up",children:["Project Overview ","\ud83d\udcc4"]}),"\n",(0,i.jsx)(n.p,{children:"We have been working on Zk projects and scalability solutions and now we would like to implement Zk plonk pallet."}),"\n",(0,i.jsxs)(n.p,{children:["The plonk is called ",(0,i.jsx)(n.code,{children:"universal zkSNARK"})," because of two reasons. The verification times are constant and original reference string can be used to build proofs with any type of circuit. These features bring significant benefits to both users and developers. For example, the verification time is the same so users don't have to wait so long even when they prove complicated proof, and original reference string can reuse so developers don't have to do trusted setup for each circuit. The plonk will be a core technology in terms of scaling and privacy so we should support."]}),"\n",(0,i.jsx)(n.h3,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(n.p,{children:"Through this grant, we are going to make a plonk pallet in order for the developer to implement plonk on substrate easily. We are working on scalability solutions but currently, the substrate doesn't support zkSNARK pallet so we think it's a issue to fix. As aforementioned, zkSNARK will be a core technology in blockchain area and especially plonk is cutting edge technology so we are excited to implement this as pallet."}),"\n",(0,i.jsx)(n.h3,{id:"project-details",children:"Project Details"}),"\n",(0,i.jsx)(n.p,{children:"We'd like to implement the plonk library as a pallet in order for developers to customize circuits and use the plonk protocol."}),"\n",(0,i.jsx)(n.p,{children:"The following diagram is the libraries we are going to implement."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Polynomial commitment"}),"\n",(0,i.jsx)(n.li,{children:"Circuit builder"}),"\n",(0,i.jsx)(n.li,{children:"Generate proof and verify keys"}),"\n",(0,i.jsx)(n.li,{children:"Verify proof"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"ecosystem-fit",children:"Ecosystem Fit"}),"\n",(0,i.jsx)(n.p,{children:"According to Web3 Foundation, there are at least 2 different teams that work on ZK technologies."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/zeropoolnetwork",children:"Zeropool"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/gbctech",children:"Glacier"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Glacier is building a Distaff VM for zk-STARK proof generation and verification that are used to make  private smart contracts and private credential verifications. The difference between us is that we are making a zkSNARK pallet and they are making a VM which supports STARKs. In terms of Zeropool, they are making private transactions contract pallet using bellman groth16 protocal and we are making zkSNARK libray using plonk."}),"\n",(0,i.jsx)(n.p,{children:"We believe zkSNARK with plonk will be core technology of next blockchain area. That allows Substrate to protect the privacy and scale on the huge number of transactions without decreasing the security level."}),"\n",(0,i.jsxs)(n.h2,{id:"team-busts_in_silhouette",children:["Team ","\ud83d\udc65"]}),"\n",(0,i.jsx)(n.h3,{id:"team-members",children:"Team members"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Shinsaku Ashizawa"}),"\n",(0,i.jsx)(n.li,{children:"Alexsandr Krrupenkin"}),"\n",(0,i.jsx)(n.li,{children:"Sota Watanabe"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"contact",children:"Contact"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Contact Name:"})," Shinsaku Ashizawa"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Contact Email:"})," ",(0,i.jsx)(n.a,{href:"mailto:shinsaku.ashizawa@artree.co.jp",children:"shinsaku.ashizawa@artree.co.jp"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Website:"})," ",(0,i.jsx)(n.a,{href:"https://artree.co.jp/",children:"Artree"})]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"legal-structure",children:"Legal Structure"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Incorporated in Singapore"}),"\n",(0,i.jsx)(n.li,{children:"Address: 63 Chulia Street Singapore"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"teams-experience",children:"Team's experience"}),"\n",(0,i.jsx)(n.p,{children:"We have been making Plasm Network, a scalable multi-virtual machines smart contract platform on Polkadot supporting cutting edge layer2 solutions. Curretly, another team at Stake techologies is working on the Optimistic Virtual Machine, an unification for all layer2 solutions and a subset of Optimistic Rollup. We have already delivered 4 milestones out of 6. In addition to that, we have already delivered several grants such as Plasma, ECDSA, and ink! playground."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/stakedtechnologies/Plasm",children:"Plasma"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/polkadot-js/common/tree/master/packages/util-crypto/src/secp256k1",children:"ECDSA"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/staketechnologies/ink-playground",children:"ink! playground"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"We are also participating in Substrate Builders Program and Substrate Delivery Partners and we have done some PoCs with clients."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://stake.co.jp/news/20201020english/",children:"\u201cPlasm Network\u201d is Adopted as a Blockchain Platform for Payment System by Satsudra HD and DataGateway"})}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://stake.co.jp/news/bitpoint_en/",children:"Bitpoint and Stake Technologies Collaboration Announcement."}),"\niously, please list the name of the project and legal entity here."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"team-code-repos",children:"Team Code Repos"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/PlasmNetwork",children:"https://github.com/PlasmNetwork"})}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"team-linkedin-profiles",children:"Team LinkedIn Profiles"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://www.linkedin.com/in/sota-watanabe-b962b3110/",children:"https://www.linkedin.com/in/sota-watanabe-b962b3110/"})}),"\n"]}),"\n",(0,i.jsxs)(n.h2,{id:"development-roadmap-nut_and_bolt",children:["Development Roadmap ","\ud83d\udd29"]}),"\n",(0,i.jsx)(n.h3,{id:"summary",children:"Summary"}),"\n",(0,i.jsxs)(n.p,{children:["We plan to provide a ",(0,i.jsx)(n.code,{children:"plonk"})," pallet that allows Substrate-based blockchain to execute plonk-based zkSNARK."]}),"\n",(0,i.jsx)(n.h3,{id:"overview-1",children:"Overview"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Total Estimated Duration:"})," 3 months"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Full-Time Equivalent (FTE):"}),"  1 FTE"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Total Costs:"})," 30000 DAI"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"milestone-1-example--implement-substrate-modules",children:"Milestone 1 Example \u2014 Implement Substrate Modules"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Estimated Duration:"})," 3 months"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"FTE:"}),"  1"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Costs:"})," 30000 DAI"]}),"\n"]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"right"},children:"Number"}),(0,i.jsx)(n.th,{children:"Deliverable"}),(0,i.jsx)(n.th,{children:"Specification"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"right"},children:"0a."}),(0,i.jsx)(n.td,{children:"License"}),(0,i.jsx)(n.td,{children:"Apache 2.0 / MIT / Unlicense"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"right"},children:"0b."}),(0,i.jsx)(n.td,{children:"Documentation"}),(0,i.jsx)(n.td,{children:"We will provide both inline documentation of the code and a basic tutorial that explains how a developer builds a circuit and a user prove their computation through the circuit."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"right"},children:"0c."}),(0,i.jsx)(n.td,{children:"Testing Guide"}),(0,i.jsx)(n.td,{children:"Core functions will be fully covered by unit tests and audit to ensure functionality and robustness. In the guide, we will describe how to run these tests."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"right"},children:"0d."}),(0,i.jsx)(n.td,{children:"Article/Tutorial"}),(0,i.jsx)(n.td,{children:"We will publish an article/tutorial/workshop that explains"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"right"},children:"1."}),(0,i.jsx)(n.td,{children:"make plonk compatible"}),(0,i.jsxs)(n.td,{children:["The dusk-network plonk is compatible with ",(0,i.jsx)(n.code,{children:"no-std"})," so we are going to modify attributes according to ",(0,i.jsx)(n.a,{href:"https://github.com/paritytech/parity-scale-codec",children:"parity-codec"})," and ",(0,i.jsx)(n.code,{children:"Rng"})," to be compatible with\u3000Substrate environment. This step allows this pallet to work on resource-constrained execution environments like Substrate runtime, attributes should be modified in accordance with SCALE codec and some versions of Rng can\u2019t be compiled to wasm so we need to research and make it stable as necessary."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"right"},children:"2."}),(0,i.jsx)(n.td,{children:"implement zkSNARK plonk pallet"}),(0,i.jsx)(n.td,{children:"We will create a set of plonk-based zkSNARK libraries that allow a developer to build their own circuit and a user to prove their computation validity. Verifying proofs are done by on-chain. Creating the proofs are done by off-chain."})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:["This zkSNARK plonk is based on ",(0,i.jsx)(n.a,{href:"https://github.com/dusk-network/plonk",children:"dusk-network plonk"})," library.\nThis zkSNARK plonk pallet provides us following function."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Building circuits"}),"\n",(0,i.jsx)(n.li,{children:"Creating proofs"}),"\n",(0,i.jsx)(n.li,{children:"Verifying proofs"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"future-plans",children:"Future Plans"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Zk Rollup implementation"}),"\n",(0,i.jsx)(n.li,{children:"private transfer protocol"}),"\n"]}),"\n",(0,i.jsxs)(n.h2,{id:"additional-information-heavy_plus_sign",children:["Additional Information ","\u2795"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://www.plasmnet.io/",children:"web site"})}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://docs.plasmnet.io/",children:"document"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://twitter.com/Plasm_Network",children:"Twitter"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://medium.com/stake-technologies",children:"Medium"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/PlasmNetwork",children:"GitHub"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var i=t(96540);const s={},l=i.createContext(s);function r(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);