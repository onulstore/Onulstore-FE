import { DefaultTheme } from 'styled-components';
//palette에 blackColor와 같은 내용을 만들면 styled.d.ts파일에서도 타입을 명시해줘야함

const palette = {
  black: '#2F2F33',
  white: '#ffffff',
  main: '#D86145',
  darkGrey: '#505050',
  midGrey: '#A9A9A9',
  lightMidGrey: '#D6D6D6',
  whiteGrey: '#F5F5F5',
};

export const theme: DefaultTheme = {
  palette,
};

export type Theme = typeof theme;
export default theme;
