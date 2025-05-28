import React from 'react';
import styles from './styles.module.css';

export default function CallForPapers() {
  const topics = [
    'Ontology development best practices',
    'DevOps strategies for real-time workflows',
    'Empirical evaluations of semantic web technologies',
    'Command and Control (C2) and Situation Awareness (SA)',
    'Cyberspace: defense, exploitation, and counter-attack',
    'Large-Language or Foundational Models',
    'Intelligence collection, analysis, and dissemination',
    'Planning: representation of and reasoning over plans and processes',
    'Predictive analytics',
    'Ontology in Artificial Intelligence',
    'Infrastructure: defense, exploitation, and counter-attack'
  ];

  return (
    <div className={styles.section} style={{ background: 'var(--ifm-background-surface-color)' }}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Call for Papers</h2>
        <p className={styles.sectionSubtitle}>
          Thirteenth International Conference on Semantic Technology for Intelligence, Defense, and Security
        </p>
        
        <div className={styles.card}>
          <h3>Submission Guidelines</h3>
          <p>
            We welcome submissions of technical papers and extended abstracts. Each submission will be evaluated 
            by at least two members of the Program Committee based on relevance, originality, significance, 
            and clarity.
          </p>
          <ul>
            <li>Technical papers must be 6-8 pages in length</li>
            <li>Extended abstracts limited to 3 pages</li>
            <li>Must follow IEEE conference proceedings format (US Letter)</li>
            <li>Papers must be original and not under review elsewhere</li>
            <li>At least one author must register and present at the conference</li>
          </ul>
        </div>

        <div className={styles.card}>
          <h3>Topics of Interest</h3>
          <div className={styles.grid} style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
            {topics.map((topic, index) => (
              <div key={index} className={styles.topicItem}>
                • {topic}
              </div>
            ))}
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <a 
            href="#" 
            className={`${styles.button} ${styles.buttonPrimary}`}
            style={{ marginRight: '1rem' }}
          >
            Submit Paper
          </a>
          <a 
            href="#" 
            className={`${styles.button} ${styles.buttonSecondary}`}
          >
            Download Template
          </a>
        </div>
      </div>
    </div>
  );
} 