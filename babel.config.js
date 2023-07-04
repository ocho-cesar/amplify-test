const moduleResolverConfig = {
  root: ['./src'],
  extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
}

module.exports = function (api) {
  api.cache(true)

  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ['module-resolver', moduleResolverConfig],
      '@babel/plugin-proposal-export-namespace-from',
      require.resolve('expo-router/babel'),
    ],
  }
}
