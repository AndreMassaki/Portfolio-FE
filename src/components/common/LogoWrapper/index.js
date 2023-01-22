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
        blue
      >
        MASSAKI
      </Logo.Span>
      <Logo.Span
        purple
      >
        .
      </Logo.Span>
      <Logo.Span
        pink
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
