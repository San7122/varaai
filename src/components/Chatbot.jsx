import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Chatbot.css';

// ─── Knowledge Base ───────────────────────────────────────────────
const KB = [
  {
    patterns: ['hello', 'hi', 'hey', 'namaste', 'namaskar', 'hii', 'helo', 'sup', 'good morning', 'good evening'],
    response: `Namaste! 🙏 Welcome to **VaraAI**!\n\nI'm VaraBot — your AI guide. I can help you with:\n• Our services & pricing\n• Website & app development\n• Automation & AI tools\n• Clinic & shop solutions\n\nWhat would you like to know? 🪷`,
  },
  {
    patterns: ['service', 'services', 'what do you do', 'what you offer', 'offer', 'kya karte ho', 'kya kaam', 'work'],
    response: `We offer **6 core services** at VaraAI 🪷:\n\n⚡ **Automation** — bots, workflows, APIs\n💰 **Financial Tools** — dashboards, invoices\n💻 **Software Dev** — web & mobile apps\n🛒 **Shop Websites** — e-commerce stores\n🏥 **Clinic Platforms** — booking, patient portals\n🤖 **AI Solutions** — chatbots, ML models\n\nWhich one interests you? Just ask! 😊`,
  },
  {
    patterns: ['price', 'pricing', 'cost', 'kitna', 'how much', 'charges', 'fees', 'rate', 'plan', 'plans', 'package', 'packages'],
    response: `We have **3 blessing plans** 🙏:\n\n🌱 **Starter — ₹4,999/mo**\n→ 1 website (5 pages), mobile-ready, SEO, 3 months support\n\n🪷 **Prosperity — ₹12,999/mo**\n→ Full site (15 pages), e-commerce, admin panel, automation\n\n👑 **Divine — ₹29,999/mo**\n→ Everything + AI chatbot, clinic portal, 1 year support\n\nYearly plans save 20%! Want to know more about any plan?`,
  },
  {
    patterns: ['website', 'site', 'web', 'landing page', 'webpage', 'portal'],
    response: `We build **stunning, fast websites** for every kind of business! 🌐\n\n✅ Small shops & kirana stores\n✅ Clinics & hospitals\n✅ Restaurants & salons\n✅ Corporate & business sites\n✅ E-commerce stores\n\nAll sites are mobile-friendly, fast, and SEO-optimized.\n\nStarts from **₹4,999/month**. Want us to build yours? 🪷`,
  },
  {
    patterns: ['shop', 'store', 'ecommerce', 'e-commerce', 'online store', 'sell online', 'product', 'cart', 'kirana', 'dukan'],
    response: `We build powerful **online shops** for small businesses! 🛒\n\n🎯 Features included:\n• Product catalog with images\n• Add to cart & checkout\n• Payment gateway (Razorpay/UPI)\n• Inventory management\n• Order tracking\n• WhatsApp order alerts\n\nPerfect for kirana stores, boutiques, bakeries, and more!\nStarts at **₹4,999/month**. Ready to go online? 🙏`,
  },
  {
    patterns: ['clinic', 'hospital', 'doctor', 'medical', 'patient', 'appointment', 'health', 'healthcare', 'dentist'],
    response: `We specialize in **Clinic & Medical Platforms** 🏥\n\n✅ Online appointment booking\n✅ Patient registration & records\n✅ Doctor profile pages\n✅ Prescription management\n✅ Secure & private (data protected)\n✅ Works on mobile & desktop\n\nUsed by clinics, dentists, hospitals & diagnostic centres.\n\nWant to modernize your clinic? Contact us at **hello@varaai.in** 🙏`,
  },
  {
    patterns: ['automation', 'automate', 'bot', 'workflow', 'auto', 'rpa', 'schedule', 'repeat', 'task'],
    response: `Our **Automation Solutions** save businesses hours every week! ⚡\n\n🔧 What we automate:\n• Invoice generation & sending\n• Inventory stock alerts\n• WhatsApp/Email notifications\n• Data entry & reporting\n• Social media scheduling\n• Customer follow-ups\n\n💡 One automation workflow can save 10-20 hours/week!\n\nBook a free consultation to see what we can automate for you 🪷`,
  },
  {
    patterns: ['finance', 'financial', 'accounting', 'invoice', 'billing', 'budget', 'report', 'dashboard', 'paisa', 'paise', 'money'],
    response: `Our **Financial Tools** give you full control over your money 💰\n\n📊 What we build:\n• Real-time financial dashboards\n• GST invoice generators\n• Expense & budget trackers\n• Profit/loss reports\n• Staff payroll management\n• Tax summary reports\n\nAll data is secure, exportable as PDF/Excel.\n\nInterested? Reach us at **hello@varaai.in** 🙏`,
  },
  {
    patterns: ['ai', 'artificial intelligence', 'machine learning', 'ml', 'chatbot', 'chat bot', 'smart', 'intelligent'],
    response: `We build custom **AI-Powered Solutions** for businesses! 🤖\n\n🧠 Our AI services:\n• Smart chatbots (like me!)\n• Product recommendation engines\n• Customer behavior analysis\n• Demand forecasting\n• Document scanning & OCR\n• Automated customer support\n\nAI can transform how your business operates!\n\nLet's discuss your idea → **hello@varaai.in** 🪷`,
  },
  {
    patterns: ['app', 'mobile', 'android', 'ios', 'application', 'flutter', 'react native'],
    response: `Yes, we build **Mobile Apps** too! 📱\n\n✅ Android & iOS apps\n✅ Works offline (PWA)\n✅ Push notifications\n✅ Payment integration\n✅ Admin panel included\n\nWe use React Native & Flutter for fast, beautiful apps.\n\nMobile app development starts from **₹12,999/month**.\nTell us your app idea! 🙏`,
  },
  {
    patterns: ['contact', 'reach', 'call', 'talk', 'connect', 'email', 'whatsapp', 'phone', 'number', 'kaise milein', 'baat karo'],
    response: `You can reach **VaraAI** through: 📞\n\n📧 **Email:** hello@varaai.in\n💬 **WhatsApp:** +91 98765 43210\n📍 **Location:** India (Serving globally)\n\n⏰ We respond within **24 hours**!\n\nOr use the **Contact form** on this page to send us your project details 🪷\n\nWe offer a **FREE consultation call** for all new clients! 🙏`,
  },
  {
    patterns: ['about', 'who are you', 'varaai', 'company', 'team', 'founder', 'kaun ho', 'about us', 'tell me about'],
    response: `**VaraAI** is a technology studio inspired by the blessings of **Laxmi Mata** 🪷\n\n✨ We believe every business — big or small — deserves the power of modern technology.\n\nFrom a small kirana store going online to a clinic managing patients digitally — we make it happen!\n\n🏆 **150+ projects** delivered\n😊 **98% client satisfaction**\n🌐 **5+ industries** served\n\n*"Blessed by wisdom. Powered by AI."* 🙏`,
  },
  {
    patterns: ['time', 'how long', 'duration', 'delivery', 'kitne din', 'deadline', 'days', 'week', 'month'],
    response: `Project timelines at VaraAI ⏰:\n\n🌱 **Simple Website** → 5-7 days\n🛒 **E-Commerce Store** → 10-14 days\n🏥 **Clinic Platform** → 14-21 days\n💻 **Custom Web App** → 3-6 weeks\n🤖 **AI Solution** → 4-8 weeks\n\nWe deliver on time, every time! ⚡\n\nNeed it faster? We also offer **priority delivery** 🙏`,
  },
  {
    patterns: ['support', 'maintenance', 'help', 'after', 'bug', 'issue', 'update', 'problem'],
    response: `We provide **full post-launch support** for all our projects 🔧\n\n🌱 Starter Plan → 3 months free support\n🪷 Prosperity Plan → 6 months priority support\n👑 Divine Plan → 1 full year dedicated support\n\nAll support includes:\n✅ Bug fixes\n✅ Content updates\n✅ Performance monitoring\n✅ Security patches\n\nYour success is our success! 🙏`,
  },
  {
    patterns: ['hindi', 'hindi', 'hindi mein', 'kya aap hindi', 'हिंदी', 'समझते हो'],
    response: `हाँ! मैं हिंदी में भी बात कर सकता हूँ! 🙏\n\nVaraAI आपके बिज़नेस के लिए:\n⚡ ऑटोमेशन सॉल्यूशन\n💰 फाइनेंशियल टूल्स\n🛒 ऑनलाइन शॉप वेबसाइट\n🏥 क्लिनिक पोर्टल\n🤖 AI सॉल्यूशन\n\nकोई भी सवाल पूछिए — हम मदद करेंगे! 🪷`,
  },
  {
    patterns: ['technology', 'tech stack', 'technologies', 'built with', 'react', 'node', 'python'],
    response: `We use **modern, industry-standard technologies** 💻\n\n🔷 **Frontend:** React, Next.js, TypeScript\n🔶 **Backend:** Node.js, Python, FastAPI\n🗄️ **Database:** PostgreSQL, MongoDB\n☁️ **Cloud:** AWS, Vercel, Railway\n🐳 **DevOps:** Docker, CI/CD\n\nAll our code is clean, scalable & well-documented.\n\nWant to know about a specific tech? Just ask! 🙏`,
  },
  {
    patterns: ['free', 'trial', 'demo', 'test', 'try', 'sample', 'consultation'],
    response: `Great news! We offer a **FREE consultation call** 🎉\n\nIn the free call:\n✅ We understand your business needs\n✅ Suggest the best solution\n✅ Give you a project estimate\n✅ Answer all your questions\n\nNo obligation, no payment needed!\n\n📧 Email: **hello@varaai.in**\n💬 WhatsApp: **+91 98765 43210**\n\nBook yours today! 🪷🙏`,
  },
  {
    patterns: ['payment', 'pay', 'upi', 'razorpay', 'gateway', 'paytm', 'gpay', 'phonepe'],
    response: `We integrate **all popular Indian payment methods** 💳\n\n✅ UPI (GPay, PhonePe, Paytm)\n✅ Razorpay (cards, netbanking)\n✅ Cash on Delivery\n✅ EMI options\n✅ International payments (Stripe)\n\nYour customers can pay the way they like!\n\nAll payment integrations are included in the **Prosperity** and **Divine** plans 🪷`,
  },
  {
    patterns: ['seo', 'google', 'rank', 'search', 'traffic', 'organic', 'visibility'],
    response: `Yes! All our websites come with **SEO optimization** 🔍\n\n✅ Fast loading speed (PageSpeed 90+)\n✅ Mobile-first design\n✅ Meta tags & descriptions\n✅ Google Search Console setup\n✅ Sitemap & robots.txt\n✅ Local SEO for your area\n\nGet found on Google by your customers! 📈\n\nAdvanced SEO packages also available. Ask us! 🙏`,
  },
  {
    patterns: ['bye', 'goodbye', 'ok thanks', 'thank you', 'thanks', 'dhanyawad', 'shukriya', 'alvida'],
    response: `Thank you for chatting with VaraAI! 🙏\n\n🪷 *May your business be blessed with growth and prosperity!*\n\nFeel free to come back anytime. You can also:\n📧 Email us: **hello@varaai.in**\n💬 WhatsApp: **+91 98765 43210**\n\nJai Mata Di! 🙏✨`,
  },
];

