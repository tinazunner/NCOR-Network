import React from 'react';
import styles from './HomepageFeatures.module.css';

// Import all images at the top
const BFOImage = require('@site/static/img/cards/BasicFormalOntology_card.png').default;
const GeospatialImage = require('@site/static/img/cards/GeospatialOntology_card.png').default;
const InformationEntityImage = require('@site/static/img/cards/InformationEntityOntology_card.png').default;
const EventImage = require('@site/static/img/cards/EventOntology_card.png').default;
const TimeImage = require('@site/static/img/cards/TimeOntology_card.png').default;
const AgentImage = require('@site/static/img/cards/AgentOntology_card.png').default;
const QualityImage = require('@site/static/img/cards/QualityOntology_card.png').default;
// Add imports for the remaining ontologies (or use the same images temporarily)
const ActionImage = TimeImage; // temporary placeholder
const ArtifactImage = GeospatialImage; // temporary placeholder
const InformationBearerImage = InformationEntityImage; // temporary placeholder 
const PhysicalEntityImage = QualityImage; // temporary placeholder
const RelationImage = AgentImage; // temporary placeholder

const FeatureList = [
  {
    title: 'Basic Formal Ontology (BFO)',
    image: BFOImage || QualityImage,
    description: 'A top-level ontology that provides a framework for building domain ontologies. BFO serves as the foundation for all Common Core Ontologies and represents the most basic categories of reality.',
  },
  {
    title: 'Geospatial Ontology',
    image: GeospatialImage,
    description: 'Designed to represent sites, spatial regions, and other entities, especially those that are located near the surface of Earth.',
  },
  {
    title: 'Information Entity Ontology',
    image: InformationEntityImage,
    description: 'Designed to represent generic types of information as well as the relationships between information and other entities.',
  },
  {
    title: 'Event Ontology',
    image: EventImage,
    description: 'Designed to represent processual entities, especially those performed by agents, that occur within multiple domains.',
  },
  {
    title: 'Time Ontology',
    image: TimeImage,
    description: 'Designed to represent temporal regions and the relations that hold between them.',
  },
  {
    title: 'Agent Ontology',
    image: AgentImage,
    description: 'Designed to represent agents, especially persons and organizations, and their roles.',
  },
  {
    title: 'Quality Ontology',
    image: QualityImage,
    description: 'Designed to represent a range of attributes of entities especially qualities, realizable entities, and process profiles.',
  },
  // Add the remaining ontologies
  {
    title: 'Action Ontology',
    image: ActionImage,
    description: 'Designed to represent intentional actions performed by agents to achieve specific goals or objectives.',
  },
  {
    title: 'Artifact Ontology',
    image: ArtifactImage,
    description: 'Designed to represent human-made objects created to serve specific functions or purposes.',
  },
  {
    title: 'Information Bearer Ontology',
    image: InformationBearerImage,
    description: 'Designed to represent physical entities that carry or convey information content.',
  },
  {
    title: 'Physical Entity Ontology',
    image: PhysicalEntityImage,
    description: 'Designed to represent material entities that exist in physical space and time.',
  },
  {
    title: 'Relation Ontology',
    image: RelationImage,
    description: 'Designed to represent relationships and connections between different types of entities.',
  },
];

function FeatureCard({title, image, description}) {
  const cardClassName = title.toLowerCase().replace(/\s+/g, '-') + '-ontology';
  
  // Create the GitHub URL based on the ontology name
  let githubUrl;
  
  // Special case for BFO
  if (title === 'Basic Formal Ontology (BFO)') {
    githubUrl = 'https://raw.githubusercontent.com/BFO-ontology/BFO-2020/refs/heads/master/src/owl/bfo-core.ttl';
  } else {
    const ontologyFileName = title.replace(/\s+/g, '') + '.ttl';
    githubUrl = `https://github.com/CommonCoreOntology/CommonCoreOntologies/blob/develop/src/cco-modules/${ontologyFileName}`;
  }
  
  // Use inline style with the imported image
  const headerStyle = {
    height: '160px',
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: '8px 8px 0 0',
    boxShadow: 'inset 0 -60px 60px -30px rgba(0, 0, 0, 0.5)'
  };
  
  // Gold button styles
  const buttonStyle = {
    backgroundColor: '#9e7418',
    borderColor: '#9e7418',
    color: 'white'
  };
  
  return (
    <div className="card margin-bottom--lg" style={{height: '100%', display: 'flex', flexDirection: 'column'}}>
      <div style={headerStyle}></div>
      <div className="card-content padding--lg" style={{flex: 1, display: 'flex', flexDirection: 'column'}}>
        <h3>{title}</h3>
        <p style={{flex: 1}}>{description}</p>
        
        <div className="card-actions" style={{marginTop: '1rem'}}>
          <a 
            href={githubUrl} 
            className="button button--primary button--sm" 
            style={buttonStyle}
            target="_blank" 
            rel="noopener noreferrer"
          >
            View Module
          </a>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            Vetted <span className={styles.highlight}>Ontology Standards</span>
          </h2>
          <p className={styles.sectionDescription}>
            Open Source Core ontologies developed and maintained with quality assurance from the Ontology Research &amp; Development Network
          </p>
        </div>
        
        <div className="row">
          {FeatureList.map((props, idx) => (
            <div key={idx} className="col col--4 margin-bottom--xl">
              <FeatureCard {...props} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 