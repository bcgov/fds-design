import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: [
    "../src/components/**/*.stories.@(js|jsx|ts|tsx|mdx)", // Include MDX files explicitly
    "../src/components/**/*.mdx" // Ensure loose .mdx files are covered
  ],
  addons: [
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    '@storybook/addon-docs',
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  typescript: {
    reactDocgen: "react-docgen-typescript",
  },
  features: {
    backgroundsStoryGlobals: true,
  },
  viteFinal: async (config) => {
    config.base = '/fds-design/';
    return config;
  },
};
export default config;
