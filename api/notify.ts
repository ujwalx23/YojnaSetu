import type { VercelRequest, VercelResponse } from '@vercel/node';

const BOT_TOKEN = '8570058967:AAHZl1vRVH9L99xkYkF6RViZ-ZlFRWvUOfk';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(200).send('YojnaSetu Notification Webhook Endpoint Active');
  }

  try {
    const { contact, source, details } = req.body || {};
    if (!contact) {
      return res.status(400).json({ error: 'Contact field required' });
    }

    const messageText = `🚨 <b>NEW YOJNASETU LEAD ALERT</b> 🚨\n\n` +
      `👤 <b>User Contact:</b> <code>${contact}</code>\n` +
      `📌 <b>Source:</b> ${source || 'Alert Me Subscription Form'}\n` +
      `📝 <b>Details:</b> ${details || 'Requested scheme updates'}\n` +
      `⏰ <b>Timestamp:</b> ${new Date().toLocaleString('en-IN')}`;

    // Get active chat IDs from Telegram getUpdates
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
    }

    return res.status(200).json({ ok: true, message: 'Notification sent to admin Telegram bot' });
  } catch (err: any) {
    console.error('Notify Error:', err);
    return res.status(200).json({ ok: false, error: err.message });
  }
}
