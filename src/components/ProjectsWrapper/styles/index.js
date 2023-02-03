import styled from 'styled-components';

const Projects = styled.section`
  background-color: ${({ theme }) => theme.default.background.dark};
  padding: 1rem 0;

  @media screen and (min-width: 768px) {
    padding: 2.5rem 0
  }
`;

Projects.Texts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;

Projects.Title = styled.h2`
  color: ${({ theme }) => theme.default.blue};
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

Projects.Click = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;

  .giClick {
    color: ${({ theme }) => theme.default.green};
    width: 25px;
    height: 25px;
  }

  @media screen and (min-width: 768px) {
    gap: 0.5rem;
  }
`;

Projects.Text = styled.p`
  font-size: 0.7rem;
  color: ${({ theme }) => theme.default.remaining.white};

  @media screen and (min-width: 375px) {
    font-size: 0.85rem;
  }
`;

Projects.Span = styled.span`
  color: ${({ theme }) => theme.default.green};
`;

Projects.Container = styled.section`
  padding: 2.5rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
`;

Projects.Button = styled.button`
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.default.blue};
  color: ${({ theme }) => theme.default.remaining.black};
  font-size: 1rem;
  border: none;
  filter: drop-shadow(0 0 0.3rem ${({ theme }) => theme.default.blue});

  &:hover {
    opacity: 0.7;
    color: ${({ theme }) => theme.default.remaining.black};
  }
`;

Projects.Cards = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  width: 100%;
  flex-wrap: wrap;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 1rem;
    justify-content: center;
    align-items: stretch;
  }

  @media screen and (min-width: 1024px) {
    gap: 2rem;
  }
`;

export default Projects;
