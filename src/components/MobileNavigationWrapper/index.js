import { useEffect } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

import MobileNavigation from './styles';

export default function MobileNavigationWrapper({
  mobileNavigationIsVisible,
  setMobileNavigationIsVisible,
}) {
  useEffect(() => {
    document.body.style.overflowY = mobileNavigationIsVisible ? 'hidden' : 'auto';
  }, [mobileNavigationIsVisible]);
  return (
    <MobileNavigation
      mobileNavigationIsVisible={mobileNavigationIsVisible}
    >
      <AiOutlineClose
        className="aiOutlineClose"
        onClick={() => setMobileNavigationIsVisible(false)}
      />
      <MobileNavigation.List
        mobileNavigationIsVisible={mobileNavigationIsVisible}
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
            href="#about"
          >
            Sobre
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
            href="#contact"
          >
            Contato
          </MobileNavigation.Link>
        </li>
        <li>
          <MobileNavigation.Link
            href="#blog"
          >
            Blog
          </MobileNavigation.Link>
        </li>
      </MobileNavigation.List>
    </MobileNavigation>
  );
}
