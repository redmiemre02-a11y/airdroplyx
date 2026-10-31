import fs from 'fs';
import path from 'path';

const airdropsPath = path.resolve('src/data/airdrops.ts');
const newsPath = path.resolve('src/data/news.ts');

const newAirdrops = [
  {
    id: "infrared-finance",
    name: "Infrared Finance",
    logo: "/images/airdrops/infrared-finance.svg",
    description: "Infrared Finance is the premier liquid staking and Proof-of-Liquidity (PoL) infrastructure for Berachain, backed by Binance Labs and Framework Ventures.",
    reward: "$IRED Token Distribution & Native iBGT Staking Yields",
    category: "DeFi / Liquid Staking",
    featured: true,
    status: "active",
    publishDate: "November 1, 2026",
    endTime: "Q1 2027",
    funding: "$2.5M Seed Round led by Binance Labs, Framework Ventures & Tribe Capital",
    investors: ["Binance Labs", "Framework Ventures", "Tribe Capital", "CitizenX"],
    refLink: "https://infrared.finance",
    overview: "Infrared Finance is engineering the foundational liquid staking protocol for the Berachain network. Designed to maximize capital efficiency under Berachain's novel Proof-of-Liquidity (PoL) consensus, Infrared introduces iBGT—a liquid version of Berachain's non-transferable BGT governance token—allowing validators and liquidity providers to capture staking rewards without locking up governance capital.",
    strategy: "Stake BERA and partner LP tokens into Infrared testnet vaults to earn iBGT and native Infrared Points. Maintain continuous weekly activity across Infrared testnet pools to maximize your allocation tier.",
    tokenomics: "The $IRED governance token powers validator direction, fee capture, and gauge voting within the Berachain Proof-of-Liquidity economy.",
    sybilSafety: "Avoid single-block split transfers. Maintain active on-chain balances and engage organically with Berachain faucet contracts.",
    steps: [
      "Obtain Berachain Artio/Bartio testnet BERA from the official network faucet.",
      "Connect your Web3 wallet to the Infrared Finance dApp interface at infrared.finance.",
      "Deposit testnet BERA or BERA-HONEY LP tokens into the designated Infrared liquid staking vaults.",
      "Receive iBGT receipt tokens in your wallet and monitor your accumulated native staking rewards.",
      "Stake iBGT into the Infrared governance gauge to unlock multiplier points for the upcoming $IRED airdrop.",
      "Join the official Infrared Discord server, verify your tester role, and submit testnet feedback in the designated channel."
    ],
    faqs: [
      {
        question: "What makes Infrared Finance unique on Berachain?",
        answer: "Infrared solves the liquidity lockup of Berachain's native BGT token by tokenizing it into liquid iBGT, enabling composable DeFi strategies while earning staking yield."
      },
      {
        question: "Is there any financial cost to participate?",
        answer: "No, the current testnet phase uses free Berachain testnet tokens, meaning you can qualify with zero real capital expenditure."
      }
    ],
    tier: "Tier 1",
    cost: "Free (Testnet)",
    stage: "Public Testnet",
    timeCommitment: "10 mins weekly",
    snapshot: "Prior to Berachain Mainnet Launch",
    estDate: "Q1 2027",
    socials: {
      twitter: "https://twitter.com/InfraredFinance",
      discord: "https://discord.gg/infrared",
      website: "https://infrared.finance"
    },
    isHot: true,
    isFeatured: true
  },
  {
    id: "mitosis-defi",
    name: "Mitosis",
    logo: "/images/airdrops/mitosis-defi.svg",
    description: "Mitosis is an Ecosystem-Owned Liquidity (EOL) Layer 1 protocol backed by Amber Group and Foresight, revolutionizing cross-chain DeFi yield.",
    reward: "$MITO Genesis Airdrop & Seasonal Matrix Expedition Marks",
    category: "Layer 1 / Cross-Chain DeFi",
    featured: false,
    status: "active",
    publishDate: "November 1, 2026",
    endTime: "Q1 2027",
    funding: "$7M Seed Round led by Amber Group, Foresight Ventures & GSR",
    investors: ["Amber Group", "Foresight Ventures", "GSR", "Big Brain Holdings"],
    refLink: "https://mitosis.org",
    overview: "Mitosis transforms liquidity provision by establishing Ecosystem-Owned Liquidity (EOL). Rather than relying on temporary mercenary liquidity, Mitosis pools assets across Ethereum, Arbitrum, and other EVM chains into unified yield-bearing vault derivatives (Hub Assets) that yield governance power and multi-layered DeFi dividends.",
    strategy: "Deposit supported assets (ETH, weETH, eETH) into Mitosis Matrix vaults to mint miAssets. Hold or deploy miAssets into integrated partner money markets to multiply Expedition Marks.",
    tokenomics: "The $MITO token governs cross-chain allocation parameters, revenue sharing from protocol-owned vaults, and node validation on the Mitosis chain.",
    sybilSafety: "Maintain vault deposits throughout the expedition epochs. Withdrawing early drastically reduces point tier multipliers.",
    steps: [
      "Access the Mitosis Expedition portal at mitosis.org and connect an EVM-compatible wallet.",
      "Select a supported network (Ethereum Mainnet or Arbitrum) and choose an asset to deposit (such as eETH or weETH).",
      "Confirm the vault deposit transaction to mint your equivalent miAssets on Mitosis.",
      "Navigate to the Mitosis Governance & Matrix tab to verify your daily accrued Expedition Marks.",
      "Complete ecosystem partner quests on Galxe/Intract linked to the Mitosis campaign for additional bonus multiplier badges.",
      "Hold your positions active across weekly epoch checkpoints to qualify for top-tier $MITO distribution."
    ],
    faqs: [
      {
        question: "What are miAssets?",
        answer: "miAssets represent your 1:1 backed deposit on Mitosis that continue to earn native underlying staking yield plus Mitosis network dividends."
      },
      {
        question: "Can I withdraw my deposit before the airdrop?",
        answer: "Yes, deposits are non-custodial and can be withdrawn, but maintaining continuous deposits grants tier bonuses for the final token distribution."
      }
    ],
    tier: "Tier 1",
    cost: "Low (Gas only)",
    stage: "Mainnet Expedition Epoch 3",
    timeCommitment: "15 mins once + hold",
    snapshot: "Epoch 4 Completion",
    estDate: "Q1 2027",
    socials: {
      twitter: "https://twitter.com/MitosisOrg",
      discord: "https://discord.gg/mitosis",
      website: "https://mitosis.org"
    },
    isHot: true,
    isFeatured: false
  },
  {
    id: "curvance-monad",
    name: "Curvance",
    logo: "/images/airdrops/curvance-monad.svg",
    description: "Curvance is a modular cross-chain money market with $3.6M funding, bringing high-frequency yield-bearing collateral lending to Monad.",
    reward: "$CVE Governance Allocation & Early Tester Loyalty Points",
    category: "DeFi / Lending",
    featured: false,
    status: "active",
    publishDate: "November 1, 2026",
    endTime: "Q2 2027",
    funding: "$3.6M Seed Round with participation from prominent DeFi founders & angel syndicates",
    investors: ["Wormhole", "Offchain Labs", "Framewrk Angels", "Pyth Network"],
    refLink: "https://curvance.com",
    overview: "Curvance is an omnichain liquidity and lending platform designed specifically for yield-bearing assets (LSTs, LRTs, and LP tokens). Built to take full advantage of Monad's parallel execution engine, Curvance executes health-factor checks and collateral liquidations in sub-second intervals, unlocking deep borrow power with minimized liquidation penalties.",
    strategy: "Participate in the Curvance testnet on Sepolia and Monad devnet. Supply testnet collateral, borrow stablecoins, and maintain healthy margin ratios to accumulate platform XP.",
    tokenomics: "$CVE tokens feature vote-escrow mechanics (veCVE) that direct protocol emissions, secondary revenue sharing, and pool bribe markets.",
    sybilSafety: "Execute varied transactions across multiple days instead of batching identical borrows in a single minute.",
    steps: [
      "Visit curvance.com and launch the Curvance Testnet App.",
      "Connect your Web3 wallet and claim testnet collateral from the in-app faucet tab.",
      "Supply test assets (stETH, WBTC, USDC) into the Curvance Money Market core pools.",
      "Borrow available stablecoin pairs against your collateral while keeping your health factor safely above 1.5.",
      "Test the 'Zap & Repay' feature to simulate single-transaction debt restructuring.",
      "Submit feedback and your wallet address in the Curvance tester channel on Discord to secure early tester credentials."
    ],
    faqs: [
      {
        question: "Why is Curvance launching on Monad?",
        answer: "Monad's 10,000 TPS and 1-second finality allow Curvance to calculate risk and liquidations instantly without risk of gas spikes during market volatility."
      },
      {
        question: "Is Curvance audited?",
        answer: "Yes, Curvance has undergone comprehensive security audits by top Web3 security firms including Halborn and Cantina."
      }
    ],
    tier: "Tier 2",
    cost: "Free (Testnet)",
    stage: "Public Beta",
    timeCommitment: "10 mins weekly",
    snapshot: "Q1 2027",
    estDate: "Q2 2027",
    socials: {
      twitter: "https://twitter.com/Curvance",
      discord: "https://discord.gg/curvance",
      website: "https://curvance.com"
    },
    isHot: false,
    isFeatured: false
  },
  {
    id: "ambient-monad",
    name: "Ambient Finance",
    logo: "/images/airdrops/ambient-monad.svg",
    description: "Ambient (formerly CrocSwap) is a zero-to-one decentralized exchange running inside a single smart contract, launching ultra-performant pools on Monad.",
    reward: "$AMB Token Distribution & Ambient Points Multiplier",
    category: "DeFi / DEX",
    featured: true,
    status: "active",
    publishDate: "November 1, 2026",
    endTime: "Q1 2027",
    funding: "$6.5M Seed Round led by BlockTower Capital with Jane Street & Naval Ravikant",
    investors: ["BlockTower Capital", "Jane Street", "Naval Ravikant", "Yunt Capital"],
    refLink: "https://ambient.run",
    overview: "Ambient is a revolutionary decentralized trading protocol that consolidates concentrated liquidity, ambient constant-product pools, and knock-out liquidity into a single smart contract architecture. By combining single-contract gas efficiency with Monad's parallel EVM throughput, Ambient delivers institutional-grade AMM speed with near-zero gas costs.",
    strategy: "Swap core tokens regularly on Ambient (Scroll, Blast, and Monad testnet) and provide concentrated liquidity to high-volume pools to accumulate weekly protocol points.",
    tokenomics: "The upcoming $AMB governance token controls fee switch activations, localized pool gauges, and liquidity routing rewards.",
    sybilSafety: "Make organic trades across diverse pairs. Avoid automated micro-volume looping on single pairs.",
    steps: [
      "Navigate to ambient.run and connect your EVM Web3 wallet.",
      "Select an active network (Scroll, Blast, or Monad Testnet).",
      "Perform regular swaps between core crypto pairs (ETH, USDC, native gas tokens).",
      "Navigate to the 'Pool' tab and supply concentrated liquidity within active price bands.",
      "Monitor your accumulated Ambient Points on the leaderboard interface.",
      "Engage with community community challenges and maintain consistent volume across consecutive weeks."
    ],
    faqs: [
      {
        question: "What makes Ambient different from Uniswap v3?",
        answer: "Ambient runs its entire exchange within a single smart contract, drastically reducing gas fees and eliminating the need for intermediate token approvals between swaps."
      },
      {
        question: "How are Ambient Points calculated?",
        answer: "Points are distributed based on trading volume, liquidity depth inside active tick ranges, and sustained presence over weekly epochs."
      }
    ],
    tier: "Tier 1",
    cost: "Low (Gas fees only)",
    stage: "Active Points Season",
    timeCommitment: "15 mins weekly",
    snapshot: "TBA Q1 2027",
    estDate: "Q1 2027",
    socials: {
      twitter: "https://twitter.com/ambient_run",
      discord: "https://discord.gg/ambient",
      website: "https://ambient.run"
    },
    isHot: true,
    isFeatured: true
  },
  {
    id: "shogun-fi",
    name: "Shogun",
    logo: "/images/airdrops/shogun-fi.svg",
    description: "Shogun is an intent-centric modular liquidity protocol backed by $6.9M from Polychain Capital and Binance Labs, maximizing cross-chain order extraction.",
    reward: "$SHO Token Allocation & Solver Rebate Rewards",
    category: "DeFi / Intents",
    featured: false,
    status: "active",
    publishDate: "November 1, 2026",
    endTime: "Q2 2027",
    funding: "$6.9M Seed Round led by Polychain Capital, Binance Labs & Maven 11",
    investors: ["Polychain Capital", "Binance Labs", "Maven 11", "Robot Ventures"],
    refLink: "https://shogun.fi",
    overview: "Shogun is pioneering intent-driven order routing across decentralized finance. Built on a modular architecture that separates order creation from on-chain execution, Shogun utilizes an open network of professional solvers to extract maximal MEV protection, eliminate slippage, and provide traders with optimal cross-chain settlement.",
    strategy: "Submit intent swaps on the Shogun beta platform, link your Discord account to the early access dashboard, and participate in solver volume challenges.",
    tokenomics: "The $SHO token powers solver staking, slashing parameters, decentralized governance, and platform protocol fee discounts.",
    sybilSafety: "Execute real trades with realistic transaction sizes ($20+) rather than automated cent-value transactions.",
    steps: [
      "Visit shogun.fi and request access to the early trader beta program.",
      "Connect your Web3 wallet and complete the community onboarding verification.",
      "Submit cross-chain intent orders between supported networks (Ethereum, Arbitrum, Base).",
      "Verify that your transaction was matched and settled by an authorized Shogun solver with zero slippage.",
      "Track your cumulative trading volume and solver rebate credits on the user portfolio tab.",
      "Join the Shogun Discord to participate in community governance discussions and claim early tester badges."
    ],
    faqs: [
      {
        question: "What is intent-centric trading?",
        answer: "Instead of submitting a rigid transaction on-chain and risking front-running, you state your desired trade outcome, and decentralized solvers compete to fill it at the best possible price."
      },
      {
        question: "When will the $SHO token launch?",
        answer: "The token generation event is slated for the conclusion of the public solver testnet and mainnet scaling phase in early 2027."
      }
    ],
    tier: "Tier 1",
    cost: "Low (Trading gas)",
    stage: "Early Access Beta",
    timeCommitment: "10 mins weekly",
    snapshot: "Q1 2027",
    estDate: "Q2 2027",
    socials: {
      twitter: "https://twitter.com/shogunfi",
      discord: "https://discord.gg/shogun",
      website: "https://shogun.fi"
    },
    isHot: false,
    isFeatured: false
  },
  {
    id: "goplus-secware",
    name: "GoPlus SecWareX",
    logo: "/images/airdrops/goplus-secware.svg",
    description: "GoPlus is the premier Web3 user security network with $15M+ funding from Binance Labs and Redpoint, rewarding users for active on-chain threat protection.",
    reward: "$GPS Governance Token Distribution & Energy Points Conversion",
    category: "Security / Infrastructure",
    featured: true,
    status: "active",
    publishDate: "November 1, 2026",
    endTime: "Q1 2027",
    funding: "$15M+ across multiple rounds led by Binance Labs, Redpoint China & KuCoin Ventures",
    investors: ["Binance Labs", "Redpoint China", "KuCoin Ventures", "Crypto.com Capital"],
    refLink: "https://secwarex.io",
    overview: "GoPlus Security is the open, permissionless Web3 user security network. SecWareX, its flagship consumer security platform, equips crypto users with personalized risk detection, malicious smart contract scanning, and automated anti-phishing defense. Users actively earn Energy Points by securing their wallets and completing daily security checkups.",
    strategy: "Connect your primary wallet to SecWareX, perform routine vulnerability scans, revoke risky approvals, and complete daily security tasks to accumulate Energy Points.",
    tokenomics: "The $GPS token governs the GoPlus security data oracle, validator node staking, and decentralized security intelligence rewards.",
    sybilSafety: "Connect wallets with legitimate transaction history. The SecWareX AI engine automatically flags empty burner wallets.",
    steps: [
      "Go to secwarex.io and connect your Web3 wallet.",
      "Run the full Wallet Security Health Scan to diagnose vulnerabilities, token approvals, and signature risks.",
      "Revoke dangerous or obsolete smart contract approvals identified during the scan.",
      "Complete the daily 'Security Checkup' quest to claim bonus Energy Points.",
      "Bind your Twitter and Telegram accounts to unlock advanced security alert notifications.",
      "Invite friends using your unique referral link to earn a percentage of their ongoing Energy Points accumulation."
    ],
    faqs: [
      {
        question: "Is SecWareX safe to connect my wallet to?",
        answer: "Yes, SecWareX only requires view-level permissions to analyze your on-chain state; it never asks for private keys or blind token transfers."
      },
      {
        question: "How do Energy Points translate to tokens?",
        answer: "Energy Points directly establish your ranking on the global leaderboard, dictating the proportion of $GPS tokens allocated during the genesis distribution."
      }
    ],
    tier: "Tier 1",
    cost: "Free",
    stage: "SecWareX Season 2",
    timeCommitment: "5 mins daily",
    snapshot: "TBA 2027",
    estDate: "Q1 2027",
    socials: {
      twitter: "https://twitter.com/GoplusSecurity",
      discord: "https://discord.gg/goplussecurity",
      website: "https://secwarex.io"
    },
    isHot: true,
    isFeatured: true
  },
  {
    id: "myshell-ai",
    name: "MyShell AI",
    logo: "/images/airdrops/myshell-ai.svg",
    description: "MyShell is a decentralized AI creator platform with $16.6M in funding from Dragonfly and INCE Capital, empowering users to build, own, and monetize AI agents.",
    reward: "$SHELL Ecosystem Token & Genesis Shell Points",
    category: "AI / DePIN",
    featured: false,
    status: "active",
    publishDate: "November 1, 2026",
    endTime: "Q1 2027",
    funding: "$16.6M Series A led by Dragonfly Capital with INCE Capital & HashKey",
    investors: ["Dragonfly Capital", "INCE Capital", "HashKey Capital", "Folius Ventures"],
    refLink: "https://myshell.ai",
    overview: "MyShell is the leading open platform for creating and discovering AI native agents. By utilizing decentralized compute networks and multimodal voice synthesis, MyShell allows creators to build custom chatbots, voice clones, and automated productivity agents. Users earn Shell Points by interacting with AI agents, completing daily chat tasks, and deploying popular community bots.",
    strategy: "Sign up on MyShell, chat with featured AI bots daily, create your own custom AI agent, and stake Shell Points into trending creator pools to earn token dividends.",
    tokenomics: "The $SHELL token powers compute gas fees, creator royalties, governance voting, and AI model training incentives.",
    sybilSafety: "Interact naturally with bots and complete diverse prompt tasks rather than sending automated repetitive messages.",
    steps: [
      "Visit myshell.ai and create an account using your email or Web3 wallet.",
      "Navigate to the 'Rewards' dashboard to view current season tasks and point multipliers.",
      "Interact with at least three different AI agents daily (voice chats, text generators, productivity bots).",
      "Use the 'Workshop' tool to construct your first custom AI bot and publish it to the community marketplace.",
      "Stake Shell Points into top-performing AI creator pools to earn shared ecosystem yield.",
      "Maintain your daily login streak and participate in official Discord AI creator challenges."
    ],
    faqs: [
      {
        question: "Can I use MyShell for free?",
        answer: "Yes, MyShell provides daily free energy to all users, allowing complete participation without paying subscription fees."
      },
      {
        question: "How does MyShell benefit Web3 creators?",
        answer: "Creators retain verifiable on-chain ownership of their AI models and earn ongoing royalties whenever other users interact with their agents."
      }
    ],
    tier: "Tier 1",
    cost: "Free",
    stage: "Season 3 Rewards",
    timeCommitment: "5 mins daily",
    snapshot: "Q1 2027",
    estDate: "Q1 2027",
    socials: {
      twitter: "https://twitter.com/myshell_ai",
      discord: "https://discord.gg/myshell",
      website: "https://myshell.ai"
    },
    isHot: true,
    isFeatured: false
  }
];

