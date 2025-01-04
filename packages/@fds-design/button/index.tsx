import React from "react";
import {
    Button as SpectrumButton,
    SpectrumButtonProps,
} from "@react-spectrum/button";
import "./styles.scss";

// Check if children is an icon-only button
function isIconOnly(children: React.ReactNode): boolean {
    // Check if it's undefined, null, or an empty string
    if (!children || (typeof children === "string" && children.trim() === "")) {
        return true;
    }

    // Check if children is a single React element without text content
    if (React.isValidElement(children)) {
        const textContent = React.Children.toArray(children).filter(
            (child) => typeof child === "string" && child.trim() !== ""
        );
        return textContent.length === 0; // No text, likely an icon
    }

    return false;
}

export const Button: React.FC<SpectrumButtonProps> = (
    props: SpectrumButtonProps
) => {
    // Check if it's icon-only and conditionally add the class
    const className = isIconOnly(props.children) ? "fds-icon-only-button" : "fds-button";

    const defaultProps = {
        ...props,
        variant: props.variant ?? "accent",
        style: props.style ?? "fill",
    };

    return <SpectrumButton {...defaultProps} UNSAFE_className={className} />;
};
