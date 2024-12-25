import React from 'react';

import { Button as SpectrumButton, SpectrumButtonProps } from '@react-spectrum/button';

export const Button: React.FC<SpectrumButtonProps> = (props) => {

  return <SpectrumButton {...props} UNSAFE_className="fam-button"/>;
};
