// Silent Backend Telegram Notification Service
// Sends lead alerts (when user enters email/phone in 'Alert Me' section) directly to Telegram Bot API

const BOT_TOKEN = '8570058967:AAHZl1vRVH9L99xkYkF6RViZ-ZlFRWvUOfk';

interface LeadData {
  contact: string;
  source?: string;
  details?: string;
}

export async function sendTelegramLeadNotification(data: LeadData): Promise<boolean> {
  try {
    // 1. Try serverless backend endpoint first if available
    try {
      const apiRes = await fetch('/api/notify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (apiRes.ok) return true;
    } catch {
      // Fallback to direct client call if running locally
    }

    // 2. Direct Telegram API call
    const messageText = `🚨 <b>NEW YOJNASETU LEAD ALERT</b> 🚨\n\n` +
      `👤 <b>User Contact:</b> <code>${data.contact}</code>\n` +
      `📌 <b>Source:</b> ${data.source || 'Website Form'}\n` +
      `📝 <b>Details:</b> ${data.details || 'User requested scheme updates & alerts'}\n` +
      `⏰ <b>Timestamp:</b> ${new Date().toLocaleString('en-IN')}`;

    // Get updates to find active chat ID if needed, or broadcast to last active chat
    const updatesRes = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/getUpdates`);
    const updatesData = await updatesRes.json();

    const activeChatIds = new Set<number>();
    if (updatesData.ok && Array.isArray(updatesData.result)) {
      updatesData.result.forEach((u: any) => {
        if (u.message?.chat?.id) {
          activeChatIds.add(u.message.chat.id);
        }
      });
    }

    // If active chats found, send notification to all admin chat IDs
    if (activeChatIds.size > 0) {
      for (const chatId of activeChatIds) {
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
