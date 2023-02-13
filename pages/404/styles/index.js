import styled, { css } from 'styled-components';

const NotFound = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 3rem;
`;

NotFound.Div = styled.div`
  margin-top: 10rem;
`;

NotFound.Text = styled.p``;

NotFound.Link = styled.a`
  color: ${({ theme }) => theme.default.purple};
  text-decoration: none;
`;

NotFound.Span = styled.span`
  font-size: 7rem;

  ${({ pink, theme }) => pink && css`
    color: ${theme.default.pink};
  `};

  ${({ green, theme }) => green && css`
    color: ${theme.default.green};
  `};

  ${({ cyan, theme }) => cyan && css`
    color: ${theme.default.cyan};
  `};
`;

export default NotFound;
