const path = require("path");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

const resolve = (dir) => path.resolve(__dirname, dir);

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-actions", "@storybook/addon-essentials", "@storybook/addon-links"],
  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve?.alias,
      "@": resolve("../src/"),
    };
    config.resolve.extensions.push("js", "jsx", ".ts", ".tsx");
    config.resolve.plugins = config.resolve.plugins || [];
    config.resolve.plugins.push(
      new TsconfigPathsPlugin({
        configFile: path.resolve(__dirname, "../tsconfig.json"),
      }),
    );
    config.resolve.modules.push(path.resolve(__dirname, ".."));
    return {
      ...config,
      plugins: config.plugins.filter((plugin) => {
        if (plugin.constructor.name === "ESLintWebpackPlugin") {
          return false;
        }
        return true;
      }),
    };
  },
};
