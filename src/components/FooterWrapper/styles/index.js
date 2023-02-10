import styled, { css } from 'styled-components';

const Footer = styled.footer`
  background-color: ${({ theme }) => theme.default.background};
  padding: 3rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;

Footer.Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  gap: 1.5rem;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    margin-top: 0;
  }
`;

Footer.Texts = styled.div`
  display: flex;
  gap: 0.5rem;
`;

Footer.Link = styled.a`
  border-radius: 50%;
`;

Footer.Image = styled.img`
  width: 5rem;
  border-radius: 50%;
`;

Footer.Span = styled.span`
  font-size: 1.5rem;
  ${({ theme, purple }) => purple && css`
    color: ${theme.default.purple};
  `};

  ${({ theme, pink }) => pink && css`
    color: ${theme.default.pink};
  `};

  ${({ theme, green }) => green && css`
    color: ${theme.default.green};
  `};
`;

export default Footer;
