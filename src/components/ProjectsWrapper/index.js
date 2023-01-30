import { motion } from 'framer-motion';
import { GiClick } from 'react-icons/gi';

import CardWrapper from '../common/CardWrapper';
import Projects from './styles';

export default function ProjectsWrapper() {
  return (
    <Projects
      id="projects"
    >
      <Projects.Texts>
        <Projects.Title>
          {'<Projetos />'}
        </Projects.Title>
        <Projects.Click>
          <motion.div
            initial={{ scale: 1 }}
            animate={{
              scale: 0.7,
              transition: {
                duration: 0.1,
                repeat: Infinity,
                repeatType: 'reverse',
                repeatDelay: 1,
              },
            }}
            exit={{ scale: 1 }}
          >
            <GiClick
              className="giClick"
            />
          </motion.div>
          <Projects.Text>
            <Projects.Span>
              {'Clique no card '}
            </Projects.Span>
            para ver mais detalhes
          </Projects.Text>
        </Projects.Click>
      </Projects.Texts>
      <Projects.Container>

        <Projects.Cards>
          <CardWrapper
            src="/images/mycontacts.webp"
            alt="Image"
            project="MyContacts"
            description="Projeto desenvolvido durante o curso JSTACK do @imateus.silva."
            developed="30 dias"
          >
            React, Next, Styled-Components, Node, Express e Postgress
          </CardWrapper>
          <CardWrapper
            src="/images/crypto.webp"
            alt="Image"
            project="Crypto"
            description="Projeto desenvolvido a partir de um design comprado para estudos."
            developed="30 dias"
          >
            React, Next, Styled-Componentss
          </CardWrapper>
        </Projects.Cards>

        <Projects.Button
          type="button"
          onClick={() => alert('Em breve!')}
        >
          Ver mais
        </Projects.Button>
      </Projects.Container>
    </Projects>
  );
}
