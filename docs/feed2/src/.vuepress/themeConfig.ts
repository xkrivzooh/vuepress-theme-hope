import { defineThemeConfig } from "vuepress-theme-hope";
import { version } from "../../../../lerna.json";

const hostname =
  process.env.HOSTNAME || "https://vuepress-theme-hope-v2.netlify.app";

export default defineThemeConfig({
  hostname,

  author: {
    name: "Mr.Hope",
    url: "https://mrhope.site",
  },

  iconPrefix: "iconfont icon-",

  repo: "https://github.com/vuepress-theme-hope/vuepress-theme-hope",

  docsDir: "docs/feed2/src",

  logo: "/logo.svg",

  footer: "MIT Licensed | Copyright © 2019-present Mr.Hope",
  displayFooter: true,

  pageInfo: ["PageView", "Category", "Tag", "ReadingTime"],

  locales: {
    "/": {
      navbar: [
        "/",
        "/guide",
        "/config/",
        "/migration",
        {
          text: version,
          icon: "note",
          children: [
            {
              text: "V1 Docs",
              link: "https://vuepress-theme-hope.github.io/v1/feed/",
            },
          ],
        },
      ],

      sidebar: {
        "/": [
          "",
          "guide",
          {
            text: "Config",
            icon: "config",
            prefix: "config/",
            collapsable: false,
            children: ["", "channel", "getter", "item"],
          },
          "migration",
        ],
      },
    },

    "/zh/": {
      navbar: [
        "/zh/",
        "/zh/guide",
        "/zh/config/",
        "/zh/migration",
        {
          text: version,
          icon: "note",
          children: [
            {
              text: "V1 文档",
              link: "https://vuepress-theme-hope.github.io/v1/feed/zh/",
            },
          ],
        },
      ],

      sidebar: {
        "/zh/": [
          "",
          "guide",
          {
            text: "配置",
            icon: "config",
            prefix: "config/",
            collapsable: false,
            children: ["", "channel", "getter", "item"],
          },
          "migration",
        ],
      },
    },
  },

  plugins: {
    comment: {
      type: "waline",
      serverURL: "https://vuepress-theme-hope-comment.vercel.app",
    },

    docsearch: {
      appId: "VXIEHELDL1",
      apiKey: "595796f71b6ba14326719682c3738c0c",
      indexName: "vuepress-theme-hope-v2",
    },

    mdEnhance: {
      codegroup: true,
    },

    pwa: {
      favicon: "/favicon.ico",
      themeColor: "#46bd87",
      cachePic: true,
      apple: {
        icon: "/assets/icon/apple-icon-152.png",
        statusBarColor: "black",
      },
      msTile: {
        image: "/assets/icon/ms-icon-144.png",
        color: "#ffffff",
      },
      manifest: {
        name: "vuepress-plugin-feed2",
        short_name: "feed plugin",
        icons: [
          {
            src: "/assets/icon/chrome-mask-512.png",
            sizes: "512x512",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-mask-192.png",
            sizes: "192x192",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
        shortcuts: [
          {
            name: "Guide",
            short_name: "Guide",
            url: "/guide.html",
            icons: [
              {
                src: "/assets/icon/guide-maskable.png",
                sizes: "192x192",
                purpose: "maskable",
                type: "image/png",
              },
              {
                src: "/assets/icon/guide-monochrome.png",
                sizes: "192x192",
                purpose: "monochrome",
                type: "image/png",
              },
            ],
          },
          {
            name: "Config",
            short_name: "Config",
            url: "/config/",
            icons: [
              {
                src: "/assets/icon/config-maskable.png",
                sizes: "192x192",
                purpose: "maskable",
                type: "image/png",
              },
              {
                src: "/assets/icon/config-monochrome.png",
                sizes: "192x192",
                purpose: "monochrome",
                type: "image/png",
              },
            ],
          },
        ],
      },
      appendBase: true,
    },
  },
});
