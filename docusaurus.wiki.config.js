// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'NCOR Wiki',
  tagline: 'National Center for Ontological Research Wiki',
  favicon: 'img/favicon.ico',
  url: 'https://ncor.us',
  baseUrl: '/',
  organizationName: 'NCOR-Organization',
  projectName: 'ncor.us',
  trailingSlash: false,
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // Use the docs plugin directly, not as part of a preset
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'wiki',
        path: 'wiki',
        routeBasePath: '/',
        sidebarPath: require.resolve('./wikiSidebars.js'),
        editUrl: 'https://github.com/NCOR-Organization/ncor.us/tree/main/',
      },
    ],
    [
      '@docusaurus/theme-classic',
      {
        customCss: './src/css/custom.css',
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'NCOR Wiki',
        logo: {
          alt: 'NCOR Logo',
          src: 'img/ncor-network-logo.png',
        },
        items: [
          {
            href: 'https://ncor.us',
            label: 'Main Site',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'NCOR',
            items: [
              {
                label: 'Main Site',
                to: 'https://ncor.us',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} National Center for Ontological Research.`,
      },
    }),
};

export default config; 