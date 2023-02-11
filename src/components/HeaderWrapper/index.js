import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
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
                <Link
                  href="#home"
                  scroll={false}
                >
                  Início
                </Link>
              </li>
              <li>
                <Link
                  href="#projects"
                  scroll={false}
                >
                  Projetos
                </Link>
              </li>
              <li>
                <Link
                  href="#skills"
                  scroll={false}
                >
                  Habilidades
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  scroll={false}
                >
                  Sobre
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  scroll={false}
                >
                  Contato
                </Link>
              </li>
              <li>
                <Link
                  href="#home"
                  scroll={false}
                >
                  Blog
                </Link>
              </li>
            </MobileNavigation.List>
          </MobileNavigation>
        )}
      </AnimatePresence>
    </Header>
  );
}
