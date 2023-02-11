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

Footer.Dracula = styled.a`
  background-image: url(/images/dracula.webp);
  width: 4rem;
  height: 4rem;
  background-size: cover;
  border-radius: 50%;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }
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
