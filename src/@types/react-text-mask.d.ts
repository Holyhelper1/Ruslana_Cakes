declare module 'react-text-mask' {
    import * as React from 'react';

    export interface MaskedInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
      mask: (string | RegExp)[];
      guide?: boolean;
      placeholderChar?: string;
      showMask?: boolean;
      keepCharPositions?: boolean;
      onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    }

    export default class MaskedInput extends React.Component<MaskedInputProps> {}
  }
