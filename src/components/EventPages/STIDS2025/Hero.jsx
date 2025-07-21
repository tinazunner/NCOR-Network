import React, { useEffect, useRef } from 'react';
import styles from './styles.module.css';

export default function Hero() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  }, []);

  return (
    <>
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

        <div className={styles.heroOverlay}></div>
        <div className={`${styles.container} ${styles.heroContent}`}>

          <h1 className={styles.heroTitle}>
            Semantic Technology for Intelligence, Defense, and Security Conference (STIDS) 2025
          </h1>

          <div className={styles.heroDate}>November 17–18, 2025</div>
          <div className={styles.heroLocation}>
            George Mason University, Potomac Science Center<br />
            650 Mason Ferry Avenue, Woodbridge VA 22191
          </div>

          <div className={styles.heroDate}>November 19, 2025</div>
          <div className={styles.heroLocation}>
            National Geospatial-Intelligence Agency (NGA)<br />
            7500 GEOINT Dr, Springfield VA 22150
          </div>

          <div style={{ marginTop: '2rem' }}>
            <a
              href="#registration"
              className={`${styles.button} ${styles.buttonPrimary}`}
            >
              Register Now
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
