import styled from 'styled-components';

const Technology = styled.a`
  background-color: ${({ theme }) => theme.default.currentLine};
  display: flex;
  width: 85vw;
  align-items: center;
  padding: 0 0.5rem;
  gap: 0.5rem;
  height: 7.5rem;
  transition: transform 0.25s;
  text-decoration: none;

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
    max-width: 20rem;
  }
`;

Technology.Image = styled.span`
  width: 5rem;
  height: 5rem;
  background-image: url(${({ src }) => src});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
`;

Technology.Text = styled.p`
  color: ${({ theme }) => theme.default.remaining.white};
  margin: 0 auto;
`;

export default Technology;
