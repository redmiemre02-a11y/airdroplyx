import fs from 'fs';
import path from 'path';

const ecoPath = path.resolve('src/data/ecosystems.ts');
let content = fs.readFileSync(ecoPath, 'utf8');

const newEcosystems = [
  {
    slug: 'berachain',
    name: 'Berachain Ecosystem',
    title: 'Top Berachain Airdrops 2026 – Proof-of-Liquidity DeFi & DApp Guides',
    tagline: 'Proof-of-Liquidity, Tri-Token Economy (BERA, BGT, HONEY) & DApps',
    badge: '🐻 Proof-of-Liquidity • High APR',
    icon: '🐻',
    description: 'Explore verified Berachain testnet and mainnet airdrops. Complete step-by-step farming guides for Honeypot Finance, BeraBorrow, Kodiak, and native PoL validators.',
    overview: 'Berachain is an EVM-identical Layer 1 blockchain built on the Cosmos SDK, secured by the novel Proof-of-Liquidity (PoL) consensus mechanism. PoL harmonizes network security with liquidity provision: by providing liquidity to decentralized exchanges and lending pools, users earn non-transferable BGT governance tokens, which dictate block rewards and validator bribe emissions.',
    farmingTips: [
      'Claim testnet BERA daily from the official Bartio faucet.',
      'Swap testnet BERA for HONEY and deposit liquidity across HenloDEX and Honeypot Finance pools.',
      'Borrow NECT or mint synthetic assets on BeraBorrow to build multi-protocol interaction depth.',
      'Delegate BGT rewards to validators offering the highest incentive bribes.'
    ],
    topKeywords: ['Berachain airdrops', 'Berachain Bartio testnet', 'Proof of Liquidity farming', 'BGT token guide', 'Honeypot Finance airdrop'],
    faqs: [
      {
        question: 'Are Berachain testnet airdrops free to farm?',
        answer: 'Yes! All Berachain Bartio interactions use free testnet BERA and mock tokens obtained from public faucets.'
      },
      {
        question: 'What is the role of BGT in Berachain airdrops?',
        answer: 'BGT (Bera Governance Token) cannot be bought; it is only earned by supplying liquidity. Holding and delegating BGT positions your wallet for primary ecosystem token rewards.'
      }
    ],
    match: (a) => /berachain|bera|proof-of-liquidity|pol/i.test(a.category) || /berachain|bartio|honeypot|beraborrow|honey/i.test(a.description) || /berachain|bartio|honeypot|beraborrow|kodiak/i.test(a.id)
  },
  {
    slug: 'monad',
    name: 'Monad Ecosystem',
    title: 'Top Monad Airdrops 2026 – Parallel EVM & High-Frequency DeFi Guides',
    tagline: '10,000 TPS, 1-Second Finality & Parallelized EVM Execution',
    badge: '⚡ Parallel EVM • 10K TPS',
    icon: '⚡',
    description: 'Discover verified Monad devnet and testnet airdrops. Early guides for MonadPad, Curvance, Ambient Finance, and high-frequency trading protocols on Monad.',
    overview: 'Monad is a revolutionary Layer 1 blockchain bringing superscalar parallel execution and asynchronous state commitments to the Ethereum Virtual Machine. With 10,000 TPS and 1-second finality while retaining 100% bytecode compatibility with Ethereum, Monad enables decentralized applications to match centralized exchange performance without sacrificing self-custody.',
    farmingTips: [
      'Interact with Monad devnet and testnet faucets to secure early testnet MON tokens.',
      'Execute high-frequency swaps and liquidity deposits on parallelized AMMs like Ambient and Curvance.',
      'Participate in community hackathons and developer testnet stress-testing drills.',
      'Follow official foundation community channels to qualify for verified early tester roles.'
    ],
    topKeywords: ['Monad airdrops', 'Monad testnet guide', 'Parallel EVM crypto', 'Monad 10000 TPS', 'Ambient Monad farming'],
    faqs: [
      {
        question: 'When is the Monad mainnet launching?',
        answer: 'Monad is progressing through devnet and testnet phases, with mainnet anticipated following rigorous multi-client audits in 2026/2027.'
      },
      {
        question: 'Do I need special developer skills to farm Monad airdrops?',
        answer: 'No, regular users can participate by testing dApps, swapping tokens, and engaging in community testing programs.'
      }
    ],
    match: (a) => /monad|parallel evm/i.test(a.category) || /monad|superscalar|parallelized/i.test(a.description) || /monad|curvance-monad/i.test(a.id)
  },
  {
    slug: 'story-protocol',
    name: 'Story Protocol Ecosystem',
    title: 'Top Story Protocol Airdrops 2026 – Programmable Intellectual Property Guides',
    tagline: 'Programmable IP, On-Chain Licensing & Creator Capital on Story L1',
    badge: '📜 Programmable IP • Odyssey',
    icon: '📜',
    description: 'Explore verified Story Protocol airdrops and dApp incentives. Guides for registering on-chain intellectual property, minting licenses, and farming Odyssey testnet rewards.',
    overview: 'Story Protocol is the world’s first Layer 1 blockchain engineered specifically for Programmable Intellectual Property (IP). By transforming static creative assets, AI models, and media into dynamic on-chain LEGOs, Story Protocol allows creators to program licensing terms, automate royalty splits, and access global decentralized capital.',
    farmingTips: [
      'Acquire testnet IP tokens from the Story Odyssey faucet.',
      'Register unique digital media, artwork, or AI prompts as verified IP Assets on the Story Protocol explorer.',
      'Attach programmable licensing modules with automated commercial royalty fees.',
      'Trade and remix IP assets on native marketplaces like Magma and PiperX.'
    ],
    topKeywords: ['Story Protocol airdrop', 'Story Odyssey testnet', 'Programmable IP crypto', 'Story foundation IP faucet'],
    faqs: [
      {
        question: 'What is an IP Asset (IPA) on Story Protocol?',
        answer: 'An IP Asset is an ERC-721 NFT registered into the Story Protocol core contract, bound with legally enforceable on-chain licensing parameters.'
      }
    ],
    match: (a) => /story|ip asset|programmable ip/i.test(a.category) || /story protocol|odyssey|iliad|magma-story/i.test(a.description) || /story|magma-story/i.test(a.id)
  }
];

const lastBracket = content.lastIndexOf('];');
if (lastBracket === -1) throw new Error('Could not find closing bracket in ecosystems.ts');

const formatted = newEcosystems.map(e => `  {
    slug: '${e.slug}',
    name: '${e.name}',
    title: '${e.title}',
    tagline: '${e.tagline}',
    badge: '${e.badge}',
    icon: '${e.icon}',
    description: '${e.description}',
    overview: \`${e.overview}\`,
    farmingTips: ${JSON.stringify(e.farmingTips, null, 6)},
    topKeywords: ${JSON.stringify(e.topKeywords, null, 6)},
    faqs: ${JSON.stringify(e.faqs, null, 6)},
    match: ${e.match.toString()}
  }`).join(',\n');

content = content.slice(0, lastBracket).trimEnd() + ',\n' + formatted + '\n];\n';
fs.writeFileSync(ecoPath, content, 'utf8');
console.log('Added Berachain, Monad, and Story Protocol to ecosystems.ts!');
