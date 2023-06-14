"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[88552],{1294:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var n=a(87462),r=(a(67294),a(3905));a(95657);const i={},o="Odyssey - Momentum",l={unversionedId:"applications/odyssey_momentum",id:"applications/odyssey_momentum",title:"Odyssey - Momentum",description:"- Team Name: Odyssey B.V.",source:"@site/applications/odyssey_momentum.md",sourceDirName:"applications",slug:"/applications/odyssey_momentum",permalink:"/applications/odyssey_momentum",draft:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/applications/odyssey_momentum.md",tags:[],version:"current",frontMatter:{}},s={},m=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-",level:2},{value:"Overview",id:"overview",level:3},{value:"Tagline: Staking in NFTs",id:"tagline-staking-in-nfts",level:4},{value:"Project Details",id:"project-details",level:3},{value:"Momentum Stack",id:"momentum-stack",level:3},{value:"Stake Pallet",id:"stake-pallet",level:4},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team LinkedIn Profiles (if available)",id:"team-linkedin-profiles-if-available",level:3},{value:"Development Status \ud83d\udcd6",id:"development-status-",level:2},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 Stake Pallet",id:"milestone-1-stake-pallet",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information \u2795",id:"additional-information-",level:2}],p={toc:m},u="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"odyssey---momentum"},"Odyssey - Momentum"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Team Name:")," Odyssey B.V."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Payment Address:")," 0x826fde427152d9fc0bf045dd858baa2de06b383b (USDC) "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/w3f/Grants-Program/tree/master#level_slider-levels"},"Level"),":")," 2")),(0,r.kt)("h2",{id:"project-overview-"},"Project Overview \ud83d\udcc4"),(0,r.kt)("h3",{id:"overview"},"Overview"),(0,r.kt)("h4",{id:"tagline-staking-in-nfts"},"Tagline: Staking in NFTs"),(0,r.kt)("p",null,"Odyssey is building Momentum, an open source, metaverse for digital societies. "),(0,r.kt)("p",null,"The Momentum stack enables people to jointly build their own 3D worlds as well as develop and integrate plugins to unlock a wide range of decentralized 3D social action medium use cases. "),(0,r.kt)("p",null,"The Momentum network enables these different worlds, activities and people to come together, without the need for a middleman or land sales. For this purpose, we built the DRIVE parachain, which has three main functions: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"On-chain ownership and coordination through NFTs of nodes, 3D worlds, sub-spaces and personal profiles."),(0,r.kt)("li",{parentName:"ul"},"On-chain connections between people, worlds and spaces and social capital allocation through staking in worlds, sub-spaces and people."),(0,r.kt)("li",{parentName:"ul"},"On-chain earning models for example for worlds and plugins.")),(0,r.kt)("p",null,"Momentum sees the metaverse as a novel communications medium and provides the infrastructure for a new user experience, where social, economic and cultural activities, both on-chain and off-chain are intertwined and strengthen each other. With ",(0,r.kt)("strong",{parentName:"p"},"Kusama (and optionally Polkadot) as its primary digital public infrastructure"),", Momentum is co-created, governed and owned by its users. "),(0,r.kt)("p",null,"DRIVE provides the users in the network with a universal way to turn their connections and activities into social capital and earnings. The goal is to enable users of these digital societies to thrive, by prioritizing resource allocation (e.g. funding, talent, knowledge) in general, optimizing network effects (e.g. connectivity, serendipity, virality), and a better user experience (e.g. search results, timelines and suggestions) based on the user's skin in the game. "),(0,r.kt)("p",null,"We must build a parachain with on top of that a number of customized Substrate pallets. The functionality subject of this aplication is Staking in NFTs."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Stake Pallet"),(0,r.kt)("br",{parentName:"li"}),"Within Momentum User Profiles, Worlds, Spaces and Subspaces are NFT's. The Stake pallet is going to add a variety of staking options that extend the current Proof of Staking mechanisms. This is done by providing functionality of staking in NFTs (or possibly any asset) in order to incentivize the creators/ owners and reward the stakers.")),(0,r.kt)("p",null,"*For the Stake pallet it is most likely that we would need to write a custom NFT pallet or a pallet that complements the Uniques pallet. As a result our delivery might include mutiple pallets."),(0,r.kt)("h3",{id:"project-details"},"Project Details"),(0,r.kt)("h3",{id:"momentum-stack"},"Momentum Stack"),(0,r.kt)("p",null,"The Momentum stack as displayed in the figure below is already ",(0,r.kt)("a",{parentName:"p",href:"https://kusama.momentum.xyz/"},"operational")," and completely ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/momentum-xyz"},"open source"),", except for the DRIVE 'node', which is under development."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://drive.google.com/uc?id=1y1mrEyELIMRoJzClmhP-V8LCvn1qLzDk",alt:"Momentum stack layers"}),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("em",{parentName:"p"},"figure 1")),(0,r.kt)("p",null,"The scope of this project is the development of custom Stake pallets (marked green in figure 1). Besides that, it is most likely that we would need to write a custom NFT pallet or a pallet that complements the Uniques pallet."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Note: This information below contains an early preview of the Stake Pallet and might be subject to changes.")),(0,r.kt)("h4",{id:"stake-pallet"},"Stake Pallet"),(0,r.kt)("p",null,"The Stake pallet is going to add a variety of staking options that extend the current Proof of staking mechanisms.",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("img",{parentName:"p",src:"https://drive.google.com/uc?id=1TFgfgSwDOrfrTR4qE-7OoXyOaqQI4DO0",alt:"stake pallet overview"}),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("em",{parentName:"p"},"figure 2")),(0,r.kt)("p",null,"It's not clear at the given time if the Stake Pallet will be one or more pallets. It will take care of the staking on NFT's and making rewards available to the stakers."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Publicly Exposed Methods"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Rust"},"pub fn stake_on(origin: OriginFor<T>, asset: T::Asset , controller: T::AccountId, stash: T::AccountId, amount: T::Balance) -> DispatchResultWithPostInfo\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Rust"},"pub fn unstake_on(origin: OriginFor<T>, asset: T::Asset, controller: T::AccountId, stash: T::AccountId, amount: T::Balance) -> DispatchResultWithPostInfo\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Rust"},"pub fn set_controller_of(origin: OriginFor<T>, asset: T::Asset, stash: T::AccountId, controller: T::AccountId, new_controller_wallet: T::AccountId) -> DispatchResultWithPostInfo\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Rust"},"pub fn set_stash_of(origin: OriginFor<T>, asset: T::Asset, controller: T::AccountId, stash: T::AccountId) -> DispatchResultWithPostInfo\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Rust"},"pub fn set_admin(origin: OriginFor<T>, new_admin_addr: T::AccountId) -> DispatchResultWithPostInfo\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Rust"},"pub fn get_rewards(origin: OriginFor<T>, asset: T::Asset, controller: T::AccountId, stash: T::AccountId) -> DispatchResultWithPostInfo\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Rust"},"pub fn expired_rewards(origin: OriginFor<T>) -> DispatchResultWithPostInfo\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Runtime Storage"),"  "),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Asset Info"),(0,r.kt)("br",{parentName:"p"}),"\n","Info regarding the asset that is being staked to.  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Rust"},"pub type AssetInfos<T> = StorageDoubleMap<_, Twox64Concat, T::AssetCollId, Twox64Concat, T:AssetId, AssetInfo<T::Balance, T::CurrencyId>, ValueQuery>;\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Ledger info"),(0,r.kt)("br",{parentName:"p"}),"\n","Ledger with general information about a controller account.  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Rust"},"pub type LedgerInfo<T> = StorageMap<_, Twox64Concat, T::AccountId, Ledger<T::Balance, T::CurrencyId>>\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Current era"),(0,r.kt)("br",{parentName:"p"}),"\n","Info about the current era.  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Rust"},"pub type CurrentEra<T> = StorageValue<_, EraInfo, ValueQuery>\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Next era starting block"),(0,r.kt)("br",{parentName:"p"}),"\n","Info about in which block the next era will start  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Rust"},"pub type NextEraStartingBlock<T: Config> = StorageValue<_, T::BlockNumber, ValueQuery>\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Storage Version"),(0,r.kt)("br",{parentName:"p"}),"\n","Info about the storage version of this pallet.  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Rust"},"pub(crate) type StorageVersion<T> = StorageValue<_, Version, ValueQuery>\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Use Case Diagram"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("img",{parentName:"p",src:"https://drive.google.com/uc?id=1Q3fn92yZ0dRwTDG5s9sJPXTN4BU3NYyB",alt:"Use Case Diagram Stake Pallet"}),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("em",{parentName:"p"},"figure 3")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Out-of-scope"),(0,r.kt)("br",{parentName:"p"}),"\n","This project will not produce a parachain nor any of the non-token related or visual aspects. We have extensive backing from well-known Web3 builders and ecosystem leaders as well as the European Union for this part. "),(0,r.kt)("h3",{id:"ecosystem-fit"},"Ecosystem Fit"),(0,r.kt)("p",null,"We received two grants of the KSM treasury to build (",(0,r.kt)("a",{parentName:"p",href:"https://kusama.polkassembly.io/motion/436"},"1"),") and after succesful launch expand (",(0,r.kt)("a",{parentName:"p",href:"https://kusama.polkassembly.io/motion/499"},"2"),") the ",(0,r.kt)("a",{parentName:"p",href:"https://kusama.momentum.xyz/"},"Kusamaverse"),". The Kusamaverse functions as a town hall for the Dotsama ecosystem. ",(0,r.kt)("strong",{parentName:"p"},"Momentum is the embodiment of an overarching vision")," enabling different worlds, activities and people to come together, without the need for a middleman or land sales. Momentum is co-created, governed and owned by its users."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Momentum is using Kusama (and optionally Polkadot) as its primary digital public infrastructure"),(0,r.kt)("li",{parentName:"ul"},"Momentum will be launched as a parachain on Kusama (and optionally Polkadot in a later stage)"),(0,r.kt)("li",{parentName:"ul"},"Momentum has an extensive community that actively participates in building Momentum. 200 is an estimate of active contributors based on GitHub commits, feedback during sessions and idea generation. Our community is over 7,000 people strong being a mix of web3 and non-web3 participants."),(0,r.kt)("li",{parentName:"ul"},"Momentum provides a new ecosystem with business cases for builder teams, individual developers, hosting companies, and tech- and non-tech entrepreneurs."),(0,r.kt)("li",{parentName:"ul"},"Momentum provides a bridge between the WEB2 and WEB3 community.")),(0,r.kt)("p",null,"What makes us different:\nWe see the metaverse as a new social communications medium and the potential driver for mainstream adoption of web3 technologies. The potential is designing and launching entirely new user experiences, rather than doing the web2/2d consumer experience and slapping a 3D background on it (a.k.a. a recorded concert in Fortnite that you can watch/consume or selling land). When unlocking the dotsama/ next generation of on-chain applications we enable consumers to become co-creators."),(0,r.kt)("h2",{id:"team-"},"Team \ud83d\udc65"),(0,r.kt)("h3",{id:"team-members"},"Team members"),(0,r.kt)("p",null,"Odyssey  has over 30 people working on Momentum and is still growing. Odyssey works in tracks with dedicated team members. The Token Track Team will be primarily responsible for building the Substrate Pallets. "),(0,r.kt)("p",null,"OVERALL ARCHITECT: Anton Starikov (CTO)"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"TOKEN TRACK TEAM"),"   "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"TRACK LEAD: Dave Hoogendoorn"),(0,r.kt)("li",{parentName:"ul"},"RUST DEVELOPER: Denis Cavalli "),(0,r.kt)("li",{parentName:"ul"},"WEB3ANALYST: Tim Jansen  ")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"All team members are solely dedicated to the token Track.")),(0,r.kt)("h3",{id:"contact"},"Contact"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Contact Name:")," Dave Hoogendoorn"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Contact Email:")," ",(0,r.kt)("a",{parentName:"li",href:"mailto:dh@odyssey.org"},"dh@odyssey.org")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Website:")," ",(0,r.kt)("a",{parentName:"li",href:"https://odyssey.org/"},"https://odyssey.org/"))),(0,r.kt)("h3",{id:"legal-structure"},"Legal Structure"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Registered Address:")," Westerhaven 13-7, 9718AW Groningen, The Netherlands"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Registered Legal Entity:")," Odyssey B.V. (CoC 66693640)")),(0,r.kt)("h3",{id:"teams-experience"},"Team's experience"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Anton Starikov")," has been architecting and leading development of software solutions for over 20 years in academic (computational physics) and industrial (Shell, AVL) settings. In addition, he was working and consulting on the topics of optimization on various levels (from hardware level through software up to the processes). Currently working as CTO of Odyssey, Anton is performing the role of platform architect."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Dave Hoogendoorn")," is an experienced programme manager and has been active in the space for over 5 years. Dave is co-founder of WEB3SCAN (",(0,r.kt)("a",{parentName:"p",href:"https://medium.com/web3foundation/web3-foundation-grants-wave-one-winners-2a9cd39f1fbc"},"W3F Grants WAVE 1 participant with Polkascan"),"), former Kusama Treasury Council member (Polkascan multi-sig) and previously held a board position at the ",(0,r.kt)("a",{parentName:"p",href:"https://polkascan.org/"},"Polkascan Foundation"),". Dave has been following Substrate and the Dotsama ecosystem from the early beginnings. "),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Denis Cavalli")," is a Senior Rust Software Engineer with a background on embedded systems and R&D. Since 2021 engaged with the WEB3 environment, has experimented on Ethereum/Solidity, Solana and worked professionally with Helium in 2022. Now is focused on building the metaverse that will empower people collaboration on the Dotsama ecosystem, using Substrate as the main framework."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Tim Jansen")," is a Polkadot Ambassador and has been working on crypto and blockchain for over 7 years. He has developed smart contracts on Ethereum, implemented decentralized storage solutions such as swarm and IPFS, consulted on blockchain at ",(0,r.kt)("a",{parentName:"p",href:"https://www.iso.org/member/2027.html"},"ISO"),", audited smart contract code of ",(0,r.kt)("a",{parentName:"p",href:"https://www.tno.nl/en/about-tno/"},"TNO"),", launched several live applications using blockchain for auditing, supply chain and SSI at Visma and has a deep understanding of cryptography including zero knowledge proofs. In his free time he researches and experiments with new crypto technologies."),(0,r.kt)("h3",{id:"team-code-repos"},"Team Code Repos"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/momentum-xyz"},"https://github.com/momentum-xyz")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/momentum-xyz/drive"},"https://github.com/momentum-xyz/drive")," (private for now)")),(0,r.kt)("p",null,"GitHub accounts of our team members:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/deniscavalli"},"https://github.com/deniscavalli"))),(0,r.kt)("h3",{id:"team-linkedin-profiles-if-available"},"Team LinkedIn Profiles (if available)"),(0,r.kt)("p",null,"Organisation:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.linkedin.com/company/odysseyprogram"},"https://www.linkedin.com/company/odysseyprogram"))),(0,r.kt)("p",null,"Team:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/deniscavalli/"},"https://www.linkedin.com/in/deniscavalli/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/timjanssen89/"},"https://www.linkedin.com/in/timjanssen89/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/antst/"},"https://www.linkedin.com/in/antst/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/dhoogendoorn/"},"https://www.linkedin.com/in/dhoogendoorn/"))),(0,r.kt)("h2",{id:"development-status-"},"Development Status \ud83d\udcd6"),(0,r.kt)("p",null,"Momentum is currently built as can been seen on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/momentum-xyz"},"GitHub"),". Momentum Release notes are regularly updated and can be found ",(0,r.kt)("a",{parentName:"p",href:"https://momentum.xyz/release-notes"},"here"),". "),(0,r.kt)("p",null,"Treasury Proposals regarding the Kusamaverse can be found here:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://kusama.polkassembly.io/motion/436"},"#436 Building the Kusamaverse - milestone 1")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://kusama.polkassembly.io/motion/499"},"#499 Building the Kusamaverse - Milestone 2"))),(0,r.kt)("p",null,"Our ",(0,r.kt)("a",{parentName:"p",href:"https://discord.com/channels/667280778731978753/882923345073541171"},"Discord Channel")," and ",(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/MomentumXYZ"},"Twitter Channel")," are used as general means of communication towards the Momentum and Kusamaverse community. It provides lots of information about community engagement, new developments and improvements."),(0,r.kt)("p",null,"Academic references:   "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.rug.nl/society-business/centre-for-entrepreneurship/research/odyssey/odyssey-momentum-research-project?lang=en"},"Odyssey Momentum research project")," by the University of Groningen, researching how teamwork is related to the success of innovative and entrepreneurial projects in context of \u201cOdyssey Momentum\u201d, the world\u2019s biggest online Blockchain & AI Hackathon held in July 2021.")),(0,r.kt)("p",null,"Other channels are ",(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/Intobitcoin"},"YouTube")," and ",(0,r.kt)("a",{parentName:"p",href:"https://momentum.xyz/"},"our foundation website "),"."),(0,r.kt)("h2",{id:"development-roadmap-"},"Development Roadmap \ud83d\udd29"),(0,r.kt)("h3",{id:"overview-1"},"Overview"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Estimated duration:")," 15 Weeks"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"FTE:"),"  1,5"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Costs:")," 30,000 USD")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Note: Please follow the disussion ",(0,r.kt)("a",{parentName:"em",href:"https://github.com/w3f/Grants-Program/pull/1221"},"github")," for details on the costs."),"   "),(0,r.kt)("h3",{id:"milestone-1-stake-pallet"},"Milestone 1 Stake Pallet"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Estimated duration:")," 15 Weeks"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"FTE:"),"  1,5"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Costs:")," 30,000 USD")),(0,r.kt)("p",null,"This milestone delivers at least one (but maybe more) pallets to enable staking in Momentum's User Profile, World, Space and Subspace NFTs (or possibly any asset) in order to incentivize the creators/ owners and reward the stakers."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,r.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,r.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0a."),(0,r.kt)("td",{parentName:"tr",align:null},"License"),(0,r.kt)("td",{parentName:"tr",align:null},"GNU General Public License v3.0.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0b."),(0,r.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,r.kt)("td",{parentName:"tr",align:null},"We will provide both inline documentation of the code and a basic tutorial that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0c."),(0,r.kt)("td",{parentName:"tr",align:null},"Testing and Testing Guide"),(0,r.kt)("td",{parentName:"tr",align:null},"We will provide both inline documentation of the code and a basic tutorial that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0d."),(0,r.kt)("td",{parentName:"tr",align:null},"Docker"),(0,r.kt)("td",{parentName:"tr",align:null},"We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"1a."),(0,r.kt)("td",{parentName:"tr",align:null},"Basic stake pallet"),(0,r.kt)("td",{parentName:"tr",align:null},"Storage V1 defined and implemented as described in Milestone 1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"1b."),(0,r.kt)("td",{parentName:"tr",align:null},"Basic stake pallet"),(0,r.kt)("td",{parentName:"tr",align:null},"Staking / Unstaking on NFTs operational")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"1c."),(0,r.kt)("td",{parentName:"tr",align:null},"Basic stake pallet"),(0,r.kt)("td",{parentName:"tr",align:null},"Handling Rewards operational")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"2a."),(0,r.kt)("td",{parentName:"tr",align:null},"Extended stake pallet"),(0,r.kt)("td",{parentName:"tr",align:null},"Storage V2 defined and implemented as succesor of V1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"2b."),(0,r.kt)("td",{parentName:"tr",align:null},"Extended stake pallet"),(0,r.kt)("td",{parentName:"tr",align:null},"Fractionalized NFTs implemented")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"2c."),(0,r.kt)("td",{parentName:"tr",align:null},"Extended stake pallet"),(0,r.kt)("td",{parentName:"tr",align:null},"Configurable parameters and rewards operational. Staking rewards are divided using some formula using configurable parameters per entity, that sets the ratio  between the staker, the entity that has been staked in, and the commission an entity received and the amount received by the Treasury.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"2d."),(0,r.kt)("td",{parentName:"tr",align:null},"Management pallet"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional pallet for managing the parameters and rewards and/or managing the payment of the rewards.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"3a."),(0,r.kt)("td",{parentName:"tr",align:null},"Generalized stake pallet"),(0,r.kt)("td",{parentName:"tr",align:null},"Enabling data type configuration to enable users to configure their data type at instantiation on the runtime.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"4a."),(0,r.kt)("td",{parentName:"tr",align:null},"Generalized stake pallet"),(0,r.kt)("td",{parentName:"tr",align:null},"Delivery of the Stake pallet (maybe more than one) enabling Staking on assets (NFTs) and rewards management including documentation.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"4b."),(0,r.kt)("td",{parentName:"tr",align:null},"Benchmarking report(s)"),(0,r.kt)("td",{parentName:"tr",align:null},"Benchmarking reports available")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"4c."),(0,r.kt)("td",{parentName:"tr",align:null},"Pallet(s) in production"),(0,r.kt)("td",{parentName:"tr",align:null},"Pallet integrated on the parachain runtime as an example of the first implementation of the NFT stake pallet, enabling active maintenance of the repo based on lessons learned.")))),(0,r.kt)("h2",{id:"future-plans"},"Future Plans"),(0,r.kt)("p",null,"Odyssey is planning a 25+ web3 community teams 4-week hackathon in May 2023, with leading Dotsama parachain and ecosystem parties, as part of a 9 month innovation program. During this program teams are guided to build new user experiences using Momentum and Dotsama tech and test how the DRIVE token strengthens their usecase. In September 2023 we will launch our DRIVE mainnet as a parachain on Kusama. "),(0,r.kt)("p",null,"In the coming  years we will keep investing in the Kusamaverse and momentum ecosystems, meaning:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Stimulate and support the creation of plugins. "),(0,r.kt)("li",{parentName:"ul"},"Expand our core stack based on community insights."),(0,r.kt)("li",{parentName:"ul"},"Invest in expanding the number of world node owners, support new initiatives and move to mainstream adoption in the coming years.")),(0,r.kt)("p",null,"Momentum provides a novel social communications medium and provides the infrastructure for a new user experience where social, economic and cultural activities, both on-chain and off-chain are intertwined. In these early beginnings we are only scratching the surface of what is possible. But we are convinced we are at the start of an exciting journey and with Momentum we are in for the long run."),(0,r.kt)("h2",{id:"additional-information-"},"Additional Information \u2795"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"How did you hear about the Grants Program?"),(0,r.kt)("br",{parentName:"p"}),"\n","We have Personal recommendations from people at Parity including Raul Romanutti and Daniel Cake-Baly. We also have relations with other parties that have successfully applied for WEB3 Grant "),(0,r.kt)("p",null,"We have not yet applied for any grants with the WEB3 Foundation."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Other information"),(0,r.kt)("br",{parentName:"p"}),"\n","Last but not least, we are proud to we have the ",(0,r.kt)("a",{parentName:"p",href:"https://sovereignnature.com/"},"Sovereign Nature Initiative")," organising a Hackathon in Momentum for the ",(0,r.kt)("a",{parentName:"p",href:"https://www.kenyawildlifetrust.org/"},"Kenya Wildlife Trust"),". Momentum enables true collaboration happening in real-time among 13 teams spread over 5+ countries. SNI has been hosting events in Momentum up to the 9th of November. Check it out on ",(0,r.kt)("a",{parentName:"p",href:"http://sni.momentum.xyz"},"SNI World"),"."))}d.isMDXComponent=!0}}]);