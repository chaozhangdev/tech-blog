// Documentation: https://vuepress-theme-blog.ulivz.com/config/
// Demo Blog Code: https://github.com/billyyyyy3320/Billy

module.exports = {
  title: "Chao Zhang",
  description:
    "This is a blog to record my daily study of coding. Built by VuePress.",
  theme: "@vuepress/theme-blog", // OR shortcut: @vuepress/blog
  themeConfig: {
    smoothScroll: true,
    sitemap: {
      hostname: "https://chao.gg",
    },
    // modifyBlogPluginOptions(blogPluginOptions) {
    //   return blogPluginOptions;
    // },
    directories: [
      {
        id: "blog",
        dirname: "_blog",
        title: "Blog",
        path: "/",
        itemPermalink: "/en/:year/:month/:day/:slug",
        pagination: {
          lengthPerPage: 8,
        },
      },
      {
        id: "leetcode",
        dirname: "_leetcode",
        title: "Leetcode",
        path: "/leetcode/",
        itemPermalink: "/en/:year/:month/:day/:slug",
        pagination: {
          lengthPerPage: 8,
        },
      },
      // {
      //   id: "project",
      //   dirname: "_project",
      //   title: "Project",
      //   path: "/project/",
      //   itemPermalink: "/en/:year/:month/:day/:slug",
      //   pagination: {
      //     lengthPerPage: 8888,
      //   },
      // },
      {
        id: "research",
        dirname: "_research",
        title: "Research",
        path: "/research/",
        itemPermalink: "/en/:year/:month/:day/:slug",
        pagination: {
          lengthPerPage: 8888,
        },
      },
    ],
    nav: [
      {
        text: "Blog",
        link: "/",
      },
      // {
      //   text: "Project",
      //   link: "/project/",
      // },
      {
        text: "Research",
        link: "/research/",
      },
      {
        text: "Leetcode",
        link: "/leetcode/",
      },
      {
        text: "Tags",
        link: "/tag/",
      },
      {
        text: "About",
        link: "/about.md",
      },
      {
        text: "Github",
        link: "https://github.com/chaozhangdev",
      },
    ],
    footer: {
      contact: [
        {
          type: "github",
          link: "https://github.com/chaozhangdev",
        },
        {
          type: "mail",
          link: "mailto:chaozhangdev@gmail.com",
        },
        {
          type: "linkedin",
          link: "https://www.linkedin.com/in/chao-zhang-727b8b15b/",
        },
      ],
      copyright: [
        {
          text: "Privacy Policy",
          link: "https://policies.google.com/privacy?hl=en-US",
        },
        {
          text: `MIT Licensed | Copyright © ${new Date().getFullYear()} Chao Zhang`,
          link: "",
        },
      ],
    },
  },
};
