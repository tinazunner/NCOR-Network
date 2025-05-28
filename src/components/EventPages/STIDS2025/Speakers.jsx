import React from 'react';
import styles from './styles.module.css';

export default function Speakers() {
  const speakers = [
    {
      name: 'Speaker To Be Announced',
      title: 'Keynote Speaker',
      organization: 'Details Coming Soon',
      image: 'https://via.placeholder.com/200',
      bio: 'Speaker information will be announced closer to the event date.'
    },
    {
      name: 'Speaker To Be Announced',
      title: 'Featured Speaker',
      organization: 'Details Coming Soon',
      image: 'https://via.placeholder.com/200',
      bio: 'Speaker information will be announced closer to the event date.'
    },
    {
      name: 'Speaker To Be Announced',
      title: 'Featured Speaker',
      organization: 'Details Coming Soon',
      image: 'https://via.placeholder.com/200',
      bio: 'Speaker information will be announced closer to the event date.'
    }
  ];

  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Featured Speakers</h2>
        <p className={styles.sectionSubtitle}>
          Join us for insightful presentations from leading experts in semantic technology, 
          intelligence, defense, and security.
        </p>

        <div className={styles.grid}>
          {speakers.map((speaker, index) => (
            <div key={index} className={`${styles.card} ${styles.speakerCard}`}>
              <img 
                src={speaker.image} 
                alt={speaker.name}
                className={styles.speakerImage}
              />
              <h3 className={styles.speakerName}>{speaker.name}</h3>
              <div className={styles.speakerTitle}>
                {speaker.title}<br />
                {speaker.organization}
              </div>
              <p>{speaker.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 