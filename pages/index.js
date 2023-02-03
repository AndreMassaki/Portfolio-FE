import Head from 'next/head';

import HeaderWrapper from '../src/components/HeaderWrapper';
import HomeWrapper from '../src/components/HomeWrapper';
import ProjectsWrapper from '../src/components/ProjectsWrapper';
import SkillsWrapper from '../src/components/SkillsWrapper';

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfólio - André Massaki</title>
      </Head>
      <HeaderWrapper />
      <HomeWrapper />
      <ProjectsWrapper />
      <SkillsWrapper />
    </>
  );
}
