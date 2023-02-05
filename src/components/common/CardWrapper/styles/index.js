import styled, { css } from 'styled-components';

const Card = styled.article`
  background-color: ${({ theme }) => theme.default.background.light};
  width: 85vw;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }

  @media screen and (min-width: 768px) {
    width: 30vw;
  }

  @media screen and (min-width: 1024px) {
    width: 25vw;
    max-width: 16rem;
  }
`;

Card.Link = styled.a`
  text-decoration: none;

  &:hover {
    cursor: pointer;
  }
`;

Card.Image = styled.img`
  width: 100%;
`;

Card.Texts = styled.section`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-size: 0.75rem;
`;

Card.Span = styled.span`
  ${({ green, theme }) => green && css`
    color: ${theme.default.green};
  `}
`;

Card.Text = styled.p`
  color: ${({ theme }) => theme.default.remaining.white};

  ${({ bold }) => bold && css`
    font-weight: 700;
  `}
`;

export default Card;
