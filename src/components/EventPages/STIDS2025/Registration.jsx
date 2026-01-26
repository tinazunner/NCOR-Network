import React from 'react';
import styles from './styles.module.css';

export default function Registration() {
  const pricingOptions = [
    {
      type: 'Government',
      price: 0,
      features: [
        'Full conference access',
        'Conference materials',
        'Networking events',
        'Lunch and refreshments',
        'Access to presentations'
      ]
    },
    {
      type: 'Industry',
      price: 480,
      features: [
        'Full conference access',
        'Conference materials',
        'Networking events',
        'Lunch and refreshments',
        'Access to presentations'
      ]
    },
    {
      type: 'Academic',
      price: 350,
      features: [
        'Full conference access',
        'Conference materials',
        'Networking events',
        'Lunch and refreshments',
        'Access to presentations'
      ]
    },
    {
      type: 'Student',
      price: 215,
      features: [
        'Full conference access',
        'Conference materials',
        'Networking events',
        'Lunch and refreshments',
        'Access to presentations'
      ]
    }
  ];

  return (
    <div className={styles.section} id="registration">
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Registration</h2>
        <p className={styles.sectionSubtitle}>
          Select the registration type that best fits your profile
        </p>

        <div id="unclassified-registration" className={styles.pricingGrid}>
          {pricingOptions.map((option, index) => (
            <div key={index} className={styles.pricingCard}>
              <div className={styles.pricingType}>{option.type}</div>
              <div className={styles.pricingAmount}>${option.price}</div>
              <ul style={{ 
                listStyle: 'none', 
                padding: 0, 
                margin: '0 0 2rem 0',
                textAlign: 'left' 
              }}>
                {option.features.map((feature, idx) => (
                  <li key={idx} style={{ 
                    marginBottom: '0.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem' 
                  }}>
                    <svg 
                      width="16" 
                      height="16" 
                      viewBox="0 0 24 24" 
                      fill="#b88b1d" 
                      style={{ flexShrink: 0 }}
                    >
                      <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <a 
                href="https://www.eventbrite.com/e/semantic-technology-for-intelligence-defense-and-security-2025-tickets-1479068025279?aff=oddtdtcreator" 
                className={`${styles.button} ${styles.buttonPrimary}`}
                style={{ width: '100%' }}
              >
                Register Now
              </a>
            </div>
          ))}
        </div>

        <div id="classified-registration" style={{ marginTop: '4rem', textAlign: 'center' }}>
          <p><strong>Classified Session Registration:</strong></p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginTop: '1rem' }}>
            <a
              href="https://go.intelink.gov/PxGSGtN"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.button} ${styles.buttonPrimary}`}
            >
              Register with CAC card
            </a>
            <a
              href="mailto:Ontology_Registration@nga.mil"
              className={`${styles.button} ${styles.buttonPrimary}`}
            >
              Email for Non-CAC Registration
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
