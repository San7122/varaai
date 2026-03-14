import { motion } from 'framer-motion';
import './About.css';

const values = [
  { icon: '🪷', title: 'Divine Precision', desc: 'Every solution is crafted with the care and grace of a blessing.' },
  { icon: '🔒', title: 'Trusted Security', desc: 'Enterprise-grade security baked into every platform we build.' },
  { icon: '🌱', title: 'Scalable Growth', desc: 'Built to grow with you — from a small shop to a thriving enterprise.' },
  { icon: '🤝', title: 'Long-term Partnership', desc: "We become your trusted tech partner, not just a vendor." },
];

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about__container">
        <motion.div className="about__left"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}
        >
          <p className="section-label">✦ ABOUT VARAAI ✦</p>
          <h2 className="about__title">Bringing Digital <span className="gradient-text">Prosperity</span> To Every Business</h2>
          <p className="about__desc">VaraAI is a technology studio inspired by the spirit of Laxmi Mata — the goddess of wealth, fortune, and prosperity. We believe every business deserves the power of modern technology, regardless of size or industry.</p>
          <p className="about__desc">From a small kirana shop launching online to a clinic managing patient records digitally — VaraAI brings the blessings of AI and smart software to uplift your business.</p>
          <div className="about__tech">
            <p className="about__tech-label">TECHNOLOGIES WE USE</p>
            <div className="about__tech-list">
              {['React', 'Node.js', 'Python', 'PostgreSQL', 'AWS', 'Docker', 'MongoDB', 'TypeScript', 'LLM', 'LangChain', 'AI', 'Deep Learning'].map((t, i) => (
                <motion.span key={t} className="about__tech-tag"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >{t}</motion.span>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="about__right">
          <div className="about__values">
            {values.map((v, i) => (
              <motion.div key={v.title} className="about__value"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ x: 6 }}
              >
                <div className="about__value-icon">{v.icon}</div>
                <div>
                  <h4 className="about__value-title">{v.title}</h4>
                  <p className="about__value-desc">{v.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
