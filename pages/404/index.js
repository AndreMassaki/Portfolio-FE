import LogoWrapper from '../../src/components/common/LogoWrapper';
import SEO from '../../src/components/utils/SEO';
import NotFound from './styles';

export default function NotFoundWrapper() {
  return (
    <>
      <SEO
        title="Not Found"
      />
      <NotFound>
        <LogoWrapper
          href="/"
        />
        <NotFound.Div>
          <NotFound.Text>
            <NotFound.Span
              pink
            >
              4
            </NotFound.Span>
            <NotFound.Span
              green
            >
              0
            </NotFound.Span>
            <NotFound.Span
              cyan
            >
              4
            </NotFound.Span>
          </NotFound.Text>
          <NotFound.Link
            href="/"
          >
            Clique aqui para voltar
          </NotFound.Link>
        </NotFound.Div>
      </NotFound>
    </>
  );
}
