import DesktopNavigation from './styles';

export default function DesktopNavigationWrapper() {
  return (
    <DesktopNavigation>
      <DesktopNavigation.List>
        <DesktopNavigation.Item>
          <DesktopNavigation.Link
            href="#home"
          >
            Início
          </DesktopNavigation.Link>
        </DesktopNavigation.Item>
        <DesktopNavigation.Item>
          <DesktopNavigation.Link
            href="#projects"
          >
            Projetos
          </DesktopNavigation.Link>
        </DesktopNavigation.Item>
        <DesktopNavigation.Item>
          <DesktopNavigation.Link
            href="#skills"
          >
            Habilidades
          </DesktopNavigation.Link>
        </DesktopNavigation.Item>
        <DesktopNavigation.Item>
          <DesktopNavigation.Link
            href="#about"
          >
            Sobre
          </DesktopNavigation.Link>
        </DesktopNavigation.Item>
        <DesktopNavigation.Item>
          <DesktopNavigation.Link
            href="#contact"
          >
            Contato
          </DesktopNavigation.Link>
        </DesktopNavigation.Item>
        <DesktopNavigation.Item>
          <DesktopNavigation.Link
            href="#blog"
            onClick={() => alert('Em breve!')}
          >
            Blog
          </DesktopNavigation.Link>
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
