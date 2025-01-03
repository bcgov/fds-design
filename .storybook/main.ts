import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: [
    "../packages/**/*.stories.@(js|jsx|ts|tsx|mdx)", // Include MDX files explicitly
    "../packages/**/*.mdx" // Ensure loose .mdx files are covered
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
};
export default config;
