import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "CodeKeep",
  description: "A Vitepress Site For Documentation",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Concepts', link: 'concepts/concepts-list' },
      { text: 'Tools', link: 'tools/tools-list' },
      { text: 'Programming Languages', link: 'programming-languages/proglangs-list' },
      { text: 'Frameworks', link: 'frameworks/frameworks-list' },
    ],

    sidebar: [
      {
        text: 'Concepts',
        items: [
          { text: 'List of Concepts', link: 'concepts/concepts-list.md' },
          { text: 'Software Architectures', link: 'concepts/software-architectures.md' },
          { text: 'SOLID Principles', link: 'concepts/solid-principles.md' }
        ]
      },
      {
        text: 'Tools',
        items: [
          { text: 'List of Tools', link: 'tools/tools-list.md' },
          { text: 'CI (Continuous Implementation)', link: 'tools/ci.md' },
          { text: 'Xcode', link: 'tools/xcode.md' },
          { text: 'Docker', link: 'tools/docker.md' }
        ]
      },
      {
        text: 'Programming Languages',
        items: [
          { text: 'List of Programming Languages', link: 'programming-languages/proglangs-list.md' },
          { text: 'Swift', link: 'programming-languages/swift' },
          { text: 'Typescript', link: 'programming-language/typescript' }
        ]
      },
      {
        text: 'Frameworks',
        items: [
          { text: 'List of Frameworks', link: 'frameworks/frameworks-list.md' },
          { text: 'SwiftUI', link: 'frameworks/swiftui' },
          { text: 'Nuxt', link: 'frameworks/nuxt' }
        ]
      }
    ],

    footer: {
      message: "",
      copyright: "Copyright © 2020-present Carolane Lefebvre 💻"
    }
  }
})
