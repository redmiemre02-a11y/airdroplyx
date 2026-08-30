const fs = require('fs');

const nowaGeneric = {
  reward: "Nowa Points & Token Airdrop", category: "DeFi / ZK-Rollup",
  overview: "Nowa Finance is revolutionizing the decentralized finance (DeFi) space by introducing an on-chain Buy Now, Pay Later (BNPL) protocol. It allows you to buy real spot assets today, settle the balance on your own schedule, and take full ownership once the debt is cleared. Unlike traditional finance, approval runs entirely on the collateral you post rather than a credit check, making it truly permissionless and decentralized.\\n\\nThe protocol operates on its own dedicated Nowa L2, an Ethereum-compatible ZK-Rollup. This means lighting-fast transactions and virtually zero gas fees compared to Ethereum mainnet. The team has officially confirmed a highly lucrative rewards program where early adopters can earn Nowa Points by completing social tasks, trading on the platform, and staking assets.",
  strategy: "The primary strategy to maximize your Nowa airdrop allocation is to generate volume through the BNPL feature and complete all available social quests. Early users who consistently trade and stake on the Nowa L2 testnet/mainnet will likely receive a massive multiplier on their final token allocation. Using our specific referral link also grants you a head start with bonus points.",
  steps: [
    "Visit the <a href=\"https://app.nowa.finance/?ref=NOWA_EA519B\" target=\"_blank\">Nowa Finance App</a> using our exclusive referral link.",
    "Connect your Web3 Wallet (MetaMask or Rabby) and switch to the required network.",
    "Complete the mandatory social tasks (Follow Nowa on X/Twitter, Join their Telegram and Discord).",
    "Deposit your initial collateral (USDC or ETH) to establish your credit line.",
    "Execute a Buy Now, Pay Later trade. Buy a spot asset and pay the remainder over time to generate protocol volume.",
    "Navigate to the Earn section to stake your assets and generate passive yield while farming points.",
    "Grab your unique referral link from the dashboard and invite friends to earn a percentage of their points."
  ],
  faqs: [
    { question: "When is the Nowa Finance TGE?", answer: "The Token Generation Event (TGE) date is currently TBA, but the points campaign is fully live." },
    { question: "Is the ZK-Rollup safe?", answer: "Nowa L2 uses zero-knowledge proofs settled on Ethereum Sepolia/Mainnet, inheriting Ethereum security." },
    { question: "What happens if I do not pay later?", answer: "If your collateral ratio drops below the maintenance margin, your position will be liquidated by the smart contract automatically." }
  ]
};

let i18nRaw = fs.readFileSync('src/data/i18n_airdrops.ts', 'utf8');

const mappingCode = "if (a.id === 'nowa-protocol') { return { ...a, ..." + JSON.stringify(nowaGeneric) + " }; }\n    return a;";

i18nRaw = i18nRaw.replace("return a;", mappingCode);
fs.writeFileSync('src/data/i18n_airdrops.ts', i18nRaw, 'utf8');
