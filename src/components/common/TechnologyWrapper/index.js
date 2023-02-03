import Technology from './styles';

export default function TechnologyWrapper({ src, children }) {
  return (
    <Technology>
      <Technology.Image
        src={src}
        alt="Image"
      />
      <Technology.Text>
        {children}
      </Technology.Text>
    </Technology>
  );
}
