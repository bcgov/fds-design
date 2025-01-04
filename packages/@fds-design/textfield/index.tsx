import React from "react";
import {
    TextField as SpectrumTextField,
    SpectrumTextFieldProps,
} from "@react-spectrum/textfield";

import './styles.scss';

export const TextField: React.FC<SpectrumTextFieldProps> = (
    props: SpectrumTextFieldProps
) => (
  <SpectrumTextField {...props} UNSAFE_className="fds-textfield"/>
)
