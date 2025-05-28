import React, { useEffect, useRef } from 'react';
import styles from './styles.module.css';

export default function Hero() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5; // Play at half speed
    }
  }, []);

  return (
    <div className={styles.hero}>
      <video
        ref={videoRef}
        className={styles.videoBackground}
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/stids-landing-hero-video-bg.mp4" type="video/mp4" />
      </video>
      <div className={styles.heroOverlay} />
      <div className={`${styles.container} ${styles.heroContent}`}>
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