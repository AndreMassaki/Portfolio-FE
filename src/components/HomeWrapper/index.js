import { motion } from 'framer-motion';
import { AiOutlineArrowDown } from 'react-icons/ai';

import Home from './styles';

export default function HomeWrapper() {
  return (
    <Home
      id="home"
    >
      <motion.div
        initial={{
          y: 32,
          opacity: 0.5,
        }}
        animate={{
          y: 0,
          opacity: 1,
          transition: {
            duration: 1.5,
            repeat: 0,
          },
        }}
      >
        <Home.Image
          src="/images/home.webp"
          alt="Image"
        />
      </motion.div>
      <Home.Texts>
        <Home.Title>
          <Home.Span
            green
          >
            {'<b>'}
          </Home.Span>
          <Home.Span
            bold
          >
            Hello World
          </Home.Span>
          <Home.Span
            green
          >
            {'<b/>'}
          </Home.Span>
          <br />
          Eu sou
          <Home.Span
            blue
          >
            {' André Massaki'}
          </Home.Span>
          ,
          <br />
          <Home.Span
            purple
          >
            {'Web '}
          </Home.Span>
          <Home.Span
            pink
          >
            Developer
          </Home.Span>
        </Home.Title>
        <Home.Text>
          Estudo as tecnologias mais presentes do desenvolvimento web, como:
          <Home.Span
            bold
          >
            {' React, Styled-Components, Next, Node, Express e PostgreSQL'}
          </Home.Span>
        </Home.Text>
        <Home.Text>
          Estou sempre em busca de atualizar meus conhecimentos e habilidades para oferecer
          soluções criativas e inovadoras para meus projetos.
          Acredito que uma boa interface do usuário é essencial para o sucesso de qualquer site.
        </Home.Text>
        <Home.Scroll>
          <Home.Span
            green
          >
            Quer me contratar?
          </Home.Span>
          <Home.Span
            blue
            bold
          >
            Scroll Down
          </Home.Span>
          <motion.div
            initial={{ y: 0 }}
            animate={{
              y: '10px',
              transition: {
                duration: 0.7,
                repeat: Infinity,
                repeatType: 'reverse',
              },
            }}
            exit={{ y: 0 }}
          >
            <AiOutlineArrowDown
              className="aiOutlineArrowDown"
            />
          </motion.div>
        </Home.Scroll>
      </Home.Texts>
    </Home>
  );
}
