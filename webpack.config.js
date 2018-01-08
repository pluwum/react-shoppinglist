module.exports = {
  entry: ["./src/index.js"],
  output: {
    path: __dirname,
    publicPath: "/",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: "babel",
        query: {
          presets: ["react", "es2015", "stage-1"]
        }
      },
      {
        test: /\.css$/,
        include: /node_modules/,
        loaders: ["style", "css"]
      },
      {
        test: /\.css$/,
        include: /src/,
        loaders: [
          "style",
          "css?importLoaders=1&localIdentName=[name]__[local]__[hash:10]&modules",
          "postcss"
        ]
      }
    ]
  },
  resolve: {
    extensions: ["", ".js", ".jsx"]
  },
  devServer: {
    historyApiFallback: true,
    contentBase: "./"
  }
};
