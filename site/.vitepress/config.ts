import { defineConfig, type DefaultTheme, HeadConfig } from 'vitepress'
import { withMermaid } from "vitepress-plugin-mermaid";

function getCanonicalUrl(relativePath: string): string {
  return `https://aisbreaker.org/${relativePath}`
    .replace(/index\.md$/, "")
    .replace(/\.md$/, "")
}

const author = "AIsBreaker.org"

// https://vitepress.dev/reference/site-config
export default withMermaid /*defineConfig*/ ({
  title: "AIsBreaker.org",
  lang: 'en-US',
  description: "AIsBreaker introduction and docs",
  lastUpdated: true,
  appearance: 'dark',
  head: [
    // social links and similar stuff
    [ 
      'link', 
      { rel: 'icon', href: '/images/favicon.ico' }
    ],
    // for Google Analytics (G-Z1X0FSZ2Y0):
    [
      'script',
      { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-Z1X0FSZ2Y0' }
    ],
    // for Google Analytics (G-Z1X0FSZ2Y0):
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-Z1X0FSZ2Y0');`
    ]
  ],
  cleanUrls: true,
  ignoreDeadLinks: [
    // ignore all links include "/docs/""
    /\/docs\//,
  ],
  transformPageData(pageData) {
    // add  meta tags for social sharing and SEO
    pageData.frontmatter.head ??= []
    const title = 
      pageData.frontmatter.layout === 'home'
        ? `AIsBreaker`
        : `${pageData.frontmatter.title || pageData.title } | AIsBreaker.org`
    pageData.frontmatter.head.push([
      'meta', { name: 'og:title', content: title } 
    ])

    const canonicalUrl = pageData.frontmatter.canonical || getCanonicalUrl(pageData.relativePath)
    pageData.frontmatter.head.push([
      'meta', { name: 'og:url', content: canonicalUrl }
    ])
    const description = pageData.frontmatter.description || pageData.description
    if (description) {
      pageData.frontmatter.head.push([
        'meta', { name: 'og:description', content: pageData.description }
      ])
    }
    const image = pageData.frontmatter.image
    if (image) {
      pageData.frontmatter.head.push([
        'meta', { name: 'og:image', content: image }
      ])
    }
    const keywords = pageData.frontmatter.keywords
    if (keywords) {
      pageData.frontmatter.head.push([
        'meta', { name: 'keywords', content: keywords.join(', ') }
      ])
    }
    pageData.frontmatter.head.push([
      'meta', { name: 'author', content: author }
    ])
    //<meta name="copyright" content="Copyright owner" />

    // add canonical URL for SEO, but skip the 404
    // ( https://vitepress.dev/reference/site-config#example-adding-a-canonical-url-link )
    const page = pageData.relativePath
    if (page !== '404.md') {
      //const canonicalUrl = getCanonicalUrl(page)
      pageData.frontmatter.head.push([
        'link', { rel: 'canonical', href: canonicalUrl }
      ])
    }

  },

    /* moved to transformPageData() - see above
  transformHead: ({ pageData }) => {
    const head: HeadConfig[] = []

    //head.push(['meta', { property: 'og:title', content: pageData.frontmatter.title }])
    //head.push(['meta', { property: 'og:description', content: pageData.frontmatter.description }])

    // add canonical URL, but skip the 404
    // ( https://vitepress.dev/reference/site-config#example-adding-a-canonical-url-link )
    const page = pageData.relativePath
    if (page !== '404.md') {
      const canonicalUrl = getCanonicalUrl(page)
      head.push( ['link', { rel: 'canonical', href: canonicalUrl }] )
    }

    return head
  },
  */
  sitemap: {
    hostname: 'https://aisbreaker.org',
    transformItems(items) {
      return items.filter((item) => !item.url.includes('/reference/aisbreaker'))
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },

      { text: 'Blog', link: '/blog/' },

      /*
      { text: 'Demos', items: [
        {//text: 'Demo JavaScript with NodeJS',
          items: [
            {text: 'JavaScript Code (Intro)', link: '/docs/demo-javascript-intro' }, 
            {text: 'JavaScript Code (Live Demo in StackBlitz Web-IDE)', link: 'https://stackblitz.com/github/aisbreaker/aisbreaker-example-simple-chat-node-js?title=AIsBreaker+Example+Simple+Chat-node-js&file=aisbreaker-simple-chat.js&startScript=install,start' }, 
            //{text: 'Demo JavaScript with NodeJS (Guide)', link: '/docs/demo-javascript-guide' }, 
            //{text: 'Demo JavaScript with NodeJS (Live in StackBlitz Web-IDE)', link: 'https://stackblitz.com/github/aisbreaker/aisbreaker-example-simple-chat-node-js?title=AIsBreaker+Example+Simple+Chat-node-js&file=aisbreaker-simple-chat.js&startScript=install,start' }, 
         ],
        },
        {
          items: [
            {text: 'REST API Access (Intro)', link: '/docs/demo-rest-api-access-intro' },
            {text: 'REST API Access (Live Demo with Web-Curl)', link: 'https://reqbin.com/c-m2n6cdnu' },
            //{text: 'Demo REST API Access (Guide)', link: '/docs/demo-rest-api-access-guide' },
            //{text: 'Demo REST API Access (Live with Web-Curl)', link: 'https://reqbin.com/c-m2n6cdnu' },
          ]
        },
        {
          items: [
            {text: 'Chat WebApp (Intro)', link: '/docs/demo-chat-webapp-intro' }, 
            {text: 'Chat WebApp (Live Demo in Web)', link: 'https://demo.aisbreaker.org/' }, 
            //{text: 'Demo Chat WebApp (Guide)', link: '/docs/demo-webapp-guide' }, 
            //{text: 'Demo Chat WebApp (Live in Web)', link: 'https://demo.aisbreaker.org/' }, 
          ]
        },
      ]},
      */
      //{ text: 'Docs', link: '/docs/' },
      //{ text: 'Docs', items: [
      { text: 'API Docs', items: [
        {
          items: [
            //{ text: 'Full AIsBreaker Docs ', link: '/docs/' },
            { text: 'Full AIsBreaker API Docs ', link: '/docs/' },
          ],
        },
        {
          items: [
            // { text: 'Intro - What is AIsBreaker?', link: '/docs/' },
            { text: 'Intro - What is AIsBreaker API?', link: '/docs/' },
            { text: 'Intro - Basic Concepts', link: '/docs/concepts' },
          ],
        },
        {
          items: [
            { text: 'Getting Started - with TypeScript/JavaScript', link: '/docs/getting-started-with-typescript-javascript' },
            { text: 'Getting Started - with Java/Kotlin/JVM', link: '/docs/getting-started-with-java' },
            { text: 'Getting Started - with Python', link: '/docs/getting-started-with-python' },
            { text: 'Getting Started - with Bash Shellscript', link: '/docs/getting-started-with-bash' },
            { text: 'Getting Started - with REST API', link: '/docs/aisbreaker-rest-api' },
          ],
        },
        {//text: 'Demo JavaScript with NodeJS',
          items: [
            {text: 'JavaScript Code (Intro)', link: '/docs/demo-javascript-intro' }, 
            {text: 'JavaScript Code (Live Demo in StackBlitz Web-IDE)', link: 'https://stackblitz.com/github/aisbreaker/aisbreaker-example-simple-chat-node-js?title=AIsBreaker+Example+Simple+Chat-node-js&file=aisbreaker-simple-chat.js&startScript=install,start' }, 
            //{text: 'Demo JavaScript with NodeJS (Guide)', link: '/docs/demo-javascript-guide' }, 
            //{text: 'Demo JavaScript with NodeJS (Live in StackBlitz Web-IDE)', link: 'https://stackblitz.com/github/aisbreaker/aisbreaker-example-simple-chat-node-js?title=AIsBreaker+Example+Simple+Chat-node-js&file=aisbreaker-simple-chat.js&startScript=install,start' }, 
         ],
        },
        {
          items: [
            {text: 'REST API Access (Intro)', link: '/docs/demo-rest-api-access-intro' },
            {text: 'REST API Access (Live Demo with Web-Curl)', link: 'https://reqbin.com/c-m2n6cdnu' },
            //{text: 'Demo REST API Access (Guide)', link: '/docs/demo-rest-api-access-guide' },
            //{text: 'Demo REST API Access (Live with Web-Curl)', link: 'https://reqbin.com/c-m2n6cdnu' },
          ]
        },
        {
          items: [
            {text: 'Chat WebApp (Intro)', link: '/docs/demo-chat-webapp-intro' }, 
            {text: 'Chat WebApp (Live Demo in Web)', link: 'https://demo.aisbreaker.org/' }, 
            //{text: 'Demo Chat WebApp (Guide)', link: '/docs/demo-webapp-guide' }, 
            //{text: 'Demo Chat WebApp (Live in Web)', link: 'https://demo.aisbreaker.org/' }, 
          ]
        },


      ]},


      { text: 'API Reference', link: '/reference/' },
      //{ text: 'Contribute', link: '/contribute' },
      //{ text: 'Contact / Help / Support', link: '/contact' },
      { text: 'Contact', link: '/contact' },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-2024 AIsBreaker',
    },
    // https://vitepress.dev/reference/default-theme-config#outline
    outline: {
      // level?: number | [number, number] | 'deep'
      level: 'deep',
    },
    /*
    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],*/
    sidebar: {
      '/docs/': { base: '/docs', items: sidebarDocs() },
      '/reference/': { base: '/reference', items: sidebarReference() },
      //'/docs/aisbreaker-api-js/aisbreaker-packages': { base: '/reference/', items: sidebarReference() },
    },
    //lastUpdatedDateTimeFormatOptions: { dateStyle: 'medium',  timeStyle: 'short' },
    editLink: {
      pattern: 'https://github.com/aisbreaker/aisbreaker.org-web/edit/main/site/:path'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/aisbreaker/' },
      { icon: {
          // https://icones.js.org/collection/all?s=discussion
          //   octicon:feed-discussion-16
          //   svg code adapted for title
          svg: '<svg xmlns="http://www.w3.org/2000/svg" role="image" viewBox="0 0 16 16"><title>Discussion</title><path fill="currentColor" d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16ZM4 5v5a1 1 0 0 0 1 1h1v1.5a.5.5 0 0 0 .854.354L8.707 11H11a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1Z"/></svg>',         
        },
        ariaLabel: 'Discussion',
        link: 'https://github.com/orgs/aisbreaker/discussions/categories/general-disussion',
      },
    ],
    lastUpdated: {
      text: 'Updated at (UTC)',
      formatOptions: {
        dateStyle: 'medium',
        timeStyle: 'short',
        hour12: false,
        timeZone: "UTC",
      }
    },
    search: {
      provider: 'local',
      options: {
        miniSearch: {
          searchOptions: {
            // tune ranking of search results
            // https://lucaong.github.io/minisearch/modules/_minisearch_.html#searchoptions-1
            // boostDocument?: undefined | ((documentId: any, term: string, storedFields?: Record<string, unknown>) => number)
            boostDocument: (documentId, term, storedFields) => {
              //console.log('boostDocument', documentId, term, storedFields)
              if (documentId) {
                if (documentId.startsWith('/docs/concepts')) {
                  // promote concepts
                  return 3;
                } else if (documentId.startsWith('/docs')) {
                  // promote docs
                  return 2;
                } else if (documentId.startsWith('/reference/aisbreaker')) {
                  // downrate refs - less spam for results from /reference/aisbreaker...
                  return 0.5;
                } else {
                  // default
                  return 1;
                }
              }
            }
          }
        }
      }
    }
  },

  // https://emersonbottero.github.io/vitepress-plugin-mermaid/guide/getting-started.html
  // optionally, you can pass MermaidConfig
  mermaid: {
    // refer https://mermaid.js.org/config/setup/modules/mermaidAPI.html#mermaidapi-configuration-defaults for options
  },
  // optionally set additional config for plugin itself with MermaidPluginConfig
  mermaidPlugin: {
    //class: "mermaid my-class", // set additional css classes for parent container 
  },

})



