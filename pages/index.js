import Head from 'next/head';
import styled from 'styled-components';

import AboutWrapper from '../src/components/AboutWrapper';
import ContactWrapper from '../src/components/ContactWrapper';
import FooterWrapper from '../src/components/FooterWrapper';
import HeaderWrapper from '../src/components/HeaderWrapper';
import HomeWrapper from '../src/components/HomeWrapper';
import ProjectsWrapper from '../src/components/ProjectsWrapper';
import SkillsWrapper from '../src/components/SkillsWrapper';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfólio - André Massaki</title>
      </Head>
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
