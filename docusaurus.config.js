// @ts-check
// Docusaurus configuration file for NIKL-Core documentation

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'NIKL',
    tagline: 'Lightweight, concurrent, network-aware programming language',
    favicon: 'img/favicon.ico',

    // Set the production URL of your site here
    url: 'https://nikl.nekonik.org',
    // Set the /<baseUrl>/ pathname under which your site is served
    baseUrl: '/',

    // GitHub pages deployment config.
    organizationName: 'Neko-Nik-Org', // Usually your GitHub org/user name.
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
                    lastVersion: 'current',
                    editUrl: 'https://github.com/Neko-Nik-Org/NIKL-Docs/edit/main/',
                    versions: {
                        current: {
                            label: 'v0.1 (unreleased)',
                        },
                    },
                    showLastUpdateAuthor: true,
                    showLastUpdateTime: true,
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
            image: 'img/nikl-social-card.jpg',
            navbar: {
                title: 'NIK-Lang',
                hideOnScroll: true,
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
                    {
                        href: 'https://github.com/Neko-Nik-Org/NIKL-Core',
                        label: 'GitHub',
                        position: 'right',
                    },
                    {
                        type: 'docsVersionDropdown',
                        position: 'left',
                        dropdownActiveClassDisabled: true,
                        // dropdownItemsAfter: [{href: 'https://nikl-pkg.nekonik.com', label: 'Package Manager (WIP)'}],
                    }
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
                                to: '/docs/introduction',
                            },
                            {
                                label: 'NIKL GitHub',
                                href: 'https://github.com/Neko-Nik-Org/NIKL-Core',
                            },
                            {
                                label: 'Package Manager (WIP)',
                                href: 'https://nikl-pkg.nekonik.com',
                            },
                            {
                                label:'Neko Nik - Newsletter',
                                href:'https://mailer.nekonik.com/subscription/form'
                            }
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
                                label: 'Organization Website',
                                href: 'https://NekoNik.org',
                            },
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
                                href: 'https://github.com/Neko-Nik-Org',
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
