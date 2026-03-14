import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './WhatsAppButton.css';

export default function WhatsAppButton() {
  const [open, setOpen] = useState(false);
  const phone = '919928095269';
  const message = encodeURIComponent('Namaste 🙏 I found VaraAI and I am interested in your services. Can we talk?');

  return (
    <div className="wa-wrapper">
      <AnimatePresence>
        {open && (
          <motion.div
            className="wa-popup"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.25 }}
          >
            <div className="wa-popup__header">
              <span className="wa-popup__avatar">🪷</span>
              <div>
                <p className="wa-popup__name">VaraAI Support</p>
                <p className="wa-popup__status">
                  <span className="wa-popup__dot" /> Typically replies instantly
                </p>
              </div>
              <button className="wa-popup__close" onClick={() => setOpen(false)}>✕</button>
            </div>
            <div className="wa-popup__body">
              <div className="wa-popup__bubble">
                Namaste! 🙏 Welcome to VaraAI.<br /><br />
                How can we bless your business today? Click below to start chatting!
              </div>
            </div>
            <a
              href={`https://wa.me/${phone}?text=${message}`}
              target="_blank"
              rel="noopener noreferrer"
              className="wa-popup__btn"
            >
              💬 Start Chat on WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        className="wa-fab"
        onClick={() => setOpen(!open)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={!open ? { y: [0, -6, 0] } : {}}
        transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
      >
        {open ? '✕' : (
          <svg viewBox="0 0 24 24" fill="currentColor" width="26" height="26">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.552 4.12 1.518 5.855L0 24l6.335-1.518A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.007-1.373l-.36-.214-3.727.977.994-3.634-.235-.374A9.818 9.818 0 1112 21.818z"/>
          </svg>
        )}
        {!open && <span className="wa-fab__ping" />}
      </motion.button>
    </div>
  );
}
