import { defineUserConfig } from "@vuepress/cli";
import { version } from "../../../../lerna.json";
import type { HopeThemeOptions } from "vuepress-theme-hope";

export default defineUserConfig<HopeThemeOptions>({
  base: "/v2/reading-time/",

  dest: "./dist",

  locales: {
    "/": {
      lang: "en-US",
      title: "Reading Time Counter",
      description: "Expect reading time and word count statistics",
    },

    "/zh/": {
      lang: "zh-CN",
      title: "阅读时间生成",
      description: "预计阅读时间与字数统计生成",
    },
  },

  theme: "hope",

  themeConfig: {
    hostname: "https://vuepress-theme-hope.github.io",

    author: {
      name: "Mr.Hope",
      url: "https://mrhope.site",
    },

    iconPrefix: "iconfont icon-",

    repo: "https://github.com/vuepress-theme-hope/vuepress-theme-hope",

    docsDir: "docs/reading-time/src",

    logo: "/logo.svg",

    locales: {
      "/": {
        navbar: [
          {
            text: version,
            icon: "note",
            children: [
              {
                text: "V1 Docs",
                link: "https://vuepress-theme-hope.github.io/reading-time/",
              },
            ],
          },
        ],
      },

      "/zh/": {
        navbar: [
          {
            text: version,
            icon: "note",
            children: [
              {
                text: "V1 文档",
                link: "https://vuepress-theme-hope.github.io/reading-time/zh/",
              },
            ],
          },
        ],
      },
    },

    footer: "MIT Licensed | Copyright © 2019-present Mr.Hope",

    displayFooter: true,
    plugins: {
      mdEnhance: {
        codegroup: true,
      },

      pwa: {
        favicon: "/v2/reading-time/favicon.ico",
        themeColor: "#46bd87",
        cachePic: true,
        apple: {
          icon: "/v2/reading-time/assets/icon/apple-icon-152.png",
          statusBarColor: "black",
        },
        msTile: {
          image: "/v2/reading-time/assets/icon/ms-icon-144.png",
          color: "#ffffff",
        },
        manifest: {
          name: "vuepress-plugin-reading-time2",
          short_name: "reading-time plugin",
          icons: [
            {
              src: "/v2/reading-time/assets/icon/chrome-mask-512.png",
              sizes: "512x512",
              purpose: "maskable",
              type: "image/png",
            },
            {
              src: "/v2/reading-time/assets/icon/chrome-mask-192.png",
              sizes: "192x192",
              purpose: "maskable",
              type: "image/png",
            },
            {
              src: "/v2/reading-time/assets/icon/chrome-512.png",
              sizes: "512x512",
              type: "image/png",
            },
            {
              src: "/v2/reading-time/assets/icon/chrome-192.png",
              sizes: "192x192",
              type: "image/png",
            },
          ],
        },
      },
    },
  },
});
