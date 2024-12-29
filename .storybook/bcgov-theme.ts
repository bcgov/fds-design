import { create } from '@storybook/theming/create';
import packageInfo from '../package.json';

export default create({
  base: 'light',
  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',
  brandTitle: `@fds-design@${packageInfo.version}`,
});
