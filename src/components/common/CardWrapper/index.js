import Image from 'next/image';
import Link from 'next/link';

import Card from './styles';

export default function CardWrapper({
  src,
  alt,
  project,
  description,
  developed,
  children,
}) {
  return (
    <Card>
      <Link
        className="link"
        href="#projects"
      >
        <Image
          className="image"
          width={272}
          height={147}
          loading="lazy"
          src={src}
          alt={alt}
        />
        <Card.Texts>
          <Card.Text>
            <Card.Span
              green
            >
              {'Projeto: '}
            </Card.Span>
            {project}
          </Card.Text>
          <Card.Text>
            <Card.Span
              green
            >
              {'Descrição: '}
            </Card.Span>
            {description}
          </Card.Text>
          <Card.Text>
            <Card.Span
              green
            >
              {'Desenvolvido em: '}
            </Card.Span>
            {developed}
          </Card.Text>
          <Card.Text
            bold
          >
            <Card.Span
              green
            >
              {'Tecnologias: '}
            </Card.Span>
            {children}
          </Card.Text>
        </Card.Texts>
      </Link>
    </Card>
  );
}
