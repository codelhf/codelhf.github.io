import { createRequire } from 'module'
import { defineConfig } from 'vitepress'

const require = createRequire(import.meta.url)
const pkg = require('../../package.json')

export const en = defineConfig({
  title: 'Programming Mini Station',
  description: 'A knowledge base website for learning programming techniques and articles',

  themeConfig: {
    nav: [
      {
        text: 'Guide',
        link: '/en/guide/git&github/git-github-gitee',
        activeMatch: '/en/guide/'
      },
      {
        text: 'Reference',
        link: '/en/reference/site-config',
        activeMatch: '/en/reference/'
      },
      {
        text: pkg.version,
        items: [
          {
            text: 'Changelog',
            link: 'https://github.com/vuejs/vitepress/blob/main/CHANGELOG.md'
          },
          {
            text: 'Contributing',
            link: 'https://github.com/vuejs/vitepress/blob/main/.github/contributing.md'
          }
        ]
      }
    ],

    sidebar: {
      '/en/guide/': {
        base: '/en/guide/',
        items: sidebarGuide()
      },
      '/en/reference/': {
        base: '/en/reference/',
        items: sidebarReference()
      }
    },

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Huaifeng Liu'
    },

    editLink: {
      pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    }
  }
})

function sidebarGuide() {
  return [
    {
      text: 'Introduction',
      base: '/en/guide/git&github/',
      collapsed: false,
      items: [
        { text: 'Git同时推送到Github和Gitee', link: 'git-github-gitee' },
        { text: '使用Github Pages部署Vue项目', link: 'github-pages' }
      ]
    },
    {
      text: 'Config & API Reference',
      base: '/en/reference/',
      link: 'site-config'
    }
  ]
}

function sidebarReference() {
  return [
    {
      text: 'Reference',
      items: [
        { text: 'Site Config', link: 'site-config' },
        { text: 'Frontmatter Config', link: 'frontmatter-config' },
        { text: 'Runtime API', link: 'runtime-api' },
        { text: 'CLI', link: 'cli' },
        {
          text: 'Default Theme',
          base: '/en/reference/default-theme-',
          items: [
            { text: 'Overview', link: 'config' },
            { text: 'Nav', link: 'nav' },
            { text: 'Sidebar', link: 'sidebar' },
            { text: 'Home Page', link: 'home-page' },
            { text: 'Footer', link: 'footer' },
            { text: 'Layout', link: 'layout' },
            { text: 'Badge', link: 'badge' },
            { text: 'Team Page', link: 'team-page' },
            { text: 'Prev / Next Links', link: 'prev-next-links' },
            { text: 'Edit Link', link: 'edit-link' },
            { text: 'Last Updated Timestamp', link: 'last-updated' },
            { text: 'Search', link: 'search' },
            { text: 'Carbon Ads', link: 'carbon-ads' }
          ]
        }
      ]
    }
  ]
}

export const search = {
  en: {}
}
