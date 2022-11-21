const path = require('path')

module.exports = {
  stories: [
    '../../react/**/*.stories.mdx',
    '../../react/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  refs: {
    core: {
      title: 'Core',
      url: 'http://localhost:7006',
    },
    solid: {
      title: 'Solid',
      url: 'http://localhost:7008',
    },
  },
  staticDirs: ['../public'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-vite',
  },
  features: {
    storyStoreV7: true,
  },
  // webpackFinal: (config) => {
  //   config.resolve.roots = [
  //     path.resolve(__dirname, '../public'),
  //     'node_modules',
  //   ]

  //   config.module.rules.push({
  //     test: /\,css&/,
  //     use: [
  //       {
  //         loader: 'postcss-loader',
  //         options: {
  //           ident: 'postcss',
  //           plugins: [require('tailwindcss'), require('autoprefixer')],
  //         },
  //       },
  //     ],
  //     include: path.resolve(__dirname, '../../core'),
  //   })

  //   return config
  // },
}
