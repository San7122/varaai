import { motion } from 'framer-motion';
import './Services.css';

const services = [
  { icon: '🤖', title: 'AI/ML Services', tag: 'AI', desc: 'Unlock the power of artificial intelligence and machine learning with custom models, data analysis, and intelligent automation.', features: ['AI Chatbots', 'Predictive Analytics', 'NLP Solutions', 'Computer Vision'], color: 'purple' },
  { icon: '📊', title: 'Big Data Analytics', tag: 'DATA', desc: 'Transform raw data into actionable insights with advanced analytics, data pipelines, and business intelligence solutions.', features: ['Data Pipelines', 'Analytics Dashboards', 'Business Intelligence', 'Real-time Processing'], color: 'pink' },
  { icon: '💻', title: 'Web Development', tag: 'WEB', desc: 'Build scalable, high-performance web applications with modern technologies and best practices for enterprise solutions.', features: ['Full-Stack Development', 'Cloud Integration', 'API Development', 'Responsive Design'], color: 'purple' },
  { icon: '☁️', title: 'Cloud Solutions', tag: 'CLOUD', desc: 'Migrate, deploy, and optimize your infrastructure on cloud platforms with security and performance at scale.', features: ['AWS/Azure/GCP', 'Kubernetes', 'DevOps', 'Infrastructure as Code'], color: 'pink' },
  { icon: '⚙️', title: 'Automation & RPA', tag: 'AUTOMATION', desc: 'Streamline business processes with intelligent automation, RPA systems, and workflow optimization.', features: ['Process Automation', 'RPA Solutions', 'Workflow Design', 'Integration'], color: 'purple' },
  { icon: '🔐', title: 'Cybersecurity', tag: 'SECURITY', desc: 'Protect your digital assets with comprehensive security solutions, compliance, and threat prevention strategies.', features: ['Security Audits', 'Compliance Management', 'Threat Detection', 'Risk Assessment'], color: 'pink' },
];

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="services__container">
        <motion.div className="services__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
        >
          <p className="section-label">SERVICES</p>
          <h2 className="services__title">Technology & Expertise <span className="gradient-text">That Scales With You</span></h2>
          <p className="services__subtitle">Eight enterprise practice areas. Two decades of compounded delivery experience. One partner accountable for outcomes — from data plumbing to AI agents in production.</p>
        </motion.div>

        <div className="services__grid">
          {services.map((service, i) => (
            <motion.div key={service.title}
              className={`service-card service-card--${service.color}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
            >
              <div className="service-card__top">
                <span className="service-card__icon">{service.icon}</span>
                <span className="service-card__tag">{service.tag}</span>
              </div>
              <h3 className="service-card__title">{service.title}</h3>
              <p className="service-card__desc">{service.desc}</p>
              <ul className="service-card__features">
                {service.features.map((f) => (
                  <li key={f} className="service-card__feature">
                    <span className="service-card__feature-dot" />{f}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="service-card__cta">Learn More →</a>
              <div className="service-card__glow" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