/* prettier-ignore */
function sidebarDocs(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Introduction',
      collapsed: false,
      items: [
        //{ text: 'What is AIsBreaker?', link: '/' },
        { text: 'What is AIsBreaker API?', link: '/' },
        //{ text: 'Architecture', link: '/architecture' },
        { text: 'API Architecture', link: '/architecture' },
        { text: 'Basic Concepts', link: '/concepts' },
        { text: 'Use Cases', link: '/use-cases' },
      ]
    },
    {
      text: 'Gettings Started',
      collapsed: false,
      items: [
        { text: 'Getting Started - with TypeScript/JavaScript', link: '/getting-started-with-typescript-javascript' },
        { text: 'Getting Started - with Java/Kotlin/JVM', link: '/getting-started-with-java' },
        { text: 'Getting Started - with Python', link: '/getting-started-with-python' },
        { text: 'Getting Started - with Bash Shellscript', link: '/getting-started-with-bash' },
        { text: 'Getting Started - with REST API', link: '/aisbreaker-rest-api' },
      ]
    },
    {
      text: 'Client Details',
      collapsed: false,
      items: [
        { text: 'Services (List)', link: '/services' },
        { text: 'Tasks of AI Services', link: '/tasks' },
        { text: 'Service Identification with serviceId', link: '/serviceId' },
        { text: 'Service Properties / ServiceProps / AIsServiceProps', link: '/service-properties' },
        { text: 'Service URL', link: '/url' },
        { text: 'Request', link: '/request' },
        { text: 'Response (ResponseFinal and ResponseEvent)', link: '/response' },
        { text: 'Conversation State', link: '/conversation-state' },
        { text: 'AIsBreaker Client API', link: '/aisbreaker-client-api' },
        { text: 'AIsBreaker REST API', link: '/aisbreaker-rest-api' },
        { text: 'API Keys (Access Tokens)', link: '/api-keys' },
        { text: 'AIsBreaker API Key (AIsBreaker Access Token)', link: '/aisbreaker-api-key' },
        { text: 'Apps using AIsBreaker / Examples', link: '/examples' },
      ],
    },
    {
      text: 'Server Details',
      collapsed: false,
      items: [
        { text: 'AIsBreaker Server', link: '/aisbreaker-server' },
      ],
    },
    {
      text: 'AIsBreaker Development',
      collapsed: false,
      items: [
        { text: 'AIsBreaker for JavaScript/TypeScript',
          base: '/docs/aisbreaker-api-js',
          collapsed: false,
          items: [
            //{ text: 'Topics', link: 'aisbreaker-api-js/' },
            { text: 'AIsBreaker Packages', link: '/aisbreaker-packages' },
            { text: 'Monorepo', link: '/monorepo' },
            { text: 'Development Process', link: '/development-process' },
            { text: 'Release and Deploy new Versions', link: '/release' },
          ]
        },
        { text: 'Writing Docs', link: '/writing-docs/' },
      ]
    },
  ]
}

