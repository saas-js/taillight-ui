const path = require('path')

module.exports = {
  stories: ['../../core/**/*.stories.mdx', '../../core/**/*.stories.@(ts)'],
  refs: {
    react: {
      title: 'React',
      url: 'http://localhost:7007',
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
  framework: '@storybook/html',
  core: {
    builder: '@storybook/builder-webpack5',
  },
  webpackFinal: (config) => {
    config.resolve.roots = [
      path.resolve(__dirname, '../public'),
      'node_modules',
    ]

    config.module.rules.push({
      test: /\,css&/,
      use: [
        {
          loader: 'postcss-loader',
          options: {
            ident: 'postcss',
            plugins: [require('tailwindcss'), require('autoprefixer')],
          },
        },
      ],
      include: path.resolve(__dirname, '../../core'),
    })

    return config
  },
}
