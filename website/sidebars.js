// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  docs: [
    'get-started',
    {
      type: 'category',
      label: 'About',
      items: [
        'about/mission',
        'about/what-is-ontology',
        'about/ontology-for-ai',
      ]
    },
    {
      type: 'category',
      label: 'Affiliates',
      link: {
        type: 'doc',
        id: 'affiliates/overview',
      },
      items: [
        'affiliates/overview',
        'affiliates/individuals',
        'affiliates/organizations',
        'affiliates/institutions',
      ],
    },
    {
      type: 'category',
      label: 'Research',
      link: {
        type: 'doc',
        id: 'research/areas',
      },
      items: [
        'research/areas',
        'research/projects',
        'research/publications',
      ]
    },
    {
      type: 'category',
      label: 'Support',
      link: {
        type: 'doc',
        id: 'events/office-hours',
      },
      items: [
        'events/office-hours',
        'events/working-groups',
        'events/useful-links'
      ]
    }
  ]
};

export default sidebars;
