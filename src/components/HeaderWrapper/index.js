import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

import LogoWrapper from '../common/LogoWrapper';
import DesktopNavigationWrapper from '../DesktopNavigationWrapper';
import MobileNavigation from '../MobileNavigationWrapper';
import Header from './styles';

export default function HeaderWrapoper() {
  const [mobileNavigationIsVisible, setMobileNavigationIsVisible] = useState(false);
  function handleChange() {
    setMobileNavigationIsVisible(!mobileNavigationIsVisible);
  }

  useEffect(() => {
    document.body.style.overflowY = mobileNavigationIsVisible ? 'hidden' : 'auto';
  }, [mobileNavigationIsVisible]);

  return (
    <Header>
      <Header.Div>
        <LogoWrapper />
        <DesktopNavigationWrapper />
      </Header.Div>
      <AiOutlineMenu
        className="aiOutlineMenu"
        onClick={() => handleChange()}
      />
      <AnimatePresence>
        {mobileNavigationIsVisible && (
          <MobileNavigation
            as={motion.nav}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                duration: 0.5,
              },
            }}
            exit={{ opacity: 0 }}
          >
            <AiOutlineClose
              className="aiOutlineClose"
              onClick={() => handleChange()}
            />
            <MobileNavigation.List
              as={motion.ul}
              onClick={() => handleChange()}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
            >
              <li>
                <MobileNavigation.Link
                  href="#home"
                >
                  Início
                </MobileNavigation.Link>
              </li>
              <li>
                <MobileNavigation.Link
                  href="#projects"
                >
                  Projetos
                </MobileNavigation.Link>
              </li>
              <li>
                <MobileNavigation.Link
                  href="#skills"
                >
                  Habilidades
                </MobileNavigation.Link>
              </li>
              <li>
                <MobileNavigation.Link
                  href="#about"
                >
                  Sobre
                </MobileNavigation.Link>
              </li>
              <li>
                <MobileNavigation.Link
                  href="#contact"
                >
                  Contato
                </MobileNavigation.Link>
              </li>
              <li>
                <MobileNavigation.Link
                  href="#blog"
                  onClick={() => alert('Em breve!')}
                >
                  Blog
                </MobileNavigation.Link>
              </li>
            </MobileNavigation.List>
          </MobileNavigation>
        )}
      </AnimatePresence>
    </Header>
  );
}
