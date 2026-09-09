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
  }
];