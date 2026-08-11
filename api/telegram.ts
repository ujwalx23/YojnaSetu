import type { VercelRequest, VercelResponse } from '@vercel/node';

// Telegram Bot Token provided by user
const BOT_TOKEN = '8570058967:AAHZl1vRVH9L99xkYkF6RViZ-ZlFRWvUOfk';
const TELEGRAM_API = `https://api.telegram.org/bot${BOT_TOKEN}`;

// Real schemes summary data for Telegram bot responses
const BOT_SCHEMES = [
  {
    title: 'PM Kisan Samman Nidhi Yojana',
    benefit: '₹6,000 / year direct cash transfer',
    link: 'https://pmkisan.gov.in/RegistrationFormNew.aspx',
    keywords: ['kisan', 'farmer', 'agriculture', '6000', 'pmkisan', 'land']
  },
  {
    title: 'Pradhan Mantri MUDRA Yojana (PMMY)',
    benefit: 'Collateral-free business loan up to ₹20 Lakh',
    link: 'https://www.udyamimitra.in',
    keywords: ['mudra', 'loan', 'business', 'msme', 'shishu', 'kishore', 'tarun']
  },
  {
    title: 'PM Vishwakarma Yojana',
    benefit: '₹3 Lakh loan @ 5% + ₹15,000 toolkit voucher for artisans',
    link: 'https://pmvishwakarma.gov.in/Registration',
    keywords: ['vishwakarma', 'artisan', 'craft', 'potter', 'tailor', 'carpenter', 'mason']
  },
  {
    title: 'National Scholarship Portal (NSP)',
    benefit: 'Scholarships up to ₹50,000/year for SC/ST/OBC/EWS students',
    link: 'https://scholarships.gov.in',
    keywords: ['nsp', 'scholarship', 'student', 'education', 'school', 'college']
  },
  {
    title: 'Ayushman Bharat (PM-JAY)',
    benefit: 'Free cashless health insurance up to ₹5 Lakh/family',
    link: 'https://beneficiary.nha.gov.in',
    keywords: ['ayushman', 'health', 'hospital', 'insurance', 'pmjay', 'medical']
  },
  {
    title: 'Mukhyamantri Majhi Ladki Bahin Yojana (Maharashtra)',
    benefit: '₹1,500/month direct cash assistance for women',
    link: 'https://ladlibahin.maharashtra.gov.in/register',
    keywords: ['ladki', 'bahin', 'maharashtra', 'women', '1500', 'lady']
  },
  {
    title: 'PMEGP Business Loan & Subsidy',
    benefit: 'Up to 35% margin money subsidy on project loan up to ₹50 Lakh',
    link: 'https://www.kviconline.gov.in/pmegpeportal/pmegpweb/index.jsp',
    keywords: ['pmegp', 'kvic', 'subsidy', 'factory', 'manufacturing', 'unit']
  },
  {
    title: 'Stand Up India Scheme',
    benefit: '₹10 Lakh to ₹1 Crore loan for SC/ST & Women entrepreneurs',
    link: 'https://www.standupmitra.in',
    keywords: ['standup', 'women', 'sc', 'st', 'crore', 'entrepreneur']
  }
];

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(200).send('YojnaSetu Telegram Bot Webhook Endpoint is Active');
  }

  try {
    const update = req.body;
    if (!update || !update.message) {
      return res.status(200).send('No message update received');
    }

    const message = update.message;
    const chatId = message.chat.id;
    const userText = (message.text || '').toLowerCase().trim();

    let responseText = '';

    if (userText === '/start') {
      responseText = `🇮🇳 <b>Welcome to YojnaSetu Official Bot!</b>\n\n` +
        `I am your 24/7 AI Scheme Assistant. Discover Central, State, and CSR schemes you qualify for.\n\n` +
        `<b>Available Commands & Topics:</b>\n` +
        `• Send <code>/schemes</code> to list top trending schemes\n` +
        `• Type <code>PM Kisan</code> for farmer 6,000 cash transfer\n` +
        `• Type <code>Mudra</code> for collateral-free business loans\n` +
        `• Type <code>Scholarship</code> for education grants\n` +
        `• Type <code>Ayushman</code> for ₹5 Lakh health card\n` +
        `• Type <code>Ladki Bahin</code> for Maharashtra women scheme\n\n` +
        `🌐 Visit web app: <a href="https://yojna-setu.vercel.app">YojnaSetu Platform</a>`;
    } else if (userText === '/schemes' || userText === 'schemes') {
      responseText = `🏛 <b>Top High-Impact Indian Government Schemes:</b>\n\n` +
        BOT_SCHEMES.map((s, i) => `${i + 1}. <b>${s.title}</b>\n   🎁 Benefit: ${s.benefit}\n   🔗 <a href="${s.link}">Official Application Link</a>\n`).join('\n') +
        `\nType any scheme name or keyword for specific eligibility steps!`;
    } else {
      // Keyword matching
      const matches = BOT_SCHEMES.filter(s => 
        s.keywords.some(k => userText.includes(k)) || 
        s.title.toLowerCase().includes(userText)
      );

      if (matches.length > 0) {
        responseText = `🔍 <b>Found ${matches.length} matching scheme(s) for "${message.text}":</b>\n\n` +
          matches.map(s => 
            `<b>${s.title}</b>\n` +
            `• <b>Benefit:</b> ${s.benefit}\n` +
            `• <b>Apply Online:</b> <a href="${s.link}">${s.link}</a>\n`
          ).join('\n') +
          `\n📌 Open YojnaSetu web app for full eligibility check and document list!`;
      } else {
        responseText = `I analyzed your inquiry: <i>"${message.text}"</i>.\n\n` +
          `You can explore top schemes using <code>/schemes</code> or visit our portal at <a href="https://yojna-setu.vercel.app">yojna-setu.vercel.app</a> to run the full AI Eligibility Quiz!`;
      }
    }

    // Send response via Telegram Bot API
    await fetch(`${TELEGRAM_API}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: responseText,
        parse_mode: 'HTML',
        disable_web_page_preview: false
      })
    });

    return res.status(200).json({ ok: true });
  } catch (error: any) {
    console.error('Telegram Bot Error:', error);
    return res.status(200).json({ ok: false, error: error.message });
  }
}
