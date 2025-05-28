import React from 'react';
import styles from './styles.module.css';

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.container}>
        <h1 className={styles.heroTitle}>
          Semantic Technology for Intelligence, Defense, and Security
        </h1>
        <p className={styles.heroSubtitle}>STIDS 2025</p>
        <div className={styles.heroDate}>October 21-23, 2025</div>
        <div className={styles.heroLocation}>
          George Mason University, Potomac Science Center<br />
          650 Mason Ferry Avenue, Woodbridge VA 22191
        </div>
        <div style={{ marginTop: '2rem' }}>
          <a href="#registration" className={`${styles.button} ${styles.buttonPrimary}`}>
            Register Now
          </a>
        </div>
      </div>
    </div>
  );
} 