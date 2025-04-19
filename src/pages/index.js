import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="NCOR Network - Advancing ontology research, education, and implementation">
      <main className={styles.main}>
        <div className={styles.hero}>
          <h1>Welcome to NCOR Network</h1>
          <p>Advancing ontology research, education, and implementation across domains</p>
          <div className={styles.buttons}>
            <Link
              className="button button--primary button--lg"
              to="/docs/get-started">
              Get Started
            </Link>
          </div>
        </div>
      </main>
    </Layout>
  );
}
