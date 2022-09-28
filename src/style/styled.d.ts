import { Theme } from '../styles/theme';
import { CSSProp } from 'styled-components';

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme {
    palette: {
      black: string;
      white: string;
      darkGrey: string;
      midGrey: string;
      whiteGrey: string;
    };
  }
}

declare module 'react' {
  interface Attributes {
    css?: CSSProp | CSSObject;
  }
}
