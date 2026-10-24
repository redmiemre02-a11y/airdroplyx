export interface CalendarEvent {
  id: string;
  airdropId: string;
  name: string;
  logo: string;
  category: string;
  date: string; // e.g. "2026-11-15" or "Q4 2026"
  exactDate?: string; // ISO date for sorting
  type: 'TGE' | 'Snapshot' | 'Testnet Deadline' | 'Cap Expansion';
  status: 'Confirmed' | 'Estimated';
  title: string;
  description: string;
  reward: string;
  actionUrl: string;
}

export const calendarEvents: CalendarEvent[] = [
  {
    id: 'hyperliquid-tge-snapshot',
    airdropId: 'hyperliquid',
    name: 'Hyperliquid',
    logo: '/images/airdrops/hyperliquid.svg',
    category: 'DeFi / Perps',
    date: 'November 2026',
    exactDate: '2026-11-15',
    type: 'TGE',
    status: 'Confirmed',
    title: 'HYPE Token Generation Event & Genesis Distribution',
    description: 'Final calculation of community points into $HYPE tokens. 31% of total genesis supply allocated to early on-chain traders and vault liquidity providers.',
    reward: '$1,000 - $25,000',
    actionUrl: '/airdrop/hyperliquid'
  },
  {
    id: 'berachain-mainnet-tge',
    airdropId: 'berachain',
    name: 'Berachain',
    logo: '/images/airdrops/berachain.svg',
    category: 'Layer 1 / DeFi',
    date: 'November 2026',
    exactDate: '2026-11-20',
    type: 'TGE',
    status: 'Estimated',
    title: 'bArtio Testnet Completion & Mainnet Genesis Launch',
    description: 'Following 100M+ testnet transactions, Berachain transitions from bArtio testnet to mainnet with genesis token distributions to Proof-of-Liquidity participants and BERA NFT holders.',
    reward: '$2,500 - $15,000',
    actionUrl: '/airdrop/berachain'
  },
  {
    id: 'linea-voyage-final-snapshot',
    airdropId: 'linea',
    name: 'Linea',
    logo: '/images/airdrops/linea.svg',
    category: 'Layer 2 / zkEVM',
    date: 'December 2026',
    exactDate: '2026-12-05',
    type: 'Snapshot',
    status: 'Confirmed',
    title: 'The Surge Volt Final Liquidity Snapshot & LXP Calculation',
    description: 'Consensys executes the comprehensive snapshot for all Linea Voyage LXP holders and LXP-L liquidity surge participants ahead of decentralized governance rollout.',
    reward: '$1,500 - $8,000',
    actionUrl: '/airdrop/linea'
  },
  {
    id: 'monad-public-testnet',
    airdropId: 'monad',
    name: 'Monad',
    logo: '/images/airdrops/monad.svg',
    category: 'Parallel EVM L1',
    date: 'November 2026',
    exactDate: '2026-11-10',
    type: 'Testnet Deadline',
    status: 'Confirmed',
    title: 'High-Throughput Public Testnet Onboarding Phase',
    description: 'Public phase opening for Monad parallel EVM network. Developers and early community members run high-frequency testnet contracts and test 10,000 TPS limits.',
    reward: '$5,000 - $20,000',
    actionUrl: '/airdrop/monad'
  },
  {
    id: 'movement-battle-olympus',
    airdropId: 'movement',
    name: 'Movement',
    logo: '/images/airdrops/movement.svg',
    category: 'Modular / MoveVM',
    date: 'November 2026',
    exactDate: '2026-11-25',
    type: 'Testnet Deadline',
    status: 'Confirmed',
    title: 'Battle of Olympus Final Guild Snapshot & Token Claim',
    description: 'Concluding the Battle of Olympus incentivized testnet. Points earned through Spartacus guild quests, testnet liquidity, and smart contract deployments lock for TGE.',
    reward: '$800 - $5,000',
    actionUrl: '/airdrop/movement'
  },
  {
    id: 'scroll-session-two-snapshot',
    airdropId: 'scroll',
    name: 'Scroll',
    logo: '/images/airdrops/scroll.svg',
    category: 'Layer 2 / zkEVM',
    date: 'December 2026',
    exactDate: '2026-12-15',
    type: 'Snapshot',
    status: 'Confirmed',
    title: 'Scroll Session 2 Marks Program Final Snapshot',
    description: 'Final snapshot for Session 2 Marks holders who supplied assets across Scroll DeFi protocols (Aave, Ambient, Rho Markets) and held Canvas badges.',
    reward: '$1,000 - $6,000',
    actionUrl: '/airdrop/scroll'
  },
  {
    id: 'fuel-mainnet-migration',
    airdropId: 'fuel',
    name: 'Fuel Network',
    logo: '/images/airdrops/fuel.svg',
    category: 'Modular Execution',
    date: 'November 2026',
    exactDate: '2026-11-18',
    type: 'TGE',
    status: 'Confirmed',
    title: 'Fuel Points Program Mainnet Token Distribution',
    description: 'Over $300M in pre-deposited assets convert points into FUEL tokens alongside the launch of native Sway smart contracts and parallel UTXO state transitions.',
    reward: '$1,200 - $7,500',
    actionUrl: '/airdrop/fuel'
  },
  {
    id: 'babylon-phase-three-cap',
    airdropId: 'babylon',
    name: 'Babylon',
    logo: '/images/airdrops/babylon.svg',
    category: 'Bitcoin Staking',
    date: 'November 2026',
    exactDate: '2026-11-28',
    type: 'Cap Expansion',
    status: 'Confirmed',
    title: 'Phase 3 Multi-Thousand BTC Staking Cap Expansion',
    description: 'Babylon opens the next major Bitcoin staking cap window. Stakers lock native BTC into trustless scripts to earn shared security yield and ecosystem allocations.',
    reward: '$2,000 - $12,000',
    actionUrl: '/airdrop/babylon'
  },
  {
    id: 'abstract-mainnet-launch',
    airdropId: 'abstract',
    name: 'Abstract',
    logo: '/images/airdrops/abstract.svg',
    category: 'Layer 2 / ZK Stack',
    date: 'December 2026',
    exactDate: '2026-12-20',
    type: 'TGE',
    status: 'Estimated',
    title: 'Abstract Mainnet Genesis & Global Wallet Allocation',
    description: 'Consumer crypto L2 built by Pudgy Penguins launches mainnet. Early badge holders, Pudgy Penguins ecosystem participants, and testnet users receive genesis allocations.',
    reward: '$1,000 - $5,000',
    actionUrl: '/airdrop/abstract'
  },
  {
    id: 'ether-fi-cash-season-four',
    airdropId: 'ether-fi',
    name: 'ether.fi',
    logo: '/images/airdrops/ether-fi.svg',
    category: 'Liquid Restaking',
    date: 'December 2026',
    exactDate: '2026-12-30',
    type: 'Snapshot',
    status: 'Confirmed',
    title: 'Season 4 Loyalty Snapshot & ether.fi Cash Rewards',
    description: 'Loyalty points earned from holding eETH/weETH and card transactions via the ether.fi Cash Visa card finalize for Season 4 token grants.',
    reward: '$500 - $4,000',
    actionUrl: '/airdrop/ether-fi'
  },
  {
    id: 'grass-stage-two-snapshot',
    airdropId: 'grass',
    name: 'Grass',
    logo: '/images/airdrops/grass.svg',
    category: 'DePIN / AI',
    date: 'January 2027',
    exactDate: '2027-01-15',
    type: 'Snapshot',
    status: 'Confirmed',
    title: 'Stage 2 Live Context Retrieval & Node Rewards Snapshot',
    description: 'Uptime points accumulated across Stage 2 residential nodes finalize for secondary epoch distribution and live-context AI query rewards.',
    reward: '$400 - $3,000',
    actionUrl: '/airdrop/grass'
  },
  {
    id: 'allora-upshot-testnet',
    airdropId: 'allora-network',
    name: 'Allora Network',
    logo: '/images/airdrops/allora-network.svg',
    category: 'Decentralized AI',
    date: 'Q1 2027',
    exactDate: '2027-02-15',
    type: 'Testnet Deadline',
    status: 'Estimated',
    title: 'Self-Improving AI Consensus Epoch & Worker Node Snapshot',
    description: 'Decentralized AI evaluation epoch closes. Prediction workers, data evaluators, and testnet node runners receive allocations based on model accuracy.',
    reward: '$1,500 - $10,000',
    actionUrl: '/airdrop/allora-network'
  },
  {
    id: 'sentient-agi-genesis',
    airdropId: 'sentient-agi',
    name: 'Sentient',
    logo: '/images/airdrops/sentient-agi.svg',
    category: 'Decentralized AGI',
    date: 'Q1 2027',
    exactDate: '2027-02-28',
    type: 'Snapshot',
    status: 'Estimated',
    title: 'Open AGI Artifact Registry & Human Validator Snapshot',
    description: 'Backed by $85M from Founders Fund, Sentient snapshots contributors who submitted verifiable AI artifacts, code models, and aligned prompt evaluations.',
    reward: '$2,000 - $12,000',
    actionUrl: '/airdrop/sentient-agi'
  },
  {
    id: 'nillion-blind-compute-phase',
    airdropId: 'nillion',
    name: 'Nillion',
    logo: '/images/airdrops/nillion.svg',
    category: 'Privacy / Compute',
    date: 'Q1 2027',
    exactDate: '2027-03-15',
    type: 'Testnet Deadline',
    status: 'Confirmed',
    title: 'Blind Compute Verifier Node Staking Program Transition',
    description: 'Verifier nodes running Nil-Message Compute (NMC) secret sharing algorithms conclude incentivized testnet phases ahead of mainnet staking.',
    reward: '$1,000 - $7,000',
    actionUrl: '/airdrop/nillion'
  }
];
