const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://www.listafirme.ro/flb-software-srl-14021097/',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    search: {
      enabled: true,
      indexName: 'flb_documentation',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    //  A listaban levo sorrend szerkesztese
    forcedNavOrder: [
      '/altalanos_tudnivalok',
      '/livrare_inditasa',
      '/mi_lathato_a_livrare_kepernyon',
      '/a_pozitii_de_livrat_szerkeszto_kepernyoje',
      '/termekek_livralasa',
      '/megjegyzesek',
    ],
    collapsedNav: [
      '/codeblock', // melyik jelenjen meg alapbol collapselve
    ],
    links: [{ text: 'FLB SOFT', link: 'https://www.listafirme.ro/flb-software-srl-14021097/' }],
    frontline: false,
    ignoreIndex: true,
    title:
      "<a href='/'>FLB </a><div class='greenCircle'></div><a href='https://www.listafirme.ro/flb-software-srl-14021097/'>SOFT</a>",
  },
  siteMetadata: {
    title: 'FLB SOFT Documentation | Gatsby',
    description: 'FLB SOFT Documentation built with mdx.',
    siteTitleShort: 'FLB SOFT Dokumentáció',
    docsLocation: 'https://github.com/AaronBison/content/', //github link
    favicon: 'https://www.listafirme.ro/static/images/siglalistafirme3.png',
  },
  pwa: {
    enabled: true,
    manifest: {
      name: 'FLB SOFT Documentation',
      short_name: 'FLBDocumentation',
      start_url: '/',
      background_color: '#117cc1',
      theme_color: '#117cc1',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'src/pwa-512.png',
          sizes: `75x75`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;
