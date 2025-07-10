import React, { useState } from 'react';
import styles from './styles.module.css';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className={styles.section} style={{ background: 'var(--ifm-background-surface-color)' }}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Contact Us</h2>
        <p className={styles.sectionSubtitle}>
          Have questions about STIDS 2025? We're here to help.
        </p>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formField}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className={styles.formInput}
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formField}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className={styles.formInput}
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formField}>
            <label htmlFor="phone">Phone (optional)</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className={styles.formInput}
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className={styles.formField}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              className={styles.formTextarea}
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <div style={{ textAlign: 'center' }}>
            <button 
              type="submit" 
              className={`${styles.button} ${styles.buttonPrimary}`}
            >
              Send Message
            </button>
          </div>
        </form>

        <div style={{ 
          marginTop: '3rem',
          textAlign: 'center',
          color: 'var(--ifm-color-emphasis-700)'
        }}>
          <p>
            <strong>Location:</strong>{' '}
            George Mason University, Potomac Science Center<br />
            650 Mason Ferry Avenue, Woodbridge VA 22191
          </p>
        </div>
      </div>
    </div>
  );
} 