import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "CodeKeep",
  description: "A Vitepress Site For Documentation",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Documentation', link: '/welcome-page' },
      { text: 'Contact', link: '/contact' }
    ],

    sidebar: [
      {
        text: 'Concepts',
        items: [
          { text: 'Design Patterns', items: [
            {text: 'Creational Patterns', link: 'concepts/design-patterns/creational-patterns'},
            {text: 'Structural Patterns', link: 'concepts/design-patterns/structural-patterns'},
            {text: 'Behavioral Patterns', link: 'concepts/design-patterns/behavioral-patterns'}
          ]},
          { text: 'Software Architectures', link: 'concepts/software-architectures.md' },
          { text: 'SOLID Principles', link: 'concepts/solid-principles.md' }
        ]
      },
      {
        text: 'Tools',
        items: [
          { text: 'CD (Continuous Deployment)', link: 'tools/cd.md' },
          { text: 'CI (Continuous Implementation)', link: 'tools/ci.md' },
        ]
      },
      {
        text: 'Programming Languages',
        items: [
          { text: 'Typescript', items: [
            { text: 'Types vs Interfaces', link: 'programming-languages/typescript/types-vs-interfaces.md' },
          ]}
        ]
      },
      {
        text: 'Frameworks',
        items: [
        ]
      }
    ],

    footer: {
      message: "",
      copyright: "Copyright © 2020-present Carolane Lefebvre 💻"
    }
  }
})