const newNews = [
  {
    slug: "berachain-boyco-ecosystem-tvl-crosses-500m-ahead-of-mainnet",
    title: "Berachain Boyco Ecosystem TVL Crosses $500M Ahead of Mainnet Token Distribution",
    excerpt: "Over half a billion dollars in pre-deposit liquidity flows into Berachain's Boyco initiative as leading DeFi protocols prepare for mainnet genesis.",
    author: "DeFi Research Analyst",
    date: "2026-11-01T00:15:00Z",
    readTime: "4 min read",
    category: "Breaking",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1200&h=675&fit=crop",
    tags: ["Berachain", "Boyco", "PoL", "DeFi", "Airdrop"],
    relatedAirdropId: "infrared-finance",
    content: `## A Historic Liquidity Inflow: Berachain Boyco Reaches $500M Milestone

The decentralized finance landscape has witnessed an extraordinary display of capital conviction as **Berachain's Boyco initiative** officially surpassed **$500 million in Total Value Locked (TVL)**. Engineered as a collaborative pre-deposit campaign with leading cross-chain liquidity networks, Boyco enables liquidity providers to commit stablecoins, ETH, and blue-chip tokens ahead of Berachain's much-anticipated mainnet genesis.

Berachain, renowned for its innovative **Proof-of-Liquidity (PoL)** consensus model, aligns validator security directly with decentralized exchange depth. Unlike traditional Proof-of-Stake blockchains where staked capital sits idle, Berachain requires validators to deploy liquidity into productive ecosystem pools to capture block rewards.

> "Boyco represents a paradigm shift in how Layer 1 blockchains bootstrap liquidity. By coordinating with premier DeFi protocols prior to genesis, Berachain guarantees that our mainnet launches with the deepest liquidity and lowest slippage in Web3 history," stated the **Berachain Core Team**.

## Leading Protocols Driving the Liquidity Wave

Several premier protocols deployed across the Boyco framework have spearheaded the rapid TVL expansion:

- **Infrared Finance**: Capturing substantial pre-deposits by offering liquid staking for Berachain's native governance token (iBGT).
- **Kodiak Finance**: The native concentrated liquidity DEX providing institutional market making rails.
- **Royco Protocol**: Orchestrating transparent liquidity incentives and upfront yield commitments for depositors.
- **Ethena Labs**: Directing hundreds of millions in USDe and sUSDe synthetic dollar liquidity into Berachain yield vaults.

Institutional and retail participants depositing into Boyco earn simultaneous rewards, including underlying protocol yields, native project points, and priority tiering for the upcoming Berachain token generation event.

## Strategic Implications for Web3 Infrastructure & Airdrop Hunters

The rapid accumulation of over $500M in TVL establishes Berachain as one of the most formidable Layer 1 launches of 2026/2027. With validator queues oversubscribed and institutional custody integrations finalized, the ecosystem is primed for exponential on-chain activity upon public mainnet activation.

To maximize positioning across the **Berachain Ecosystem**:

- **Monitor Boyco Vaults**: Verify your active pre-deposits and track accumulated loyalty credentials.
- **Engage with Infrared Finance**: Test liquid staking mechanics to secure multi-layered governance yields.
- **Prepare for Mainnet Migration**: Ensure your connected Web3 address is secured with hardware multi-sig capabilities ahead of token claims.`
  },
  {
    slug: "infrared-finance-unveils-ibgt-liquid-staking-architecture",
    title: "Infrared Finance Unveils iBGT Liquid Staking Architecture with Native Governance Yield",
    excerpt: "Backed by Binance Labs, Infrared introduces liquid BGT tokenomics, solving the liquidity puzzle of Berachain's Proof-of-Liquidity consensus.",
    author: "Institutional Markets Lead",
    date: "2026-11-01T00:30:00Z",
    readTime: "5 min read",
    category: "DeFi",
    image: "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?w=1200&h=675&fit=crop",
    tags: ["Infrared Finance", "Berachain", "Liquid Staking", "Binance Labs", "iBGT"],
    relatedAirdropId: "infrared-finance",
    content: `## Solving the Proof-of-Liquidity Dilemma: Infrared Introduces iBGT

**Infrared Finance**, the liquid staking protocol backed by **Binance Labs**, **Framework Ventures**, and **Tribe Capital**, has formally released the technical architecture for **iBGT**—the first composable liquid staking derivative designed for Berachain's non-transferable BGT governance token.

In Berachain's Proof-of-Liquidity architecture, BGT (Bera Governance Token) can only be earned by providing liquidity to verified ecosystem pools and cannot be transferred or traded on secondary markets. While this mechanism prevents mercenary governance attacks, it inherently creates a liquidity opportunity cost for active participants. Infrared solves this core challenge by allowing users to deposit their liquidity positions and receive **iBGT**, a liquid ERC-20 token that mirrors the voting power and yield generation of native BGT.

> "Proof-of-Liquidity is the most elegant consensus mechanism since Proof-of-Stake, but users need composability. iBGT unlocks the full velocity of capital without compromising the security incentives of Berachain validators," stated **Infrared Finance Lead Researchers**.

## Core Architectural Pillars of Infrared

The Infrared protocol introduces several major technological breakthroughs:

- **1:1 Yield Mirroring**: iBGT holders continuously accrue native Berachain validator rewards and swap fees directly to their wallets.
- **Seamless DeFi Composability**: Unlike soulbound BGT, iBGT can be utilized as collateral in lending markets, paired in AMMs, or integrated into yield aggregators.
- **Automated Gauge Optimization**: Infrared algorithms automatically route validator voting power to the highest-yielding ecosystem pools, maximizing yields for depositors.
- **Enterprise Validator Security**: Developed in partnership with institutional node operators to guarantee 99.99% uptime and zero slashing exposure.

## Next Steps for the Infrared Community

With public testnet participation surging past 250,000 unique wallets, Infrared has confirmed that early testnet contributors, vault depositors, and governance participants will play a central role in the protocol's upcoming **$IRED** token distribution.

Users are encouraged to interact with the testnet dApp, mint testnet iBGT, and participate in active community voting to qualify for top-tier rewards.`
  },
  {
    slug: "mitosis-expands-ecosystem-owned-liquidity-to-monad-and-berachain",
    title: "Mitosis Expands Ecosystem-Owned Liquidity (EOL) to Monad and Berachain in Epoch 3",
    excerpt: "Backed by $7M in venture capital, Mitosis scales its cross-chain Hub Asset infrastructure to next-generation high-throughput blockchains.",
    author: "Blockchain Architecture Lead",
    date: "2026-11-01T00:45:00Z",
    readTime: "4 min read",
    category: "Layer 1",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1200&h=675&fit=crop",
    tags: ["Mitosis", "EOL", "Monad", "Berachain", "Cross-Chain"],
    relatedAirdropId: "mitosis-defi",
    content: `## A New Era of Cross-Chain Capital: Mitosis Activates Multi-Chain Hubs

**Mitosis**, the cross-chain liquidity Layer 1 backed by **Amber Group** and **Foresight Ventures**, has officially announced the expansion of its **Ecosystem-Owned Liquidity (EOL)** framework to both **Monad** and **Berachain** as part of its ongoing Epoch 3 deployment.

Decentralized finance has long suffered from fractured liquidity. New layer 1 and layer 2 networks spend millions of dollars in inflationary token emissions to attract temporary deposits, only to see capital flee the moment rewards expire. Mitosis eliminates this inefficiency by locking multi-chain deposits into collective Hub Assets, transforming temporary capital into permanent, protocol-governed liquidity.

> "Liquidity should not be an extractive mercenary asset. By establishing Ecosystem-Owned Liquidity across high-performance execution environments like Monad and Berachain, Mitosis guarantees that dApps launch with deep, permanent liquidity pools," commented **Mitosis Engineering**.

## Expansion Highlights:

- **Zero-Slippage Cross-Chain Transfers**: Utilizing Hyperlane and native light clients, Mitosis allows seamless asset transfers between EVM ecosystems.
- **Expanded Matrix Campaign**: Epoch 3 depositors supplying ETH, weETH, and leading stablecoins receive enhanced Expedition Marks.
- **Collaborative Yield Farming**: Integrated partner pools on Monad and Berachain provide dual-layered token allocations for early participants.

Mitosis has surpassed **$120 million in cumulative vault deposits**, solidifying its position as one of the fastest-growing cross-chain infrastructure layers in the industry.`
  },
  {
    slug: "monad-labs-previews-final-devnet-benchmarks-subsecond-blocks",
    title: "Monad Labs Previews Final Devnet Benchmarks Demonstrating Sub-Second Block Propagation",
    excerpt: "Monad showcases sustained 10,000 TPS with 800ms slot finality across global node topologies, setting the stage for public testnet deployment.",
    author: "Core Systems Engineer",
    date: "2026-11-01T01:00:00Z",
    readTime: "5 min read",
    category: "Testnet",
    image: "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?w=1200&h=675&fit=crop",
    tags: ["Monad", "Parallel EVM", "TPS", "Layer 1", "Blockchain"],
    relatedAirdropId: "ambient-monad",
    content: `## The 10,000 TPS Reality: Monad Devnet Sets New Industry Standards

**Monad Labs**, the developer behind the parallelized EVM Layer 1 with **$244M in venture capital** from **Paradigm** and **Electric Capital**, has released comprehensive technical telemetry from its final private devnet stress test.

The benchmarks confirm that Monad reliably maintains **10,000 transactions per second (TPS)** with an average slot finality time of just **800 milliseconds**, running across more than 100 validator nodes distributed globally across four continents. Crucially, these throughput metrics were sustained during complex smart contract interactions—including automated market maker swaps and multi-call batch orders—rather than simple native token transfers.

## Key Technical Pillars of Monad's Performance:

1. **Parallel Execution Engine**: Monad executes transactions optimistically in parallel, using advanced conflict-detection algorithms to serialize only interdependent state updates.
2. **MonadDB**: A custom, high-performance database written from scratch in C++ that eliminates the storage bottleneck of traditional Ethereum clients (LevelDB/RocksDB).
3. **Asynchronous Consensus**: Monad separates the consensus phase from execution, allowing nodes to agree on transaction ordering before computing complex state changes.

## What This Means for Web3 Users & Early Testers:

Monad's architecture delivers centralized exchange speed while preserving 100% EVM bytecode compatibility and self-custodial decentralization. As public testnet onboarding accelerates, users actively testing native DEXs like **Ambient** and lending markets like **Curvance** are establishing early on-chain track records that will heavily influence initial genesis community distributions.`
  },
  {
    slug: "shogun-launches-modular-intent-network-with-solver-rebates",
    title: "Shogun Launches Modular Intent Network on Blast and Arbitrum with Native Order Rebates",
    excerpt: "Backed by Polychain Capital and Binance Labs, Shogun brings institutional intent matching to on-chain traders, eliminating MEV and slippage.",
    author: "Algorithmic Trading Analyst",
    date: "2026-11-01T01:10:00Z",
    readTime: "4 min read",
    category: "DeFi",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1200&h=675&fit=crop",
    tags: ["Shogun", "Intents", "MEV", "Polychain", "Airdrop"],
    relatedAirdropId: "shogun-fi",
    content: `## Rethinking DEX Execution: Shogun Activates Intent Trading

**Shogun**, the innovative decentralized order execution protocol backed by **$6.9 million** from **Polychain Capital**, **Binance Labs**, and **Maven 11**, has officially launched its modular intent network across **Blast** and **Arbitrum**.

Traditional decentralized exchanges force users to interact directly with liquidity pools, exposing transactions to toxic MEV bots, sandwich attacks, and devastating slippage during volatile market swings. Shogun flips this model through an **intent-centric architecture**: users simply sign a message stating what tokens they wish to swap and at what minimum price, and an open network of professional market makers and algorithmic solvers competes to fill the order at the best available rate across all Web3 liquidity sources.

> "Traders should never have to worry about front-running, failed gas transactions, or liquidity fragmentation. Shogun delivers execution that guarantees zero MEV leakage and rewards users with solver fee rebates," stated **Shogun Contributors**.

## Key Protocol Features:

- **Negative Slippage Protection**: Solvers that identify price improvements pass the savings directly back to the trader.
- **Cross-Chain Intent Settlement**: Execute trades across disparate layer 2s in a single click without manually bridging funds.
- **Early Solver Rebates Program**: Early beta participants earn seasonal trade points that dictate allocations in the upcoming $SHO governance token launch.`
  },
  {
    slug: "goplus-secwarex-surpasses-12-million-verified-users",
    title: "GoPlus SecWareX Reaches 12 Million Verified Users in Global Anti-Phishing Drive",
    excerpt: "GoPlus Security cements its position as the premier Web3 threat defense layer with over 12 million active wallets utilizing SecWareX.",
    author: "Cybersecurity Desk",
    date: "2026-11-01T01:20:00Z",
    readTime: "4 min read",
    category: "Security",
    image: "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?w=1200&h=675&fit=crop",
    tags: ["GoPlus", "SecWareX", "Web3 Security", "Binance Labs", "Energy Points"],
    relatedAirdropId: "goplus-secware",
    content: `## A Historic Milestone for On-Chain Security: GoPlus SecWareX Hits 12M Users

**GoPlus Security**, the leading decentralized Web3 cybersecurity network supported by **Binance Labs** and **Redpoint China**, has announced that its flagship security portal **SecWareX** has officially crossed **12 million verified active users**.

As decentralized finance and airdrop farming expand, malicious phishing attacks, drainer contracts, and signature scams have surged to record levels. SecWareX acts as an automated security shield for Web3 users, performing comprehensive real-time audits on connected wallets, detecting hidden token approval permissions, and warning users before signing potentially hazardous smart contract interactions.

## The SecWareX Energy Rewards Ecosystem:

The exponential growth of SecWareX is fueled by its highly engaging security rewards loop:

- **Daily Security Health Audits**: Users earn Energy Points by conducting automated wallet vulnerability checks.
- **Revocation Bounties**: Proactively identifying and revoking outdated or high-risk ERC-20 allowances yields bonus XP multipliers.
- **Sybil Protection Engine**: GoPlus employs advanced on-chain machine learning to weed out fraudulent bot networks, ensuring that real, organic security contributors receive top-tier allocations in the upcoming **$GPS** token distribution.

GoPlus processes over **30 million security API calls daily**, protecting institutional custodians, decentralized exchanges, and millions of retail crypto wallets worldwide.`
  },
  {
    slug: "myshell-launches-open-source-voice-and-ai-agent-engine",
    title: "MyShell AI Launches Open-Source Voice and Agent Generation Engine on Greenfield",
    excerpt: "Backed by $16.6M from Dragonfly Capital, MyShell deploys decentralized multimodal AI tools empowering creators to monetize on-chain agents.",
    author: "Artificial Intelligence Editor",
    date: "2026-11-01T01:30:00Z",
    readTime: "4 min read",
    category: "AI",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1200&h=675&fit=crop",
    tags: ["MyShell", "AI", "DePIN", "Dragonfly", "Creator Economy"],
    relatedAirdropId: "myshell-ai",
    content: `## Democratizing Artificial Intelligence: MyShell Unveils Next-Gen Multimodal Architecture

**MyShell**, the decentralized AI creator ecosystem backed by **$16.6 million** in funding from **Dragonfly Capital**, **INCE Capital**, and **HashKey**, has formally deployed its open-source multimodal voice synthesis and AI agent generation engine.

MyShell provides an open, permissionless workshop where developers and non-technical creators can rapidly construct personalized AI agents, sophisticated voice clones, and automated Web3 bots. By leveraging decentralized compute networks and verifiable data storage on BNB Greenfield, MyShell guarantees that creators retain complete digital ownership and revenue-sharing rights over their intellectual creations.

> "Centralized AI platforms capture 100% of the value generated by community creators. MyShell is building an equitable creator economy where anyone can build an AI agent and receive automatic on-chain royalties whenever the world interacts with it," stated **MyShell Co-Founders**.

## Shell Points Season 3 & Airdrop Preparation:

The launch of the open-source engine marks the final phase of MyShell's **Season 3 Rewards Campaign**. Community members who build popular bots, interact with verified AI companions, and stake Shell Points into community creator pools are earning substantial point balances that will convert into native **$SHELL** governance and utility tokens upon TGE.`
  },
  {
    slug: "ethereum-dencun-followup-l2-blob-capacity-reaches-all-time-high",
    title: "Ethereum Dencun Upgrade Follow-Up: L2 Blob Capacity Reaches All-Time High Usage",
    excerpt: "Layer 2 transaction costs plummet below $0.001 as daily blob utilization on Ethereum mainnet approaches 95% across Base, Arbitrum, and Optimism.",
    author: "Protocol Researcher",
    date: "2026-11-01T01:35:00Z",
    readTime: "4 min read",
    category: "Ethereum",
    image: "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?w=1200&h=675&fit=crop",
    tags: ["Ethereum", "Dencun", "EIP-4844", "Layer 2", "Base"],
    content: `## The Scaling Vision Realized: Ethereum Blob Capacity Nears Full Utilization

Several months following the historic activation of the **Dencun (EIP-4844)** upgrade, Ethereum's modular scaling roadmap has achieved unprecedented success. On-chain data indicates that daily **blob space utilization** has consistently reached over **92% to 95% of target capacity**, driven by surging transaction throughput across major Layer 2 networks including **Base**, **Arbitrum One**, **Optimism**, and **Scroll**.

By replacing expensive calldata with ephemeral blob storage, transaction costs on consumer rollups have stabilized at fractions of a cent, unlocking seamless micro-transactions for Web3 gaming, social dApps, and decentralized finance protocols.

Furthermore, Ethereum core developers are currently benchmarking **PeerDAS (Peer Data Availability Sampling)** to expand blob limits by an additional 4x to 8x, ensuring that Ethereum maintains its status as the world's most secure and scalable settlement layer.`
  },
  {
    slug: "solana-defi-tvl-rebounds-to-multi-year-high-liquid-restaking",
    title: "Solana DeFi TVL Rebounds to Multi-Year High Led by Liquid Restaking Inflows",
    excerpt: "Solana's decentralized financial ecosystem surges past $6.5B in TVL, propelled by capital rotation into Solayer, Jito, and Sanctum protocols.",
    author: "Market Intelligence Desk",
    date: "2026-11-01T01:40:00Z",
    readTime: "4 min read",
    category: "Solana",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1200&h=675&fit=crop",
    tags: ["Solana", "DeFi", "Solayer", "Sanctum", "Restaking"],
    content: `## A Resurgent Ecosystem: Solana DeFi Captures Record Capital

The **Solana decentralized finance ecosystem** has achieved a multi-year high, surpassing **$6.5 billion in Total Value Locked (TVL)**. Driven by rapid capital accumulation across high-yield liquid staking tokens (LSTs) and emerging restaking protocols, Solana continues to narrow the gap with Ethereum in active decentralized trading volume.

Key protocols leading the inflow include **Solayer**, which provides native shared security for decentralized applications, **Sanctum**, which powers unified LST liquidity pools, and **Kamino Finance**, which commands over $1.5 billion in automated lending and liquidity vaults.

With high-throughput transaction execution and daily active wallet addresses consistently exceeding 3 million, Solana has established itself as an indispensable hub for high-velocity decentralized finance.`
  },
  {
    slug: "hyperliquid-daily-derivatives-volume-outpaces-centralized-exchanges",
    title: "Hyperliquid Daily Derivatives Volume Outpaces Major Centralized Exchanges",
    excerpt: "Hyperliquid's sovereign L1 orderbook processes over $3.8 billion in 24-hour perpetual volume ahead of its historic $HYPE token generation event.",
    author: "Derivatives Desk",
    date: "2026-11-01T01:45:00Z",
    readTime: "4 min read",
    category: "DeFi",
    image: "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?w=1200&h=675&fit=crop",
    tags: ["Hyperliquid", "Perps", "HYPE", "DEX", "Trading"],
    content: `## Decentralized Trading Ascendant: Hyperliquid Breaches $3.8B Volume

In an extraordinary demonstration of decentralized market efficiency, sovereign Layer 1 exchange **Hyperliquid** recorded a staggering **$3.8 billion in 24-hour perpetual trading volume**, temporarily eclipsing several top-tier centralized exchanges.

Hyperliquid's fully on-chain orderbook operates with sub-second finality and zero gas fees for order placement, delivering a frictionless trading experience that appeals to institutional market makers and retail day traders alike.

With the **$HYPE Token Generation Event (TGE)** on the immediate horizon, community excitement has reached a fever pitch. Traders who contributed consistent liquidity and organic trading volume across seasonal epochs are preparing for what analysts project will be one of the largest decentralized community airdrops in Web3 history.`
  },
  {
    slug: "sui-network-surpasses-100-million-daily-transactions",
    title: "Sui Network Surpasses 100 Million Daily Transactions Driven by Gaming Ecosystem",
    excerpt: "Mysten Labs' Move-based blockchain demonstrates massive scalability as gaming and DePIN micro-transactions drive record network activity.",
    author: "Network Analytics Lead",
    date: "2026-11-01T01:50:00Z",
    readTime: "4 min read",
    category: "Layer 1",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1200&h=675&fit=crop",
    tags: ["Sui", "Mysten Labs", "Move", "Gaming", "Layer 1"],
    content: `## Unmatched Throughput: Sui Crosses 100M Daily Transaction Threshold

**Sui**, the Layer 1 blockchain developed by former Meta executives at **Mysten Labs**, has achieved a remarkable milestone by sustaining over **100 million transactions in a single 24-hour period**.

Unlike traditional account-based blockchains, Sui's object-centric Move programming architecture enables parallel transaction execution for independent assets, allowing mass-market gaming and micro-transaction protocols to operate without experiencing gas spikes or state contention.

Sui's DeFi ecosystem has concurrently expanded to over **$1 billion in TVL**, led by decentralized exchanges like Cetus and lending markets like Navi Protocol. Institutional backing and frictionless Web3 onboarding via zkLogin continue to propel Sui into top-tier blockchain rankings.`
  },
  {
    slug: "bitcoin-layer-2-ecosystem-crosses-25000-btc-staked-on-babylon",
    title: "Bitcoin Layer 2 Ecosystem Matures as Staking on Babylon Crosses 25,000 BTC",
    excerpt: "Over $1.7 billion in native Bitcoin collateral is now actively securing PoS networks through Babylon's trustless staking protocol.",
    author: "Bitcoin Protocol Lead",
    date: "2026-11-01T01:55:00Z",
    readTime: "4 min read",
    category: "Bitcoin",
    image: "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?w=1200&h=675&fit=crop",
    tags: ["Bitcoin", "Babylon", "BTC Staking", "Layer 2", "Security"],
    content: `## Unlocking Idle Capital: Babylon Staking Surpasses 25,000 BTC

The movement to transform Bitcoin from passive digital gold into a productive, yield-bearing security asset has achieved a historic milestone: **Babylon's trustless staking protocol has surpassed 25,000 native BTC in active deposits**, representing more than **$1.7 billion in committed economic security**.

Through advanced Bitcoin script mechanics—including cryptographic extractable one-time signatures (EOTS)—Babylon allows Bitcoin holders to stake their BTC to secure external Proof-of-Stake blockchains without bridging funds, wrapping tokens, or trusting centralized custodians.

This immense capital foundation has catalyzed a thriving Bitcoin Layer 2 ecosystem, empowering networks like Lorenzo, Corn, and Solv to offer diversified yield products to long-term Bitcoin investors.`
  },
  {
    slug: "curvance-integrates-monad-testnet-for-high-frequency-lending",
    title: "Curvance Integrates Monad Testnet for High-Frequency Decentralized Borrowing",
    excerpt: "Curvance brings institutional cross-chain money markets to Monad, unlocking instant health-factor rebalancing and microsecond liquidations.",
    author: "DeFi Solutions Engineer",
    date: "2026-11-01T02:00:00Z",
    readTime: "4 min read",
    category: "DeFi",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1200&h=675&fit=crop",
    tags: ["Curvance", "Monad", "Lending", "DeFi", "Airdrop"],
    relatedAirdropId: "curvance-monad",
    content: `## Redefining Money Market Dynamics: Curvance Deploys on Monad

**Curvance**, the modular liquidity and yield optimization protocol with **$3.6M in seed backing**, has officially activated its deployment on the **Monad testnet environment**.

By integrating with Monad's parallelized EVM engine, Curvance eliminates the systemic risks that have historically plagued DeFi lending markets during sudden market flash crashes. On sequential blockchains, congested blocks often prevent liquidators from executing emergency transactions, leaving protocols with unrecoverable bad debt. On Monad, Curvance executes collateral health audits and automated position liquidations in sub-second intervals, providing depositors with unmatched solvency guarantees.

Early testers interacting with the Curvance Monad deployment are actively accumulating tester loyalty badges that will carry significant weight in the protocol's upcoming **$CVE** community rewards.`
  },
  {
    slug: "sec-signals-constructive-guidance-on-staking-yield-classification",
    title: "SEC Signals Constructive Guidance on Staking Yield Classification for Spot ETFs",
    excerpt: "Regulatory discussions advance as digital asset custodians and ETF issuers outline standardized frameworks for liquid staking inclusion.",
    author: "Macro & Regulatory Desk",
    date: "2026-11-01T02:05:00Z",
    readTime: "5 min read",
    category: "Regulatory",
    image: "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?w=1200&h=675&fit=crop",
    tags: ["SEC", "Regulation", "ETFs", "Staking", "Institutional"],
    content: `## Regulatory Clarity on the Horizon: US Regulators Revisit Staking Frameworks

In a significant positive development for institutional digital asset adoption, discussions between leading cryptocurrency exchange-traded fund (ETF) sponsors and financial regulatory authorities have signaled constructive progress regarding the classification of **on-chain staking yields**.

Currently, approved spot Ethereum ETFs do not participate in network proof-of-stake validation, effectively leaving billions in potential staking yield uncollected on behalf of institutional fund shareholders. Leading asset managers—including BlackRock, Fidelity, and Franklin Templeton—have submitted comprehensive whitepapers detailing how segregated institutional staking nodes can comply with fiduciary custody standards.

Market analysts note that the formal approval of staking yield inclusion would catalyze another wave of institutional capital inflows, reinforcing the legitimacy of decentralized consensus rewards across global capital markets.`
  },
  {
    slug: "base-network-weekly-active-addresses-surge-socialfi-boom",
    title: "Base Network Weekly Active Addresses Surge 45% Following SocialFi Protocol Boom",
    excerpt: "Coinbase's Layer 2 network sets new adoption records as viral on-chain consumer apps and seamless smart wallet onboarding drive mass adoption.",
    author: "Consumer Crypto Analyst",
    date: "2026-11-01T02:10:00Z",
    readTime: "4 min read",
    category: "Layer 2",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1200&h=675&fit=crop",
    tags: ["Base", "Coinbase", "SocialFi", "Smart Wallet", "Layer 2"],
    content: `## Mass Adoption in Action: Base Network Sets Record User Activity

**Base**, the Ethereum Layer 2 incubated by **Coinbase**, has recorded an astounding **45% week-over-week increase in active wallet addresses**, cementing its position as the premier consumer execution layer in Web3.

The meteoric rise is driven by the widespread rollout of **Coinbase Smart Wallets**, which allow mainstream internet users to create on-chain wallets using simple device passkeys (FaceID / fingerprint) with zero seed phrase friction and gasless sponsored transactions.

Consumer SocialFi applications, decentralized content monetization platforms, and viral on-chain creator tokens have experienced unprecedented user engagement on Base, proving that frictionless user experience is the ultimate catalyst for bringing the next billion users onto the blockchain.`
  }
];

