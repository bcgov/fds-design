import { Meta, StoryObj } from '@storybook/react';
import { Button } from '.';
import { action } from '@storybook/addon-actions';
import { SpectrumButtonProps } from '@react-spectrum/button';

export default {
  title: 'Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component: 'This is a customized button based on React Spectrum.'
      }
    }
  },
  args: {
    onPress: action('press'),
    onPressStart: action('pressstart'),
    onPressEnd: action('pressend'),
    onPressChange: action('presschange'),
    onPressUp: action('pressup'),
    onFocus: action('focus'),
    onBlur: action('blur'),
    onKeyUp: action('keyup'),
     children: 'Click Me',
  },
  argTypes: {
    children: {
      control: 'text', // Allows editing children via a text input in Storybook
      description: 'Content inside the button, can be text or React elements.',
      table: {
        type: {
          summary: 'ReactNode'
        },
        defaultValue: { summary: 'Click Me' }
      }
    },
    onPress: {
      table: {
        disable: true
      }
    },
    onPressStart: {
      table: {
        disable: true
      }
    },
    onPressEnd: {
      table: {
        disable: true
      }
    },
    onPressUp: {
      table: {
        disable: true
      }
    },
    autoFocus: {
      control: 'boolean'
    },
    variant: {
      control: 'select',
      options: ['accent', 'primary', 'secondary', 'negative', 'cta', 'overBackground'],
      defaultValue: 'accent'
    },
    style: {
      control: 'select',
      options: [undefined, 'fill', 'outline']
    },
    staticColor: {
      control: 'select',
      options: [undefined, 'white', 'black']
    },
    isPending: {
      control: 'boolean',
      defaultValue: false
    }
  }
} as Meta<SpectrumButtonProps<'button'>>;

// Example Story
export const Default: StoryObj<typeof Button> = {
  args: {
    children: 'Click Me',
    onPress: () => {alert("I'm an FDS button.")}
  }
};
