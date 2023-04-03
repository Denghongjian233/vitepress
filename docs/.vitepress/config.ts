/*
 * @Author: dhj 17613071153@163.com
 * @Date: 2023-04-02 19:19:37
 * @LastEditors: dhj 17613071153@163.com
 * @LastEditTime: 2023-04-03 10:17:45
 * @FilePath: \实验项目\docs\.vitepress\config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Awesome Project",
  description: "A VitePress Site",
  base: '/vitepress/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
      { text: 'A', link: '/A/' },
      { text: 'B', link: '/B/' }
    ],

    sidebar: {
      '/a/': [
        {
          text: 'A',
          items: [
            { text: 'a', link: '/A/a.md' },
            { text: 'a', link: '/A/a.md' }
          ],
        },
      ],
      '/b/': [
        {
          text: 'A',
          items: [
            { text: 'b', link: '/A/b.md' },
            { text: 'b', link: '/A/b.md' }
          ],
        }
      ]

    },

    // [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   }
    // ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/denghongjian233' }
    ]
  }
})
