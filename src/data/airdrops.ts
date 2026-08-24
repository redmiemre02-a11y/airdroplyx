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
    overview: 'Dow Protocol is an e-commerce financing RWA platform that moves working capital lending for cross-border merchants on-chain. Sellers on Amazon wait 14-28 days for sales proceeds, while bills keep arriving. Dow advances stablecoin funding against these receivables. They recently launched the Dow XP program to reward early adopters ahead of their token launch.',
    funding: '$10.5 Million (Seed)',
    investors: 'Animoca Brands, MH Ventures, Mapleblock',
    allocation: 'TBA (XP Program Active)',
    steps: [
      'Visit the Dow Protocol XP dashboard and connect your Web3 wallet (MetaMask on BNB Chain or a Sui wallet).',
      'Connect your X (Twitter) account to unlock the initial 50 XP.',
      'Write a post about Dow Protocol on X, emphasizing their RWA e-commerce vaults, and submit the link for review (Earns 50 XP and unlocks referrals).',
      'Link your Telegram and Discord accounts (50 XP each).',
      '(Optional but highly recommended) Deposit stablecoins into their financing vault on BNB Chain or Sui when subscription windows are open.',
      'Share your referral link with friends to infinitely compound your Referral XP.'
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
    steps: [
      'Visit the NovaX testnet platform using our referral link.',
      'Connect your Web3 wallet (MetaMask or Rabby).',
      'Request testnet tokens from the official faucet provided on their dashboard.',
      'Complete at least 5 cross-chain swap transactions to build volume.',
      'Provide liquidity in any of the available pools (USDC/ETH recommended).',
      'Join their Discord server and verify your wallet in the #airdrop-verify channel.'
    ]
  }
];
