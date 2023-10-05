import { defineConfig } from 'vitepress'
import { withMermaid } from "vitepress-plugin-mermaid";

// https://vitepress.dev/reference/site-config
export default withMermaid /*defineConfig*/ ({
  title: "AIsBreaker.org",
  lang: 'en-US',
  description: "AIsBreaker introduction and docs",
  lastUpdated: true,
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
    //lastUpdatedDateTimeFormatOptions: { dateStyle: 'medium',  timeStyle: 'short' },
    editLink: {
      pattern: 'https://github.com/aisbreaker/aisbreaker.org-web/edit/main/site/:path'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/aisbreaker/' }
    ],
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
