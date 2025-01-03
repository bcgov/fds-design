import { Meta, StoryObj } from "@storybook/react";
import { TextField } from ".";
import { action } from "@storybook/addon-actions";
import { SpectrumTextFieldProps, Link } from "@adobe/react-spectrum";

const meta: Meta<SpectrumTextFieldProps> = {
  title: "TextField",
  component: TextField,
  args: {
    label: "Example Label",
    isQuiet: false,
    isDisabled: false,
    isReadOnly: false,
    isRequired: false,
    necessityIndicator: "icon",
    labelPosition: "top",
    labelAlign: "start",
    validationState: undefined,
    type: "text",
    inputMode: "text",
    name: "",
    autoComplete: "off",
    placeholder: "",
    description: "Look I'm at the bottom too",
    errorMessage: "",
    value: undefined,
    defaultValue: undefined,
    onChange: action("onChange"),
    onBlur: action("onBlur"),
    onFocus: action("onFocus"),
    onKeyDown: action("onKeyDown"),
    onKeyUp: action("onKeyUp"),
  },
  argTypes: {
    label: { control: "text" },
    isQuiet: { control: "boolean" },
    isDisabled: { control: "boolean" },
    isReadOnly: { control: "boolean" },
    isRequired: { control: "boolean" },
    necessityIndicator: {
      control: { type: "radio" },
      options: ["icon", "label"],
    },
    labelPosition: {
      control: { type: "radio" },
      options: ["top", "side"],
    },
    labelAlign: {
      control: { type: "radio" },
      options: ["start", "end"],
    },
    validationState: {
      control: { type: "radio" },
      options: [undefined, "valid", "invalid"],
    },
    type: {
      control: { type: "select" },
      options: ["text", "search", "url", "tel", "email", "password"],
    },
    inputMode: {
      control: { type: "select" },
      options: [
        "none",
        "text",
        "tel",
        "url",
        "email",
        "numeric",
        "decimal",
        "search",
      ],
    },
    name: { control: "text" },
    autoComplete: { control: "text" },
    placeholder: { control: "text" },
    description: { control: "text" },
    errorMessage: { control: "text" },
    value: { control: "text" },
    defaultValue: { control: "text" },
  },
};

export default meta;

// Default Story
export const Default: StoryObj<SpectrumTextFieldProps> = {
    render: (args) => (
        <>
            <Link
                href="https://react-spectrum.adobe.com/react-spectrum/TextField.html"
                target="_blank"
            >
                See the full documentation at React Spectrum
            </Link>
            <div className="story-container">
                <TextField {...args} />
            </div>
        </>
    ),
};
