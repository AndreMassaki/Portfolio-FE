import Head from 'next/head';

export default function SEO({ title = 'Portfólio - André Massaki', description = 'Sou um desenvolvedor web habilidoso e apaixonado por tecnologia, procurando por oportunidades de trabalho free lancer ou estágio na área.' }) {
  const image = '/images/www.massaki.dev.webp';
  const urlBase = 'https://www.massaki.dev/';

  return (
    <Head>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={urlBase} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={urlBase} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
    </Head>
  );
}
