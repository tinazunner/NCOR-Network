import React from 'react';
import Layout from '@theme/Layout';
import JoinHero from './JoinHero';
import BenefitsSection from './BenefitsSection';
import ApplicationSection from './ApplicationSection';
import ContactSection from './ContactSection';

const JoinPage = () => {
  return (
    <Layout
      title="Join NCOR"
      description="Join the National Center for Ontological Research (NCOR) network to collaborate on ontology research and applications"
    >
      <JoinHero />
      
      <div className="container margin-top--xl margin-bottom--xl">
        <div className="row">
          <div className="col col--10 col--offset-1">
            <BenefitsSection />
            <ApplicationSection />
            <ContactSection />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default JoinPage; 