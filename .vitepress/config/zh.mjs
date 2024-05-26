import { createRequire } from 'module'
import { defineConfig } from 'vitepress'
import fs from 'fs'
import path from 'path'

const require = createRequire(import.meta.url)
const pkg = require('../../package.json')

export const zh = defineConfig({
  title: '编程小站',
  description: '一个学习编程技术和文章的知识库网站',

  themeConfig: {
    nav: [
      {
        text: '指南',
        link: '/zh/guide/git&github/git-github-gitee',
        activeMatch: '/zh/guide/'
      },
      {
        text: '参考',
        link: '/zh/reference/site-config',
        activeMatch: '/zh/reference/'
      },
      {
        text: pkg.version,
        items: [
          {
            text: '更新日志',
            link: 'https://github.com/vuejs/vitepress/blob/main/CHANGELOG.md'
          },
          {
            text: '参与贡献',
            link: 'https://github.com/vuejs/vitepress/blob/main/.github/contributing.md'
          }
        ]
      }
    ],

    sidebar: {
      '/zh/guide/': { base: '/zh/guide/', items: sidebarGuide() },
      '/zh/reference/': { base: '/zh/reference/', items: sidebarReference() }
    },

    footer: {
      message: '基于 MIT 许可发布',
      copyright: `版权所有 © 2019-${new Date().getFullYear()} 刘怀峰`
    },

    editLink: {
      pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页面'
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    outline: {
      label: '页面导航'
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },

    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式'
  }
})

function sidebarGuide() {
  return [
    {
      text: '简介',
      collapsed: false,
      base: '/zh/guide/git&github/',
      items: [
        { text: 'Git同时推送到Github和Gitee', link: 'git-github-gitee' },
        { text: '使用Github Pages部署Vue项目', link: 'github-pages' }
      ]
    },
    { text: '配置和 API 参考', base: '/zh/reference/', link: 'site-config' }
  ]
}

function sidebarReference() {
  return [
    {
      text: '参考',
      items: [
        { text: '站点配置', link: 'site-config' },
        { text: 'frontmatter 配置', link: 'frontmatter-config' },
        { text: '运行时 API', link: 'runtime-api' },
        { text: 'CLI', link: 'cli' },
        {
          text: '默认主题',
          base: '/zh/reference/default-theme-',
          items: [
            { text: '概览', link: 'config' },
            { text: '导航栏', link: 'nav' },
            { text: '侧边栏', link: 'sidebar' },
            { text: '主页', link: 'home-page' },
            { text: '页脚', link: 'footer' },
            { text: '布局', link: 'layout' },
            { text: '徽章', link: 'badge' },
            { text: '团队页', link: 'team-page' },
            { text: '上下页链接', link: 'prev-next-links' },
            { text: '编辑链接', link: 'edit-link' },
            { text: '最后更新时间戳', link: 'last-updated' },
            { text: '搜索', link: 'search' },
            { text: 'Carbon Ads', link: 'carbon-ads' }
          ]
        }
      ]
    }
  ]
}

export const search = {
  zh: {
    placeholder: '搜索文档',
    translations: {
      button: {
        buttonText: '搜索文档',
        buttonAriaLabel: '搜索文档'
      },
      modal: {
        searchBox: {
          resetButtonTitle: '清除查询条件',
          resetButtonAriaLabel: '清除查询条件',
          cancelButtonText: '取消',
          cancelButtonAriaLabel: '取消'
        },
        startScreen: {
          recentSearchesTitle: '搜索历史',
          noRecentSearchesText: '没有搜索历史',
          saveRecentSearchButtonTitle: '保存至搜索历史',
          removeRecentSearchButtonTitle: '从搜索历史中移除',
          favoriteSearchesTitle: '收藏',
          removeFavoriteSearchButtonTitle: '从收藏中移除'
        },
        errorScreen: {
          titleText: '无法获取结果',
          helpText: '你可能需要检查你的网络连接'
        },
        footer: {
          selectText: '选择',
          navigateText: '切换',
          closeText: '关闭',
          searchByText: '搜索提供者'
        },
        noResultsScreen: {
          noResultsText: '无法找到相关结果',
          suggestedQueryText: '你可以尝试查询',
          reportMissingResultsText: '你认为该查询应该有结果？',
          reportMissingResultsLinkText: '点击反馈'
        }
      }
    }
  }
}

sidebar()
function sidebar() {
  const files = fs.readdirSync(path.resolve(__dirname, '../../src/zh/'))
  console.log(files)
}
