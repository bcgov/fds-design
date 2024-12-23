import {themes} from '@storybook/theming';
import {addons} from '@storybook/manager-api';
import {FORCE_RE_RENDER} from '@storybook/core-events';


addons.register('theme-switcher', api => {
  let query = window.matchMedia('(prefers-color-scheme: dark)');
  let update = () => {
    let theme = query.matches ? themes.dark : themes.normal;
    theme.brandTitle = `FDS Design<br />v1`;
    theme.brandUrl = 'https://react-spectrum.corp.adobe.com';
    api.setOptions({theme});
    addons.getChannel().emit(FORCE_RE_RENDER);
  };

  addons.getChannel().on('storiesConfigured', update);
  query.addListener(update);
});