const FALLBACK = `Hmm, I'm not sure about that one! 🤔\n\nBut I can help you with:\n• 🛒 Shop & e-commerce websites\n• 🏥 Clinic & medical portals\n• ⚡ Automation solutions\n• 💰 Financial tools\n• 💻 App development\n• 💬 Pricing & plans\n\nOr reach us directly:\n📧 **hello@varaai.in** | 💬 **+91 98765 43210** 🙏`;

const QUICK_QUESTIONS = [
  '🛒 Shop website cost?',
  '🏥 Clinic platform?',
  '⚡ Automation tools?',
  '📞 Contact VaraAI',
];

function getBotReply(userText) {
  const lower = userText.toLowerCase();
  for (const item of KB) {
    if (item.patterns.some((p) => lower.includes(p))) {
      return item.response;
    }
  }
  return FALLBACK;
}

// Render **bold** markdown in messages
function renderText(text) {
  return text.split(/(\*\*[^*]+\*\*)/).map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    return part.split('\n').map((line, j, arr) => (
      <span key={`${i}-${j}`}>{line}{j < arr.length - 1 && <br />}</span>
    ));
  });
}

// ─── Component ───────────────────────────────────────────────────
export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: `Namaste! 🙏 I'm **VaraBot** — your AI guide to VaraAI.\n\nAsk me anything about our services, pricing, or how we can help your business grow! 🪷`,
    },
  ]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const [hasNew, setHasNew] = useState(true);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (open) {
      setTimeout(() => bottomRef.current?.scrollIntoView({ behavior: 'smooth' }), 100);
      setTimeout(() => inputRef.current?.focus(), 300);
      setHasNew(false);
    }
  }, [open, messages]);

  const sendMessage = (text) => {
    const msg = (text || input).trim();
    if (!msg || typing) return;
    setInput('');
    setMessages((prev) => [...prev, { role: 'user', content: msg }]);
    setTyping(true);
    // Simulate realistic typing delay
    const delay = 600 + Math.random() * 700;
    setTimeout(() => {
      setMessages((prev) => [...prev, { role: 'assistant', content: getBotReply(msg) }]);
      setTyping(false);
    }, delay);
  };

  const handleKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(); }
  };

  return (
    <div className="chatbot-wrapper">
      <AnimatePresence>
        {open && (
          <motion.div className="chatbot-window"
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            {/* Header */}
            <div className="chatbot-header">
              <div className="chatbot-header__left">
                <div className="chatbot-header__avatar">
                  <span>🪷</span>
                  <span className="chatbot-header__status-dot" />
                </div>
                <div>
                  <p className="chatbot-header__name">VaraBot</p>
                  <p className="chatbot-header__sub">AI Assistant · Always Online ✦</p>
                </div>
              </div>
              <button className="chatbot-header__close" onClick={() => setOpen(false)}>✕</button>
            </div>

            {/* Messages */}
            <div className="chatbot-messages">
              {messages.map((msg, i) => (
                <motion.div key={i}
                  className={`chatbot-msg chatbot-msg--${msg.role}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {msg.role === 'assistant' && <span className="chatbot-msg__avatar">🪷</span>}
                  <div className="chatbot-msg__bubble">{renderText(msg.content)}</div>
                </motion.div>
              ))}

              {typing && (
                <motion.div className="chatbot-msg chatbot-msg--assistant"
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                >
                  <span className="chatbot-msg__avatar">🪷</span>
                  <div className="chatbot-msg__bubble chatbot-msg__bubble--typing">
                    <span /><span /><span />
                  </div>
                </motion.div>
              )}

              {/* Quick questions — only on first message */}
              {messages.length === 1 && !typing && (
                <div className="chatbot-quick">
                  <p className="chatbot-quick__label">QUICK QUESTIONS</p>
                  {QUICK_QUESTIONS.map((q) => (
                    <button key={q} className="chatbot-quick__btn" onClick={() => sendMessage(q)}>
                      {q}
                    </button>
                  ))}
                </div>
              )}

              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div className="chatbot-input-row">
              <textarea
                ref={inputRef}
                className="chatbot-input"
                placeholder="Type your question..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKey}
                rows={1}
                disabled={typing}
              />
              <button className="chatbot-send"
                onClick={() => sendMessage()}
                disabled={typing || !input.trim()}
              >
                {typing ? '⏳' : '▶'}
              </button>
            </div>
            <p className="chatbot-footer-note">VaraAI · No AI API needed · 100% Free</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAB */}
      <motion.button className="chatbot-fab"
        onClick={() => setOpen(!open)}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.93 }}
      >
        <AnimatePresence mode="wait">
          {open
            ? <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.18 }}>✕</motion.span>
            : <motion.span key="chat" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.18 }}>💬</motion.span>
          }
        </AnimatePresence>
        {!open && <span className="chatbot-fab__label">Ask VaraBot</span>}
        {!open && hasNew && <span className="chatbot-fab__ping" />}
      </motion.button>
    </div>
  );
}
