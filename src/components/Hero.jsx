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
      {/* Gradient Background */}
      <div className="hero__background">
        <div className="hero__gradient-1" />
        <div className="hero__gradient-2" />
      </div>

      <div className="hero__container">
        <div className="hero__content">
          <motion.div className="hero__badge" {...fadeUp(0.1)}>
            <span className="hero__badge-dot" />
            AI-First Solutions, Always Delivered
          </motion.div>

          <motion.h1 className="hero__title" {...fadeUp(0.2)}>
            We Build. <br />We Deliver. <br />
            <span className="hero__highlight">We Are En(AI)bling</span>
          </motion.h1>

          <motion.p className="hero__subtitle" {...fadeUp(0.3)}>
            Transform your business with intelligent automation, AI-powered insights, and cutting-edge digital solutions designed to drive growth and innovation.
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
            <a href="#services" className="btn-primary">Explore Services</a>
            <a href="#contact" className="btn-outline">Get Started</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
