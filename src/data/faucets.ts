export interface TestnetFaucet {
  id: string;
  name: string;
  network: string;
  category: 'Ethereum L1/L2' | 'Bitcoin L2' | 'Next-Gen L1' | 'Modular & DA' | 'Move & SVM';
  tokenSymbol: string;
  chainId: number;
  rpcUrl: string;
  explorerUrl: string;
  faucetUrl: string;
  alternativeFaucets?: { name: string; url: string }[];
  dripAmount: string;
  frequency: string;
  requirements: string;
  status: 'online' | 'limited' | 'high-demand';
  description: string;
}

export const testnetFaucets: TestnetFaucet[] = [
  {
    id: 'berachain-bartio',
    name: 'Berachain Bartio Faucet',
    network: 'Berachain Bartio (Testnet)',
    category: 'Next-Gen L1',
    tokenSymbol: 'BERA',
    chainId: 80084,
    rpcUrl: 'https://bartio.rpc.berachain.com',
    explorerUrl: 'https://bartio.beratrail.io',
    faucetUrl: 'https://bartio.faucet.berachain.com',
    alternativeFaucets: [
      { name: 'QuickNode Berachain Faucet', url: 'https://faucet.quicknode.com/berachain/bartio' }
    ],
    dripAmount: '0.1 BERA',
    frequency: 'Every 8 Hours',
    requirements: 'Mainnet ETH balance > 0.001 ETH (Anti-bot)',
    status: 'online',
    description: 'Official testnet faucet for Berachain Bartio. BERA tokens are required to pay gas, mint HONEY, and provide liquidity to Proof-of-Liquidity vaults.'
  },
  {
    id: 'monad-testnet',
    name: 'Monad Devnet / Testnet Faucet',
    network: 'Monad Testnet',
    category: 'Next-Gen L1',
    tokenSymbol: 'MON',
    chainId: 10143,
    rpcUrl: 'https://testnet-rpc.monad.xyz',
    explorerUrl: 'https://testnet.monadexplorer.com',
    faucetUrl: 'https://faucet.monad.xyz',
    alternativeFaucets: [
      { name: 'Monad Community Faucet', url: 'https://discord.gg/monad' }
    ],
    dripAmount: '1.0 MON',
    frequency: 'Every 24 Hours',
    requirements: 'Twitter authentication or Discord verification',
    status: 'high-demand',
    description: 'Official faucet for Monad high-throughput parallel EVM blockchain. Testnet MON allows users to test ultra-fast DEX swaps and smart contract deployments.'
  },
  {
    id: 'sepolia-eth',
    name: 'Ethereum Sepolia Faucet',
    network: 'Ethereum Sepolia',
    category: 'Ethereum L1/L2',
    tokenSymbol: 'ETH',
    chainId: 11155111,
    rpcUrl: 'https://rpc.sepolia.org',
    explorerUrl: 'https://sepolia.etherscan.io',
    faucetUrl: 'https://cloud.google.com/application/web3/faucet/ethereum/sepolia',
    alternativeFaucets: [
      { name: 'Alchemy Sepolia Faucet', url: 'https://sepoliafaucet.com' },
      { name: 'Infura Sepolia Faucet', url: 'https://www.infura.io/faucet/sepolia' },
      { name: 'PoW Sepolia Miner Faucet', url: 'https://sepolia-faucet.pk910.de' }
    ],
    dripAmount: '0.05 - 0.5 ETH',
    frequency: 'Every 24 Hours',
    requirements: 'Google Login or free Alchemy account',
    status: 'online',
    description: 'The primary general-purpose testnet for Ethereum. Essential for bridging test funds into Arbitrum, Optimism, Base, and ZK rollups.'
  },
  {
    id: 'holesky-eth',
    name: 'Ethereum Holesky Faucet',
    network: 'Ethereum Holesky',
    category: 'Ethereum L1/L2',
    tokenSymbol: 'ETH',
    chainId: 17000,
    rpcUrl: 'https://ethereum-holesky-rpc.publicnode.com',
    explorerUrl: 'https://holesky.etherscan.io',
    faucetUrl: 'https://holesky-faucet.pk910.de',
    alternativeFaucets: [
      { name: 'QuickNode Holesky Faucet', url: 'https://faucet.quicknode.com/ethereum/holesky' }
    ],
    dripAmount: '1.0 - 10.0 ETH',
    frequency: 'Mining based / Daily',
    requirements: 'Browser PoW mining (No account required)',
    status: 'online',
    description: 'Staking and infrastructure testnet for Ethereum. Used extensively for restaking protocols (EigenLayer, Karak, Symbiotic) and large-scale validator testing.'
  },
  {
    id: '0g-newton',
    name: '0G Labs (ZeroGravity) Faucet',
    network: '0G Newton Testnet',
    category: 'Modular & DA',
    tokenSymbol: 'A0GI',
    chainId: 16600,
    rpcUrl: 'https://evmrpc-testnet.0g.ai',
    explorerUrl: 'https://chainscan-newton.0g.ai',
    faucetUrl: 'https://faucet.0g.ai',
    alternativeFaucets: [
      { name: '0G Discord Faucet', url: 'https://discord.gg/0glabs' }
    ],
    dripAmount: '0.1 A0GI',
    frequency: 'Every 24 Hours',
    requirements: 'Captcha verification',
    status: 'online',
    description: 'Faucet for the 0G modular AI data availability blockchain. Used to upload AI storage files, register data roots, and delegate validator stake.'
  },
  {
    id: 'citrea-cbtc',
    name: 'Citrea Bitcoin zkEVM Faucet',
    network: 'Citrea Testnet',
    category: 'Bitcoin L2',
    tokenSymbol: 'cBTC',
    chainId: 5115,
    rpcUrl: 'https://rpc.testnet.citrea.xyz',
    explorerUrl: 'https://explorer.testnet.citrea.xyz',
    faucetUrl: 'https://citrea.xyz/faucet',
    alternativeFaucets: [
      { name: 'Bitcoin Signet Faucet', url: 'https://signetfaucet.com' }
    ],
    dripAmount: '0.001 cBTC',
    frequency: 'Every 24 Hours',
    requirements: 'Twitter authentication or Signet BTC bridge',
    status: 'online',
    description: 'Faucet for Citrea, the first zero-knowledge validity rollup on Bitcoin. Required to test Bitcoin-native EVM swaps and lending vaults.'
  },
  {
    id: 'rooch-pioneer',
    name: 'Rooch Network BTC Move Faucet',
    network: 'Rooch Pioneer Testnet',
    category: 'Bitcoin L2',
    tokenSymbol: 'RGAS',
    chainId: 2026,
    rpcUrl: 'https://test-seed.rooch.network',
    explorerUrl: 'https://roochscan.io',
    faucetUrl: 'https://rooch.network/faucet',
    dripAmount: '10 RGAS',
    frequency: 'Every 12 Hours',
    requirements: 'Connect Web3 wallet & Discord verification',
    status: 'online',
    description: 'Provides gas tokens for the Rooch Move-VM execution layer on Bitcoin, enabling users to test Move smart contracts and native BTC staking.'
  },
  {
    id: 'story-odyssey',
    name: 'Story Protocol Odyssey Faucet',
    network: 'Story Odyssey Testnet',
    category: 'Next-Gen L1',
    tokenSymbol: 'IP',
    chainId: 1516,
    rpcUrl: 'https://odyssey.storyrpc.io',
    explorerUrl: 'https://odyssey.storyscan.xyz',
    faucetUrl: 'https://faucet.story.foundation',
    alternativeFaucets: [
      { name: 'QuickNode Story Faucet', url: 'https://faucet.quicknode.com/story' }
    ],
    dripAmount: '1.0 IP',
    frequency: 'Every 24 Hours',
    requirements: 'EVM wallet connection',
    status: 'online',
    description: 'Testnet faucet for Story Protocol programmable IP network. IP gas tokens are required to register digital assets, mint IP licenses, and collect royalties.'
  },
  {
    id: 'movement-porto',
    name: 'Movement Labs Porto Testnet Faucet',
    network: 'Movement Porto Testnet',
    category: 'Move & SVM',
    tokenSymbol: 'MOVE',
    chainId: 30732,
    rpcUrl: 'https://mevm.testnet.porto.movementlabs.xyz',
    explorerUrl: 'https://explorer.testnet.porto.movementlabs.xyz',
    faucetUrl: 'https://faucet.movementlabs.xyz',
    dripAmount: '1.0 MOVE',
    frequency: 'Every 24 Hours',
    requirements: 'Wallet connect & Captcha',
    status: 'online',
    description: 'Official testnet faucet for Movement Labs Move-EVM rollup. Used for testnet DEX swaps and liquidity provision.'
  },
  {
    id: 'base-sepolia',
    name: 'Base Sepolia Testnet Faucet',
    network: 'Base Sepolia',
    category: 'Ethereum L1/L2',
    tokenSymbol: 'ETH',
    chainId: 84532,
    rpcUrl: 'https://sepolia.base.org',
    explorerUrl: 'https://sepolia.basescan.org',
    faucetUrl: 'https://www.coinbase.com/faucets/base-ethereum-sepolia-faucet',
    alternativeFaucets: [
      { name: 'QuickNode Base Sepolia Faucet', url: 'https://faucet.quicknode.com/base/sepolia' },
      { name: 'Superchain Faucet', url: 'https://console.optimism.io/faucet' }
    ],
    dripAmount: '0.05 ETH',
    frequency: 'Every 24 Hours',
    requirements: 'Wallet connection',
    status: 'online',
    description: 'Testnet gas faucet for Base Layer 2. Essential for testing emerging consumer dApps, SocialFi protocols, and decentralized gaming on Base.'
  },
  {
    id: 'arbitrum-sepolia',
    name: 'Arbitrum Sepolia Faucet',
    network: 'Arbitrum Sepolia',
    category: 'Ethereum L1/L2',
    tokenSymbol: 'ETH',
    chainId: 421614,
    rpcUrl: 'https://sepolia-rollup.arbitrum.io/rpc',
    explorerUrl: 'https://sepolia.arbiscan.io',
    faucetUrl: 'https://faucet.quicknode.com/arbitrum/sepolia',
    alternativeFaucets: [
      { name: 'Alchemy Arbitrum Sepolia', url: 'https://www.alchemy.com/faucets/arbitrum-sepolia' }
    ],
    dripAmount: '0.05 ETH',
    frequency: 'Every 24 Hours',
    requirements: 'Free Web3 wallet connection',
    status: 'online',
    description: 'Provides gas on Arbitrum Sepolia for testing Arbitrum Orbit Layer 3s, Stylus Rust contracts, and high-speed perpetual DEXs.'
  },
  {
    id: 'solana-devnet',
    name: 'Solana Devnet Faucet',
    network: 'Solana Devnet',
    category: 'Move & SVM',
    tokenSymbol: 'SOL',
    chainId: 103,
    rpcUrl: 'https://api.devnet.solana.com',
    explorerUrl: 'https://explorer.solana.com/?cluster=devnet',
    faucetUrl: 'https://faucet.solana.com',
    alternativeFaucets: [
      { name: 'QuickNode Solana Faucet', url: 'https://faucet.quicknode.com/solana/devnet' }
    ],
    dripAmount: '1.0 - 5.0 SOL',
    frequency: 'Every 6 Hours',
    requirements: 'Solana wallet address (Phantom / Backpack / Solflare)',
    status: 'online',
    description: 'Official testnet faucet for Solana developers and farmers. Used to test Solana DeFi protocols, liquid staking tokens, and token mints.'
  },
  {
    id: 'plume-testnet',
    name: 'Plume Network RWA Faucet',
    network: 'Plume Testnet',
    category: 'Next-Gen L1',
    tokenSymbol: 'pETH',
    chainId: 98865,
    rpcUrl: 'https://testnet-rpc.plumenetwork.xyz',
    explorerUrl: 'https://testnet-explorer.plumenetwork.xyz',
    faucetUrl: 'https://faucet.plumenetwork.xyz',
    dripAmount: '0.05 pETH',
    frequency: 'Every 24 Hours',
    requirements: 'Twitter connection',
    status: 'online',
    description: 'Official faucet for Plume Network, the modular Layer 2 dedicated to Real World Assets (RWA). Used to test tokenized real estate, credit pools, and RWA yield staking.'
  },
  {
    id: 'dill-alps',
    name: 'Dill Alps Testnet Faucet',
    network: 'Dill Alps Testnet',
    category: 'Modular & DA',
    tokenSymbol: 'DILL',
    chainId: 20260,
    rpcUrl: 'https://rpc-alps.dill.xyz',
    explorerUrl: 'https://alps.dill.xyz',
    faucetUrl: 'https://dill.xyz/faucet',
    dripAmount: '5 DILL',
    frequency: 'Every 24 Hours',
    requirements: 'Discord authentication',
    status: 'online',
    description: 'Faucet for the Dill DA network. DILL tokens allow users to stake validation nodes and submit high-throughput data availability chunks.'
  }
];
