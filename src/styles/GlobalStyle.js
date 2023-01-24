import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Courier Prime', monospace;
    font-weight: 400;
  }

  body {
    height: 150vh;
    background-color: ${({ theme }) => theme.default.background.dark};
  }
`;
