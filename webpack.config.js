const path = require("path");

module.exports = {
  entry: "./src/index.jsx",
  mode: "development",
  devtool: "source-map",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.m?jsx?$/,
        exclude: /node_modules\/(?!react*)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  targets: { ie: "11" },
                },
              ],
              "@babel/preset-react",
            ],
          },
        },
      },
    ],
  },
};
