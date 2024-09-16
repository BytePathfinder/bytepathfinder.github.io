import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: "XuBiao's Tech Docs",
  description: "java、js、python技术文档",
  lastUpdated: true,
  themeConfig: {
    siteTitle: "XuBiao's Tech Docs",
    logo: '../public/images/logo.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Docs',
        items: [
          { text: 'Java', link: '/java-docs' },
          { text: 'JavaScript', link: '/js-docs' },
          { text: 'Python', link: '/python-docs' },
        ]
      },
      { text: 'Vitepress', link: 'https://vitepress.dev/zh/reference/default-theme-nav' },
    ],

    sidebar: [
      {
        text: 'Java技术细节',
        items: [
          { text: '概述', link: '/java-docs/' },
          { text: 'Java发展史', link: '/java-docs/history' },
        ],
        collapsed: false
      },
      {
        text: 'JavaScript技术细节',
        items: [
        ],
        collapsed: true
      },
      {
        text: 'Python技术细节',
        items: [
        ],
        collapsed: true
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    footer: {
      message: '好好学习，天天向上！',
      // copyright: 'Copyright © 2024-徐彪'
    },
  }
})
