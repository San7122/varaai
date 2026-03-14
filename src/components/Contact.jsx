import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import './Contact.css';

// ─────────────────────────────────────────────
//  🔧 YOUR CONFIG — Fill these 4 values
// ─────────────────────────────────────────────
const CONFIG = {
  // EmailJS (free at emailjs.com)
  EMAILJS_SERVICE_ID:  'YOUR_SERVICE_ID',   // e.g. 'service_abc123'
  EMAILJS_TEMPLATE_ID: 'YOUR_TEMPLATE_ID',  // e.g. 'template_xyz456'
  EMAILJS_PUBLIC_KEY:  'YOUR_PUBLIC_KEY',   // e.g. 'abcXYZ123...'

  // WhatsApp — your number with country code, no + or spaces
  WHATSAPP_NUMBER: '919928095269',          // e.g. India: 91XXXXXXXXXX
};
// ─────────────────────────────────────────────

const SERVICES = [
  'Automation', 'Financial Tool', 'Development',
  'Shop Website', 'Clinic/Medical', 'AI Solution',
];

export default function Contact() {
  const [selected, setSelected] = useState([]);
  const [form, setForm]         = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus]     = useState('idle'); // idle | sending | success | error

  const toggleService = (s) =>
    setSelected((p) => p.includes(s) ? p.filter((x) => x !== s) : [...p, s]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === 'sending') return;
    setStatus('sending');

    const interestedIn = selected.length ? selected.join(', ') : 'Not specified';

    // ── 1. Send Email via EmailJS ──────────────────────────
    try {
      await emailjs.send(
        CONFIG.EMAILJS_SERVICE_ID,
        CONFIG.EMAILJS_TEMPLATE_ID,
        {
          from_name:   form.name,
          from_email:  form.email,
          from_phone:  form.phone || 'Not provided',
          services:    interestedIn,
          message:     form.message,
          reply_to:    form.email,
        },
        CONFIG.EMAILJS_PUBLIC_KEY
      );
    } catch (err) {
      console.error('EmailJS error:', err);
      // Still continue to WhatsApp even if email fails
    }

    // ── 2. Open WhatsApp with pre-filled message ───────────
    const waText = encodeURIComponent(
      `🙏 *New Lead from VaraAI Website*\n\n` +
      `👤 *Name:* ${form.name}\n` +
      `📧 *Email:* ${form.email}\n` +
      `📞 *Phone:* ${form.phone || 'Not provided'}\n` +
      `🎯 *Interested In:* ${interestedIn}\n\n` +
      `💬 *Message:*\n${form.message}`
    );

    window.open(`https://wa.me/${CONFIG.WHATSAPP_NUMBER}?text=${waText}`, '_blank');

    setStatus('success');
  };

  return (
    <section id="contact" className="contact">
      <div className="contact__container">

        {/* Header */}
        <motion.div className="contact__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">✦ LET'S BUILD TOGETHER ✦</p>
          <h2 className="contact__title">
            Receive The <span className="gradient-text">Digital Blessing</span>
          </h2>
          <p className="contact__subtitle">
            Fill the form — we'll email you <strong>AND</strong> ping you on WhatsApp instantly 🙏
          </p>

          {/* How you receive badge */}
          <div className="contact__notify-bar">
            <div className="contact__notify-item">
              <span>📧</span>
              <div>
                <p className="contact__notify-title">Email Notification</p>
                <p className="contact__notify-sub">Lands in your Gmail inbox</p>
              </div>
            </div>
            <div className="contact__notify-divider">+</div>
            <div className="contact__notify-item">
              <span>💬</span>
              <div>
                <p className="contact__notify-title">WhatsApp Message</p>
                <p className="contact__notify-sub">Pops on your phone instantly</p>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="contact__layout">

          {/* Left info */}
          <motion.div className="contact__info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {[
              { icon: '📧', label: 'Email Us', value: 'hello@varaai.in' },
              { icon: '💬', label: 'WhatsApp', value: '+91 98765 43210' },
              { icon: '📍', label: 'Based In',  value: 'India — Serving Globally' },
              { icon: '⏰', label: 'Response',  value: 'Within 24 hours' },
            ].map((item) => (
              <div key={item.label} className="contact__info-item">
                <span className="contact__info-icon">{item.icon}</span>
                <div>
                  <p className="contact__info-label">{item.label}</p>
                  <p className="contact__info-value">{item.value}</p>
                </div>
              </div>
            ))}

            <div className="contact__divider" />

            <p className="contact__services-label">I AM INTERESTED IN:</p>
            <div className="contact__services">
              {SERVICES.map((s) => (
                <button
                  key={s}
                  type="button"
                  className={`contact__service-btn ${selected.includes(s) ? 'active' : ''}`}
                  onClick={() => toggleService(s)}
                >
                  {s}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Right form */}
          <motion.form
            className="contact__form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {status === 'success' ? (
              <motion.div
                className="contact__success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <span className="contact__success-icon">🪷</span>
                <h3>Message Sent! 🎉</h3>
                <p>You've been notified on <strong>Email</strong> &amp; <strong>WhatsApp</strong>.</p>
                <p className="contact__success-sub">We'll get back to you within 24 hours. Jai Mata Di! 🙏</p>
                <button
                  type="button"
                  className="btn-outline contact__reset"
                  onClick={() => { setStatus('idle'); setForm({ name:'', email:'', phone:'', message:'' }); setSelected([]); }}
                >
                  SEND ANOTHER MESSAGE
                </button>
              </motion.div>
            ) : (
              <>
                <div className="contact__row-2">
                  <div className="contact__field">
                    <label>YOUR NAME *</label>
                    <input type="text" placeholder="Raj Sharma"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="contact__field">
                    <label>PHONE NUMBER</label>
                    <input type="tel" placeholder="+91 98765 43210"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div className="contact__field">
                  <label>EMAIL ADDRESS *</label>
                  <input type="email" placeholder="you@example.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                  />
                </div>

                <div className="contact__field">
                  <label>YOUR MESSAGE *</label>
                  <textarea rows={4}
                    placeholder="Tell us about your project or business..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className={`btn-primary contact__submit ${status === 'sending' ? 'sending' : ''}`}
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? '⏳ SENDING...' : '📨 SEND — EMAIL + WHATSAPP ✦'}
                </button>

                <p className="contact__form-note">
                  📧 You'll get a copy via email &nbsp;·&nbsp; 💬 We'll be pinged on WhatsApp instantly
                </p>
              </>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
