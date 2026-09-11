export interface Airdrop {
  id: string;
  name: string;
  logo: string;
  description: string;
  reward: string;
  category: string;
  featured: boolean;
  status: 'active' | 'upcoming' | 'ended';
  endTime: string;
  funding: string;
  investors: string;
  refLink?: string;
  overview: string;
  strategy: string;
  tokenomics?: string;
  sybilSafety?: string;
  steps: string[];
  faqs: { question: string; answer: string }[];
}

export const airdrops: Airdrop[] = [
  {
    id: 'push-chain',
    name: 'Push Chain',
    logo: 'https://airdrops.io/wp-content/uploads/2026/07/Push-Chain-logo.jpg.webp',
    description: 'Shared-state universal Layer 1 blockchain distributing 1,000,000,000 $PC tokens across Season 3 testnet quests.',
    reward: '1,000,000,000 $PC Confirmed',
    category: 'Layer 1 / Interop',
    featured: true,
    status: 'active',
    endTime: '2026-11-15T23:59:59Z',
    funding: '$10.1M+',
    investors: 'Binance Labs, Jump Crypto, Tiger Global, Sandeep Nailwal',
    refLink: 'https://portal.push.org/rewards?ref=c74a59c',
    overview: 'Push Chain represents a paradigm shift in decentralized multichain execution. Developed by the pioneering engineering team behind Push Protocol (formerly Ethereum Push Notification Service - EPNS), Push Chain is engineered as a shared-state Layer 1 blockchain that functions as a universal execution layer for Web3.\n\nIn the current fragmented blockchain landscape, developers face massive overhead deploying separate, isolated smart contracts across Ethereum, Solana, BNB Chain, and Cosmos. Push Chain eliminates this friction by abstracting away wallet connectivity, chain routing, and gas fees. An application deployed on Push Chain can natively communicate with and execute state transitions on any external blockchain without requiring end users to manually bridge funds or manage separate gas tokens.\n\nThe underlying protocol has secured over $10.1 Million in institutional financing from elite Web3 venture funds including Binance Labs, Jump Crypto, Tiger Global, ParaFi Capital, and Polygon co-founder Sandeep Nailwal. The protocol is currently running its highly anticipated Season 3 Testnet Rewards campaign ahead of mainnet launch.',
    tokenomics: 'The native token of Push Chain is $PC. According to the officially published tokenomics architecture, the total maximum supply is capped at 10,000,000,000 $PC tokens.\n\nA massive 10% of the entire token generation supply—exactly 1,000,000,000 $PC tokens—is formally allocated to community airdrops. The airdrop distribution is scheduled to commence at the Token Generation Event (TGE) and will be distributed in phases across retroactive early supporters and active Season 3 testnet participants.\n\nThe $PC token serves critical protocol functions: powering native validator staking for Proof-of-Stake consensus, securing cross-chain shared state verification, paying universal computation fees, and enabling on-chain decentralized governance votes.',
    sybilSafety: 'Push Chain has integrated strict anti-Sybil algorithms to detect automated farming clusters. To ensure your wallet remains eligible for maximum rewards, never run automated scripts or bots to trigger daily check-ins.\n\nMaintain an organic usage profile: interact with at least 3 different Universal Apps in the weekly rotation, maintain your daily check-in streak without erratic IP changes, and ensure your connected wallet has a verified history on Ethereum or BNB Chain testnets.',
    strategy: 'The optimal farming strategy for Push Chain Season 3 focuses on accumulating Rare Passes and compounding daily check-in streaks. Rare Passes are the highest-value reward asset in the portal: upon TGE, all accumulated Rare Passes are burned for a shot at minting ultra-exclusive Shiny Passes, which carry top-tier token multipliers.\n\nMake it a daily habit to claim your free testnet $PC from the in-app faucet (which resets every 6 hours), perform the daily Spin 2 Win wheel roll, and complete the weekly Universal App challenges. Furthermore, sharing your referral link gives you a 16% cut of your direct referees\' points and an extra 8% from their second-tier invites.',
    steps: [
      'Visit the official <a href="https://portal.push.org/rewards?ref=c74a59c" target="_blank" rel="noopener noreferrer">Push Chain Rewards Portal</a> (Referral Code: <strong>c74a59c</strong>) to activate bonus reward points.',
      'Connect your Web3 Wallet (MetaMask, Rabby, or Coinbase Wallet) and sign the gasless authentication prompt.',
      'Open the in-portal wallet drawer and click the "Faucet" button to claim your daily allocation of free testnet $PC gas tokens.',
      'Perform your Daily Check-in to begin stacking your streak bonus. Every consecutive day increases your compounding point multiplier.',
      'Spin the "Spin 2 Win" wheel once every 24 hours to win free Rare Passes, bonus testnet $PC tokens, and surprise XP boosts.',
      'Navigate to the "Universal Apps" tab and complete the weekly featured interactive challenges (swaps, games, and on-chain predictions).',
      'Collect and hoard as many Rare Passes as possible before the end of Season 3 for the TGE Shiny Pass conversion burn.',
      'Copy your unique invitation link from your profile dashboard and invite active Web3 users to earn 16% tier-1 and 8% tier-2 lifetime point commissions.'
    ],
    faqs: [
      { question: 'Is the Push Chain airdrop completely free to participate in?', answer: 'Yes, 100% free. Season 3 operates exclusively on the Push Chain testnet using free testnet tokens distributed by the in-portal faucet. You never need to spend or deposit real cryptocurrency.' },
      { question: 'How many $PC tokens are reserved for the community airdrop?', answer: 'Exactly 10% of the fixed 10 Billion $PC total supply, amounting to 1,000,000,000 $PC tokens, is reserved for community airdrop distributions.' },
      { question: 'When is the Push Chain TGE and Token Listing?', answer: 'The Token Generation Event (TGE) is scheduled to coincide with the mainnet transition following the conclusion of the Season 3 testnet phase in late 2026.' },
      { question: 'What are Rare Passes and why are they important?', answer: 'Rare Passes are scarce on-chain achievement tokens earned through level-ups and the daily spin wheel. At TGE, all held Rare Passes will be burned for a direct chance to receive Shiny Passes, which grant the highest token multiplier tiers.' },
      { question: 'Can I participate with multiple wallets?', answer: 'No. Push Chain actively filters multi-account farming clusters. It is strongly recommended to focus all your activity on a single primary Web3 wallet to build high XP, level up, and avoid Sybil disqualification.' },
      { question: 'Which wallets are compatible with Push Chain?', answer: 'All major EVM wallets including MetaMask, Rabby Wallet, OKX Web3 Wallet, Trust Wallet, and Coinbase Wallet are fully supported.' }
    ]
  },
  {
    id: 'wager-predict',
    name: 'Wager Predict',
    logo: 'https://airdrops.io/wp-content/uploads/2026/07/Wager-Predict-logo.jpg.webp',
    description: 'Decentralized non-custodial prediction market on BNB Chain distributing 10% of $WP token supply.',
    reward: '10% $WP Supply Confirmed',
    category: 'Prediction Market / BSC',
    featured: true,
    status: 'active',
    endTime: '2026-11-20T23:59:59Z',
    funding: 'Community & Seed',
    investors: 'BNB Chain Ecosystem Funds',
    refLink: 'https://wagerpredict.com/app',
    overview: 'Wager Predict is a decentralized, non-custodial prediction market protocol deployed natively on the BNB Smart Chain (BSC) infrastructure. Inspired by the explosive multi-billion dollar volume of platforms like Polymarket, Wager Predict enables global Web3 users to buy and sell binary outcome shares (YES or NO) on real-world events across cryptocurrency price fluctuations, global sports tournaments, geopolitical decisions, and technology trends.\n\nTraditional prediction markets suffer from centralized counterparty risk, geographic restrictions, and opaque settlement mechanisms. Wager Predict resolves these limitations by orchestrating all market liquidity through immutable smart contracts backed by decentralized oracle resolution, ensuring instant, trustless payouts directly to users\' non-custodial wallets.\n\nAhead of its official mainnet deployment and the launch of the native $WP utility token, the development team has launched an incentivized public testnet. Every participant is equipped with 10,000 free testnet USDC to trade, test features, and establish a verifiable on-chain footprint for the confirmed retroactive airdrop.',
    tokenomics: 'The governance and economic backbone of the protocol is the $WP utility token. Total token supply is hard-capped in the protocol smart contracts.\n\nThe project whitepaper explicitly reserves 10% of the entire $WP token supply for retroactive community airdrops. Eligible recipients include testnet participants, liquidity providers to the LP Vault, high-volume market creators, and top-ranking traders on the Season 01 PnL leaderboard.\n\n$WP features strong token sink mechanics: 30% of all protocol-generated platform fees are automatically directed toward secondary market token buybacks, with 50% of repurchased tokens permanently burned to induce structural deflation. The remaining token utility includes staking for dispute resolution, governance voting, and trading fee discounts.',
    sybilSafety: 'Wager Predict employs on-chain volume verification and behavioral analysis to eliminate automated spam bots. Specifically, the system automatically flags and excludes wallets that place more than 50 micro-bets within a single 24-hour window at bot-like intervals.\n\nTo ensure flawless eligibility, execute steady, realistic trades across multiple market categories (e.g., predict a Bitcoin price milestone, an NBA match result, and an election outcome) rather than spamming a single market in seconds.',
    strategy: 'To maximize your retroactive $WP allocation, adopt a multi-tier farming methodology. First, claim your 10,000 testnet USDC from the faucet and allocate approximately 40% into active predictions across 4-5 different markets.\n\nSecond, deposit another 40% into the protocol\'s Liquidity Provider (LP) Vault. Crucially, select the 365-day lock duration: because testnet USDC is completely free, locking for the maximum duration instantly activates an 8x point multiplier that compounds until the snapshot date.\n\nFinally, utilize the "Create Market" feature to author a clear, concise prediction market. Whenever other traders swap shares on your custom market, you collect a lifetime 0.5% fee on every single transaction, boosting your creator score significantly.',
    steps: [
      'Visit the <a href="https://wagerpredict.com/app" target="_blank" rel="noopener noreferrer">Wager Predict dApp Portal</a>.',
      'Connect your Web3 Wallet (MetaMask, Rabby, or Trust Wallet) and switch your network to the BNB Smart Chain Testnet.',
      'Click the "Faucet" button in the top navigation bar to instantly receive 10,000 free testnet USDC along with test tBNB for transaction gas.',
      'Explore live prediction markets under the Crypto, Sports, and Global Events categories, and buy YES or NO shares on upcoming outcomes.',
      'Navigate to the "LP Vault" tab and deposit test USDC to supply liquidity. Select the 365-day lock period to unlock the maximum 8x farming multiplier.',
      'Head to "Create Market" and draft a well-formulated prediction question with an objective oracle resolution source to earn 0.5% lifetime creator fees.',
      'Monitor your trading PnL on the Season 01 Leaderboard and complete user achievement challenges to earn special profile badges.',
      'Retrieve your personalized referral link from the dashboard and invite fellow crypto traders to earn referral bonus XP.'
    ],
    faqs: [
      { question: 'Is any real money required to farm the Wager Predict airdrop?', answer: 'None at all. The entire campaign operates on the BSC Testnet. All participants are given 10,000 free testnet USDC and free test BNB through the built-in faucet.' },
      { question: 'How much of the $WP token supply is allocated to the airdrop?', answer: 'A verified 10% of the total $WP token supply is hard-coded in the whitepaper and allocated specifically to community airdrop participants.' },
      { question: 'When is the Wager Predict airdrop snapshot?', answer: 'The airdrop snapshot will be taken in late 2026 just prior to the mainnet deployment on BNB Chain and the official token generation event.' },
      { question: 'What is the LP Vault 8x multiplier?', answer: 'When you deposit testnet USDC into the LP Vault, you can choose flexible or locked staking tiers. Choosing the 365-day lock provides an 8x points multiplier on all accrued liquidity points.' },
      { question: 'How do market creator fees work?', answer: 'Anyone who creates a verified public market on Wager Predict receives 0.5% of all trading volume executed on that market for life, which directly feeds into high-tier airdrop rankings.' },
      { question: 'Which network do I need in my wallet?', answer: 'You need the BNB Smart Chain Testnet (Chain ID: 97). Most modern wallets will automatically prompt you to add the network upon connecting.' }
    ]
  },
  {
    id: 'tbook',
    name: 'TBook',
    logo: 'https://airdrops.io/wp-content/uploads/2026/08/TBook-logo.png.webp',
    description: 'Embedded RWA liquidity layer and Web3 identity protocol distributing 750M $BOOK tokens.',
    reward: '750,000,000 $BOOK Confirmed',
    category: 'RWA / Identity / Sui',
    featured: true,
    status: 'active',
    endTime: '2026-11-30T23:59:59Z',
    funding: '$15.0M Raised',
    investors: 'Sui Foundation, SevenX Ventures, KuCoin Ventures, Mask Network',
    refLink: 'https://engage.tbook.com/',
    overview: 'TBook is a pioneering Real World Asset (RWA) liquidity protocol and decentralized credentialing network engineered to bridge institutional-grade capital yields into consumer-facing Web3 applications. Operating primarily on the high-throughput Sui blockchain with secondary distribution channels expanding across TON and EVM ecosystems, TBook enables decentralized applications to offer native yield on idle user balances without custody risk.\n\nFintechs and Web3 consumer platforms integrate TBook\'s modular SDK once, immediately enabling non-custodial smart contract wallets, short-term RWA-backed treasury yields, and automated stablecoin rewards for verified user actions. The protocol effectively bridges traditional financial yields (such as short-dated U.S. Treasury bills and private receivables) into high-speed blockchain primitives.\n\nTBook successfully closed two major fundraising rounds totaling $15 Million: an initial $5 Million seed round led by the Sui Foundation, followed by a $10 Million Series A round led by SevenX Ventures at a valuation exceeding $100 Million, with strategic backing from KuCoin Ventures, Mask Network, and GoPlus Security.',
    tokenomics: 'The governance and economic token of the network is $BOOK. The total fixed token supply is capped at 10,000,000,000 $BOOK tokens.\n\nTBook has officially earmarked exactly 7.5% of the total token supply—representing 750,000,000 $BOOK tokens—exclusively for the community airdrop program. This pool is mathematically partitioned across distinct contributor tiers: high WISE Credit Score holders, Soulbound Token (SBT) campaign participants, early RWA vault depositors, contributing ecosystem KOLs, and Bookies NFT holders.\n\n$BOOK token utility includes payment discounts on RWA yield redemptions, querying the decentralized WISE credit oracle, and participating in the BookDAO governance structure to vote on collateral parameters and treasury allocations.',
    sybilSafety: 'TBook utilizes the proprietary WISE Credit Score and Incentive Passport system to comprehensively filter Sybil attacks. Because the Passport requires linking authentic social accounts (Twitter, Discord, and Telegram), bot farms with newly created or empty social profiles are automatically filtered out.\n\nEnsure your linked Twitter account has organic followers and activity, and complete initial identity binding tasks before deploying capital into vaults or purchasing NFTs.',
    strategy: 'The most capital-efficient strategy for farming $BOOK is to maximize your zero-cost credential dimensions first. Identity is usually the weakest scoring dimension for new accounts: mint your Incentive Passport and establish your on-chain WISE Credit Score, which only requires a few cents in Sui network gas fees.\n\nNext, actively participate in partner quest campaigns on the engagement portal: partner projects reward participants with their own native tokens in addition to TBook XP, creating an effective "double-dipping" opportunity. If you have idle stablecoins, depositing into the rcUSD Vault provides 8%+ APY with decaying withdrawal penalties, meaning long-term deposits outscore active cyclic deposits.',
    steps: [
      'Visit the <a href="https://engage.tbook.com/" target="_blank" rel="noopener noreferrer">TBook Engagement Portal</a>.',
      'Connect your Sui wallet (Sui Wallet, Nightly Wallet, or OKX Web3 Wallet).',
      'Navigate to the "Incentive Passport" section and bind your active Twitter/X, Discord, and Telegram credentials.',
      'Mint your personalized on-chain WISE Credit Score to unlock your baseline airdrop eligibility tier.',
      'Browse active partner campaigns in the portal and complete community tasks to claim exclusive Soulbound Tokens (SBTs).',
      '(Optional Yield Tier) Visit vault.tbook.com and deposit USDC into the rcUSD Vault to earn 8%+ APY backed by RWA assets.',
      '(Optional Tier) Mint or acquire a Bookies NFT on Sui to achieve the highest early-supporter airdrop tier boost.',
      'Generate your personal referral link from the portal dashboard and invite Web3 enthusiasts to expand your contributor rank.'
    ],
    faqs: [
      { question: 'How many $BOOK tokens are allocated for the airdrop?', answer: 'Exactly 750,000,000 $BOOK tokens (7.5% of the total 10 Billion supply) are officially reserved for community airdrop participants.' },
      { question: 'Is the TBook airdrop completely free?', answer: 'Yes, the foundational tier is free. Minting your Incentive Passport and WISE Credit Score only costs minor Sui gas fees (less than $0.05). Vault deposits and NFTs represent optional higher-tier allocations.' },
      { question: 'What happens if I miss a partner SBT campaign?', answer: 'Missing one campaign does not disqualify you. Eligibility is evaluated on your aggregate WISE score, social consistency, and passport longevity.' },
      { question: 'Which blockchain networks does TBook utilize?', answer: 'TBook is built primarily on the Sui blockchain, leveraging Sui\'s object-centric model, with expansion networks operating on TON and major EVM chains.' },
      { question: 'What is the WISE Credit Score?', answer: 'The WISE Credit Score is a decentralized on-chain reputation metric developed by TBook that measures wallet age, transaction consistency, social proof, and asset balances to determine fair airdrop weighting.' },
      { question: 'How does the rcUSD Vault generate yield?', answer: 'The rcUSD Vault routes liquidity into the R25 Protocol, securing institutional-grade returns on short-term real-world debt and U.S. treasury paper with daily compounding interest.' }
    ]
  },
  {
    id: 'ondo-perps',
    name: 'Ondo Perps',
    logo: 'https://airdrops.io/wp-content/uploads/2026/05/Ondo-Perps-logo.png.webp',
    description: 'Trade perpetual futures on tokenized U.S. equities, ETFs, and commodities backed by Ondo Finance.',
    reward: 'Weekly USDC & Ondo Points',
    category: 'DeFi / RWA',
    featured: true,
    status: 'active',
    endTime: '2026-11-01T23:59:59Z',
    funding: '$46.0M+',
    investors: 'Founders Fund, Pantera Capital, Coinbase Ventures',
    refLink: 'https://app.ondoperps.xyz/?ref=CR2GND',
    overview: 'Ondo Perps is a groundbreaking decentralized perpetual futures exchange developed by the core team behind Ondo Finance ($ONDO), the undisputed market leader in tokenized Real World Assets. The platform is designed to bring Wall Street\'s multi-trillion dollar derivatives market on-chain by facilitating 24/7 leveraged trading on tokenized representations of major U.S. equities (such as Tesla, Apple, Nvidia, and Microsoft), global index ETFs (SPY, QQQ), and tokenized commodities like physical gold.\n\nUnlike conventional crypto perpetual exchanges that only list volatile digital tokens, Ondo Perps bridges real-world institutional collateral into DeFi. Traders can utilize tokenized yield-bearing U.S. Treasuries ($USDY and $OUSG) as margin collateral, earning passive sovereign bond yield on their deposited capital while simultaneously executing directional trading strategies.\n\nOndo Finance is backed by an impressive $46 Million in institutional venture capital from prestigious tier-1 investors, including Peter Thiel\'s Founders Fund, Pantera Capital, Coinbase Ventures, and Tiger Global. The protocol currently distributes direct weekly USDC yield alongside Ondo Points to active liquidity participants.',
    tokenomics: 'Ondo Finance operates around the $ONDO governance token, which governs the Ondo DAO across Ethereum, Solana, and Arbitrum. The Ondo ecosystem features over $600 Million in Total Value Locked (TVL) across tokenized treasuries and credit primitives.\n\nOndo Perps operates an ongoing seasonal rewards program where participants earn two distinct reward streams: instant weekly cash distributions paid directly in USDC, and cumulative Ondo Points that track toward long-term governance rewards and ecosystem token allocations.\n\nProtocol fees generated by trading volume and liquidation margins are routed back to liquidity vault stakers and DAO treasury reserves, establishing sustainable economic alignment without inflationary token emissions.',
    sybilSafety: 'Because Ondo Perps is a high-liquidity financial derivatives platform, Sybil protection is inherently enforced through real capital execution and transaction volume thresholds.\n\nAvoid placing hundreds of wash trades within identical minute intervals, as algorithmic surveillance monitors for fee manipulation. Genuine trading behavior—executing diverse long and short positions across different stock tickers and holding positions open for realistic durations—ensures top-tier snapshot qualification.',
    strategy: 'Consistency and volume efficiency are the keys to dominating the Ondo Perps rewards leaderboard. Because snapshots and USDC reward distributions execute on weekly cycles, a trader who generates steady volume every single week will vastly outperform someone who deposits a large sum once and goes inactive.\n\nMaintain active margin positions using stablecoins or yield-bearing collateral, and trade high-liquidity equity pairs to minimize slippage. Using our verified referral link (Code: CR2GND) permanently unlocks fee discounts on all maker and taker orders.',
    steps: [
      'Navigate to the <a href="https://app.ondoperps.xyz/?ref=CR2GND" target="_blank" rel="noopener noreferrer">Ondo Perps Trading Terminal</a> with referral code <strong>CR2GND</strong>.',
      'Connect your Web3 Wallet (MetaMask, Rabby, or Coinbase Wallet) on the supported high-speed Layer 2 network.',
      'Deposit collateral into your cross-margin trading account (USDC or approved tokenized treasury assets).',
      'Select your desired asset class (U.S. Stocks like NVDA/TSLA, Index ETFs, or Crypto) and configure your leverage ratio.',
      'Execute long or short perpetual orders to build your weekly trading volume profile.',
      'Keep positions open for realistic timeframes and utilize stop-loss orders to manage liquidation risks.',
      'Navigate to the "Rewards" dashboard to inspect your accumulated weekly USDC payouts and Ondo Points tally.',
      'Copy your personal referral link to earn continuous rebates on your invitees\' trading volume.'
    ],
    faqs: [
      { question: 'Is trading on Ondo Perps completely free?', answer: 'No. Ondo Perps is a live mainnet financial derivatives exchange. Participating requires depositing real collateral (such as USDC) and paying standard blockchain network gas fees and trading commissions.' },
      { question: 'How are the weekly rewards paid out?', answer: 'Weekly rewards consist of direct USDC payouts credited straight into your connected trading wallet, alongside cumulative Ondo Points recorded on the rewards leaderboard.' },
      { question: 'What assets can I trade on Ondo Perps?', answer: 'You can trade perpetual futures on tokenized U.S. Equities (Apple, Tesla, Nvidia), broad-market ETFs (S&P 500, Nasdaq), physical commodities, and major cryptocurrencies.' },
      { question: 'Can I use yield-bearing assets as margin collateral?', answer: 'Yes! One of Ondo\'s standout innovations is allowing tokenized yield assets like USDY to serve as margin collateral, meaning you earn interest on your collateral while trading.' },
      { question: 'When does the rewards snapshot occur?', answer: 'Snapshots for the USDC reward pool are calculated on a rolling weekly schedule, resetting every Monday at 00:00 UTC.' },
      { question: 'Is KYC required to trade?', answer: 'Ondo Perps operates via decentralized, non-custodial smart contracts directly through your Web3 wallet without traditional centralized account KYC.' }
    ]
  },
  {
    id: 'nowa-protocol',
    name: 'Nowa Finance',
    logo: 'https://airdrops.io/wp-content/uploads/2026/08/Nowa-logo.jpg.webp',
    description: 'On-chain Buy Now, Pay Later (BNPL) decentralized finance protocol built on high-speed ZK-Rollup.',
    reward: 'Nowa Points & Airdrop',
    category: 'DeFi / BNPL / L2',
    featured: false,
    status: 'active',
    endTime: '2026-10-30T23:59:59Z',
    funding: 'Seed Backed',
    investors: 'Tier 1 Web3 Funds',
    refLink: 'https://app.nowa.finance/?ref=NOWA_EA519B',
    overview: 'Nowa Finance is pioneering the decentralized Buy Now, Pay Later (BNPL) financial model on-chain. While traditional consumer finance has seen massive adoption of BNPL through platforms like Klarna and Affirm, the crypto and Web3 space has historically lacked permissionless, smart contract-governed credit financing for spot digital assets.\n\nNowa bridges this gap by enabling users to purchase real spot cryptocurrency assets immediately with an initial down payment, while financing the remaining balance on flexible, automated payment schedules. Unlike traditional credit systems that require intrusive credit checks, identity scoring, and centralized approvals, Nowa\'s protocol operates entirely on collateralized smart contracts: the purchased asset is held securely in the BNPL smart contract escrow while the user retains upside price exposure.\n\nThe entire protocol operates on Nowa L2, a dedicated Ethereum-compatible Zero-Knowledge Rollup (ZK-Rollup). Settlement proofs are mathematically verified against Ethereum Sepolia and mainnet, guaranteeing near-instant finality and virtually non-existent transaction fees. Early adopters are currently rewarded through an extensive Nowa Points rewards campaign.',
    tokenomics: 'The governance and staking architecture of Nowa Finance will be powered by its native utility token upon TGE.\n\nA dedicated percentage of the future token supply is formally allocated to early protocol testers, points farmers, and liquidity providers. Accumulated Nowa Points will convert directly into token allocations based on final leaderboard rankings.\n\nToken utility encompasses governance rights over protocol interest rate parameters, staking for fee-share dividends from platform liquidations, and staking discounts on financing interest rates for active BNPL shoppers.',
    sybilSafety: 'To prevent Sybil attacks, Nowa monitors transaction velocity and contract interaction depth. Wallets that execute superficial deposit-and-instant-withdraw cycles without completing a full financing period are flagged for zero multipliers.\n\nTo ensure full qualification, maintain an active BNPL financing position over several days, complete social verification tasks on Discord and Twitter, and interact with the protocol on multiple distinct days.',
    strategy: 'Maximize your Nowa Points accumulation by utilizing both sides of the protocol: financing and liquidity provision. Execute a spot asset purchase using the BNPL feature to establish active borrowing volume, and set up a manageable repayment plan.\n\nConcurrently, deposit idle stablecoins into the "Earn" staking vaults to provide liquidity for other borrowers. This dual approach earns you base borrowing points, passive staking yield, and bonus lending points. Entering with our referral code (NOWA_EA519B) provides a welcome point bonus to jumpstart your rank.',
    steps: [
      'Visit the <a href="https://app.nowa.finance/?ref=NOWA_EA519B" target="_blank" rel="noopener noreferrer">Nowa Finance App</a> with referral code <strong>NOWA_EA519B</strong>.',
      'Connect your Web3 Wallet (MetaMask, Rabby, or Coinbase Wallet) and add the Nowa L2 network configuration.',
      'Complete mandatory community quests by linking your Twitter/X and Discord accounts.',
      'Deposit initial collateral (USDC, USDT, or ETH) into your account balance.',
      'Execute a "Buy Now, Pay Later" spot transaction by selecting a supported cryptocurrency and setting your down payment percentage.',
      'Navigate to the "Earn" tab to deposit liquidity into the lending pool and earn passive interest along with points multipliers.',
      'Track your accumulated Nowa Points and rank on the global rewards leaderboard.',
      'Share your invitation link to collect a percentage of all points generated by your network.'
    ],
    faqs: [
      { question: 'What is Buy Now, Pay Later (BNPL) in crypto?', answer: 'BNPL allows you to purchase spot crypto assets today by paying a fraction of the cost upfront, with the remaining balance settled over a scheduled timeframe without centralized credit checks.' },
      { question: 'Is my collateral safe on Nowa L2?', answer: 'Yes. Nowa L2 is a Zero-Knowledge Rollup where all state transitions and cryptographic proofs settle directly on the Ethereum blockchain, inheriting Ethereum\'s battle-tested security.' },
      { question: 'What happens if I miss a scheduled payment?', answer: 'If collateral value declines below the minimum liquidation margin, the smart contract automatically settles the position to protect lending liquidity.' },
      { question: 'Are there gas fees on Nowa L2?', answer: 'Because Nowa L2 utilizes ZK-Rollup compression, transaction fees are fractions of a cent, making it exceptionally cheap to farm compared to Ethereum Layer 1.' },
      { question: 'When will Nowa Points convert into tokens?', answer: 'Points conversion will take place at the official Token Generation Event (TGE) following the completion of the public testnet phases.' },
      { question: 'Which wallets are supported?', answer: 'MetaMask, Rabby Wallet, OKX Wallet, and all EVM-compatible Web3 browser extensions.' }
    ]
  },
  {
    id: 'dow-protocol',
    name: 'Dow Protocol',
    logo: 'https://images.unsplash.com/photo-1614064641913-6b110b9a22d9?w=128&q=80',
    description: 'RWA-backed decentralized e-commerce financing protocol advancing working capital on-chain.',
    reward: 'Confirmed Airdrop & XP',
    category: 'Layer 0 / RWA',
    featured: true,
    status: 'active',
    endTime: '2026-12-31T23:59:59Z',
    funding: '$10.5M Seed',
    investors: 'Animoca Brands, MH Ventures, Mapleblock',
    overview: 'Dow Protocol is transforming the global e-commerce supply chain through decentralized Real World Asset (RWA) financing. In modern international commerce, merchant sellers operating on massive global marketplaces—including Amazon, Shopify, Mercado Libre, and eBay—frequently face severe liquidity crunches due to 14-to-30 day settlement clearing delays imposed by traditional payment processors.\n\nDow Protocol bridges this multi-billion dollar working capital gap by moving invoice receivables financing entirely on-chain. By evaluating verified merchant transaction data through decentralized oracles, Dow Protocol advances instant stablecoin funding against pending marketplace receivables, enabling merchants to restock inventory and scale operations without predatory factoring fees.\n\nThe project successfully secured $10.5 Million in seed financing led by Web3 titans including Animoca Brands, MH Ventures, and Mapleblock Capital. Dow Protocol is currently conducting its official Dow XP Community Program, rewarding early supporters who complete social quests and provide stablecoin liquidity.',
    tokenomics: 'Dow Protocol\'s native token will serve as the governance and economic coordination token for the entire merchant financing network.\n\nA confirmed community airdrop pool has been committed for early participants who accumulate Task XP and liquidity points during the pre-TGE phase. Accumulated XP will translate directly into token allocations upon launch.\n\nThe token provides multi-utility: staking to backstop insurance liquidity pools for merchant loans, governance voting on risk assessment algorithms, and discounted protocol fees for commercial e-commerce partners.',
    sybilSafety: 'Dow Protocol requires social account verification (X/Twitter, Discord, and Telegram) to combat automated bot generation. Accounts with zero social history, suspicious follower ratios, or repetitive copy-paste tweets are actively flagged.\n\nTo ensure maximum eligibility, publish original high-quality thoughts when tagging the protocol, maintain an active Discord presence, and avoid linking newly created throwaway social accounts.',
    strategy: 'The most effective strategy for Dow Protocol is a balanced approach combining zero-cost social tasks with strategic liquidity provision. First, claim all baseline social XP by linking your accounts and publishing verified posts.\n\nSecond, if you have idle stablecoins, allocate liquidity into the protocol\'s verified financing vaults. Stablecoins deposited into merchant loan pools generate competitive real-world interest derived from merchant factoring fees, while granting a powerful multiplier on your accrued XP ahead of the TGE snapshot.',
    steps: [
      'Visit the official Dow Protocol points dashboard.',
      'Connect your Web3 Wallet (MetaMask, Rabby, or Coinbase Wallet).',
      'Link your X (Twitter) account to immediately unlock your initial 50 Task XP.',
      'Complete mandatory social verification tasks by joining official Telegram and Discord channels.',
      'Publish an original, high-quality tweet mentioning @DowProtocol and tag friends to earn ongoing engagement XP.',
      '(Optional Yield Tier) Deposit stablecoins into the USDC/USDT merchant financing vaults to earn passive APY and airdrop multipliers.',
      'Acquire your personal referral link from the dashboard and invite friends to earn a 10% lifetime bonus on their XP earnings.'
    ],
    faqs: [
      { question: 'Is participation in Dow Protocol free?', answer: 'Yes! The social farming tier is completely free. Linking social accounts and completing community tasks requires zero capital or crypto deposits.' },
      { question: 'What is the Dow XP Program?', answer: 'The Dow XP Program is the official pre-TGE rewards system where community members earn experience points (XP) that directly determine their retroactive token airdrop allocation.' },
      { question: 'Who are the lead investors in Dow Protocol?', answer: 'Dow Protocol raised $10.5M led by Animoca Brands, MH Ventures, and Mapleblock Capital, with participation from leading Web3 angel investors.' },
      { question: 'How does Dow Protocol generate real yield?', answer: 'Yield is generated from real-world merchant interest payments. Sellers on Amazon and Shopify pay interest on working capital advanced against their pending receivables.' },
      { question: 'When is the Dow Protocol TGE?', answer: 'The Token Generation Event (TGE) and official token launch are slated for late 2026.' },
      { question: 'Which blockchain does Dow Protocol use?', answer: 'Dow Protocol is engineered with Layer 0 cross-chain interoperability, supporting Ethereum, BNB Chain, and Arbitrum.' }
    ]
  },
  {
    id: 'sweep-finance',
    name: 'Sweep Finance',
    logo: 'https://airdrops.io/wp-content/uploads/2026/07/Sweep-Finance-logo.png.webp',
    description: 'Web3 gaming and prediction market ecosystem distributing 270,000,000 $SWEEP tokens (27% of total supply).',
    reward: '270,000,000 $SWEEP (27% Supply)',
    category: 'Gaming / DeFi',
    featured: true,
    status: 'active',
    endTime: '2026-12-15T23:59:59Z',
    funding: 'Fairlaunch & Treasury',
    investors: 'Community & Web3 Angels',
    refLink: 'https://sweep.finance/?referrer_code=6A4FS9W7',
    overview: 'Sweep Finance is a decentralized Web3 gaming, entertainment, and prediction market ecosystem engineered around the native $SWEEP token. The platform delivers an integrated suite of rapid-session decentralized games—such as Crash, Flip, Tower, and the popular arcade title Sweepbird—alongside an on-chain sports prediction protocol and SweePay, a borderless crypto payment processor.\n\nTraditional online gaming protocols frequently suffer from inflationary token designs and extractive operator models. Sweep solves this through an automated deflationary fee engine: every transaction executed across the ecosystem carries a standard 5% platform fee. Crucially, 50% of this fee is immediately routed to an immutable contract address for permanent token burns, while the remaining 50% is distributed directly to eligible community stakers in liquid USDT.\n\nThe fixed total supply is permanently capped at 999,666,333 $SWEEP tokens and can never be expanded. Sweep has formally committed a staggering 27% of the total network supply—roughly 270 Million tokens—to its public community airdrop and XP engagement campaign.',
    tokenomics: 'The economic mechanics of $SWEEP are built on mathematical scarcity and structural fee distribution. Total token supply is hard-capped at 999,666,333 $SWEEP.\n\nThe official tokenomics allocation assigns exactly 27% (approximately 270,000,000 $SWEEP) to community airdrop participants who stack XP through daily engagement, social quests, and arcade gaming. Airdropped tokens follow a transparent vesting schedule: a 3-month cliff upon Token Generation Event (TGE), followed by 9 months of smooth, linear daily unlocking.\n\nBecause 2.5% of every transaction across the platform is permanently burned while another 2.5% pays out passive USDT yields to token stakers, the circulating supply faces constant deflationary pressure as platform user volume scales.',
    sybilSafety: 'Sweep protects its 270 Million token allocation from automated bot networks by employing a dual-metric proof-of-humanity framework combining social verification and gameplay telemetry.\n\nIn Sweepbird and arcade gaming, game physics and tap intervals are analyzed client-side and verified on-chain to detect scripted bot automation. To ensure your account maintains pristine standing, play games naturally, maintain consecutive daily login streaks, and ensure your linked Twitter and Telegram accounts reflect genuine organic activity.',
    strategy: 'To maximize your conversion rate of XP into $SWEEP tokens, focus heavily on daily consistency rather than one-time sprints. The Sweepbird streak system (Bird Tiers) rewards unbroken daily play: each consecutive day you log in and play at least one session advances your Bird Tier, granting permanent XP bonuses and rare profile badges. If you miss a day, the streak resets to zero, though earned XP remains permanent.\n\nAdditionally, strive for placement on the daily Sweepbird leaderboard (which resets at 00:00 UTC) where top 100 daily finishers take home up to +2,000 bonus XP. Pairing daily gameplay with social quests and inviting active friends creates a powerful compounding XP flywheel.',
    steps: [
      'Visit the official <a href="https://sweep.finance/?referrer_code=6A4FS9W7" target="_blank" rel="noopener noreferrer">Sweep Finance Portal</a> with referral code <strong>6A4FS9W7</strong>.',
      'Connect your Web3 Wallet (MetaMask, Rabby, or WalletConnect) and complete account verification.',
      'Navigate to the "Tasks" tab to complete initial community verification quests (Follow on X, join official Telegram).',
      'Launch the "Sweepbird" arcade game from the games lobby and complete at least one game session daily to maintain your active streak.',
      'Climb Bird Tiers through consecutive daily play to unlock permanent XP boosters and milestone achievement badges.',
      'Compete for high-score rankings on the daily Sweepbird leaderboard before the 00:00 UTC reset to capture up to +2,000 bonus XP.',
      'Explore prediction markets and arcade mini-games to generate additional on-chain activity XP.',
      'Copy your personalized invitation link and refer fellow gamers to stack cumulative referral XP on every action they take.'
    ],
    faqs: [
      { question: 'Is the Sweep Finance airdrop free to farm?', answer: 'Yes, 100% free. Signing up, completing social tasks, daily verification, referral loops, and playing Sweepbird are entirely free and earn real XP that converts directly into $SWEEP tokens.' },
      { question: 'How many $SWEEP tokens are allocated to the airdrop?', answer: 'Approximately 270,000,000 $SWEEP tokens—equal to 27% of the entire fixed 999,666,333 supply—are reserved for community airdrop recipients.' },
      { question: 'How does XP convert into $SWEEP tokens?', answer: 'Your cumulative XP total determines your proportional pro-rata share of the 270 Million token airdrop pool. The exact mathematical ratio will be published upon the conclusion of the campaign.' },
      { question: 'What is the vesting schedule for airdropped tokens?', answer: 'Airdropped $SWEEP tokens follow a 3-month cliff after TGE listing, followed by 9 months of linear daily release to ensure long-term market stability.' },
      { question: 'What happens if I miss a day of Sweepbird?', answer: 'Your daily streak multiplier resets to zero, but all previously earned XP remains permanently credited to your account balance.' },
      { question: 'How does the deflationary burn mechanism work?', answer: 'Every ecosystem transaction incurs a 5% fee: exactly 2.5% is permanently destroyed (burned) from the total supply, and 2.5% is distributed to holders in liquid USDT.' }
    ]
  },
  {
    id: 'allox',
    name: 'AlloX',
    logo: 'https://airdrops.io/wp-content/uploads/2026/07/AlloX-logo.jpg.webp',
    description: 'AI-powered capital allocation platform transforming market narratives into automated token portfolios.',
    reward: 'Gems & Points ($1 Gem = $5 $ALLOX)',
    category: 'AI / DeFi / BSC',
    featured: true,
    status: 'active',
    endTime: '2026-11-30T23:59:59Z',
    funding: '$2.5M Seed',
    investors: 'Cryptorank, Tier 1 Web3 Angels',
    refLink: 'https://app.allox.ai',
    overview: 'AlloX is an innovative AI-driven capital allocation and automated portfolio construction platform built for decentralized finance. Navigating fast-moving crypto market cycles historically required manual token research, constant chart monitoring, and emotional execution. AlloX automates this entire process through machine learning models trained on on-chain liquidity velocity, social sentiment, and whale accumulation metrics.\n\nInstead of picking individual tokens manually, users select a strategic narrative—such as Artificial Intelligence (AI), Real World Assets (RWA), Decentralized Physical Infrastructure (DePIN), or Layer 2 Rollups—alongside their preferred risk profile. The AlloX algorithm autonomously constructs and executes a rebalanced, risk-adjusted basket of on-chain assets in a single transaction directly through the user\'s non-custodial wallet.\n\nThe project successfully closed a $2.5 Million seed round and has launched an expansive dual-tier rewards program. Early adopters earn baseline Points alongside high-value Gems, with the core team explicitly committing to a launch valuation benchmark where 1 Gem equals $5 in $ALLOX tokens upon the Token Generation Event (TGE).',
    tokenomics: 'The native governance and utility asset of the ecosystem is the $ALLOX token. $ALLOX powers decentralized governance proposals, algorithmic fee discounts, and platform yield enhancements.\n\nThe official tokenomics structure explicitly ties accumulated Points and Gems directly to the $ALLOX airdrop distribution scheduled for Q4 2026. Gems represent the highest-value reward asset: the development team has announced that each earned Gem corresponds to an anticipated $5 USD equivalent value in $ALLOX at token generation.\n\nAdditionally, staking $ALLOX grants holders passive dividend shares derived from platform portfolio rebalancing fees, creating organic long-term token demand.',
    sybilSafety: 'AlloX enforces on-chain volume validation and wallet interaction criteria to exclude Sybil farming rings. Because portfolio creation executes directly on BNB Chain smart contracts, empty bot wallets without real transaction history are filtered out.\n\nTo ensure top-tier qualification, maintain at least one active automated portfolio, claim your daily check-in bonus consistently, and link authentic Twitter and Discord accounts to your profile.',
    strategy: 'The most lucrative strategy on AlloX combines daily engagement with strategic on-chain volume. First, connect your wallet to immediately secure the 5,000-point welcome bonus, and link your social accounts for an additional 2,000 points.\n\nSecond, take part in the "Prove Your Portfolio" campaign: building one on-chain portfolio per day and sharing your portfolio card on X/Twitter qualifies you for a share of the $100,000 Gem pool while awarding 250 points daily. Volume is paramount: Gem accrual scales permanently with lifetime on-chain volume, so building early volume compounds your rewards throughout the campaign.',
    steps: [
      'Visit the official <a href="https://app.allox.ai" target="_blank" rel="noopener noreferrer">AlloX Platform dApp</a>.',
      'Connect your Web3 Wallet (MetaMask, Rabby, or OKX Web3 Wallet) to immediately trigger your 5,000-point welcome allocation.',
      'Complete initial profile tasks: link your Twitter/X and Discord accounts to claim an additional 2,000 points.',
      'Navigate to "Create Portfolio" and select a market theme (e.g., AI Agents, RWA, or Blue-Chip DeFi).',
      'Select your risk parameter, deposit funds on BNB Chain, and deploy your automated AI basket.',
      'Participate in the "Prove Your Portfolio" campaign: deploy one daily portfolio and share the on-chain badge to earn from the $100,000 Gem prize pool.',
      'Claim your Daily Check-in bonus to keep your compounding activity streak active.',
      'Navigate to the Referrals dashboard, activate your link, and earn up to $100 per qualified friend plus 5% lifetime commissions.'
    ],
    faqs: [
      { question: 'What is the conversion rate for AlloX Gems?', answer: 'The AlloX team has officially benchmarked that 1 Gem is designed to equal $5 worth of $ALLOX tokens upon the TGE token launch.' },
      { question: 'Is the AlloX airdrop completely free to join?', answer: 'The welcome bonus (5,000 points), daily check-in streak, and social tasks are 100% free. Creating actual portfolios and earning volume-based Gems requires deploying capital on BNB Chain.' },
      { question: 'When is the AlloX token launch (TGE)?', answer: 'The $ALLOX Token Generation Event is targeted for late 2026, with airdrop claims opening simultaneously with initial exchange listings.' },
      { question: 'How does the AlloX referral program work?', answer: 'The referral system features 3 stacking tracks: instant cash rewards up to $100 per invite, a permanent 5% override on second-tier referral earnings, and milestone cash bonuses up to $600.' },
      { question: 'Which blockchain does AlloX operate on?', answer: 'AlloX operates natively on BNB Smart Chain (BSC) with cross-chain routing expanding to Ethereum, Arbitrum, and Solana.' },
      { question: 'Are user funds safe inside AlloX portfolios?', answer: 'Yes. AlloX is non-custodial; assets remain in your self-custodial wallet and in audited decentralized smart contracts without centralized custody risk.' }
    ]
  },
  {
    id: 'soneium',
    name: 'Soneium (Sony L2)',
    logo: 'https://airdrops.io/wp-content/uploads/2024/08/ujzFVEj0_400x400.jpg.webp',
    description: 'Ethereum Layer 2 blockchain developed by Sony Block Solutions Labs with Optimism Superchain technology.',
    reward: 'Soneium Score & Ecosystem Drops',
    category: 'Layer 2 / Sony / Superchain',
    featured: true,
    status: 'active',
    endTime: '2026-12-31T23:59:59Z',
    funding: 'Sony Group Enterprise',
    investors: 'Sony Group Corporation, Startale Labs',
    refLink: 'https://portal.soneium.org',
    overview: 'Soneium is a next-generation Ethereum Layer 2 blockchain engineered by Sony Block Solutions Labs (Sony BSL), a dedicated joint venture between global entertainment giant Sony Group Corporation and Startale Labs. Constructed using Optimism\'s OP Stack and integrated natively into the Optimism Superchain ecosystem, Soneium is engineered to serve as an accessible, high-throughput bridge connecting mainstream creators, global consumer entertainment brands, and decentralized applications.\n\nWhile existing blockchains have struggled to onboard non-crypto native consumers due to fragmented user experiences and volatile gas fees, Soneium leverages Sony\'s vast global footprint across gaming (PlayStation), music, cinema, and consumer electronics to bring hundreds of millions of users on-chain. The network emphasizes intellectual property protection, frictionless creator monetization, and hyper-scalable transaction processing.\n\nThe project is running the multi-season Soneium Score engagement campaign on its public network, alongside the "Spotlight" ecosystem incubator. Participants accumulate on-chain reputation points by interacting with verified dApps, providing liquidity, and minting seasonal Soulbound achievement badges ahead of broader ecosystem distributions.',
    tokenomics: 'As an Optimism Superchain participant, Soneium utilizes Ethereum ($ETH) for network gas and state settlement, with long-term ecosystem governance coordinated through Sony Block Solutions Labs.\n\nWhile an official native token ticker has not been formally declared by Sony BSL, active on-chain metrics are systematically recorded via the proprietary Soneium Score engine. Users who attain a Score of 80 or higher in each 28-day seasonal window earn non-transferable Soulbound NFT badges that permanently memorialize early network usage.\n\nCrucially, leading decentralized protocols deploying on Soneium (including native DEXs, NFT infrastructure, and gaming titles like Pocket Knights and Dice or Die) are allocating dedicated portions of their own governance tokens directly to high-ranking Soneium Score holders.',
    sybilSafety: 'To eliminate bot farms and Sybil rings, Soneium has integrated the Copass decentralized Proof-of-Humanity (PoH) framework. Participants are encouraged to verify their humanity and mint an on-chain Copass verification badge on Soneium Mainnet.\n\nFurthermore, automated transaction loops that cycle the same token back and forth within minutes are discounted. Authentic usage—such as consistent daily check-ins, multi-protocol liquidity provision, and playing gaming dApps—is required to hit the 80-point seasonal threshold.',
    strategy: 'To maximize your standing in the Soneium ecosystem, focus on cross-category engagement across the four primary scoring pillars: Activity, Liquidity, NFT Collection, and Bonus Quests. First, bridge funds to Soneium using the official portal bridge.\n\nSecond, supply liquidity to verified automated market makers (AMMs) like Uniswap and Kyo Finance on Soneium, as liquidity provision carries higher point weightings than simple swaps. Maintain a daily transaction streak on featured seasonal games, and ensure you mint each 28-day Season Badge before the rotation window expires.',
    steps: [
      'Visit the official <a href="https://portal.soneium.org" target="_blank" rel="noopener noreferrer">Soneium Portal</a>.',
      'Connect your Web3 Wallet (MetaMask, Rabby, or Coinbase Wallet) and add the Soneium network.',
      'Bridge ETH to Soneium via the official native bridge or verified Superchain routing bridges.',
      'Navigate to the Soneium Score dashboard to inspect active seasonal challenges and your live score tier.',
      'Execute swaps and supply liquidity on featured decentralized exchanges (Uniswap, Kyo Finance) to boost Liquidity Score.',
      'Participate in seasonal gaming quests (e.g., daily check-ins on Dice or Die and climbing leaderboards on Pocket Knights).',
      'Visit the Copass verification portal and mint your Proof-of-Humanity Soulbound badge to secure Sybil-proof standing.',
      'Achieve a score of 80+ before the 28-day seasonal timer expires and mint your exclusive Season Badge NFT.'
    ],
    faqs: [
      { question: 'Is Soneium developed directly by Sony?', answer: 'Yes. Soneium is developed by Sony Block Solutions Labs, a corporate joint venture between Sony Group Corporation and Startale Labs (creators of Astar Network).' },
      { question: 'Is there a confirmed Soneium token?', answer: 'Sony Block Solutions Labs has not yet announced a native network token. However, Soneium Score tracks on-chain participation, and ecosystem projects are heavily rewarding high-score participants.' },
      { question: 'Do I need real cryptocurrency to participate?', answer: 'Yes, interacting on Soneium requires a small amount of ETH to cover Layer 2 gas fees (typically a few cents per transaction).' },
      { question: 'What is Soneium Score?', answer: 'Soneium Score is an on-chain reputation engine that tracks user engagement across 4 pillars: Activity, Liquidity, NFTs, and Bonus Quests over rotating 28-day seasons.' },
      { question: 'What happens if I miss a 28-day season?', answer: 'Each season scores independently, so missing one does not disqualify you from future seasons or retroactive partner allocations.' },
      { question: 'Which technology powers Soneium?', answer: 'Soneium is built on the OP Stack and operates as a core member of the Optimism Superchain alongside Base, Optimism, and Zora.' }
    ]
  },
  {
    id: 'story-protocol',
    name: 'Story Protocol',
    logo: 'https://airdrops.io/wp-content/uploads/2023/12/Story-Protocol-logo.png.webp',
    description: 'The World\'s Programmable IP Layer 1 blockchain backed by $140M from a16z and Polychain.',
    reward: 'Odyssey Testnet & $IP Token Rewards',
    category: 'Layer 1 / IP / a16z',
    featured: true,
    status: 'active',
    endTime: '2026-12-15T23:59:59Z',
    funding: '$140.0M Raised',
    investors: 'a16z crypto, Polychain Capital, Samsung Next, Hashed',
    refLink: 'https://mint.story.foundation',
    overview: 'Story Protocol is pioneering the world\'s first specialized Layer 1 blockchain engineered specifically for Programmable Intellectual Property (IP). In the age of generative artificial intelligence and digital proliferation, creative IP—including music, literature, digital characters, and artistic visual assets—is copied, remixed, and exploited across the web without verifiable ownership or automated compensation for creators.\n\nStory Protocol solves this multi-trillion dollar intellectual property challenge through three core foundational primitives: Proof of Creativity (PoC), the Programmable IP License (PIL), and the Story Network Layer 1 blockchain. Through Proof of Creativity, creators tokenize digital creative works into programmable on-chain "IP Assets". The Programmable IP License subsequently embeds terms, royalties, and commercial remix permissions directly into immutable smart contracts, enabling creators to monetize derivatives automatically in code.\n\nThe protocol has raised a massive $140 Million in total venture funding led by Andreessen Horowitz (a16z crypto), alongside Polychain Capital, Samsung Next, Endeavor, and prominent media executives. Story has launched its final incentivized testnet, Odyssey, featuring nearly 100 partner protocols building decentralized IP applications.',
    tokenomics: 'The economic and consensus engine of the network is the native $IP token. The token secures the Layer 1 Proof-of-Stake consensus mechanism and serves as the universal medium of exchange for licensing fees, royalty distributions, and intellectual property dispute staking.\n\nA significant allocation of the future $IP supply is slated for community contributors, developers, and retroactive testnet participants who register creative IP, collect ecosystem Soulbound Tokens (SBTs), and participate in the Odyssey campaign.\n\nAs AI models increasingly consume digital content, enterprise licensing agreements executed through Story smart contracts will drive structural token utility, requiring $IP for transaction settlement and protocol fee payment.',
    sybilSafety: 'Story Protocol enforces strict verification criteria across its Odyssey campaign. Wallets that simply deploy boilerplate smart contracts without genuine creative metadata or social links are filtered out.\n\nTo establish authentic human standing, complete your Story Guild roles on guild.xyz, claim your Storyname domain identity (.story), and link verified Twitter, Discord, and GitHub credentials to your Emergence Universe passport.',
    strategy: 'The most effective strategy for Story Protocol centers on completing the Odyssey partner quests and accumulating non-transferable Soulbound Badges (SBTs). First, request testnet tokens from the official Story faucet.\n\nSecond, register an on-chain Storyname domain to establish your decentralized identity. Next, work through the official Odyssey ecosystem page: complete tasks across featured partner dApps (such as Emergence, secondary IP markets, and generative AI creative suites) to claim distinct project badges. Finally, link your wallet to the Story Guild on guild.xyz to claim community roles corresponding to your badge tier.',
    steps: [
      'Visit the official <a href="https://mint.story.foundation" target="_blank" rel="noopener noreferrer">Story Foundation Mint Portal</a>.',
      'Connect your Web3 Wallet (MetaMask, Rabby, or OKX Wallet) and add the Story Odyssey Testnet network.',
      'Request free testnet tokens from the official Story faucet to cover gas fees for smart contract deployments.',
      'Navigate to the Storyname registration dApp and claim your personalized Web3 IP domain name (.story).',
      'Visit the Odyssey Ecosystem Hub and complete featured partner challenges to collect non-transferable Soulbound Badges (SBTs).',
      'Register an original creative asset (image, text, or audio) as an on-chain IP Asset using the Proof of Creativity interface.',
      'Attach a Programmable IP License (PIL) to your asset, configuring royalty percentages and remix terms.',
      'Join the official Story Guild on guild.xyz and claim verified Discord roles based on your accumulated Odyssey badges.'
    ],
    faqs: [
      { question: 'What is Story Protocol and why did it raise $140M?', answer: 'Story Protocol is a specialized Layer 1 blockchain for programmable intellectual property (IP). It raised $140M led by a16z crypto to enable creators to license, remix, and monetize creative content on-chain in the age of AI.' },
      { question: 'Is the Story Protocol Odyssey testnet free to farm?', answer: 'Yes, 100% free. All tasks run on the Odyssey testnet using free testnet tokens obtained from the public faucet. No real money is required.' },
      { question: 'What are Odyssey Badges (SBTs)?', answer: 'Odyssey badges are non-transferable Soulbound Tokens awarded for completing partner dApp quests. They serve as cryptographic proof of early network contribution.' },
      { question: 'What is the $IP token used for?', answer: 'The $IP token powers Proof-of-Stake validator consensus, pays Layer 1 computation fees, and settles automated licensing royalties across on-chain IP assets.' },
      { question: 'How do I obtain the Story Guild roles?', answer: 'Connect your wallet and Discord to guild.xyz/story-protocol. The system automatically inspects your on-chain Odyssey badges and awards corresponding roles in the Discord server.' },
      { question: 'When is the Story Protocol Mainnet launch?', answer: 'The Story Network Mainnet and Token Generation Event (TGE) are scheduled to launch following the conclusion of the Odyssey testnet phase in late 2026.' }
    ]
  },
  {
    id: 'monad',
    name: 'Monad',
    logo: 'https://airdrops.io/wp-content/uploads/2023/11/Monad-logo.png.webp',
    description: 'Ultra-high performance 10,000 TPS parallel EVM Layer 1 backed by $225M from Paradigm and Electric Capital.',
    reward: 'Early Ecosystem Points & $MON Token Airdrop',
    category: 'Layer 1 / Parallel EVM / Paradigm',
    featured: true,
    status: 'active',
    endTime: '2026-12-31T23:59:59Z',
    funding: '$225.0M Series A',
    investors: 'Paradigm, Electric Capital, Greenoaks, Castle Island Ventures',
    refLink: 'https://www.monad.xyz',
    overview: 'Monad is a revolutionary, developer-focused Layer 1 smart contract platform engineered to radically transform blockchain scalability through parallelized execution and an asynchronous consensus pipeline. While standard Ethereum Virtual Machine (EVM) blockchains process transactions sequentially—executing smart contracts one-by-one in strict single-threaded order—Monad introduces true Parallel Execution. Non-conflicting transactions execute simultaneously across multiple CPU cores while preserving 100% bytecode EVM compatibility.\n\nCombined with MonadBFT (a pipelined HotStuff-derived consensus algorithm) and MonadDb (a custom-built asynchronous state storage database), Monad achieves an unprecedented 10,000 transactions per second (TPS) with 1-second single-slot finality and sub-cent transaction costs. Developers can deploy existing Solidity smart contracts directly without modifying code, while users benefit from decentralized exchange trades and liquidations executing at centralized exchange speeds.\n\nFounded by former Jump Trading high-frequency algorithmic engineers Keone Hon and James Hunsaker, Monad completed a massive $225 Million funding round led by Paradigm alongside Electric Capital, Greenoaks, and top angel investors. As public testing phases roll out, early community members and ecosystem testers stand to capture what analysts anticipate could be one of the highest-value token distributions in Web3 history.',
    tokenomics: 'Monad operates on its native $MON token, which serves as the foundational gas and consensus asset of the network. $MON is utilized to pay for computation and storage on the parallel EVM, incentivize Proof-of-Stake validator nodes, and govern protocol upgrades.\n\nHistorical distributions from top-tier Paradigm-backed Layer 1 protocols dedicate between 10% to 20% of the genesis supply to early community contributors, ecosystem testnet operators, and active social members.\n\nGiven Monad\'s $3 Billion valuation benchmark from institutional financing, the $MON community airdrop is structured to reward genuine organic users who contribute to early network security, ecosystem dApp usage, and decentralized community building.',
    sybilSafety: 'Monad takes an aggressively community-first, anti-industrial stance on Sybil prevention. Unlike networks that reward simple bot-scripted volume, Monad\'s core team actively filters mass multi-wallet script runners and automated sybil rings.\n\nCrucial Sybil defenses include: authentic community engagement in the Monad Discord (earning organic community badges such as Nads, Running Nade, and Local Nad), active GitHub contributions for developers, participating in weekly community voice events, and maintaining diverse on-chain transaction paths rather than repeated identical wash trades.',
    strategy: 'Maximizing qualification for Monad requires a multi-faceted approach blending community presence and early ecosystem dApp testing.\n\nFirst, join the official Monad Discord and X (Twitter) community to participate in community initiatives, meme contests, and technical discussions to secure community roles.\n\nSecond, connect your EVM wallet to the official testnet portal upon release and request testnet tokens from the verified faucet.\n\nThird, interact systematically with early Monad ecosystem dApps, including decentralized exchanges, liquid staking protocols, and NFT marketplaces incubated in the Monad ecosystem.',
    steps: [
      'Visit the official <a href="https://www.monad.xyz" target="_blank" rel="noopener noreferrer">Monad Official Website</a> and explore developer documentation.',
      'Join the official Monad Discord server and complete account verification via the anti-bot channel.',
      'Participate actively in community discussions, technical threads, and regional language channels to earn organic community roles (e.g. Nads).',
      'Follow official Monad accounts on X (Twitter) and engage in official AMAs and ecosystem announcements.',
      'Add the Monad Testnet RPC to your Web3 wallet (MetaMask, Rabby) once public testing stages open.',
      'Request testnet gas tokens from the verified Monad Faucet to fund testnet smart contract interactions.',
      'Execute swaps, liquidity provision, and contract deployments across early Monad ecosystem dApps (e.g., ambient DEX, lending markets).',
      'Keep track of ecosystem partner campaigns on platforms like Galxe and Layer3 for verified on-chain quest credentials.'
    ],
    faqs: [
      { question: 'What is Monad and why did it raise $225M?', answer: 'Monad is an ultra-fast Layer 1 blockchain with 10,000 TPS and 1-second finality featuring full EVM compatibility and parallelized execution. It raised $225M led by Paradigm to solve Ethereum scalability at the base layer.' },
      { question: 'What makes Monad different from standard EVM chains?', answer: 'Traditional EVM chains process transactions sequentially (one at a time). Monad executes independent transactions simultaneously across parallel CPU cores, multiplying throughput by 100x without altering developer tooling.' },
      { question: 'Is the Monad testnet free to participate in?', answer: 'Yes, 100% free. Monad testnet interactions utilize free testnet $MON tokens acquired from public faucets, requiring zero real monetary expenditure.' },
      { question: 'How can I get community roles in the Monad Discord?', answer: 'Monad does not use automated role grinding bots. Community roles like Nads are granted manually by moderators and team members to users who create original content, contribute insightful technical ideas, or help fellow members.' },
      { question: 'What is the utility of the $MON token?', answer: 'The $MON token pays Layer 1 transaction gas fees, secures the network via Proof-of-Stake validator staking, and enables voting on governance parameters.' },
      { question: 'When is the Monad Mainnet and token airdrop expected?', answer: 'The Monad Mainnet launch and $MON Token Generation Event (TGE) are scheduled for late 2026 following thorough testnet validation and security audits.' }
    ]
  },
  {
    id: 'berachain',
    name: 'Berachain',
    logo: 'https://airdrops.io/wp-content/uploads/2023/04/Berachain-logo.png.webp',
    description: 'Proof-of-Liquidity Layer 1 blockchain with $142M funding led by Polychain Capital and Framework Ventures.',
    reward: '$BERA / $BGT Governance & Testnet Airdrop',
    category: 'Layer 1 / Proof of Liquidity / DeFi',
    featured: true,
    status: 'active',
    endTime: '2026-12-31T23:59:59Z',
    funding: '$142.0M Raised',
    investors: 'Polychain Capital, Framework Ventures, Brevan Howard Digital, Tribe Capital',
    refLink: 'https://www.berachain.com',
    overview: 'Berachain is a groundbreaking, high-performance EVM-identical Layer 1 blockchain powered by a novel consensus mechanism known as Proof-of-Liquidity (PoL). Built upon the modular Cosmos SDK and leveraging the Polaris EVM execution framework, Berachain solves the foundational liquidity fragmentation problem that plagues traditional Proof-of-Stake (PoS) blockchains.\n\nIn conventional networks, staking native tokens locks capital away from decentralized finance (DeFi), starving protocols of liquidity. Berachain completely inverts this paradigm: users provide liquidity into decentralized protocols to earn the non-transferable governance token ($BGT), which is then delegated to validators to direct network block rewards and earn transaction fees.\n\nHaving raised $142 Million from elite institutional investors including Polychain Capital, Framework Ventures, and Brevan Howard, Berachain is powered by an iconic tri-token architecture: $BERA (network gas fee token), $BGT (soulbound governance token), and $HONEY (fully collateralized native stablecoin). The incentivized public testnet (bArtio) has logged tens of millions of transactions across its native DeFi suite.',
    tokenomics: 'Berachain features a proprietary tri-token economic model designed for deep liquidity flywheels:\n\n1. $BERA: The native gas token used to pay for execution and smart contract operations.\n2. $BGT (Bera Governance Token): A non-transferable Soulbound token earned strictly by providing liquidity to eligible native pools. $BGT holders direct block emission incentives to pools and can burn $BGT 1:1 for liquid $BERA.\n3. $HONEY: The native algorithmic and collateralized stablecoin pegged to 1 USD, minted against qualified crypto collateral on the native Bend protocol.\n\nCommunity airdrop allocations are heavily weighted towards public testnet power users who interacted with the core native dApps (BEX, BEND, BERPS), held ecosystem NFTs (Bong Bears and rebase collections), and participated in validator delegation.',
    sybilSafety: 'Berachain monitors testnet interaction quality to filter out Sybil scripts. The testnet faucet employs Cloudflare Turnstile bot deterrence and limits requests per IP and wallet age.\n\nAdditionally, holding verified ecosystem credentials (such as Boyco badges or Galxe verification credentials) and executing multi-step DeFi interactions—such as minting $HONEY, depositing into the BEX liquidity pool, and staking vault deposits—signals legitimate user behavior compared to repetitive faucet-draining bots.',
    strategy: 'The premier strategy to qualify for the Berachain $BERA airdrop involves cycling through the entire native DeFi trinity on the public testnet.\n\nFirst, claim testnet $BERA from the official faucet every 8 hours.\n\nSecond, navigate to BEX (the native decentralized exchange) and swap $BERA for $HONEY and $STGUSDC.\n\nThird, supply liquidity to the BERA/HONEY pool on BEX to start harvesting $BGT governance tokens.\n\nFourth, deposit collateral onto the BEND lending platform to borrow $HONEY, and open perpetual futures positions on BERPS.\n\nFinally, delegate your claimed $BGT to a top validator via the Berachain governance portal to participate in consensus incentives.',
    steps: [
      'Visit the official <a href="https://www.berachain.com" target="_blank" rel="noopener noreferrer">Berachain Portal</a> and connect your EVM wallet.',
      'Claim free testnet $BERA tokens from the official Berachain Faucet.',
      'Open the native decentralized exchange (BEX) and swap a portion of $BERA for $HONEY and $WETH.',
      'Supply liquidity into the $BERA / $HONEY or $HONEY / $STGUSDC pools on BEX to initiate $BGT emissions.',
      'Visit the Bend protocol to deposit collateral assets (WETH/WBTC) and borrow native $HONEY stablecoins.',
      'Trade perpetual futures contracts on BERPS using your minted $HONEY as margin.',
      'Claim accumulated $BGT tokens and delegate your voting power to an active validator on the Berachain Governance Station.',
      'Complete official partner quests on Galxe and join the Berachain Discord server to claim community roles.'
    ],
    faqs: [
      { question: 'What is Berachain and Proof-of-Liquidity?', answer: 'Berachain is an EVM-compatible Layer 1 blockchain that uses Proof-of-Liquidity (PoL) consensus, aligning network security directly with decentralized liquidity provision to build deep on-chain capital pools.' },
      { question: 'What is the tri-token model ($BERA, $BGT, $HONEY)?', answer: '$BERA is the gas token used for transactions, $BGT is the non-transferable governance token earned by liquidity providers, and $HONEY is the native USD-pegged stablecoin.' },
      { question: 'Is the Berachain bArtio testnet free?', answer: 'Yes, 100% free. Users can claim free testnet $BERA from the official faucet without spending real money.' },
      { question: 'Can $BGT be bought or traded?', answer: 'No. $BGT is a Soulbound token that cannot be transferred or traded. It can only be earned by providing liquidity, and it can be burned 1:1 for liquid $BERA.' },
      { question: 'What are the main dApps to interact with on Berachain testnet?', answer: 'The core native trinity includes BEX (decentralized exchange), Bend (lending and borrowing market), and Berps (perpetual futures trading platform).' },
      { question: 'When is the Berachain mainnet and token launch?', answer: 'Berachain mainnet is scheduled to launch in late 2026, accompanied by the genesis $BERA token distribution to testnet participants and community members.' }
    ]
  }
];