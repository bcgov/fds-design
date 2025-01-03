import { Meta, StoryObj } from "@storybook/react";
import { Button } from ".";
import { action } from "@storybook/addon-actions";
import { Link, SpectrumButtonProps } from "@adobe/react-spectrum";
import { Tree, Add, TrashCan } from "@carbon/icons-react";

const meta: Meta<SpectrumButtonProps<"button">> = {
    title: "Button",
    component: Button,
    args: {
        onPress: action("press"),
        onPressStart: action("pressstart"),
        onPressEnd: action("pressend"),
        onPressChange: action("presschange"),
        onPressUp: action("pressup"),
        onFocus: action("focus"),
        onBlur: action("blur"),
        onKeyUp: action("keyup"),
        children: "Click me!",
        variant: "accent",
        style: "fill",
    },
    argTypes: {
        children: {
            control: "text",
            description:
                "Content inside the button, can be text or React elements.",
            table: {
                type: {
                    summary: "ReactNode",
                },
            },
        },
        onPress: {
            table: {
                disable: true,
            },
        },
        onPressStart: {
            table: {
                disable: true,
            },
        },
        onPressEnd: {
            table: {
                disable: true,
            },
        },
        onPressUp: {
            table: {
                disable: true,
            },
        },
        autoFocus: {
            control: "boolean",
        },
        variant: {
            control: "select",
            options: [
                "accent",
                "primary",
                "secondary",
                "negative",
                "cta",
                "overBackground",
            ],
            table: {
                type: {
                    summary: "string",
                },
                defaultValue: { summary: "accent" },
            },
        },
        style: {
            control: "select",
            options: [undefined, "fill", "outline"],
            table: {
                type: {
                    summary: "string",
                },
                defaultValue: { summary: "fill" },
            },
        },
        staticColor: {
            control: "select",
            options: [undefined, "white", "black"],
        },
        isPending: {
            control: "boolean",
            defaultValue: false,
        },
    },
};

export default meta;

// Default Story
export const Default: StoryObj<SpectrumButtonProps<"button">> = {
    args: {
        children: "Click me!",
        variant: "accent",
        style: "fill",
        isDisabled: false,
        onPress: () => alert("I'm an FDS button."),
    },
    render: (args) => (
        <>
            <Link
                href="https://react-spectrum.adobe.com/react-spectrum/Button.html"
                target="_blank"
            >
                See the full documentation at React Spectrum
            </Link>
            <div className="story-container">
                <Button {...args} />
            </div>
        </>
    ),
};

// Accent
export const Accent = {
    render: () => (
        <div className="story-container">
            {/* Accent */}
            <Button
                variant="accent"
                onPress={() => alert("I'm an FDS button.")}
            >
                Accent
            </Button>

            {/* Accent Icon */}
            <Button
                variant="accent"
                onPress={() => alert("I'm an FDS button.")}
            >
                Accent Icon
                <Tree />
            </Button>

            {/* Accent Tertiary */}
            <Button
                onPress={() => alert("I'm a tertiary button.")}
                variant="accent"
                style="outline"
            >
                Accent Tertiary
            </Button>

            {/* Accent Disabled */}
            <Button
                variant="accent"
                onPress={() => alert("I'm an FDS button.")}
                isDisabled
            >
                Disabled
            </Button>

            {/* Icon only */}
            <Button
                variant="accent"
                onPress={() => alert("I'm an FDS button.")}
            >
                <Add />
            </Button>
        </div>
    ),
};

export const Secondary = {
    render: () => (
        <div className="story-container">
            {/* Secondary */}
            <Button
                onPress={() => alert("I'm a secondary button.")}
                variant="secondary"
            >
                Secondary
            </Button>

            {/* Secondary Icon */}
            <Button
                variant="secondary"
                onPress={() => alert("I'm a secondary button.")}
            >
                Secondary Icon
                <Tree />
            </Button>

            {/* Secondary Tertiary */}
            <Button
                onPress={() => alert("I'm a tertiary button.")}
                variant="secondary"
                style="outline"
            >
                Secondary Tertiary
            </Button>

            <Button
                variant="secondary"
                onPress={() => alert("I'm an FDS button.")}
                isDisabled
            >
                Disabled
            </Button>

            {/* Icon only */}
            <Button
                variant="secondary"
                onPress={() => alert("I'm an FDS button.")}
            >
                <Add />
            </Button>
        </div>
    ),
};

export const Negative = {
    render: () => (
        <div className="story-container">
            {/* Negative */}
            <Button
                onPress={() => alert("I'm a tertiary button.")}
                variant="negative"
            >
                Negative
            </Button>

            {/* Negative Icon */}
            <Button
                variant="negative"
                onPress={() => alert("I'm a negative button.")}
            >
                Negative Icon
                <Tree />
            </Button>

            {/* Negative Tertiary */}
            <Button
                onPress={() => alert("I'm a tertiary button.")}
                variant="negative"
                style="outline"
            >
                Secondary Tertiary
            </Button>

            <Button
                variant="negative"
                onPress={() => alert("I'm an FDS button.")}
                isDisabled
            >
                Disabled
            </Button>

            {/* Icon only */}
            <Button
                variant="negative"
                onPress={() => alert("I'm an FDS button.")}
            >
                <TrashCan />
            </Button>
        </div>
    ),
};
