import styled from 'styled-components';

const Skills = styled.section`
  background-color: ${({ theme }) => theme.default.background.dark};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.5rem 0;
`;

Skills.Title = styled.h2`
  color: ${({ theme }) => theme.default.pink};
  font-size: 2rem;
  font-weight: 700;

  @media screen and (min-width: 375px) {
    font-size: 2.5rem;
  }

  @media screen and (min-width: 425px) {
    font-size: 2.85rem;
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

Skills.Technologies = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2.5rem 0;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
  }
`;

Skills.Technology = styled.article`
  background-color: ${({ theme }) => theme.default.background.light};
  display: flex;
  width: 85vw;
  align-items: center;
  padding: 0.5rem;
  gap: 0.5rem;

  @media screen and (min-width: 425px) {
    width: 45vw;
  }
`;

Skills.Image = styled.img`
  width: 5rem;
`;

Skills.Text = styled.p`
  color: ${({ theme }) => theme.default.remaining.white};
  margin: 0 auto;
`;

export default Skills;