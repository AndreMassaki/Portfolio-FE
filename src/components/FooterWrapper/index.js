import LogoWrapper from '../common/LogoWrapper';
import Footer from './styles';

export default function FooterWrapper() {
  return (
    <Footer>
      <LogoWrapper
        href="/"
      />
      <Footer.Container>
        <Footer.Dracula
          href="https://draculatheme.com/pro"
        />
        <Footer.Texts>
          <Footer.Span
            purple
          >
            Dracula
          </Footer.Span>
          <Footer.Span
            pink
          >
            Theme
          </Footer.Span>
          <Footer.Span
            green
          >
            Lovers
          </Footer.Span>
        </Footer.Texts>
      </Footer.Container>
    </Footer>
  );
}
