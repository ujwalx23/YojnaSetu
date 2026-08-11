// Helper script to register Telegram Bot Webhook
// Usage: node scripts/setTelegramWebhook.js https://yojna-setu.vercel.app

const BOT_TOKEN = '8570058967:AAHZl1vRVH9L99xkYkF6RViZ-ZlFRWvUOfk';
const domain = process.argv[2] || 'https://yojna-setu.vercel.app';
const webhookUrl = `${domain}/api/telegram`;

async function setupWebhook() {
  console.log(`Setting Telegram Webhook to: ${webhookUrl}`);
  try {
    const res = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/setWebhook?url=${encodeURIComponent(webhookUrl)}`);
    const data = await res.json();
    console.log('Telegram API Response:', data);
  } catch (err) {
    console.error('Failed to set webhook:', err);
  }
}

setupWebhook();
