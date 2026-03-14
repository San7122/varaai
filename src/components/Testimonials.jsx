import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Testimonials.css';

const testimonials = [
  {
    name: 'Rajesh Sharma',
    role: 'Owner, Sharma Kirana Store',
    avatar: '🧑‍💼',
    text: 'VaraAI built our online shop in just 2 weeks. Now customers order from home and our sales have doubled. Best decision we ever made!',
    rating: 5,
    location: 'Jaipur, Rajasthan',
  },
  {
    name: 'Dr. Priya Mehta',
    role: 'Founder, Mehta Clinic',
    avatar: '👩‍⚕️',
    text: 'Our patient booking system is now fully digital. No more missed appointments or paper records. VaraAI understood exactly what a clinic needs.',
    rating: 5,
    location: 'Mumbai, Maharashtra',
  },
  {
    name: 'Anil Gupta',
    role: 'CEO, Gupta Traders',
    avatar: '👨‍💼',
    text: 'The automation tools VaraAI built saved us 20 hours a week. Our invoicing, stock updates, and reports all run automatically now.',
    rating: 5,
    location: 'Delhi, India',
  },
  {
    name: 'Sneha Patel',
    role: 'Director, SP Finance Pvt. Ltd.',
    avatar: '👩‍💼',
    text: 'The financial dashboard is incredible. We can see all our data in real time. VaraAI team is responsive, skilled and truly blessed with talent!',
    rating: 5,
    location: 'Ahmedabad, Gujarat',
  },
  {
    name: 'Vikram Singh',
    role: 'Founder, TechStart India',
    avatar: '🧑‍🚀',
    text: 'From idea to launch in 6 weeks — VaraAI delivered a full web application with admin panel, APIs and mobile responsiveness. Truly divine work!',
    rating: 5,
    location: 'Bengaluru, Karnataka',
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((p) => (p - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((p) => (p + 1) % testimonials.length);

  return (
    <section id="testimonials" className="testimonials">
      <div className="testimonials__bg-glow" />
      <div className="testimonials__container">
        <motion.div
          className="testimonials__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">✦ CLIENT STORIES ✦</p>
          <h2 className="testimonials__title">
            Blessed Businesses, <span className="gradient-text">Happy Clients</span>
          </h2>
          <p className="testimonials__subtitle">
            From small shops to clinics — see how VaraAI has transformed real businesses across India.
          </p>
        </motion.div>

        {/* Main card */}
        <div className="testimonials__stage">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              className="testimonials__card"
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.4 }}
            >
              <div className="testimonials__quote-icon">❝</div>
              <p className="testimonials__text">{testimonials[active].text}</p>
              <div className="testimonials__stars">
                {Array(testimonials[active].rating).fill('✦').map((s, i) => (
                  <span key={i} className="testimonials__star">{s}</span>
                ))}
              </div>
              <div className="testimonials__author">
                <span className="testimonials__avatar">{testimonials[active].avatar}</span>
                <div>
                  <p className="testimonials__name">{testimonials[active].name}</p>
                  <p className="testimonials__role">{testimonials[active].role}</p>
                  <p className="testimonials__location">📍 {testimonials[active].location}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Nav arrows */}
          <button className="testimonials__nav testimonials__nav--prev" onClick={prev}>‹</button>
          <button className="testimonials__nav testimonials__nav--next" onClick={next}>›</button>
        </div>

        {/* Dots */}
        <div className="testimonials__dots">
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`testimonials__dot ${i === active ? 'active' : ''}`}
              onClick={() => setActive(i)}
            />
          ))}
        </div>

        {/* Mini cards row */}
        <div className="testimonials__mini-row">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className={`testimonials__mini ${i === active ? 'active' : ''}`}
              onClick={() => setActive(i)}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
            >
              <span className="testimonials__mini-avatar">{t.avatar}</span>
              <div>
                <p className="testimonials__mini-name">{t.name}</p>
                <p className="testimonials__mini-role">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
