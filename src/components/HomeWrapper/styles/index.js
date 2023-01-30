import styled, { css } from 'styled-components';

const Home = styled.section`
  background-color: ${({ theme }) => theme.default.background.dark};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 3rem;
  min-height: calc(100vh - 5rem);

  @media screen and (min-width: 768px) {
    flex-direction: row-reverse;
    justify-content: center;
    padding-bottom: 0;
    gap: 3rem;
  }

  @media screen and (min-width: 1024px) {
    padding-top: 2.5rem;
    gap: 5rem;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 3.5rem;
    gap: 10rem;
  }
`;

Home.Background = styled.div`
  display: none;
  background-color: ${({ theme }) => theme.default.background.light};
  width: 15rem;
  height: 30rem;
  position: absolute;
  top: 5rem;
  right: 0;

  @media screen and (min-width: 1024px) {
    display: block;
  }
`;

Home.Image = styled.img`
  width: 16rem;
  height: 16rem;
  object-fit: cover;

  @media screen and (min-width: 375px) {
    width: 18rem;
    height: 18rem;
  }

  @media screen and (min-width: 425px) {
    width: 22rem;
    height: 22rem;
  }

  @media screen and (min-width: 768px) {
    height: 30rem;
    width: 20rem;
    filter: drop-shadow(1rem 1rem 0.3rem #1F2129);
  }

  @media screen and (min-width: 1024px) {
    filter: drop-shadow(1.3rem 1.3rem 0.3rem #1F2129);
  }
`;

Home.Texts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 1.75rem;
  gap: 1.5rem;
  max-width: 85%;

  @media screen and (min-width: 375px) {
    max-width: 80%;
  }

  @media screen and (min-width: 425px) {
    max-width: 70%;
  }

  @media screen and (min-width: 768px) {
    margin-top: 0;
    max-width: 40%;
  }

  @media screen and (min-width: 1024px) {
    max-width: 50%;
  }
`;

Home.Title = styled.h1`
  color: ${({ theme }) => theme.default.remaining.white};
`;

Home.Span = styled.span`
  ${({ green, theme }) => green && css`
    color: ${theme.default.green};
  `}

  ${({ blue, theme }) => blue && css`
    color: ${theme.default.blue};
  `}

  ${({ pink, theme }) => pink && css`
    color: ${theme.default.pink};
  `}

  ${({ purple, theme }) => purple && css`
    color: ${theme.default.purple};
  `}

  ${({ bold }) => bold && css`
    font-weight: 700;
  `}
`;

Home.Text = styled.p`
  color: ${({ theme }) => theme.default.remaining.white};
`;

Home.Scroll = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  .aiOutlineArrowDown {
    color: ${({ theme }) => theme.default.pink};
    width: 35px;
    height: 35px;
  }
`;

export default Home;
