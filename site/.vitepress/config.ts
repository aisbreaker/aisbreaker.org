import { defineConfig, type DefaultTheme } from 'vitepress'
import { withMermaid } from "vitepress-plugin-mermaid";

// https://vitepress.dev/reference/site-config
export default withMermaid /*defineConfig*/ ({
  title: "AIsBreaker.org",
  lang: 'en-US',
  description: "AIsBreaker introduction and docs",
  lastUpdated: true,
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
      { text: 'Demo', items: [
        {text: 'Demo (Guide)', link: '/docs/demo-guide' }, 
        {text: 'Demo (Live Chat WebApp)', link: 'https://demo.aisbreaker.org/' }, 
        {text: 'Demo API Access (Guide)', link: '/docs/demo-api-access-guide' },
      ]},
      { text: 'Docs', link: '/docs/' },
      { text: 'Reference', link: '/reference/' },
      { text: 'Contribute', link: '/contribute' },
      { text: 'Contact', link: '/contact' },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023 AIsBreaker',
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
      '/docs/': { base: '/docs/', items: sidebarDocs() },
      '/reference/': { base: '/reference/', items: sidebarReference() },
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
        { text: 'What is AIsBreaker?', link: 'index' },
        { text: 'Architecture (Overview)', link: 'architecture' },
        { text: 'Basic Concepts', link: 'concepts' },
      ]
    },
    {
      text: 'Gettings Started',
      collapsed: false,
      items: [
        { text: 'Getting Started - with TypeScript/JavaScript', link: 'getting-started-with-typescript-javascript' },
        { text: 'Getting Started - with Python', link: 'getting-started-with-python' },
        { text: 'Getting Started - with Java', link: 'getting-started-with-java' },
        { text: 'Getting Started - with REST API', link: 'aisbreaker-rest-api' },
      ]
    },
    {
      text: 'Client Details',
      collapsed: false,
      items: [
        { text: 'Services (List)', link: 'services' },
        { text: 'Tasks of AI Services', link: 'tasks' },
        { text: 'Service Identification with serviceId', link: 'serviceId' },
        { text: 'Service Properties / ServiceProps / AIsServiceProps', link: 'service-properties' },
        { text: 'Request', link: 'request' },
        { text: 'Response (ResponseFinal and ResponseEvent)', link: 'response' },
        { text: 'AIsBreaker Client API', link: 'aisbreaker-client-api' },
        { text: 'AIsBreaker REST API', link: 'aisbreaker-rest-api' },
        { text: 'API Keys (Access Tokens)', link: 'api-keys' },
        { text: 'AIsBreaker API Key (AIsBreaker Access Token)', link: 'aisbreaker-api-key' },
      ],
    },
    {
      text: 'Server Details',
      collapsed: false,
      items: [
        { text: 'AIsBreaker Server', link: 'aisbreaker-server' },
      ],
    },
    {
      text: 'AIsBreaker Development',
      collapsed: false,
      items: [
        { text: 'AIsBreaker for JavaScript/TypeScript',
          base: '/docs/aisbreaker-api-js/',
          collapsed: false,
          items: [
            //{ text: 'Topics', link: 'aisbreaker-api-js/' },
            { text: 'AIsBreaker Packages', link: './aisbreaker-packages' },
            { text: 'Monorepo', link: './monorepo' },
            { text: 'Development Process', link: './development-process' },
            { text: 'Release and Deploy new Versions', link: './release' },
          ]
        },
        { text: 'Writing Docs', link: 'writing-docs/' },
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