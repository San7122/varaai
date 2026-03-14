import { motion } from 'framer-motion';
import './Services.css';

const services = [
  { icon: '⚡', title: 'Automation Solutions', tag: 'AUTOMATE', desc: 'Streamline repetitive workflows with intelligent bots, RPA systems, and automated pipelines. Save time, cut costs, eliminate error.', features: ['Workflow Automation', 'Bot Development', 'API Integration', 'Scheduled Tasks'], color: 'gold' },
  { icon: '💰', title: 'Financial Tools', tag: 'FINTECH', desc: 'Custom dashboards, analytics engines, and financial management systems tailored to your business logic and reporting needs.', features: ['Analytics Dashboards', 'Invoice Systems', 'Budget Trackers', 'Report Generators'], color: 'violet' },
  { icon: '💻', title: 'Software Development', tag: 'DEV', desc: 'Full-stack web and app development — from MVPs to enterprise-grade platforms. Clean code, scalable architecture.', features: ['Web Applications', 'Mobile Apps', 'API Development', 'Cloud Deployment'], color: 'saffron' },
  { icon: '🛒', title: 'Small Shop Websites', tag: 'E-COMMERCE', desc: 'Stunning, fast online stores for retail businesses. Product listings, cart, payments, and inventory — all set up for you.', features: ['Product Catalog', 'Payment Gateway', 'Inventory Mgmt', 'Order Tracking'], color: 'gold' },
  { icon: '🏥', title: 'Clinic & Medical Platforms', tag: 'HEALTHCARE', desc: 'Secure websites and portals for clinics, hospitals, and medical practices. Appointments, records, and patient management.', features: ['Appointment Booking', 'Patient Portals', 'Doctor Profiles', 'EMR Integration'], color: 'violet' },
  { icon: '🤖', title: 'AI-Powered Solutions', tag: 'AI / ML', desc: 'Bring intelligent automation to your business — chatbots, recommendation engines, data analysis and predictive tools.', features: ['AI Chatbots', 'Data Analytics', 'ML Models', 'Smart Automation'], color: 'saffron' },
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
          <p className="section-label">✦ WHAT WE OFFER ✦</p>
          <h2 className="services__title">Services That <span className="gradient-text">Bring Prosperity</span></h2>
          <p className="services__subtitle">End-to-end digital solutions crafted to uplift every business — blessed with precision and AI power.</p>
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
              <a href="#contact" className="service-card__cta">LEARN MORE ✦</a>
              <div className="service-card__glow" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
