const { mergeWith } = require('lodash/fp')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'Female Daily Web',
    description: 'My awesome app using docz',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: false,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: false,
        o: false,
        open: false,
        'open-browser': false,
        root: '/Users/macos/Documents/Learn/React/female-daily-web/.docz',
        base: '/',
        source: './',
        src: './',
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'Female Daily Web',
        description: 'My awesome app using docz',
        host: 'localhost',
        port: 3001,
        p: 3000,
        separator: '-',
        paths: {
          root: '/Users/macos/Documents/Learn/React/female-daily-web',
          templates:
            '/Users/macos/Documents/Learn/React/female-daily-web/node_modules/docz-core/dist/templates',
          docz: '/Users/macos/Documents/Learn/React/female-daily-web/.docz',
          cache:
            '/Users/macos/Documents/Learn/React/female-daily-web/.docz/.cache',
          app: '/Users/macos/Documents/Learn/React/female-daily-web/.docz/app',
          appPackageJson:
            '/Users/macos/Documents/Learn/React/female-daily-web/package.json',
          gatsbyConfig:
            '/Users/macos/Documents/Learn/React/female-daily-web/gatsby-config.js',
          gatsbyBrowser:
            '/Users/macos/Documents/Learn/React/female-daily-web/gatsby-browser.js',
          gatsbyNode:
            '/Users/macos/Documents/Learn/React/female-daily-web/gatsby-node.js',
          gatsbySSR:
            '/Users/macos/Documents/Learn/React/female-daily-web/gatsby-ssr.js',
          importsJs:
            '/Users/macos/Documents/Learn/React/female-daily-web/.docz/app/imports.js',
          rootJs:
            '/Users/macos/Documents/Learn/React/female-daily-web/.docz/app/root.jsx',
          indexJs:
            '/Users/macos/Documents/Learn/React/female-daily-web/.docz/app/index.jsx',
          indexHtml:
            '/Users/macos/Documents/Learn/React/female-daily-web/.docz/app/index.html',
          db:
            '/Users/macos/Documents/Learn/React/female-daily-web/.docz/app/db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
