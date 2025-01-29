import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'zh-CN',
  head: [['link', { rel: 'icon', href: '/images/logo.png' }]],

  title: 'Coding 练级宝典',
  keywords: ['编程指南','C 语言'],

  theme: defaultTheme({
    hostname: 'https://coding.ejoin.cc',
    logo: '/images/logo.png',

    home: '/',
    navbar: [
      {
        text: '首页',
        link: '/',
      },
      {
        text: '学习路线',
        link: '/roadmap/introduction.md',
        activeMatch: true,
      },
      {
        text: '自托管',
        link: '/self_host/introduction.md',
      }
      
    ],
    repo: 'https://github.com/ejoin-cc/CodingBook',

    sidebar: {
      '/roadmap/': [
        {
          text: '前言',
          collapsible: true,
          link: 'introduction.md',
        },
        {
          text: '入门',
          collapsible: true,
          children: ['beginner.md'],
        }
      ],
      '/self_host/': [
        'introduction.md',
        'ddns.md',
      ],
    },

    editLink: false,
    lastUpdated: true,
    contributors: false,

    prev: '上一页',
    next: '下一页',
  }),

  bundler: viteBundler(),
})
