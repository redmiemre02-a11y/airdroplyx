export interface Airdrop {
  id: string;
  name: string;
  logo: string;
  description: string;
  status: 'active' | 'upcoming' | 'ended';
  reward: string;
  category: string;
  featured?: boolean;
}

export const airdrops: Airdrop[] = [
  {
    id: 'novax-protocol',
    name: 'NovaX Protocol (Test)',
    logo: 'https://cryptologos.cc/logos/cosmos-atom-logo.svg?v=032',
    description: 'NovaX is an omni-chain liquidity hub. Backed by Binance Labs, they have confirmed a token airdrop for early testnet users.',
    status: 'active',
    reward: 'Potential $1000+',
    category: 'Layer 0',
    featured: true,
  },
  {
    id: '1',
    name: 'MegaChain',
    logo: 'https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=032',
    description: 'A scalable Layer-2 blockchain with zero-knowledge rollups.',
    status: 'active',
    reward: 'Up to 5,000 $MEGA',
    category: 'Layer 2',
    featured: true,
  },
  {
    id: '2',
    name: 'Aptos Yield',
    logo: 'https://cryptologos.cc/logos/aptos-apt-logo.svg?v=032',
    description: 'DeFi yield farming protocol on the Aptos network.',
    status: 'active',
    reward: 'Mystery Box',
    category: 'DeFi',
    featured: true,
  },
  {
    id: '3',
    name: 'Zeta Protocol',
    logo: 'https://cryptologos.cc/logos/arbitrum-arb-logo.svg?v=032',
    description: 'Cross-chain decentralized exchange focusing on stablecoins.',
    status: 'upcoming',
    reward: '100 $ZETA + NFT',
    category: 'DEX',
  },
  {
    id: '4',
    name: 'Nova Wallet',
    logo: 'https://cryptologos.cc/logos/solana-sol-logo.svg?v=032',
    description: 'Next generation non-custodial wallet with built-in staking.',
    status: 'active',
    reward: 'Early Adopter Tokens',
    category: 'Wallet',
  },
  {
    id: '5',
    name: 'Lumina NFT',
    logo: 'https://cryptologos.cc/logos/polygon-matic-logo.svg?v=032',
    description: 'The premier NFT marketplace for digital artists on Polygon.',
    status: 'ended',
    reward: 'Exclusive Avatar',
    category: 'NFT',
  }
];
