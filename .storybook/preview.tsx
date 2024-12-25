import React from 'react';
import {Provider} from '@react-spectrum/provider';
import theme from 'fds-theme';
import {theme as adobeTheme} from '@react-spectrum/theme-default'
import type {Preview} from '@storybook/react';
import { action } from '@storybook/addon-actions';

// Define parameters for controls and actions
const preview: Preview = {
  parameters: {
    actions: {
      handles: ['onClick', 'onChange'], // Specify explicit actions
      log: action('log'), // Logs actions
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },

  // Apply decorators
  decorators: [
    (Story, context) => {
      // Detect Storybook dark mode from globals
      const isDarkMode = context.globals.theme === 'dark';

      // Apply global body classes for Spectrum CSS themes
      document.body.classList.remove('spectrum--light', 'spectrum--dark');
      document.body.classList.add(isDarkMode ? 'spectrum--dark' : 'spectrum--light');

      console.log("my: ", theme)
      console.log("adobe ", adobeTheme)
      // Use React Spectrum's Provider for additional context
      return (
        <Provider theme={theme} colorScheme={isDarkMode ? 'dark' : 'light'}>
          <Story />
        </Provider>
      );
    },
  ],
  tags: ['autodocs'], // Enable auto-documentation
};

// Add global types for theme switching
export const globalTypes = {
  theme: {
    name: 'Theme', // Label in Storybook UI
    description: 'Global theme for components',
    defaultValue: 'light', // Default theme
    toolbar: {
      icon: 'circlehollow', // Default icon; will update based on selection
      items: [
        { value: 'light', icon: 'sun', title: 'Light Mode' },
        { value: 'dark', icon: 'moon', title: 'Dark Mode' },
      ],
      showName: true, // Display the selected option name
    },
  },
};

export default preview;
