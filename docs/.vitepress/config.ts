import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  description: "A VitePress Site",
  base: '/vitepress/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Froend', link: '/Froend/HTTP', activeMatch: '/Froend/' },
      { text: 'Life', link: '/Life/April', activeMatch: '/Life/' }
    ],
    sidebar: {
      '/Froend/': [
        {
          text: '计网',
          collapsed: true,
          items: [
            { text: 'HTTP', link: '/Froend/HTTP' },
            { text: 'DNS', link: '/Froend/DNS' },
            { text: '网络模型', link: '/Froend/网络模型' },
            { text: 'TCP与UDP', link: '/Froend/TCP与UDP' },

          ]
        },
        {
          text: 'Html+css',
          collapsed: true,
          items: [
            { text: 'H5', link: '/Froend/H5' },
            { text: 'CSS', link: '/Froend/CSS' },
          ]
        },
        {
          text: 'JS',
          collapsed: true,
          items: [
            { text: 'JS', link: '/Froend/JS' },
            { text: '手写JS', link: '/Froend/手写JS' },
          ]
        },
        {
          text: '数据结构',
          collapsed: true,
        },
        {
          text: '算法',
          collapsed: true,
        },
        {
          text: 'Vue',
          collapsed: true,
          items: [
            { text: '基础', link: '/Froend/基础' },
            { text: '通信', link: '/Froend/通信' },
            { text: 'V3新增', link: '/Froend/V3新增' },
          ]
        },
        {
          text: '前端工程化',
          collapsed: true,
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
   
      ],
      '/Life/': [
        {
          text: 'Life',
          items: [
            { text: 'April', link: '/Life/April' },
            { text: 'Longplate', link: '/Life/Longplate' },
            { text: 'Vite', link: '/Life/Vite' },
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
