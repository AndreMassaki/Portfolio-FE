import LogoWrapper from '../../src/components/common/LogoWrapper';
import NotFound from './styles';

export default function NotFoundWrapper() {
  return (
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
  );
}
