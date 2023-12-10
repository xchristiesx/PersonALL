import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer>
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <h3>PersonALL</h3>
        <p>It's not personal, it's PersonALL!</p>
        <div>
          <a
            href="https://github.com/xchristiesx"
            target="_blank"
            rel="noopener noreferrer"
          >
            Christelle na GitHub
          </a>
          <a
            href="https://github.com/afialova"
            target="_blank"
            rel="noopener noreferrer"
          >
            Adél na GitHub
          </a>
        </div>
        <div>
          <a href="/About">O nás</a>
          <a href="/Conditions">Test</a>
          <a href="/Contacts">Kontakty</a>
        </div>
        <div>
          <a
            href="https://discord.gg/XCjsESxQ"
            target="_blank"
            rel="noopener noreferrer"
          >
            Let's PersonALL together!
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

