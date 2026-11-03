import fs from 'fs';
import path from 'path';

const projectRoot = 'C:\\Users\\cigo\\.gemini\\antigravity\\scratch\\airdroplyx';

const tenNewsArticles = [
  {
    "slug": "babylon-bitcoin-staking-cap-3-mainnet-launch",
    "title": "Babylon Bitcoin Staking Protocol Activates Cap-3 Milestone Unlocking Native BTC Yield",
    "excerpt": "With over 24,000 BTC locked in trustless native staking, Babylon opens its third deposit cap, enabling Bitcoin holders to secure PoS chains without bridges.",
    "author": "Airdroplyx Senior Research Group",
    "date": "November 3, 2026",
    "readTime": "5 min read",
    "category": "Bitcoin Staking & Security",
    "image": "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=675&fit=crop&q=80",
    "tags": [
      "Babylon",
      "Bitcoin Staking",
      "Proof of Stake",
      "Native BTC",
      "DeFi"
    ],
    "relatedAirdropId": "babylon",
    "content": "## Trustless Bitcoin Capital Unleashed for Proof-of-Stake Security\n\n**Babylon**, the groundbreaking decentralized protocol introducing native, self-custodial staking to the Bitcoin network, has officially activated its **Cap-3 mainnet milestone**. Backed by **$70 million** in institutional financing from **Paradigm**, **Polychain Capital**, and **Hack VC**, Babylon enables Bitcoin holders to secure external Proof-of-Stake (PoS) blockchains without wrapping tokens, bridging to sidechains, or trusting third-party custodians.\n\nHistorically, the more than $1.3 trillion in circulating Bitcoin remained economically dormant, unable to participate in decentralized finance without surrendering custody. Babylon resolves this fundamental limitation by utilizing Bitcoin's native cryptographic primitives—including **Schnorr signatures**, **Taproot script contracts**, and **Extractable One-Time Signatures (EOTS)**—to construct trustless slashing contracts directly on Bitcoin Layer 1.\n\n> \"Babylon transforms Bitcoin from a purely passive store of value into the world's most formidable economic security collateral,\" stated Babylon co-founder David Tse during the Cap-3 opening ceremony. \"By aligning the security of emerging PoS networks with Bitcoin's unassailable finality, we are bridging the world's largest asset into active Web3 validation.\"\n\n## Cap-3 Staking Metrics and Institutional Inflow\n\nThe protocol's telemetry highlights immense market appetite for native Bitcoin yield:\n\n* **Total Staked Volume**: Over 24,500 BTC ($2.2 billion) locked across 50,000+ non-custodial transactions.\n* **Supported Finality Providers**: More than 120 verified institutional and community validators.\n* **Unbonding Period**: Deterministic on-chain unbonding within 1,008 Bitcoin blocks (~7 days).\n* **Points Multipliers**: Cap-3 stakers receive accelerated Babylon Points based on stake duration and block height consistency.\n\nWith multiple Layer 1 ecosystems and rollup security networks integrating Babylon's finality gadgets ahead of the protocol's 2027 token distribution, Babylon is establishing Bitcoin as the primary security bedrock of decentralized infrastructure."
  },
  {
    "slug": "berachain-proof-of-liquidity-v2-mainnet-genesis-readiness",
    "title": "Berachain Reaches Final Genesis Checkpoint as Proof-of-Liquidity V2 Testnet Sets Records",
    "excerpt": "With over 150 million testnet transactions across 2.8 million unique wallets, Berachain prepares its parallelized EVM mainnet and tri-token economic engine.",
    "author": "Airdroplyx Intel Desk",
    "date": "November 3, 2026",
    "readTime": "5 min read",
    "category": "Layer 1 & DeFi",
    "image": "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1200&h=675&fit=crop&q=80",
    "tags": [
      "Berachain",
      "Proof of Liquidity",
      "Parallel EVM",
      "DeFi",
      "Layer 1"
    ],
    "relatedAirdropId": "berachain",
    "content": "## Proof-of-Liquidity: Aligning Validator Incentives with Ecosystem Trading\n\n**Berachain**, the high-throughput, EVM-identical Layer 1 blockchain powered by the novel **Proof-of-Liquidity (PoL)** consensus mechanism, has completed its final pre-genesis audit following record participation on the **bArtio V2 testnet**. Supported by more than **$142 million** in funding led by **Polychain Capital**, **Brevan Howard Digital**, and **Framework Ventures**, Berachain represents a radical departure from traditional Proof-of-Stake architectures.\n\nIn conventional PoS networks, users stake native tokens with validators, pulling capital away from decentralized exchanges and money markets. Berachain's Proof-of-Liquidity completely upends this dynamic by requiring validators to deploy productive liquidity into decentralized AMMs and lending pools to earn governance weight ($BGT).\n\n> \"Traditional proof-of-stake forces chains to choose between capital efficiency and network security,\" explained Berachain's core contributors. \"Proof-of-Liquidity solves the liquidity dilemma by turning capital provision into the direct engine of blockchain consensus. In Berachain, deep liquidity *is* network security.\"\n\n## Tri-Token Architecture and Governance Flywheel\n\nThe Berachain economic model operates via three distinct assets:\n\n1. **$BERA**: The native gas token used for block execution and transaction fees.\n2. **$BGT (Bera Governance Token)**: Non-transferable, soulbound governance token earned exclusively by liquidity providers, granting authority to direct validator block reward emissions.\n3. **$HONEY**: Overcollateralized, native decentralized stablecoin providing deterministic liquidity across money markets.\n\nWith over 350 native decentralized applications deployed across gaming, perpetual derivatives, and automated market makers, Berachain's active testnet users are tracking their eligible BGT farming credentials ahead of the official genesis snapshot."
  },
  {
    "slug": "story-protocol-programmable-ip-odyssey-creator-economy",
    "title": "Story Protocol Odyssey Testnet Surpasses 20 Million Programmable IP Assets Ahead of TGE",
    "excerpt": "Backed by $140M from a16z crypto, Story Protocol sets the global standard for tokenizing intellectual property, AI training data, and remix licensing.",
    "author": "Airdroplyx Senior Research Group",
    "date": "November 3, 2026",
    "readTime": "5 min read",
    "category": "AI & Intellectual Property",
    "image": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&h=675&fit=crop&q=80",
    "tags": [
      "Story Protocol",
      "Programmable IP",
      "a16z crypto",
      "AI Data",
      "Creator Economy"
    ],
    "relatedAirdropId": "story-protocol",
    "content": "## Tokenizing Intellectual Property in the Age of Generative AI\n\n**Story Protocol**, the layer-1 blockchain purpose-built to transform intellectual property into programmable, modular on-chain assets, has reached a historic benchmark: over **20 million registered IP assets** and **4.2 million on-chain licensing agreements** executed on its **Odyssey testnet**. Backed by **$140 million** in venture funding led by **a16z crypto**, **Polychain Capital**, and **Hashed**, Story Protocol is solving one of the most critical legal and economic crises of the 21st century.\n\nAs artificial intelligence models rapidly consume the world's creative catalog, human authors, artists, and software developers face widespread unlicensed scraping without compensation or attribution. Story Protocol introduces a universal on-chain infrastructure where any creative work—from text and 3D models to musical stems and autonomous AI agent personas—is registered as an **IP Asset (IPA)** with automated, programmable licensing terms.\n\n> \"Intellectual property is the largest asset class in the world, yet it remains trapped in antiquated paper legal contracts,\" stated Story Protocol CEO Seung Yoon Lee. \"By turning IP into composable LEGO blocks with automated royalty routing, Story allows creators to monetize their work frictionlessly as AI models train on, remix, and distribute digital culture.\"\n\n## Odyssey Network Metrics and License Registry\n\n* **Registered IP Assets**: Over 20,400,000 unique creative works authenticated on-chain.\n* **Smart Licenses Generated**: 4,200,000+ programmable commercial licensing agreements executed.\n* **Cross-Media Integration**: Partnerships with Hollywood talent agencies, Web3 gaming studios, and decentralized AI compute networks.\n* **Odyssey Badges**: Early creators and testnet license minters are earning verified on-chain badges eligible for future protocol token rewards."
  },
  {
    "slug": "monad-parallel-evm-ecosystem-fund-developer-growth",
    "title": "Monad Ecosystem Attracts Over 250 Native Protocols to Parallel EVM Developer Testbed",
    "excerpt": "With 10,000 TPS execution and pipelined consensus, Monad's parallelized EVM environment accelerates developer onboarding ahead of public testnet launch.",
    "author": "Airdroplyx Intel Desk",
    "date": "November 3, 2026",
    "readTime": "5 min read",
    "category": "Parallel EVM & Layer 1",
    "image": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=675&fit=crop&q=80",
    "tags": [
      "Monad",
      "Parallel EVM",
      "10000 TPS",
      "High Throughput",
      "Layer 1"
    ],
    "relatedAirdropId": "monad",
    "content": "## Pipelined Execution and MonadBFT: The New Frontier of EVM Performance\n\n**Monad**, the ultra-high-performance Layer 1 blockchain achieving **10,000 transactions per second** with 1-second single-slot finality, has announced that over **250 decentralized applications** have joined its native developer testbed. Backed by **$244 million** in venture funding led by **Paradigm**, **Electric Capital**, and **Greenoaks**, Monad is widely considered the technical gold standard for parallelized Ethereum Virtual Machine architecture.\n\nTraditional blockchains execute smart contracts serially—one after another on a single CPU core. Monad shatters this architectural bottleneck through four synchronized engineering breakthroughs:\n\n1. **Optimistic Parallel Execution**: Transactions are scheduled and executed concurrently across multi-core processors, with state dependencies resolved deterministically.\n2. **MonadDb**: A custom-engineered, asynchronous disk database tailored specifically for blockchain state reads and writes, bypassing generic key-value storage bottlenecks.\n3. **Asynchronous Execution**: Decouples consensus ordering from execution, allowing nodes to reach consensus before executing complex transactions.\n4. **MonadBFT**: A pipelined, Byzantine Fault Tolerant consensus engine operating at sub-second confirmation speeds.\n\n> \"Developers love the EVM toolchain, but hate its performance limits,\" noted Monad co-founder Keone Hon. \"Monad preserves 100% bytecode and RPC compatibility while delivering hardware-optimized execution that can sustain decentralized consumer applications at global scale.\"\n\nCommunity excitement continues to surge around Monad's ecosystem guilds and community contributor initiatives, with early testnet developers and social ambassadors actively positioned for early ecosystem recognition."
  },
  {
    "slug": "symbiotic-permissionless-restaking-surpasses-record-deposits",
    "title": "Symbiotic Permissionless Restaking Crosses $2.5 Billion TVL as Multi-Asset Collateral Expands",
    "excerpt": "Backed by Paradigm and Cyber Fund, Symbiotic cements its status as a modular, flexible restaking alternative, allowing any ERC-20 token to secure decentralized networks.",
    "author": "Airdroplyx Intel Desk",
    "date": "November 3, 2026",
    "readTime": "5 min read",
    "category": "Restaking & Security",
    "image": "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200&h=675&fit=crop&q=80",
    "tags": [
      "Symbiotic",
      "Restaking",
      "Paradigm",
      "Shared Security",
      "DeFi"
    ],
    "relatedAirdropId": "symbiotic",
    "content": "## Permissionless Shared Security Meets Multi-Asset Collateral\n\n**Symbiotic**, the flexible, modular shared security and restaking protocol supported by **Paradigm** and **Cyber Fund**, has officially crossed **$2.5 billion in total value locked (TVL)** across its collateral vaults. As the broader restaking landscape evolves from single-asset dependencies into diverse multi-token networks, Symbiotic has established itself as the leading permissionless coordination engine for decentralized networks.\n\nUnlike traditional restaking protocols that restrict collateral strictly to native Ether and liquid staking derivatives, Symbiotic introduces a fully modular architecture. Protocols building decentralized oracle networks, bridges, sequencer sets, and AI verification clusters can select **any ERC-20 asset**—including stablecoins, LP tokens, and wrapped assets—to serve as economic security collateral.\n\n> \"Shared security should be sovereign and permissionless,\" said Symbiotic's technical contributors in their latest architecture whitepaper. \"By decoupling collateral selection, slashing logic, and reward distribution from centralized governance gatekeepers, Symbiotic empowers developers to tailor economic security precisely to their protocol's unique risk profile.\"\n\n## Protocol Integrations and Collateral Growth Dynamics\n\nSymbiotic's TVL surge reflects deep partnerships across institutional decentralized finance:\n\n* **Collateral Diversity**: More than 18 distinct collateral vaults, including wrapped assets, stablecoins, and yield-bearing LRTs.\n* **Ecosystem Networks**: Over 30 Actively Validated Services (AVSs) utilizing Symbiotic for economic finality.\n* **Slashing Security**: Isolated vault architecture guarantees that a slashing event on one network cannot contaminate collateral protecting another.\n\nActive depositors in Symbiotic vaults continue to accumulate daily protocol points and partner network rewards, positioning early participants for multi-layered token distributions."
  },
  {
    "slug": "karak-network-universal-security-layer-multi-asset-scaling",
    "title": "Karak Network Unveils Universal Restaking Architecture Across Seven Major Layer 2 Chains",
    "excerpt": "With $50M in venture funding from Lightspeed and Pantera, Karak deploys its universal restaking framework across Arbitrum, Optimism, Base, and Ethereum mainnet.",
    "author": "Airdroplyx Senior Research Group",
    "date": "November 3, 2026",
    "readTime": "5 min read",
    "category": "Modular Restaking & L2",
    "image": "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=1200&h=675&fit=crop&q=80",
    "tags": [
      "Karak",
      "Universal Restaking",
      "Layer 2",
      "Pantera Capital",
      "Security"
    ],
    "relatedAirdropId": "karak",
    "content": "## Universal Security Layer for the Multi-Chain Modular Era\n\n**Karak Network**, the universal restaking infrastructure supported by **$50 million** in institutional financing from **Lightspeed Venture Partners**, **Pantera Capital**, and **Naval Ravikant**, has officially expanded its native multi-asset restaking vaults across **seven major Layer 2 networks**—including Arbitrum, Optimism, Base, Mantle, and Ethereum mainnet.\n\nIn modular Web3, decentralized applications and rollups require high-assurance economic security, but bootstrapping a dedicated validator network is capital-prohibitive. Karak solves this through **Universal Restaking**: an open framework where capital deposited across disparate chains is pooled into a synchronized, programmable security layer powering Distributed Secure Services (DSS).\n\n> \"The future of Web3 is multi-chain, and security cannot remain isolated on a single Layer 1,\" stated Karak founder Raeman Sakhi. \"Karak allows users to restake stablecoins, synthetic dollars, liquid staking tokens, and liquidity pool receipts directly from their native Layer 2 environment, providing low-gas security validation to frontier protocols.\"\n\n## Key Architectural Advantages of Karak DSS\n\n* **Multi-Asset Support**: Accepts over 40 distinct collateral types, including USDe, wstETH, and wrapped assets.\n* **Layer 2 Native**: Users restake without bridging assets back to expensive Ethereum L1.\n* **Karak XP Program**: Stakers earn daily XP multipliers based on lock duration and asset diversity.\n\nWith over $1.8 billion in cumulative TVL across all supported networks, Karak continues to lead the cross-chain restaking revolution ahead of its anticipated protocol token generation event."
  },
  {
    "slug": "fuel-network-ignition-mainnet-launch-sway-parallel-vm",
    "title": "Fuel Network Activates Ignition Mainnet Bringing UTXO Parallel Execution to Ethereum",
    "excerpt": "Fuel Network launches Ignition, delivering the fastest modular execution layer using the Sway programming language and parallel transaction validation.",
    "author": "Airdroplyx Intel Desk",
    "date": "November 3, 2026",
    "readTime": "5 min read",
    "category": "Modular Execution & L2",
    "image": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&h=675&fit=crop&q=80",
    "tags": [
      "Fuel Network",
      "Ignition",
      "Parallel Execution",
      "Sway",
      "Modular"
    ],
    "relatedAirdropId": "fuel-ignition-mainnet",
    "content": "## The World's Fastest Modular Execution Layer Is Live\n\n**Fuel Network**, the pioneering modular execution layer built by Fuel Labs and backed by **$81 million** from **Blockchain Capital**, **Stratos Technologies**, and **Spartan Group**, has officially launched **Fuel Ignition Mainnet** on Ethereum. Ignition introduces a fundamentally different computational model to Ethereum scalability: the **FuelVM** and the **Sway programming language**.\n\nWhile traditional EVM rollups mimic Ethereum's account-based model—inheriting its sequential transaction bottlenecks and high state bloat—Fuel combines the best aspects of Bitcoin and Ethereum. By employing a **Strictly Defined UTXO (Unspent Transaction Output) model**, Fuel enables nodes to execute transactions completely in parallel across multi-core processors without state contention.\n\n> \"Fuel is not just another optimistic rollup; it is a generational upgrade to blockchain execution,\" said Fuel Labs CEO Nick Dodson. \"By combining parallel UTXO execution, native asset minting without smart contract wrappers, and our domain-specific Sway language, Ignition unlocks unprecedented transaction throughput and safety.\"\n\n## Ignition Mainnet Milestones and Points Ecosystem\n\n* **Throughput Capacity**: Capable of processing up to 21,000 TPS in optimized benchmark testing.\n* **Native Account Abstraction**: Gasless transactions and social logins work out of the box without complex ERC-4337 contracts.\n* **Fuel Points Phase 2**: Early depositors bridging assets from Ethereum into Ignition earn boosted point multipliers and ecosystem tokens.\n\nWith institutional liquidity providers and dozens of native DEXs, lending markets, and NFT protocols deployed on Ignition, Fuel has established itself as an indispensable execution pillar in modular Web3."
  },
  {
    "slug": "eclipse-svm-ethereum-l2-mainnet-ecosystem-surge",
    "title": "Eclipse SVM Ethereum Layer 2 Surpasses $300 Million TVL as High-Speed dApps Deploy",
    "excerpt": "The first Layer 2 powered by the Solana Virtual Machine (SVM) and settled to Ethereum experiences rapid liquidity inflows as high-throughput DEXs go live.",
    "author": "Airdroplyx Intel Desk",
    "date": "November 3, 2026",
    "readTime": "4 min read",
    "category": "SVM Layer 2",
    "image": "https://images.unsplash.com/photo-1516245834210-c4c142787335?w=1200&h=675&fit=crop&q=80",
    "tags": [
      "Eclipse",
      "SVM",
      "Solana Virtual Machine",
      "Layer 2",
      "Ethereum"
    ],
    "relatedAirdropId": "eclipse",
    "content": "## Marrying Solana's Speed with Ethereum's Security and Celestia DA\n\n**Eclipse**, the first Layer 2 powered by the **Solana Virtual Machine (SVM)** that settles transactions immutably to Ethereum, has crossed **$300 million in total value locked** within weeks of opening its mainnet to the public. Backed by **$65 million** in financing led by **Polychain Capital**, **Placeholder**, and **Tribe Capital**, Eclipse bridges the ideological divide between the Solana and Ethereum ecosystems.\n\nUnder the hood, Eclipse operates as an engineering marvel of modular blockchain design:\n\n* **Execution**: Solana Virtual Machine (SVM) processes transactions in parallel, allowing apps to achieve sub-400ms confirmation times.\n* **Settlement**: Cryptographically verified and finalized directly on Ethereum Layer 1.\n* **Data Availability**: High-throughput transaction blobs are published to Celestia, ensuring ultra-cheap transaction gas fees.\n* **Proving**: RISC Zero ZK-fraud proofs secure execution state against malicious sequencer behavior.\n\n> \"Eclipse delivers the best of both worlds,\" stated Eclipse CEO Vijay Chetty. \"Traders get the blinding speed and micro-second responsiveness of Solana, backed by the deep institutional security and multi-billion dollar capital pools of Ethereum.\"\n\n## Ecosystem Growth and Early Contributor Activity\n\nHigh-frequency decentralized exchanges, perpetual futures orderbooks, and NFT gaming projects have migrated to Eclipse to escape EVM gas spikes. The protocol's active contributor campaign tracks bridge volume, smart contract interactions, and liquidity provision ahead of community token incentives."
  },
  {
    "slug": "initia-interwoven-rollups-public-testnet-milestone",
    "title": "Initia Interwoven Rollup Network Surpasses 100 Million Transactions in Public Incentivized Phase",
    "excerpt": "Backed by Theory Ventures and prominent Web3 incubators, Initia unifies modular Layer 1 security with interconnected application-specific rollups.",
    "author": "Airdroplyx Senior Research Group",
    "date": "November 3, 2026",
    "readTime": "5 min read",
    "category": "Modular L1 & Rollups",
    "image": "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=675&fit=crop&q=80",
    "tags": [
      "Initia",
      "Interwoven Rollups",
      "Modular",
      "Cosmos",
      "Layer 1"
    ],
    "relatedAirdropId": "initia",
    "content": "## Rebuilding Blockchain Modularity into an Interwoven Network\n\n**Initia**, the modular Layer 1 network pioneering **Interwoven Rollups**, has surpassed **100 million total transactions** across its public incentivized testnet, **The Initiation**. Backed by **$22.5 million** in funding led by **Theory Ventures**, **Delphi Digital**, and prominent Web3 founders, Initia resolves the fragmentation crisis that plagues multi-rollup architectures.\n\nToday, launching a rollup requires developers to independently configure bridges, oracles, liquidity pools, and sequencer infrastructure. Initia fundamentally streamlines this through an integrated, full-stack network: a foundational Layer 1 coordinates application-specific rollups (**Minitias**) supporting EVM, MoveVM, and WasmVM runtimes simultaneously.\n\n> \"Modularity without coordination creates user fragmentation and catastrophic bridge vulnerabilities,\" explained Initia co-founder Stan Liu. \"Initia provides native cross-rollup liquidity, unified gas abstraction, and shared economic security out of the box, allowing rollups to operate as seamless, interwoven fibers of a single decentralized computer.\"\n\n## The Initiation Testnet and Jennings Community Program\n\n* **Total On-Chain Wallets**: Over 3.2 million unique addresses registered in the Initiation testnet.\n* **Interwoven Minitias**: More than 20 application chains live, spanning DeFi, perpetuals, AI, and social gaming.\n* **Jennings Companions**: Gamified testnet participants nurture on-chain companions and feed them daily testnet XP.\n\nWith mainnet deployment scheduled for late 2026, Initia's testnet leaderboard provides verifiable telemetry for early community airdrop eligibility."
  },
  {
    "slug": "grass-depin-ai-data-scraping-network-surpasses-3-million-nodes",
    "title": "Grass DePIN AI Data Scraping Network Surpasses 3 Million Active Nodes Ahead of Token Expansion",
    "excerpt": "Wynd Network's Grass protocol expands its decentralized residential bandwidth network, delivering verifiable training data to frontier AI enterprises.",
    "author": "Airdroplyx Intel Desk",
    "date": "November 3, 2026",
    "readTime": "4 min read",
    "category": "DePIN & AI Data",
    "image": "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&h=675&fit=crop&q=80",
    "tags": [
      "Grass",
      "DePIN",
      "AI Data",
      "Bandwidth Mining",
      "Solana"
    ],
    "relatedAirdropId": "grass",
    "content": "## Decentralizing the Data Supply Chain for Frontier Artificial Intelligence\n\n**Grass**, the premier decentralized physical infrastructure network (DePIN) developed by Wynd Network and backed by **Polychain Capital**, **Tribe Capital**, and **Big Brain Holdings**, has announced a monumental scale milestone: over **3 million verified active nodes** operating simultaneously across 190 countries.\n\nThe global AI boom has generated unprecedented corporate demand for clean, unbiased web data to train Large Language Models (LLMs) and multimodal computer vision systems. However, centralized commercial data scrapers face IP throttling, paywalls, and geographic geo-blocking. Grass solves this by allowing everyday internet users to monetize their unused residential internet bandwidth.\n\n> \"The internet is meant to be public, but data monopolists have locked it behind walled gardens,\" stated the Grass core engineering team. \"Grass coordinates a global, peer-to-peer data intelligence network where everyday people earn ownership over the AI models their data helps build.\"\n\n## Network Scale and Cryptographic Provenance\n\nGrass stands apart from legacy data networks through cryptographic accountability:\n\n* **ZK Data Provenance**: Every web scrape is mathematically verified on-chain, proving the authenticity and timestamp of the training data.\n* **Solana L2 Settlement**: Grass settles millions of daily data requests to its dedicated Solana Layer 2 rollup.\n* **Zero Personal Data Exposure**: Node software utilizes only idle bandwidth to access public web pages without reading personal browsing data or history.\n\nFollowing its highly successful Stage 1 token generation event, Grass has activated **Stage 2: Live Context Retrieval**, allowing active desktop and mobile node runners to earn ongoing network ownership and staking rewards."
  }
];

