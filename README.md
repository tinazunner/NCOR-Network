# NCOR Network Website

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Built with Docusaurus](https://img.shields.io/badge/Built%20with-Docusaurus-teal)](https://docusaurus.io/)

This repository contains the source code for the National Center for Ontological Research (NCOR) Network website. The website serves as a central hub for NCOR's ontology research, education, and implementation initiatives.

## About NCOR

The National Center for Ontological Research is a global non-profit organization dedicated to advancing ontological investigation internationally. NCOR coordinates ontology research activities, provides training, and establishes quality assurance tools for ontologies.

## Website Architecture

The website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator. It consists of:

- **Main Website**: Documentation, information about NCOR, research areas, and resources
- **Wiki**: A knowledge base containing information about ontologies, courses, and related topics

## Prerequisites

- Node.js >= 18.0
- npm or yarn package manager

## Installation

```bash
# Clone the repository
git clone https://github.com/NCOR-Organization/NCOR-Network.git
cd NCOR-Network

# Install dependencies
npm install

# Start the development server
npm start
```

## Development

```bash
# Start the main website development server
npm start

# Start the wiki development server
npm run wiki-dev

# Build the main website
npm run build

# Build the wiki
npm run wiki-build

# Serve the built website locally
npm run serve

# Clear the build cache
npm run clear
```

## Project Structure

```
NCOR-Network/
├── docs/                 # Main website documentation
├── wiki/                 # Wiki content
├── src/                  # Source code
│   ├── components/       # React components
│   ├── css/              # CSS styles
│   └── pages/            # Static pages
├── static/               # Static assets
├── sidebars.js           # Main website sidebar configuration
├── wikiSidebars.js       # Wiki sidebar configuration
├── docusaurus.config.js  # Main website configuration
└── scripts/              # Utility scripts
    └── convert-wiki.js   # Script to convert MediaWiki content
```

## Wiki Content Management

The `wiki/` directory contains Markdown files for the NCOR knowledge base. The wiki sidebar is configured in `wikiSidebars.js`.

To add new wiki content:

1. Create a new Markdown file in the appropriate subdirectory under `wiki/`
2. Add frontmatter with `id`, `title`, and optionally `sidebar_position`
3. Update `wikiSidebars.js` if needed to include the new content

## Contributing

We welcome contributions to improve the NCOR Network website. Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Deployment

The website is automatically deployed via GitHub Actions when changes are pushed to the main branch.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For questions or support regarding the NCOR Network website, please contact [info@ncor.us](mailto:info@ncor.us).
