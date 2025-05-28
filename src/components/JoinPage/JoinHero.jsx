import React from 'react';
import styles from './JoinPage.module.css';

const JoinHero = () => {
  return (
    <div className={styles.joinHero}>
      <div className="container">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <h1 className={styles.heroTitle}>Join NCOR</h1>
            <div className={styles.heroLine}></div>
            <p className={styles.heroSubtitle}>
              Become part of a global network advancing ontology research and applications
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinHero; 