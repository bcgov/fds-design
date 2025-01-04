import { Theme } from "@react-types/provider";

// Import CSS modules properly
import globalStyles from './vars/spectrum-global.module.css';
import mediumStyles from './vars/spectrum-medium.module.css';
import lightStyles from './vars/spectrum-light.module.css';
import darkStyles from './vars/spectrum-darkest.module.css';
import largeStyles from './vars/spectrum-large.module.css';

// Build the expected structure
export const theme: Theme = {
  global: globalStyles,
  light: lightStyles,
  dark: darkStyles,
  medium: mediumStyles,
  large: largeStyles
};

export default theme;
