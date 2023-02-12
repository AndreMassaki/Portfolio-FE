import Technology from './styles';

export default function TechnologyWrapper({ src, href, children }) {
  return (
    <Technology
      href={href}
    >
      <Technology.Image
        src={src}
      />
      <Technology.Text>
        {children}
      </Technology.Text>
    </Technology>
  );
}
