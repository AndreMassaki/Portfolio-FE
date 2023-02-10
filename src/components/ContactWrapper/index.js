import FormWrapper from '../common/FormWrapper';
import TechnologyWrapper from '../common/TechnologyWrapper';
import Contact from './styles';

export default function ContactWrapper() {
  return (
    <Contact
      id="contact"
    >
      <Contact.Title>
        {'<Contato />'}
      </Contact.Title>
      <Contact.Technologies>
        <TechnologyWrapper
          src="/images/github.webp"
          alt="Image"
          href="https://github.com/AndreMassaki"
        >
          Github
        </TechnologyWrapper>
        <TechnologyWrapper
          src="/images/linkedin.webp"
          alt="Image"
          href="https://www.linkedin.com/in/andre-massaki/"
        >
          LinkedIn
        </TechnologyWrapper>
        <TechnologyWrapper
          src="/images/gmail.webp"
          alt="Image"
          href="mailto:andremassaki2004@gmail.com"
        >
          Gmail
        </TechnologyWrapper>
        <TechnologyWrapper
          src="/images/whatsapp.webp"
          alt="Image"
          href="https://api.whatsapp.com/send?phone=5541996551430&text=Olá,%20vim%20através%20do%20seu%20portfólio%20e%20queria%20lhe%20dizer:"
        >
          WhatsApp
        </TechnologyWrapper>
      </Contact.Technologies>
      <FormWrapper />
    </Contact>
  );
}