function sidebarReference(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Reference',
      items: [
        { text: 'Basics', link: '/#basics' },
        { text: 'Services', link: '/#services' },
        { text: 'Packages (TS/JS)', link: '/#aisbreaker-packages-for-javascript-and-typescript' },
        { text: 'Remote REST API', link: '/#aisbreaker-remote-rest-api'},
        /*
        { text: 'AIsBreaker Packages for TypeScript and JavaScript',
          base: '/docs/aisbreaker-api-js/',
          items: [
            { text: 'AIsBreaker API (JavaScript)', link: 'aisbreaker-api-js' },
            { text: 'AIsBreaker API (TypeScript)', link: 'aisbreaker-api-ts' },
          ]
        },
        */
        /*
        { text: 'Frontmatter Config', link: 'frontmatter-config' },
        { text: 'Runtime API', link: 'runtime-api' },
        { text: 'CLI', link: 'cli' },
        {
          text: 'Default Theme',
          base: '/reference/default-theme-',
          items: [
            { text: 'Overview', link: 'config' },
            { text: 'Nav', link: 'nav' },
            { text: 'Sidebar', link: 'sidebar' },
            { text: 'Home Page', link: 'home-page' },
            { text: 'Footer', link: 'footer' },
            { text: 'Layout', link: 'layout' },
            { text: 'Badge', link: 'badge' },
            { text: 'Team Page', link: 'team-page' },
            { text: 'Prev / Next Links', link: 'prev-next-links' },
            { text: 'Edit Link', link: 'edit-link' },
            { text: 'Last Updated Timestamp', link: 'last-updated' },
            { text: 'Search', link: 'search' },
            { text: 'Carbon Ads', link: 'carbon-ads' }
          ]
        }
        */
      ]
    }
  ]
}
