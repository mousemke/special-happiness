/* eslint-disable @typescript-eslint/no-var-requires */
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { dependencies } = require("./package.json");
/* eslint-enable */

module.exports = {
  entry: "./src/index",
  mode: "development",
  devServer: {
    port: 3333
  },
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new ModuleFederationPlugin({
      name: "Host",
      remotes: {
        Onboarding: `Onboarding@http://localhost:4000/moduleEntry.js`,
        Dashboard: `Dashboard@http://localhost:4001/moduleEntry.js`
      },
      shared: {
        ...dependencies,
        react: {
          singleton: true,
          requiredVersion: dependencies.react
        },
        "react-dom": {
          singleton: true,
          requiredVersion: dependencies["react-dom"]
        }
      }
    })
  ],
  resolve: {
    extensions: [".js", ".ts", ".tsx"]
  },
  target: "web"
};
