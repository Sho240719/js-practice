module.exports = {
  entry: "./src/js/index.js",
  output: {
    path: `${__dirname}/dist/`,
    filename: "bundle.js",
  },
  mode: "development",
  devtool: "source-map",
};
