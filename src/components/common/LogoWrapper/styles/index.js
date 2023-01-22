import styled, { css } from 'styled-components';

const Logo = styled.a`
  font-size: 1.5rem;
  text-decoration: none;

  &:hover {
    cursor: pointer;
  }

  @media screen  and (min-width: 425px) {
    font-size: 2rem;
  }

  @media screen  and (min-width: 768px) {
    font-size: 1.75rem;
  }

  @media screen  and (min-width: 1200px) {
    font-size: 2rem;
  }

  @media screen  and (min-width: 1440px) {
    font-size: 2.5rem;
  }
`;

Logo.Span = styled.span`
  ${({ green, theme }) => green && css`
    color: ${theme.default.green}
  `}
  ${({ pink, theme }) => pink && css`
    color: ${theme.default.pink}
  `}
  ${({ white, theme }) => white && css`
    color: ${theme.default.remaining.white}
  `}
  ${({ purple, theme }) => purple && css`
    color: ${theme.default.purple}
  `}
`;

export default Logo;
