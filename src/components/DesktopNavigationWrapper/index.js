import Link from 'next/link';

import DesktopNavigation from './styles';

export default function DesktopNavigationWrapper() {
  return (
    <DesktopNavigation>
      <DesktopNavigation.List>
        <DesktopNavigation.Item>
          <Link
            href="#home"
            scroll={false}
          >
            Início
          </Link>
        </DesktopNavigation.Item>
        <DesktopNavigation.Item>
          <Link
            href="#projects"
            scroll={false}
          >
            Projetos
          </Link>
        </DesktopNavigation.Item>
        <DesktopNavigation.Item>
          <Link
            href="#skills"
            scroll={false}
          >
            Habilidades
          </Link>
        </DesktopNavigation.Item>
        <DesktopNavigation.Item>
          <Link
            href="#about"
            scroll={false}
          >
            Sobre
          </Link>
        </DesktopNavigation.Item>
        <DesktopNavigation.Item>
          <Link
            href="#contact"
            scroll={false}
          >
            Contato
          </Link>
        </DesktopNavigation.Item>
        <DesktopNavigation.Item>
          <Link
            href="/404"
            scroll={false}
          >
            Blog
          </Link>
        </DesktopNavigation.Item>
      </DesktopNavigation.List>
      <DesktopNavigation.Div>
        <DesktopNavigation.Dracula
          href="https://draculatheme.com/pro"
        />
      </DesktopNavigation.Div>
    </DesktopNavigation>
  );
}
