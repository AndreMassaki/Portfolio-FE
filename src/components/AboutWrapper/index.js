import { motion } from 'framer-motion';
import Image from 'next/image';

import About from './styles';

export default function AboutWrapper() {
  return (
    <About
      id="about"
    >
      <About.Title>
        {'<Sobre />'}
      </About.Title>
      <About.Container>
        <motion.div
          initial={{
            scale: 0.7,
            opacity: 0.5,
          }}
          whileInView={{
            scale: 1,
            opacity: 1,
            transition: {
              duration: 1,
            },
          }}
        >
          <Image
            className="image"
            loading="lazy"
            width={256}
            height={256}
            src="/images/about.webp"
            alt="Image"
          />
        </motion.div>
        <About.Texts>
          <About.Text
            big
          >
            <About.Span
              green
            >
              {'<b>'}
            </About.Span>
            <About.Span
              bold
            >
              Uma Paixão!
            </About.Span>
            <About.Span
              green
            >
              {'<b>'}
            </About.Span>
            <br />
            Transformo suas ideias em realidade com o poder da
            <About.Span
              blue
            >
              {' JSTACK'}
            </About.Span>
          </About.Text>
          <About.Text>
            Meu objetivo principal é me aperfeiçoar nas tecnologias presentes no ecossistema
            JavaScript, que é amplamente utilizado na indústria e possui uma ampla gama de
            ferramentas e bibliotecas para o desenvolvimento web.
          </About.Text>
          <About.Text>
            Eu estou procurando minha primeira oportunidade de trabalho no setor de desenvolvimento
            web e estou animado em aplicar meus conhecimentos e crescer profissionalmente nesta
            área.
          </About.Text>
        </About.Texts>
      </About.Container>
    </About>
  );
}
