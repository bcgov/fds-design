import React from 'react';
import { Button as SpectrumButton, SpectrumButtonProps } from '@react-spectrum/button';
import './styles.scss';

export const Button: React.FC<SpectrumButtonProps> = (props: SpectrumButtonProps) => {
  const defaultProps = {
    ...props,
    variant: props.variant ?? 'accent',
    style: props.style ?? 'fill'
  }
  return <SpectrumButton {...defaultProps} UNSAFE_className="fds-button"/>;
};
