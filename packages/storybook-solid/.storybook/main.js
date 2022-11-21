const path = require('path')
const Solid = require('vite-plugin-solid')

module.exports = {
  stories: ['../../solid/**/stories/*.stories.@(js|jsx|ts|tsx)'],
  refs: {
    core: {
      title: 'Core',
      url: 'http://localhost:7006',
    },
    React: {
      title: 'React',
      url: 'http://localhost:7007',
    },
  },
  staticDirs: ['../public'],
  addons: [
    // '@storybook/addon-links',
    // '@storybook/addon-essentials',
    // '@storybook/addon-interactions',
  ],
  framework: '@storybook/html',
  core: {
    builder: '@storybook/builder-vite',
  },
  features: {
    storyStoreV7: true,
  },
  async viteFinal(config, { configType }) {
    config.plugins.unshift(Solid({ hot: false }))

    return config
  },
}
