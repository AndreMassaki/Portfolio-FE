import styled from 'styled-components';

import AboutWrapper from '../src/components/AboutWrapper';
import ContactWrapper from '../src/components/ContactWrapper';
import FooterWrapper from '../src/components/FooterWrapper';
import HeaderWrapper from '../src/components/HeaderWrapper';
import HomeWrapper from '../src/components/HomeWrapper';
import ProjectsWrapper from '../src/components/ProjectsWrapper';
import SkillsWrapper from '../src/components/SkillsWrapper';
import SEO from '../src/components/utils/SEO';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export default function Home() {
  return (
    <>
      <SEO
        title="Portfólio - André Massaki"
        description="Sou um desenvolvedor web habilidoso e apaixonado por tecnologia, procurando por oportunidades de trabalho free lancer ou estágio na área."
      />
      <Main>
        <HeaderWrapper />
        <HomeWrapper />
        <ProjectsWrapper />
        <SkillsWrapper />
        <AboutWrapper />
        <ContactWrapper />
        <FooterWrapper />
      </Main>
    </>
  );
}
