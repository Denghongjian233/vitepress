/*
 * @Author: dhj 17613071153@163.com
 * @Date: 2023-04-02 19:19:37
 * @LastEditors: dhj 17613071153@163.com
 * @LastEditTime: 2023-04-03 19:39:16
 * @FilePath: \实验项目\docs\.vitepress\config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "塔塔开",
  description: "A VitePress Site",
  base: '/vitepress/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Froend', link: '/Froend/Js', activeMatch: '/Froend/' },
      { text: 'Life', link: '/Life/April', activeMatch: '/Life/' }
    ],
    sidebar: {
      '/Froend/': [
        {
          text: 'Base',
          items: [
            { text: 'JS', link: '/Froend/JS' },
            { text: 'Getting Started', link: '/guide/getting-started' },
            { text: 'Routing', link: '/guide/routing' },
            { text: 'Deploy', link: '/guide/deploy' }
          ]
        },
        {
          text: 'Writing',
          items: [
            { text: 'Markdown Extensions', link: '/guide/markdown' },
            { text: 'Asset Handling', link: '/guide/asset-handling' },
            { text: 'Frontmatter', link: '/guide/frontmatter' },
            { text: 'Using Vue in Markdown', link: '/guide/using-vue' },
            { text: 'Internationalization', link: '/guide/i18n' }
          ]
        },
        {
          text: 'Customization',
          items: [
            { text: 'Using a Custom Theme', link: '/guide/custom-theme' },
            {
              text: 'Extending the Default Theme',
              link: '/guide/extending-default-theme'
            },
            { text: 'Build-Time Data Loading', link: '/guide/data-loading' },
            { text: 'SSR Compatibility', link: '/guide/ssr-compat' },
            { text: 'Connecting to a CMS', link: '/guide/cms' }
          ]
        },
        {
          text: 'Experimental',
          collapsed: false,
          items: [
            {
              text: 'MPA Mode',
              link: '/guide/mpa-mode'
            }
          ]
        },
        {
          text: 'Config & API Reference',
          link: '/reference/site-config'
        }
      ],
      '/Life/': [
        {
          text: 'Life',
          items: [
            { text: 'April', link: '/Life/4-03' },
            { text: 'Frontmatter Config', link: '/reference/frontmatter-config' },
            { text: 'Runtime API', link: '/reference/runtime-api' },
            { text: 'CLI', link: '/reference/cli' },
            {
              text: 'diary',
              items: [
                {
                  text: 'Overview',
                  link: '/reference/default-theme-config'
                },
                {
                  text: 'Nav',
                  link: '/reference/default-theme-nav'
                },
                {
                  text: 'Sidebar',
                  link: '/reference/default-theme-sidebar'
                },
                {
                  text: 'Home Page',
                  link: '/reference/default-theme-home-page'
                },
                {
                  text: 'Footer',
                  link: '/reference/default-theme-footer'
                },
                {
                  text: 'Layout',
                  link: '/reference/default-theme-layout'
                },
                {
                  text: 'Badge',
                  link: '/reference/default-theme-badge'
                },
                {
                  text: 'Team Page',
                  link: '/reference/default-theme-team-page'
                },
                {
                  text: 'Prev / Next Links',
                  link: '/reference/default-theme-prev-next-links'
                },
                {
                  text: 'Edit Link',
                  link: '/reference/default-theme-edit-link'
                },
                {
                  text: 'Last Updated Timestamp',
                  link: '/reference/default-theme-last-updated'
                },
                {
                  text: 'Algolia Search',
                  link: '/reference/default-theme-search'
                },
                {
                  text: 'Carbon Ads',
                  link: '/reference/default-theme-carbon-ads'
                }
              ]
            }
          ]
        }
      ]

    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/denghongjian233' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Evan You'
    },
  }
})