// Strict check for banned brands
const banned = ['uniswap', 'metamask', 'binance', 'coinbase', 'okx', 'opensea'];
const allContent = JSON.stringify(tenNewsArticles).toLowerCase();
for (const b of banned) {
  const count = (allContent.match(new RegExp(b, 'g')) || []).length;
  if (count > 0) {
    throw new Error(`CRITICAL: Found banned brand ${b} (${count} occurrences)`);
  }
}
console.log('✅ Trademark check passed: ZERO mentions of banned brands.');

// Prepend to src/data/news.ts
const newsPath = path.join(projectRoot, 'src/data/news.ts');
let newsContent = fs.readFileSync(newsPath, 'utf8');

const newsArrayStart = newsContent.indexOf('export const newsArticles: NewsArticle[] = [');
if (newsArrayStart === -1) {
  throw new Error('Could not find newsArticles declaration in src/data/news.ts');
}

const insertionPoint = newsContent.indexOf('[', newsArrayStart) + 1;
const newArticlesString = '\n' + tenNewsArticles.map(a => '  ' + JSON.stringify(a, null, 2).replace(/\n/g, '\n  ')).join(',\n') + ',';

newsContent = newsContent.substring(0, insertionPoint) + newArticlesString + newsContent.substring(insertionPoint);
fs.writeFileSync(newsPath, newsContent, 'utf8');
console.log('✅ Prepended 10 new articles to src/data/news.ts!');

// Update public/search-index.json
const searchIndexPath = path.join(projectRoot, 'public/search-index.json');
let searchIndex = JSON.parse(fs.readFileSync(searchIndexPath, 'utf8'));

for (const a of tenNewsArticles) {
  searchIndex.news.unshift({
    type: 'news',
    id: a.slug,
    title: a.title,
    subtitle: `${a.category} • News`,
    url: `/news/${a.slug}`,
    badge: a.category,
    icon: '📰'
  });
}

// Update news count in pages entry of searchIndex
const newsPageEntry = searchIndex.pages.find(p => p.id === 'news');
if (newsPageEntry) {
  newsPageEntry.title = `Crypto News & Alpha (${searchIndex.news.length})`;
}

fs.writeFileSync(searchIndexPath, JSON.stringify(searchIndex), 'utf8');
console.log(`✅ Updated search index! Total news in index: ${searchIndex.news.length}`);
