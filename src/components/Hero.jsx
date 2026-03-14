import { motion } from 'framer-motion';
import './Hero.css';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: 'easeOut' },
});

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__grid" />
      <div className="hero__glow hero__glow--left" />
      <div className="hero__glow hero__glow--right" />
      <div className="hero__particle p1">✦</div>
      <div className="hero__particle p2">✦</div>
      <div className="hero__particle p3">✦</div>
      <div className="hero__particle p4">✦</div>

      <div className="hero__content">
        <motion.div className="hero__badge" {...fadeUp(0.1)}>
          <span className="hero__badge-dot" />
          ॐ &nbsp; VARA AI — DIVINE INTELLIGENCE
        </motion.div>

        <motion.h1 className="hero__title" {...fadeUp(0.2)}>
          Technology Blessed
          <br />
          <span className="gradient-text">By Wisdom,</span>
          <br />
          Powered By AI
        </motion.h1>

        <motion.p className="hero__subtitle" {...fadeUp(0.3)}>
          Like Laxmi Mata brings prosperity, VaraAI brings digital abundance —
          automation, financial tools, websites and AI solutions crafted to uplift every business.
        </motion.p>

        <motion.div className="hero__stats" {...fadeUp(0.4)}>
          {[
            { value: '150+', label: 'Projects Delivered' },
            { value: '98%', label: 'Client Satisfaction' },
            { value: '5+', label: 'Industry Verticals' },
          ].map((stat) => (
            <div key={stat.label} className="hero__stat">
              <span className="hero__stat-value">{stat.value}</span>
              <span className="hero__stat-label">{stat.label}</span>
            </div>
          ))}
        </motion.div>

        <motion.div className="hero__actions" {...fadeUp(0.5)}>
          <a href="#services" className="btn-primary">EXPLORE SERVICES ✦</a>
          <a href="#contact" className="btn-outline">BOOK A CALL</a>
        </motion.div>
      </div>

      {/* Yantra Visual */}
      <motion.div
        className="hero__visual"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
      >
        <div className="hero__ring hero__ring--outer">
          <div className="hero__ring-dot hero__ring-dot--1" />
          <div className="hero__ring-dot hero__ring-dot--2" />
        </div>
        <div className="hero__ring hero__ring--mid">
          <div className="hero__ring-dot hero__ring-dot--3" />
        </div>
        <div className="hero__ring hero__ring--inner" />
        <div className="hero__triangle hero__triangle--up" />
        <div className="hero__triangle hero__triangle--down" />
        <div className="hero__core">
          <span>वर</span>
        </div>
      </motion.div>
    </section>
  );
}
