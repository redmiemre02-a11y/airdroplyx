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
    "id": "sonic-blaze-testnet",
    "name": "Sonic Blaze Testnet Faucet",
    "network": "Sonic Blaze Testnet",
    "category": "Next-Gen L1",
    "tokenSymbol": "S",
    "chainId": 57054,
    "rpcUrl": "https://rpc.blaze.soniclabs.com",
    "explorerUrl": "https://testnet.sonicscan.org",
    "faucetUrl": "https://testnet.soniclabs.com/account",
    "alternativeFaucets": [
      {
        "name": "Sonic Community Discord Faucet",
        "url": "https://discord.gg/soniclabs"
      }
    ],
    "dripAmount": "5.0 S",
    "frequency": "Every 24 Hours",
    "requirements": "Web3 Wallet (Rabby) & Social Verification",
    "status": "online",
    "description": "Official testnet faucet for Sonic (formerly Fantom) high-speed EVM Layer 1 capable of 10,000 TPS. Testnet $S tokens allow users to test instant swap settlement and bridge apps."
  },
  {
    "id": "story-odyssey-testnet",
    "name": "Story Protocol Odyssey Faucet",
    "network": "Story Odyssey Testnet",
    "category": "Next-Gen L1",
    "tokenSymbol": "IP",
    "chainId": 1516,
    "rpcUrl": "https://odyssey.storyrpc.io",
    "explorerUrl": "https://odyssey.storyscan.xyz",
    "faucetUrl": "https://faucet.story.foundation",
    "alternativeFaucets": [
      {
        "name": "QuickNode Story Odyssey Faucet",
        "url": "https://faucet.quicknode.com/story/odyssey"
      }
    ],
    "dripAmount": "1.0 IP",
    "frequency": "Every 24 Hours",
    "requirements": "Twitter / X account verification (Anti-bot)",
    "status": "online",
    "description": "Official faucet for Story Protocol Odyssey testnet. IP tokens are required to register intellectual property assets, license IP legos, and test programmable copyright smart contracts."
  },
  {
    "id": "initia-public-testnet",
    "name": "Initia Public Testnet Faucet",
    "network": "Initia Public Testnet",
    "category": "Modular & DA",
    "tokenSymbol": "INIT",
    "chainId": 354,
    "rpcUrl": "https://rpc.testnet.initia.xyz",
    "explorerUrl": "https://scan.testnet.initia.xyz",
    "faucetUrl": "https://faucet.testnet.initia.xyz",
    "alternativeFaucets": [
      {
        "name": "Initia Discord Faucet Bot",
        "url": "https://discord.gg/initia"
      }
    ],
    "dripAmount": "0.5 INIT",
    "frequency": "Every 12 Hours",
    "requirements": "Discord role verification or Github binding",
    "status": "online",
    "description": "Official testnet faucet for Initia, the network for interwoven rollups. INIT tokens are used for multi-chain gas, staking, and testing Minitia interoperability bridges."
  },
  {
    "id": "plume-network-faucet",
    "name": "Plume Network Testnet Faucet",
    "network": "Plume Goon Phase Testnet",
    "category": "Ethereum L1/L2",
    "tokenSymbol": "PLUME",
    "chainId": 98864,
    "rpcUrl": "https://testnet-rpc.plumenetwork.xyz",
    "explorerUrl": "https://testnet-explorer.plumenetwork.xyz",
    "faucetUrl": "https://faucet.plumenetwork.xyz",
    "alternativeFaucets": [
      {
        "name": "Plume Discord Faucet",
        "url": "https://discord.gg/plumenetwork"
      }
    ],
    "dripAmount": "0.1 PLUME",
    "frequency": "Every 24 Hours",
    "requirements": "Web3 wallet connection & Goon role",
    "status": "online",
    "description": "Official testnet faucet for Plume Network, the dedicated Real World Asset (RWA) Layer 2. Used to test institutional private credit tokenization and compliance primitives."
  },
  {
    "id": "fuel-ignition-testnet",
    "name": "Fuel Sepolia Testnet Faucet",
    "network": "Fuel Sepolia Testnet",
    "category": "Modular & DA",
    "tokenSymbol": "ETH",
    "chainId": 0,
    "rpcUrl": "https://testnet.fuel.network/v1/graphql",
    "explorerUrl": "https://app.fuel.network",
    "faucetUrl": "https://faucet-testnet.fuel.network",
    "alternativeFaucets": [
      {
        "name": "Fuel Community Discord Faucet",
        "url": "https://discord.gg/fuelnetwork"
      }
    ],
    "dripAmount": "0.5 testETH",
    "frequency": "Every 12 Hours",
    "requirements": "Captcha verification (Fast drip)",
    "status": "online",
    "description": "Official faucet for the Fuel Network modular execution layer. Powers Sway language smart contracts, parallel transaction tests, and UTXO-based trading protocols."
  },
  {
    "id": "vlayer-coprocessor-faucet",
    "name": "vlayer ZK Devnet Faucet",
    "network": "Ethereum Sepolia / vlayer Sandbox",
    "category": "Modular & DA",
    "tokenSymbol": "vETH",
    "chainId": 11155111,
    "rpcUrl": "https://rpc.sepolia.org",
    "explorerUrl": "https://sepolia.etherscan.io",
    "faucetUrl": "https://vlayer.xyz/faucet",
    "alternativeFaucets": [
      {
        "name": "vlayer Developer Portal",
        "url": "https://docs.vlayer.xyz"
      }
    ],
    "dripAmount": "0.2 vETH",
    "frequency": "Every 24 Hours",
    "requirements": "Web3 wallet connection (Rabby/Rainbow)",
    "status": "online",
    "description": "Dedicated faucet for testing vlayer zero-knowledge coprocessor smart contracts, historical time-travel queries, and client-side zk-TLS Web Proofs."
  },
  {
    "id": "rome-protocol-faucet",
    "name": "Rome Shared Sequencer Faucet",
    "network": "Rome Rollup Testnet",
    "category": "Modular & DA",
    "tokenSymbol": "ROME",
    "chainId": 8808,
    "rpcUrl": "https://testnet-rpc.romeprotocol.xyz",
    "explorerUrl": "https://explorer.romeprotocol.xyz",
    "faucetUrl": "https://romeprotocol.xyz/faucet",
    "alternativeFaucets": [
      {
        "name": "Rome Community Hub",
        "url": "https://discord.gg/romeprotocol"
      }
    ],
    "dripAmount": "1.0 ROME",
    "frequency": "Every 24 Hours",
    "requirements": "Solana or EVM Wallet address input",
    "status": "online",
    "description": "Official faucet for Rome Protocol, testing Solana-based shared sequencing for Ethereum rollups and sub-second atomic cross-rollup swaps."
  },
  {
    "id": "superposition-l3-faucet",
    "name": "Superposition Layer 3 Faucet",
    "network": "Superposition Testnet (Arbitrum Orbit)",
    "category": "Ethereum L1/L2",
    "tokenSymbol": "SPN",
    "chainId": 55244,
    "rpcUrl": "https://testnet-rpc.superposition.so",
    "explorerUrl": "https://testnet-explorer.superposition.so",
    "faucetUrl": "https://faucet.superposition.so",
    "alternativeFaucets": [
      {
        "name": "Arbitrum Sepolia Bridge",
        "url": "https://bridge.superposition.so"
      }
    ],
    "dripAmount": "0.1 SPN",
    "frequency": "Every 24 Hours",
    "requirements": "Arbitrum Sepolia gas balance",
    "status": "online",
    "description": "Official testnet faucet for Superposition yield-centric Layer 3 with Stylus support. Used to test Longcat AMM fee-subsidized swaps and Utility Mining yield streaming."
  },
  {
    "id": "sahara-ai-faucet",
    "name": "Sahara AI Testnet Faucet",
    "network": "Sahara Testnet",
    "category": "Next-Gen L1",
    "tokenSymbol": "SAHARA",
    "chainId": 313313,
    "rpcUrl": "https://testnet-rpc.saharalabs.ai",
    "explorerUrl": "https://explorer.saharalabs.ai",
    "faucetUrl": "https://faucet.saharalabs.ai",
    "alternativeFaucets": [
      {
        "name": "Sahara AI Knowledge Faucet",
        "url": "https://discord.gg/saharalabs"
      }
    ],
    "dripAmount": "2.0 SAHARA",
    "frequency": "Every 24 Hours",
    "requirements": "Social verification & human proof challenge",
    "status": "online",
    "description": "Official faucet for Sahara AI decentralized collaborative intelligence network, supporting knowledge asset tokenization and collaborative AI agent training."
  },
  {
    "id": "fractal-bitcoin-faucet",
    "name": "Fractal Bitcoin Testnet Faucet",
    "network": "Fractal Bitcoin Testnet",
    "category": "Bitcoin L2",
    "tokenSymbol": "tFB",
    "chainId": 0,
    "rpcUrl": "https://mempool.fractalbitcoin.io/testnet/api",
    "explorerUrl": "https://mempool.fractalbitcoin.io/testnet",
    "faucetUrl": "https://faucet.fractalbitcoin.io",
    "alternativeFaucets": [
      {
        "name": "Fractal Community Faucet",
        "url": "https://discord.gg/fractalbitcoin"
      }
    ],
    "dripAmount": "0.01 tFB",
    "frequency": "Every 12 Hours",
    "requirements": "Bitcoin testnet wallet address (UniSat / Xverse)",
    "status": "high-demand",
    "description": "Official faucet for Fractal Bitcoin, natively scaling Bitcoin using recursive consensus virtualization. Tokens test BRC-20 and Runes asset transfers."
  },
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
