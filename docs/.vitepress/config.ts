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
            { text: '新特性', link: '/Froend/新特性' },
            { text: 'canvas', link: '/Froend/canvas' },
            { text: '盒模型', link: '/Froend/盒模型' },
            { text: '定位', link: '/Froend/定位' },
            { text: 'BFC', link: '/Froend/BFC' },
            { text: 'flex', link: '/Froend/flex' },
            { text: 'grid', link: '/Froend/grid' },
          ]
        },
        {
          text: 'JS',
          collapsed: true,
          items: [
            { text: '数据类型', link: '/Froend/数据类型' },
            { text: 'ES6', link: '/Froend/ES6' },
            { text: '原型', link: '/Froend/原型' },
            { text: '异步', link: '/Froend/异步' },
            { text: '手写', link: '/Froend/手写' },
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
