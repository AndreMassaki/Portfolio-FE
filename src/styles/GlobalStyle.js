import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Courier Prime', monospace;
    font-weight: 400;
  }

  html {
    scroll-behavior: smooth;
  }

  body::-webkit-scrollbar {
    width: 0.5em;
    background-color: ${({ theme }) => theme.default.comment};
  }

  body::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.default.purple};
    border-radius: 0.3rem;
  }

  body::-webkit-scrollbar-thumb:hover {
    background-color: #555555;
  }
`;
