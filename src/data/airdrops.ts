export interface Airdrop {
  id: string;
  name: string;
  logo: string;
  description: string;
  status: 'active' | 'upcoming' | 'expired';
  reward: string;
  category: string;
  featured?: boolean;
  overview?: string;
  funding?: string;
  investors?: string;
  allocation?: string;
  steps?: string[];
  faqs?: { question: string; answer: string }[];
  strategy?: string;
}

export const airdrops: Airdrop[] = [
  {
    id: 'dow-protocol',
    name: 'Dow Protocol',
    logo: 'https://airdrops.io/wp-content/uploads/2026/08/Dow-Protocol-logo.jpg.webp',
    description: 'Dow Protocol is an e-commerce financing RWA platform backed by Animoca Brands. Earn Dow XP via social tasks and stablecoin vaults to position for their upcoming token.',
    status: 'active',
    reward: 'Potential TGE',
    category: 'RWA / DeFi',
    featured: true,
    overview: 'Dow Protocol is rapidly emerging as a pioneer in the Real World Asset (RWA) space by solving a massive problem in global e-commerce. Currently, sellers on massive marketplaces like Amazon often have to wait anywhere from 14 to 28 days for their sales proceeds to clear. This creates a severe liquidity crunch because their advertising, logistics, and inventory bills continue to pile up in the meantime.\n\nTo bridge this gap, Dow Protocol leverages blockchain technology to move working capital lending on-chain. They advance stablecoin funding to these merchants against their pending receivables. The process is highly secure and automated, as Dow collects the repayment directly from the merchant\'s platform balance once the funds clear.\n\nThe project recently secured a massive $10.5 Million in a seed funding round led by industry giants including Animoca Brands, MH Ventures, and Mapleblock. With this war chest, they are expanding their vaults on both the BNB Chain and Sui network. To bootstrap liquidity and user adoption ahead of their highly anticipated Token Generation Event (TGE), they have launched the "Dow XP Program". This program heavily rewards early adopters, community members, and liquidity providers.',
    funding: '$10.5 Million (Seed)',
    investors: 'Animoca Brands, MH Ventures, Mapleblock, Arcane Group',
    allocation: 'TBA (XP Program Active)',
    strategy: 'Dow Protocol is unique because the underlying business model is already proven. The yield comes directly from real-world merchant interest rather than unsustainable token emissions. Our strategy here is twofold: First, immediately lock in the free social points (Task XP) by connecting your X, Discord, and Telegram. Second, if you have idle stablecoins, parking a small portion into their 90-day vaults could serve as a massive multiplier for the airdrop, as liquidity providers are historically rewarded the most in RWA protocols.',
    steps: [
      'Navigate to the Official Dow Protocol Points Dashboard: Start by visiting the official Dow Protocol web app. You will need a secure Web3 wallet. If you are interacting via the BNB Chain, MetaMask or Rabby Wallet are highly recommended. If you plan to use their Sui vaults, make sure to bind a Sui-compatible wallet as well.',
      'Connect your X (Twitter) Account: This is the mandatory gateway step. Linking your X account will instantly grant you your first 50 XP. More importantly, this step gates all other referral and social features on the platform.',
      'Publish a High-Quality Post about Dow Protocol: The platform requires you to write a post on X about them. To get approved quickly, avoid copy-pasting spam. Write a genuine sentence about their RWA e-commerce vaults or their recent $10.5M funding. Submit the post link through the dashboard. Once manually reviewed and approved, you earn another 50 XP and unlock your personal referral link.',
      'Link your Telegram and Discord Accounts: Scroll down the quest list and connect your Telegram and Discord accounts. These are one-time verifications that take less than a minute and will boost your balance by an additional 100 XP (50 XP each).',
      'Provide Liquidity to the Stablecoin Vaults (Optional but High-Value): Keep an eye on their subscription windows. When a vault opens (like the Dow E-Commerce Financing Vault on BNB Chain or Dowsure Stable #1 on Sui), you can deposit stablecoins. Note that these vaults usually have a 90-day lockup period, so only deposit funds you do not need immediately. This action is expected to carry the highest weight for the future airdrop.',
      'Maximize Earnings with Referrals: Once your X post is approved, grab your referral link. Share it with your crypto network. Referrals are currently the only way to infinitely scale your XP past the one-time social tasks.'
    ],
    faqs: [
      {
        question: 'When is the Dow Protocol token launch (TGE)?',
        answer: 'The Dow Protocol team has not yet announced an official date for their Token Generation Event (TGE) or token ticker. Currently, the primary focus is on accruing Dow XP.'
      },
      {
        question: 'Is it completely free to participate?',
        answer: 'Yes, the social farming aspect is 100% free. Connecting your social accounts and referring friends costs absolutely nothing (zero gas fees). However, participating in the vault deposits requires actual stablecoins and network gas fees.'
      },
      {
        question: 'How do I unlock my referral link?',
        answer: 'Your referral link remains locked until you complete the X (Twitter) posting task. You must write a post, submit the URL on their dashboard, and wait for their team to review it. Once approved, your invite link becomes active.'
      }
    ]
  },
  {
    id: 'novax-protocol',
    name: 'NovaX Protocol (Test)',
    logo: 'https://cryptologos.cc/logos/cosmos-atom-logo.svg?v=032',
    description: 'NovaX is an omni-chain liquidity hub. Backed by Binance Labs, they have confirmed a token airdrop for early testnet users.',
    status: 'active',
    reward: 'Potential $1000+',
    category: 'Layer 0',
    featured: true,
    overview: 'NovaX is building the next generation of decentralized infrastructure. By solving the liquidity fragmentation problem across various Layer 2 rollups, they are positioning themselves as a critical piece of the future Web3 ecosystem. The team has officially confirmed that 15% of the total token supply is allocated for community airdrops and early testers.',
    funding: '$45.5 Million',
    investors: 'Binance Labs, Paradigm, a16z',
    allocation: '15% of Total Supply',
    strategy: 'Testnet interactions are entirely free, making this a zero-risk play. Focus on generating consistent weekly volume rather than doing it all in one day.',
    steps: [
      'Visit the NovaX testnet platform using our referral link.',
      'Connect your Web3 wallet (MetaMask or Rabby).',
      'Request testnet tokens from the official faucet provided on their dashboard.',
      'Complete at least 5 cross-chain swap transactions to build volume.',
      'Provide liquidity in any of the available pools (USDC/ETH recommended).',
      'Join their Discord server and verify your wallet in the #airdrop-verify channel.'
    ],
    faqs: [
      {
        question: 'Is this on mainnet?',
        answer: 'No, this is currently in the testnet phase.'
      }
    ]
  }
];
