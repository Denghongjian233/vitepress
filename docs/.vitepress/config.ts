/*
 * @Author: dhj 17613071153@163.com
 * @Date: 2023-04-02 19:19:37
 * @LastEditors: dhj 17613071153@163.com
 * @LastEditTime: 2023-05-04 09:08:10
 * @FilePath: \实验项目\docs\.vitepress\config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
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
            { text: 'Vue', link: '/Froend/Vue' },

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
            { text: 'July', link: '/Life/July' },
            { text: 'June', link: '/Life/June' },
            { text: 'April', link: '/Life/April' },
            { text: 'May', link: '/Life/May' },
            { text: 'Photo', link: '/Life/Photo' },
            { text: 'Longplate', link: '/Life/Longplate' },
            { text: 'sweetTian', link: '/Life/sweetTian' },
            { text: 'Sing', link: '/Life/Sing' },
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
