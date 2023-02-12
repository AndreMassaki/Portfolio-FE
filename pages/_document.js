import {
  Html, Head, Main, NextScript,
} from 'next/document';

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Courier+Prime:wght@400;700&display=swap" rel="stylesheet" />
        <meta name="description" content="Sou um desenvolvedor web habilidoso e apaixonado por tecnologia, procurando por oportunidades de trabalho free lancer ou estágio na área." />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
