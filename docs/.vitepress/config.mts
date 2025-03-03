import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "CDUT CS WIKI",
  description: "成理计算机学习指南",
  head: [["link", { rel: "icon", href: "/cdut.png" }]],
  themeConfig: {
    logo: "/cdut.png",
    outline: {
      level: [2, 6],
      label: "目录",
    },
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },

    darkModeSwitchLabel: "深浅模式",
    returnToTopLabel: "返回顶部",
    search: {
      provider: "local",
    },
    // 页脚
    footer: {
      message: "Released under the CC-BY-NC-SA 4.0 License.",
      copyright: "Copyright © 2024 CDUT-CS-WIKI",
    },
    // 文档的最后更新时间
    lastUpdated: {
    text: "Updated at",
    formatOptions: {
        dateStyle: "full",
        timeStyle: "medium",
      },
    },
    
    nav: [
      { text: '首页', link: '/' },
      { text: '程序设计协会', link: '/cxsjxh' },
    ],



    sidebar: [
      {
        text: '前言',
        collapsible: true,
        collapsed: true,
        items: [
          { text: '介绍', link: '/column/01_foreward' },
          { text: '须知', link: '/column/no_data' },
        ]
      },

      {
        text: '计算机科学与技术',
        collapsible: true,
        collapsed: true,
        items: [
          { text: 'C/C++', link: '/column/no_data' },
          { text: '计算机组成原理', link: '/column/no_data' },
          { text: '计算机操作系统', link: '/column/no_data' },
          { text: '计算机网络', link: '/column/no_data' },
          { text: '数据结构与算法', link: '/column/no_data' },
        ]
      },

      {
        text: '网络空间安全',
        collapsible: true,
        collapsed: true,
        items: [
          { text: 'Misc', link: '/column/no_data' },
          { text: 'Web', link: '/column/no_data' },
          { text: 'Reverse', link: '/column/no_data' },
          { text: 'Pwn', link: '/column/no_data' },
          { text: 'Crypto', link: '/column/no_data' },
        ]
      },

      {
        text: '软件工程',
        collapsible: true,
        collapsed: true,
        items: [
          { text: 'Python', link: '/column/no_data' },
          { text: 'Java', link: '/column/no_data' },
          { text: '安卓开发', link: '/column/no_data' },
          { text: '游戏开发', link: '/column/no_data' },
        ]
      },

      {
        text: '机械电子',
        collapsible: true,
        collapsed: true,
        items: [
          { text: '单片机入门', link: '/column/no_data' },
          { text: '数字电子技术', link: '/column/no_data' },
          { text: 'ROS', link: '/column/no_data' },
          { text: '机器人运动学', link: '/column/no_data' },
        ]
      },

      {
        text: '专业竞赛',
        collapsible: true,
        collapsed: true,
        items: [
          { text: 'ICPC', link: '/column/no_data' },
          { text: 'CTF', link: '/column/no_data' },
        ]
      },

      {
        text: '考公考研',
        collapsible: true,
        collapsed: true,
        items: [
          { text: '考公', link: '/column/no_data' },
          { text: '考研', link: '/column/no_data' },
        ]
      },

      {
        text: '经验漫谈',
        collapsible: true,
        collapsed: true,
        items: [
          { text: '01', link: '/column/no_data' },
          { text: '02', link: '/column/no_data' },
        ]
      },

    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/kengwang/CDUT-CS-WIKI' }
    ]
  }
})
