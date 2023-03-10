import styled from 'styled-components';

const Projects = styled.section`
  background-color: ${({ theme }) => theme.default.background};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

Projects.Texts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 5rem;
  }
`;

Projects.Title = styled.h2`
  color: ${({ theme }) => theme.default.cyan};
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
  padding-top: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
`;

Projects.Button = styled.button`
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.default.cyan};
  color: ${({ theme }) => theme.default.remaining.black};
  font-size: 1rem;
  border: none;
  filter: drop-shadow(0 0 0.3rem ${({ theme }) => theme.default.cyan});

  &:hover {
    opacity: 0.7;
    cursor: pointer;
    color: ${({ theme }) => theme.default.remaining.black};
  }
`;

Projects.Cards = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  max-width: 52rem;
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
