module.exports = env => {
  const isV3 = !!env.v3
  const loaderName = "vue-loader";
  const { VueLoaderPlugin } = require(loaderName);

  return {
    mode: process.env.NODE_ENV,
    entry: ["./src/vue-wait.js"],
    output: {
      library: "VueWait",
      libraryTarget: "umd",
      globalObject: 'typeof self !== \'undefined\' ? self : this',
      filename: `vue-wait.js`
    },
    externals: { vue: 'vue' },
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: loaderName
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        }
      ]
    },
    plugins: [new VueLoaderPlugin()]
  }
};
