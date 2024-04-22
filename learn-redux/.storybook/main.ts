import type { StorybookConfig } from "@storybook/react-webpack5";
import baseConfig from "../webpack.config";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-essentials",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  webpackFinal: async (config) => {
    return {
      ...config,
      mode: "development",
      devtool: "inline-source-map",
      plugins: [...config.plugins, ...baseConfig.plugins],
      module: {
        ...config.module,
        rules: [...config.module.rules, ...baseConfig.module.rules],
      },
      resolve: {
        ...config.resolve,
        plugins: [...baseConfig.resolve.plugins],
      },
    };
  },
};
export default config;
