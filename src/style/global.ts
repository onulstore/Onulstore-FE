import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export default createGlobalStyle`
${reset}

* {
  box-sizing: border-box;
}
html {
  /* rem 값의 기준을 잡기 위함 16px -> 10px */
  font-size: 62.5%;
  /* 어디서든 동일한 폰트를 적용하기 위해 */
  font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}
body {
  margin: 0;
}

input:focus {
  outline: none;
}
button {
  cursor: pointer;
}
a{
  text-decoration: none;
  color: inherit;
}
`;
