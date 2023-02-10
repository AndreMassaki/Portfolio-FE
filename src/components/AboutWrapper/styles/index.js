import styled, { css } from 'styled-components';

const About = styled.section`
  background-color: ${({ theme }) => theme.default.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0;
  gap: 2.5rem;

  @media screen and (min-width: 768px) {
    padding: 2rem 0;
  }
`;

About.Title = styled.h2`
  color: ${({ theme }) => theme.default.purple};
  font-size: 2.5rem;
  font-weight: 700;

  @media screen and (min-width: 375px) {
    font-size: 3rem;
  }

  @media screen and (min-width: 425px) {
    font-size: 3.3rem;
  }

  @media screen and (min-width: 768px) {
    font-size: 2.75rem;
  }

  @media screen and (min-width: 1024px) {
    font-size: 3.5rem;
  }

  @media screen and (min-width: 1440px) {
    font-size: 4rem;
  }
`;

About.Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
  }

  @media screen and (min-width: 1024px) {
    gap: 3.5rem;
  }
`;

About.Image = styled.img`
  width: 100%;
  height: 20rem;
  object-fit: contain;
  filter: drop-shadow(-0.5rem 0.5rem 0.2rem #1F2129);

  @media screen and (min-width: 375px) {
    height: 18rem;
  }

  @media screen and (min-width: 425px) {
    height: 22rem;
  }

  @media screen and (min-width: 768px) {
    height: 30rem;
  }
`;

About.Texts = styled.div`
  max-width: 90%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  text-align: center;

  @media screen and (min-width: 375px) {
    max-width: 85%;
  }

  @media screen and (min-width: 425px) {
    max-width: 80%;
  }

  @media screen and (min-width: 768px) {
    max-width: 40%;
  }
`;

About.Text = styled.p`
  color: ${({ theme }) => theme.default.remaining.white};

  ${({ title }) => title && css`
    font-size: 1.2rem;

    @media screen and (min-width: 1024px) {
      font-size: 1.5rem;
    }
  `}
`;

About.Span = styled.span`
  ${({ bold }) => bold && css`
    font-weight: 700;
  `}

  ${({ green, theme }) => green && css`
    color: ${theme.default.green}
  `}

  ${({ blue, theme }) => blue && css`
    color: ${theme.default.cyan}
  `}
`;

export default About;
