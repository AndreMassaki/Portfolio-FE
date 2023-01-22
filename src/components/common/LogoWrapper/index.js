import Logo from './styles';

export default function LogoWrapper() {
  return (
    <Logo
      href="#home"
    >
      <Logo.Span
        green
      >
        {'<'}
      </Logo.Span>
      <Logo.Span
        pink
      >
        MASSAKI
      </Logo.Span>
      <Logo.Span
        white
      >
        .
      </Logo.Span>
      <Logo.Span
        purple
      >
        DEV
      </Logo.Span>
      <Logo.Span
        green
      >
        {' />'}
      </Logo.Span>
    </Logo>
  );
}
