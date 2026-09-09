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
  steps: string[];
  faqs: { question: string; answer: string }[];
}

export const airdrops: Airdrop[] = [
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
    overview: 'Dow Protocol is rapidly emerging as a pioneer in the Real World Asset (RWA) space by solving a massive liquidity issue in global e-commerce. Sellers on massive marketplaces like Amazon, Shopify, and eBay often wait 14 to 28 days for payment clearing. Dow Protocol bridges this gap by moving working capital lending entirely on-chain, advancing stablecoin funding against pending marketplace receivables.\n\nThe project secured $10.5M in seed funding led by Animoca Brands and MH Ventures. The official Dow XP Program rewards community members who complete social quests and supply stablecoin liquidity.',
    strategy: 'Focus on completing all free social quests to lock in baseline Task XP. For maximum rewards, depositing stablecoins into their 90-day lending pools unlocks a major airdrop multiplier ahead of their Token Generation Event (TGE).',
    steps: [
      'Visit the official Dow Protocol points dashboard.',
      'Connect your Web3 Wallet (MetaMask or Rabby).',
      'Link your X (Twitter) account to instantly claim 50 Task XP.',
      'Complete social verification tasks (Join official Telegram and Discord channels).',
      'Share a verified tweet mentioning @DowProtocol and tag friends.',
      'Supply liquidity to the USDC/USDT financing vault to earn passive yield and XP multipliers.',
      'Grab your personal referral link to earn 10% bonus XP from your invitees.'
    ],
    faqs: [
      { question: 'When is the Dow Protocol TGE?', answer: 'The Token Generation Event (TGE) date will be announced in Q4 2026. The XP farming program is currently active.' },
      { question: 'Is participation completely free?', answer: 'Yes! The social farming tier is 100% free and requires no crypto deposit.' },
      { question: 'Which wallets are supported?', answer: 'MetaMask, Rabby, Coinbase Wallet, and all WalletConnect compatible wallets.' }
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
    overview: 'Ondo Perps is a perpetual futures trading platform engineered by the leaders behind Ondo Finance ($ONDO). It enables 24/7 leveraged trading on tokenized Wall Street equities (such as Tesla, Apple, Nvidia), global ETFs, and gold/commodities with complete on-chain transparency.\n\nBacked by over $46 Million in venture capital from Founders Fund, Pantera Capital, and Coinbase Ventures, the platform distributes weekly USDC payouts alongside Ondo Points to eligible active traders.',
    strategy: 'Consistency beats size. Ondo Perps calculates reward tiers weekly, so executing regular small trades across various asset classes will generate consistent volume points while keeping risk managed. Use our exclusive referral link for discounted trading fees.',
    steps: [
      'Navigate to the <a href="https://app.ondoperps.xyz/?ref=CR2GND" target="_blank" rel="noopener noreferrer">Ondo Perps Application</a> using our verified referral link (Code: CR2GND).',
      'Connect your Web3 wallet and switch to the supported high-speed rollup.',
      'Deposit collateral into your trading account (USDC or approved tokenized securities).',
      'Open long or short perpetual positions on your preferred equities or indices.',
      'Maintain an active trading profile throughout each weekly snapshot window.',
      'Monitor your weekly USDC distributions and accumulated Ondo Points in the Rewards tab.',
      'Share your referral code to collect a percentage of your referees\' trading fee rebates.'
    ],
    faqs: [
      { question: 'Is trading on Ondo Perps free?', answer: 'No, opening positions requires depositing real collateral (USDC) and paying standard network transaction fees.' },
      { question: 'How are rewards distributed?', answer: 'USDC rewards are credited weekly directly to your connected wallet, while Points accumulate toward future governance allocations.' }
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
    overview: 'Nowa Finance introduces Buy Now, Pay Later (BNPL) to decentralized finance. Through smart contract-based collateralized financing, traders can acquire spot cryptocurrency assets immediately and amortize payments on flexible schedules without centralized credit checks.\n\nOperating on its proprietary Ethereum-compatible ZK-Rollup (Nowa L2), the protocol delivers lightning-fast settlement with fractional gas costs. Early adopters earn Nowa Points by testing the BNPL engine, providing liquidity, and engaging with community quests.',
    strategy: 'Generate transaction volume by testing both the Buy Now and Pay Later functions. Staking assets in the Earn tab also yields dual rewards: base yield plus points multipliers.',
    steps: [
      'Visit the <a href="https://app.nowa.finance/?ref=NOWA_EA519B" target="_blank" rel="noopener noreferrer">Nowa Finance App</a> with referral code NOWA_EA519B.',
      'Connect your Web3 wallet and add the Nowa L2 network.',
      'Complete initial social verification (Twitter / Telegram / Discord).',
      'Deposit initial collateral (USDC or ETH) to initiate your on-chain credit line.',
      'Execute a Buy Now, Pay Later transaction to stimulate protocol volume.',
      'Head over to the Earn section and stake liquidity in designated reward vaults.',
      'Generate your invite link from the dashboard to earn referral multipliers.'
    ],
    faqs: [
      { question: 'What happens if a BNPL payment is missed?', answer: 'If collateral value falls below maintenance thresholds, the smart contract automatically settles the position to protect protocol solvency.' },
      { question: 'Is the ZK-Rollup secure?', answer: 'Yes, proofs are verified on Ethereum Sepolia and mainnet, maintaining Ethereum\'s foundational security.' }
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
    overview: 'TBook is an embedded Real World Asset (RWA) liquidity layer that routes tokenized, institutional-grade yield into consumer applications. Operating primarily on Sui with expanding distribution across TON, TBook enables non-custodial wallets to generate native yield on idle balances.\n\nTBook has officially confirmed its airdrop program, allocating 7.5% (750 Million tokens) of the total 10 Billion $BOOK supply to early ecosystem participants. Rewards are calculated via the WISE Credit Score, soulbound tokens (SBTs), and engagement quests.',
    strategy: 'Mint your WISE Credit Score and build your Incentive Passport first, as these are low-cost and compound over time. Participate in rotating partner campaigns to "double dip" rewards from both TBook and partner protocols.',
    steps: [
      'Visit the <a href="https://engage.tbook.com/" target="_blank" rel="noopener noreferrer">TBook Engagement Portal</a>.',
      'Connect your Sui wallet (Sui Wallet, Nightly, or OKX Web3 Wallet).',
      'Build your Incentive Passport by linking your Twitter, Discord, and Telegram accounts.',
      'Mint your on-chain WISE Credit Score to establish your baseline reward tier.',
      'Participate in active ecosystem campaigns to collect Soulbound Tokens (SBTs).',
      '(Optional) Deposit USDC into the rcUSD Vault on vault.tbook.com to earn 8%+ APY and vault points.',
      'Mint or hold a Bookies NFT on Sui for the maximum airdrop tier upgrade.'
    ],
    faqs: [
      { question: 'How much of the supply is allocated to the airdrop?', answer: 'Exactly 7.5% of the total 10 billion $BOOK supply (750,000,000 tokens) is allocated to airdrop participants.' },
      { question: 'Is the airdrop free to farm?', answer: 'Building your Incentive Passport and minting the WISE Score only costs fractions of a cent in Sui gas fees. Vault deposits and NFTs are optional premium tiers.' },
      { question: 'Which networks are supported?', answer: 'TBook runs natively on Sui with integrations extending to TON and EVM ecosystems.' }
    ]
  },
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
    overview: 'Push Chain is a shared-state Layer 1 blockchain engineered by the creators of Push Protocol (formerly EPNS) as a universal execution layer. Instead of forcing developers to build fragmented versions of their dApps for Ethereum, Solana, and Cosmos, Push Chain enables teams to deploy once and reach users natively across any chain with automated wallet and gas abstraction.\n\nThe project previously raised over $10.1M from Tier 1 backers including Binance Labs, Jump Crypto, and Tiger Global. The official tokenomics allocate 10% (1,000,000,000 $PC) of the total 10 Billion supply for airdrop participants, with Season 3 rewards currently running live on testnet.',
    strategy: 'Consistency is king in Season 3. Maintain an unbroken daily check-in streak to compound streak multipliers, use your daily Spin 2 Win wheel to hoard Rare Passes (which convert into Shiny Passes at TGE), and refer friends to unlock 16% tier-1 and 8% tier-2 XP kickbacks.',
    steps: [
      'Visit the <a href="https://portal.push.org/rewards?ref=c74a59c" target="_blank" rel="noopener noreferrer">Push Chain Rewards Portal</a> (Referral Code: <strong>c74a59c</strong>).',
      'Connect your Web3 Wallet (MetaMask, Rabby, or Coinbase Wallet) to initiate your account.',
      'Claim free testnet $PC tokens from the in-portal faucet (resets every 6 hours) to cover quest gas.',
      'Check in daily to build your activity streak and unlock compounding XP bonuses.',
      'Use your daily Spin 2 Win to win Rare Passes, bonus testnet tokens, and XP multipliers.',
      'Complete weekly Universal App challenges across gaming, DeFi, and prediction apps.',
      'Stack Rare Passes—all passes will be burned at TGE for high-tier allocation chances.',
      'Share your personal invite link to earn 16% direct and 8% second-degree XP rewards.'
    ],
    faqs: [
      { question: 'Is farming Push Chain completely free?', answer: 'Yes! Season 3 runs entirely on the Push Chain testnet using free faucet tokens. You never need to deposit real cryptocurrency.' },
      { question: 'How many $PC tokens are allocated for the airdrop?', answer: '10% of the total 10 Billion $PC supply—equal to 1,000,000,000 $PC tokens—is formally reserved for community airdrop rewards.' },
      { question: 'When is the Push Chain TGE and Mainnet?', answer: 'The Token Generation Event (TGE) and Mainnet launch are scheduled following the conclusion of the Season 3 testnet campaign.' }
    ]
  }
];