function run() {
  console.log('Reading current airdrops...');
  const airdropsRaw = fs.readFileSync(airdropsPath, 'utf8');
  
  // Find insertion point before closing array bracket
  const lastBracketAirdrop = airdropsRaw.lastIndexOf('];');
  if (lastBracketAirdrop === -1) {
    throw new Error('Could not find closing bracket in airdrops.ts');
  }

  // Format new airdrops as JSON objects without outer array brackets
  const airdropsFormatted = newAirdrops.map(item => '  ' + JSON.stringify(item, null, 2).replace(/\n/g, '\n  ')).join(',\n');
  
  const updatedAirdrops = airdropsRaw.slice(0, lastBracketAirdrop).trimEnd() + ',\n' + airdropsFormatted + '\n];\n';
  fs.writeFileSync(airdropsPath, updatedAirdrops, 'utf8');
  console.log(`Successfully added ${newAirdrops.length} high-tier airdrops to airdrops.ts!`);

  console.log('Reading current news...');
  const newsRaw = fs.readFileSync(newsPath, 'utf8');
  const lastBracketNews = newsRaw.lastIndexOf('];');
  if (lastBracketNews === -1) {
    throw new Error('Could not find closing bracket in news.ts');
  }

  const newsFormatted = newNews.map(item => '  ' + JSON.stringify(item, null, 2).replace(/\n/g, '\n  ')).join(',\n');
  const updatedNews = newsRaw.slice(0, lastBracketNews).trimEnd() + ',\n' + newsFormatted + '\n];\n';
  fs.writeFileSync(newsPath, updatedNews, 'utf8');
  console.log(`Successfully added ${newNews.length} breaking news articles to news.ts!`);
}

run();
