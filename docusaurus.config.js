// @ts-check
// Docusaurus configuration file for NIKL-Core documentation

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'NIKL',
  tagline: 'Lightweight, concurrent, network-aware programming language',
  favicon: 'img/favicon.ico',

  // Set the production URL of your site here
  url: 'https://nikl.nekonik.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '/',

  // GitHub pages deployment config.
  organizationName: 'Neko-Nik', // Usually your GitHub org/user name.
  projectName: 'NIKL-Docs', // Usually your repo name.
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/Neko-Nik/NIKL-Docs/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'NIKL',
        logo: {
          alt: 'NIKL Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/Neko-Nik/NIKL-Core',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
            {
            title: 'Docs',
            items: [
                {
                label: 'Getting Started',
                to: '/docs/intro',
                },
                {
                label: 'NIKL GitHub',
                href: 'https://github.com/Neko-Nik/NIKL-Core',
                },
                {
                label: 'Package Manager (WIP)',
                href: 'https://nikl-pkg.nekonik.com',
                },
            ],
            },
            {
            title: 'Community',
            items: [
                {
                label: 'Neko Nik Forums',
                href: 'https://forums.nekonik.com',
                },
                {
                label: 'Status Page',
                href: 'https://status.nekonik.com',
                },
                {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/neko-nik',
                },
            ],
            },
            {
            title: 'More',
            items: [
                {
                label: 'Author Website',
                href: 'https://www.nekonik.com',
                },
                {
                label: 'ORCID',
                href: 'https://orcid.org/0009-0008-3435-5674',
                },
                {
                label: 'GitHub Profile',
                href: 'https://github.com/Neko-Nik',
                },
            ],
            },
        ],
        copyright: `© 2025 Neko Nik. Built with Docusaurus.`,
        },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
