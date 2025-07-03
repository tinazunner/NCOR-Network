import React from 'react';
import Layout from '@theme/Layout';
import STIDS2025Hero from '@site/src/components/EventPages/STIDS2025/Hero';
import Overview from '@site/src/components/EventPages/STIDS2025/Overview';
import CallForPapers from '@site/src/components/EventPages/STIDS2025/CallForPapers';
import Speakers from '@site/src/components/EventPages/STIDS2025/Speakers';
import ImportantDates from '@site/src/components/EventPages/STIDS2025/ImportantDates';
import Registration from '@site/src/components/EventPages/STIDS2025/Registration';
import ContactForm from '@site/src/components/EventPages/STIDS2025/ContactForm';

export default function STIDS2025() {
  return (
    <Layout
      title="STIDS 2025 - Semantic Technology for Intelligence, Defense, and Security"
      description="Join us for the thirteenth International Conference Semantic Technology for Intelligence, Defense, and Security (STIDS 2025), co-Hosted with KGOIDS and the DOD-IC Ontology Working Group. November 17-18, 2025."
    >
      <STIDS2025Hero />
      <Overview />
      <CallForPapers />
      <Speakers />
      <ImportantDates />
      <Registration />
      <ContactForm />
    </Layout>
  );
} 