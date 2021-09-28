module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '@Api': './src/api',
          '@App': './src/app',
          '@Assets': './src/assets',
          '@Components': './src/components',
          '@Config': './src/config',
          '@I18n': './src/i18n',
          '@Libs': './src/libs',
          '@Layouts': './src/layouts',
          '@Router': './src/router',
          '@Store': './src/store',
          '@Utils': './src/utils',
          '@Validator': './src/validator',
          '@Views': './src/views',
          '@Src': './src',

          '@Api/*': ['./src/api/*'],

          '@App/*': ['./src/app/*'],

          '@Assets/*': ['./src/assets/*'],

          '@Components/*': ['./src/components/*'],

          '@Config/*': ['./src/config/*'],

          '@I18n/*': ['./src/i18n/*'],

          '@Libs/*': ['./src/libs/*'],

          '@Layouts/*': ['./src/layouts/*'],

          '@Router/*': ['./src/router/*'],

          '@Store/*': ['./src/store/*'],

          '@Utils/*': ['./src/utils/*'],

          '@Validator/*': ['./src/validator/*'],

          '@Views/*': ['./src/views/*'],

          '@Src/*': ['./src/*']
        }
      }
    ]
  ]
}
