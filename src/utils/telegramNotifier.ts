// Silent Backend Telegram Notification Service
// Sends lead alerts (email/phone from 'Alert Me' section) directly to admin via Telegram Bot API

const BOT_TOKEN = '8570058967:AAHZl1vRVH9L99xkYkF6RViZ-ZlFRWvUOfk';

// ─── ADMIN CHAT IDS ───────────────────────────────────────────────────────────
// To get your personal chat ID:
//   1. Message your bot at t.me/YojnaSetu_bot  (send /start)
//   2. Open https://api.telegram.org/bot8570058967:AAHZl1vRVH9L99xkYkF6RViZ-ZlFRWvUOfk/getUpdates
//   3. Look for result[].message.chat.id  — copy that number and paste below
// Replace 0 with your actual chat ID after the above steps.
const ADMIN_CHAT_IDS: number[] = []; // e.g. [123456789]

interface LeadData {
  contact: string;
  source?: string;
  details?: string;
}

export async function sendTelegramLeadNotification(data: LeadData): Promise<boolean> {
  try {
    const messageText =
      `🚨 <b>NEW YOJNASETU LEAD ALERT</b> 🚨\n\n` +
      `👤 <b>User Contact:</b> <code>${data.contact}</code>\n` +
      `📌 <b>Source:</b> ${data.source || 'Website Form'}\n` +
      `📝 <b>Details:</b> ${data.details || 'User requested scheme updates & alerts'}\n` +
      `⏰ <b>Timestamp:</b> ${new Date().toLocaleString('en-IN')}`;

    // 1. Try serverless backend endpoint first (works in Vercel production)
    try {
      const apiRes = await fetch('/api/notify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (apiRes.ok) return true;
    } catch {
      // Fallback: use direct Telegram API call
    }

    // 2. Collect admin chat IDs: start from hardcoded list
    const targetChatIds = new Set<number>(ADMIN_CHAT_IDS);

    // 3. Also fetch recent /getUpdates to auto-discover any chat that messaged the bot
    try {
      const updatesRes = await fetch(
        `https://api.telegram.org/bot${BOT_TOKEN}/getUpdates`
      );
      const updatesData = await updatesRes.json();
      if (updatesData.ok && Array.isArray(updatesData.result)) {
        updatesData.result.forEach((u: any) => {
          if (u.message?.chat?.id) {
            targetChatIds.add(u.message.chat.id);
          }
        });
      }
    } catch {
      // getUpdates failed — use only hardcoded IDs
    }

    // 4. Send notification to all admin chat IDs
    if (targetChatIds.size > 0) {
      for (const chatId of targetChatIds) {
        await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id: chatId,
            text: messageText,
            parse_mode: 'HTML'
          })
        });
      }
      return true;
    }

    return true;
  } catch (error) {
    console.error('Failed to dispatch silent Telegram lead alert:', error);
    return false;
  }
}
