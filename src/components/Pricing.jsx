import { useState } from 'react';
import { motion } from 'framer-motion';
import './Pricing.css';

const plans = [
  {
    name: 'Starter',
    subtitle: 'Perfect for small shops & solo owners',
    icon: '🌱',
    oneTime: 29999,
    monthly: 2999,
    color: 'gold',
    deliveryDays: '5–7 days',
    features: [
      { text: '1 Custom Website (up to 5 pages)', included: true },
      { text: 'Mobile Responsive Design', included: true },
      { text: 'Contact Form + Google Maps', included: true },
      { text: 'Basic SEO Setup', included: true },
      { text: 'WhatsApp Button Integration', included: true },
      { text: '3 Months Free Support', included: true },
      { text: 'E-Commerce / Payments', included: false },
      { text: 'Admin Dashboard', included: false },
    ],
    cta: 'Get Started',
  },
  {
    name: 'Prosperity',
    subtitle: 'For growing businesses & online stores',
    icon: '🪷',
    oneTime: 89999,
    monthly: 7999,
    color: 'violet',
    popular: true,
    deliveryDays: '10–14 days',
    features: [
      { text: 'Full Website (up to 15 pages)', included: true },
      { text: 'E-Commerce + UPI / Razorpay', included: true },
      { text: 'Admin Dashboard & CMS', included: true },
      { text: '1 Automation Workflow', included: true },
      { text: 'Financial Report Module', included: true },
      { text: 'Advanced SEO + Speed Optimization', included: true },
      { text: '6 Months Priority Support', included: true },
      { text: 'AI Chatbot Integration', included: false },
    ],
    cta: 'Most Popular',
  },
  {
    name: 'Divine',
    subtitle: 'For enterprises, clinics & custom AI',
    icon: '👑',
    oneTime: 229999,
    monthly: 19999,
    color: 'saffron',
    deliveryDays: '3–6 weeks',
    features: [
      { text: 'Unlimited Pages & Modules', included: true },
      { text: 'Full E-Commerce Suite', included: true },
      { text: 'Advanced Automation Workflows', included: true },
      { text: 'AI Chatbot + Smart Features', included: true },
      { text: 'Clinic / Medical Portal', included: true },
      { text: 'Cloud Hosting & Deployment', included: true },
      { text: 'Custom ML / AI Features', included: true },
      { text: '1 Year Dedicated Support', included: true },
    ],
    cta: 'Go Divine',
  },
];

const ADD_ONS = [
  { icon: '🔧', name: 'Monthly Maintenance', desc: 'Updates, backups, security patches', price: '₹1,999/mo' },
  { icon: '📈', name: 'SEO Growth Package', desc: 'Monthly SEO + Google ranking boost', price: '₹3,999/mo' },
  { icon: '💬', name: 'WhatsApp Automation', desc: 'Auto-reply + lead follow-up bots', price: '₹4,999/mo' },
  { icon: '🤖', name: 'AI Chatbot Add-on', desc: 'Smart chatbot for any existing site', price: '₹9,999 one-time' },
];

function formatINR(n) {
  return '₹' + n.toLocaleString('en-IN');
}

export default function Pricing() {
  const [mode, setMode] = useState('onetime'); // 'onetime' | 'monthly'

  return (
    <section id="pricing" className="pricing">
      <div className="pricing__container">

        {/* Header */}
        <motion.div className="pricing__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">✦ TRANSPARENT PRICING ✦</p>
          <h2 className="pricing__title">
            Choose Your <span className="gradient-text">Blessing Plan</span>
          </h2>
          <p className="pricing__subtitle">
            No hidden costs. No surprises. Just honest pricing. 🙏
          </p>

          {/* Mode Toggle */}
          <div className="pricing__mode-toggle">
            <button
              className={`pricing__mode-btn ${mode === 'onetime' ? 'active' : ''}`}
              onClick={() => setMode('onetime')}
            >
              💰 One-Time Project Fee
            </button>
            <button
              className={`pricing__mode-btn ${mode === 'monthly' ? 'active' : ''}`}
              onClick={() => setMode('monthly')}
            >
              📅 Monthly Retainer
            </button>
          </div>

          {/* Mode explanation */}
          <p className="pricing__mode-desc">
            {mode === 'onetime'
              ? '💡 Pay once, own it forever. Best for businesses that want full ownership.'
              : '💡 Low monthly fee includes hosting, maintenance & support. No big upfront cost.'}
          </p>
        </motion.div>

        {/* Plan Cards */}
        <div className="pricing__grid">
          {plans.map((plan, i) => (
            <motion.div key={plan.name}
              className={`pricing-card pricing-card--${plan.color} ${plan.popular ? 'pricing-card--popular' : ''}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
            >
              {plan.popular && (
                <div className="pricing-card__badge">✦ MOST POPULAR</div>
              )}

              <div className="pricing-card__top">
                <span className="pricing-card__icon">{plan.icon}</span>
                <div>
                  <h3 className="pricing-card__name">{plan.name}</h3>
                  <p className="pricing-card__subtitle">{plan.subtitle}</p>
                </div>
              </div>

              {/* Price */}
              <motion.div className="pricing-card__price"
                key={mode}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <span className="pricing-card__amount">
                  {formatINR(mode === 'onetime' ? plan.oneTime : plan.monthly)}
                </span>
                <span className="pricing-card__period">
                  {mode === 'onetime' ? ' one-time' : '/month'}
                </span>
              </motion.div>

              <div className="pricing-card__meta">
                {mode === 'onetime' ? (
                  <>
                    <span className="pricing-card__tag-info">🚀 Delivered in {plan.deliveryDays}</span>
                    <span className="pricing-card__tag-info">+ ₹{(mode === 'onetime' ? 1999 : 0).toLocaleString('en-IN')}/mo optional maintenance</span>
                  </>
                ) : (
                  <>
                    <span className="pricing-card__tag-info">✅ Hosting included</span>
                    <span className="pricing-card__tag-info">✅ Updates & support included</span>
                  </>
                )}
              </div>

              <div className="pricing-card__divider" />

              <ul className="pricing-card__features">
                {plan.features.map((f) => (
                  <li key={f.text} className={`pricing-card__feature ${f.included ? 'included' : 'excluded'}`}>
                    <span className="pricing-card__check">{f.included ? '✦' : '✕'}</span>
                    {f.text}
                  </li>
                ))}
              </ul>

              <a href="#contact"
                className={`pricing-card__cta ${plan.popular ? 'btn-primary' : 'btn-outline'}`}
              >
                {plan.cta} →
              </a>
              <div className="pricing-card__glow" />
            </motion.div>
          ))}
        </div>

        {/* Add-ons */}
        <motion.div className="pricing__addons"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="pricing__addons-title">✦ OPTIONAL ADD-ONS — Add to any plan</p>
          <div className="pricing__addons-grid">
            {ADD_ONS.map((a) => (
              <div key={a.name} className="pricing__addon-card">
                <span className="pricing__addon-icon">{a.icon}</span>
                <div className="pricing__addon-info">
                  <p className="pricing__addon-name">{a.name}</p>
                  <p className="pricing__addon-desc">{a.desc}</p>
                </div>
                <span className="pricing__addon-price">{a.price}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Bottom note */}
        <motion.div className="pricing__bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p>🙏 All plans include a <strong>FREE consultation call</strong> before you pay anything.</p>
          <p>Need a custom quote? <a href="#contact">Talk to us →</a></p>
        </motion.div>

      </div>
    </section>
  );
}
