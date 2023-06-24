import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "AIsBreaker.org",
  lang: 'en-US',
  description: "AIsBreaker introduction and docs",
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'Reference', link: '/reference/' },
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
      pattern: 'https://github.com/aisbreaker/aisbreaker.org-web/edit/main/docs/:path'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/aisbreaker/' }
    ],
    search: {
      provider: 'local'
    }
  }
})
