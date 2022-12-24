// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  plugins: ['docusaurus-plugin-sass'],

  title: 'DePay Documentation',
  tagline: 'Learn how to integrate Web3 Payments by example.',
  url: 'https://depay.com',
  baseUrl: '/docs',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  markdown: {
    mermaid: true,
  },

  themes: ['@docusaurus/theme-mermaid'],

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'depayfi', // Usually your GitHub org/user name.
  projectName: 'public-documentation', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
          routeBasePath: '/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'DePay Documentation',
        logo: {
          alt: 'DePay Documentation',
          src: 'img/logo.svg',
          srcDark: 'img/logo.dark.svg'
        },
        items: [
          {
            type: 'doc',
            docId: 'payments/index',
            position: 'left',
            label: 'Payments',
          },
          {
            type: 'doc',
            docId: 'apis/index',
            position: 'left',
            label: 'APIs',
          },
          {
            type: 'doc',
            docId: 'apps/index',
            position: 'left',
            label: 'Apps',
          },
          {
            type: 'doc',
            docId: 'examples/index',
            position: 'left',
            label: 'Examples',
          },
        ],
      },
      footer: {}, // edit src/theme/Footer/index.js instead
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      image: 'https://depay.com/docs/img/seo/documentation.jpg'
    }),
};

module.exports = config;
