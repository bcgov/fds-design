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
    variant: 'accent',
    style: 'fill'
  },
  argTypes: {
    children: {
      control: 'text',
      description: 'Content inside the button, can be text or React elements.',
      table: {
        type: {
          summary: 'ReactNode'
        },
        defaultValue: { summary: 'Click Me' }
      },
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
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: { summary: 'accent' }
      }
    },
    style: {
      control: 'select',
      options: [undefined, 'fill', 'outline'],
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: { summary: 'fill' }
      }
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

// Default Primary
export const Default: StoryObj<typeof Button> = {
  args: {
    children: 'Click Me',
    onPress: () => {alert("I'm an FDS button.")}
  }
};

// Accent
export const Accent = {
  render: () => (
    <div style={{ display: 'flex', gap: '10px' }}>
      {/* Accent */}
      <Button variant='accent' onPress={() => alert("I'm an FDS button.")}>Accent</Button>

      {/* Accent Tertiary */}
      <Button
        onPress={() => alert("I'm a tertiary button.")}
        variant="accent"
        style="outline"
      >
        Accent Tertiary
      </Button>

      {/* Accent Disabled */}
      <Button variant='accent' onPress={() => alert("I'm an FDS button.")} isDisabled>Disabled</Button>
</div>
  )
};

export const Secondary = {
  render: () => (
    <div style={{ display: 'flex', gap: '10px' }}>
      {/* Secondary */}
      <Button
        onPress={() => alert("I'm a secondary button.")}
        variant="secondary"
      >
        Secondary
      </Button>

      {/* Secondary Tertiary */}
      <Button
        onPress={() => alert("I'm a tertiary button.")}
        variant="secondary"
        style="outline"
      >
        Secondary Tertiary
      </Button>

      <Button variant='secondary' onPress={() => alert("I'm an FDS button.")} isDisabled>Disabled</Button>
      </div>
  )
}

export const Negative = {
  render: () => (
    <div style={{ display: 'flex', gap: '10px' }}>
      {/* Negative */}
      <Button
        onPress={() => alert("I'm a tertiary button.")}
        variant="negative"
      >
        Negative
      </Button>

      {/* Secondary Tertiary */}
      <Button
        onPress={() => alert("I'm a tertiary button.")}
        variant="negative"
        style="outline"
      >
        Secondary Tertiary
      </Button>

      <Button variant='negative' onPress={() => alert("I'm an FDS button.")} isDisabled>Disabled</Button>
    </div>
  ),
};
