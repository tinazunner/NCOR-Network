import React from 'react';
import styles from './styles.module.css';

export default function Overview() {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Conference Overview</h2>
        <div className={styles.card}>
          <p>
            STIDS 2025 serves as a premier forum for researchers and practitioners in semantic technology, 
            intelligence, defense, and security. This year's conference continues our tradition of fostering 
            innovative discussions and collaborations in these critical domains.
          </p>
          <p>
            Join us for three days of:
          </p>
          <ul>
            <li>Cutting-edge research presentations</li>
            <li>Expert keynote speakers</li>
            <li>Interactive panel discussions</li>
            <li>Networking opportunities</li>
            <li>Hands-on workshops</li>
          </ul>
          <p>
            The conference will feature both unclassified and classified sessions, bringing together 
            academic researchers, industry professionals, and government practitioners to address 
            current challenges and future opportunities in semantic technology applications for 
            intelligence, defense, and security.
          </p>
          <div style={{ marginTop: '2rem' }}>
            <strong>Classified Session:</strong> October 23, 2025 (Separate registration required)
          </div>
        </div>
      </div>
    </div>
  );
} 