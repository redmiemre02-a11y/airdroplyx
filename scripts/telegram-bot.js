/**
 * Telegram Auto-Share Bot for Airdroplyx
 * Usage: node scripts/telegram-bot.js
 */

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || 'YOUR_BOT_TOKEN_HERE';
const CHAT_ID = process.env.TELEGRAM_CHAT_ID || '@your_channel_name';

async function sendTelegramMessage(airdrop) {
  const message = `
🚀 *New Verified Airdrop Added!* 🚀

💎 **Project:** ${airdrop.name}
🏷 **Category:** ${airdrop.category}
💰 **Reward:** ${airdrop.reward}

📝 *Editor's Note:* Don't miss this opportunity! Step-by-step farming guide is now live on our website in 10 languages.

🔗 Read the full guide here: 
https://airdroplyx.com/airdrop/${airdrop.id}
  `;

  try {
    const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message,
        parse_mode: 'Markdown',
        disable_web_page_preview: false
      })
    });

    const result = await response.json();
    if (result.ok) {
      console.log('✅ Successfully posted to Telegram!');
    } else {
      console.error('❌ Failed to post to Telegram:', result.description);
    }
  } catch (error) {
    console.error('❌ Error sending message to Telegram:', error);
  }
}

// Example usage (You can call this after a new markdown file is generated)
/*
sendTelegramMessage({
  id: 'novax-protocol',
  name: 'NovaX Protocol',
  category: 'Layer 0',
  reward: 'Potential $1000+'
});
*/
