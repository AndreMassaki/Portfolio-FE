import Head from 'next/head';

import HeaderWrapper from '../src/components/HeaderWrapper';
import HomeWrapper from '../src/components/HomeWrapper';

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfólio - André Massaki</title>
      </Head>
      <HeaderWrapper />
      <HomeWrapper />
    </>
  );
}
