import LogoWrapper from '../common/LogoWrapper';
import Footer from './styles';

export default function FooterWrapper() {
  return (
    <Footer>
      <LogoWrapper />
      <Footer.Container>
        <Footer.Link
          href="https://draculatheme.com/pro"
        >
          <Footer.Image
            src="/images/dracula.webp"
            alt="Image"
          />
        </Footer.Link>
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
