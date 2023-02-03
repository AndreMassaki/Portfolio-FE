import styled from 'styled-components';

const Technology = styled.article`
  background-color: ${({ theme }) => theme.default.background.light};
  display: flex;
  width: 85vw;
  align-items: center;
  padding: 0 0.5rem;
  gap: 0.5rem;
  height: 7.5rem;
  transition: transform 0.25s;

  &:hover {
    transform: scale(1.03);
    cursor: pointer;
  }

  @media screen and (min-width: 375px) {
    padding: 0 1rem;
  }

  @media screen and (min-width: 768px) {
    width: 45vw;
  }

  @media screen and (min-width: 1024px) {
    width: 30vw;
  }
`;

Technology.Image = styled.img`
  width: 5rem;
`;

Technology.Text = styled.p`
  color: ${({ theme }) => theme.default.remaining.white};
  margin: 0 auto;
`;

export default Technology;
