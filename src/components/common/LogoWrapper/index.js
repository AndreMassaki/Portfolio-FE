import Logo from './styles';

export default function LogoWrapper({ href }) {
  return (
    <Logo
      href={href}
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
