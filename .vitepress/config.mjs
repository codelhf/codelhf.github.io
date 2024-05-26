import { defineConfig } from 'vitepress';
import { en, search as enSearch } from './config/en.mjs';
import { zh, search as zhSearch } from './config/zh.mjs';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/',
  srcDir: './src',
  outDir: './docs',
  // publicDir: './public',
  cleanUrls: true,
  metaChunk: true,
  lastUpdated: true,
  // title: '编程小站',
  // description: '一个学习编程技术和文章的知识库网站',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    [
      'script',
      {},
      `var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?c94f2aefd9fa433fc1985770edc53c9e";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })();`
    ]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.svg',

    search: {
      provider: 'local',
      options: {
        locales: { ...enSearch, ...zhSearch },
      }
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/codelhf' },
    ],
    // 广告
    carbonAds: { code: 'CEBDT27Y', placement: 'vuejsorg' }
  },
  // 配置合并
  locales: {
    root: {
      label: '中文',
      link: '/zh/', // 默认 /zh/ -- 显示在导航栏翻译菜单上，可以是外部的
      lang: 'zh', // 可选，将作为 `lang` 属性添加到 `html` 标签中
      ...zh
    },
    en: {
      label: 'Englist',
      link: '/en/', // 默认 /en/ -- 显示在导航栏翻译菜单上，可以是外部的
      lang: 'en', // 可选，将作为 `lang` 属性添加到 `html` 标签中
      ...en
    },
  },
  markdown: {
    math: true,
    codeTransformers: [
      // We use `[!!code` in demo to prevent transformation, here we revert it back.
      {
        postprocess(code) {
          return code.replace(/\[\!\!code/g, '[!code')
        }
      }
    ]
  },
  sitemap: {
    hostname: 'https://vitepress.dev',
    transformItems(items) {
      return items.filter((item) => !item.url.includes('migration'))
    }
  },
});
