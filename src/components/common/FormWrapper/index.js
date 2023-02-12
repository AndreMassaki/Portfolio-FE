// import { useState } from 'react';

// import formatPhone from '../../utils/formatPhone';
import Form from './styles';

export default function FormWrapper() {
  // const [phone, setPhone] = useState('');

  // function handlePhoneChange(event) {
  //   setPhone(formatPhone(event.target.value));
  // }
  return (
    <Form>
      <Form.Container>
        <Form.Label htmlFor="name">
          Nome
          <Form.Span
            small
          >
            *
          </Form.Span>
        </Form.Label>
        <Form.Input
          type="text"
          id="name"
          name="name"
          placeholder="Nome..."
          required
          minLength="3"
        />
      </Form.Container>
      <Form.Container>
        <Form.Label htmlFor="lastName">
          Sobrenome
          <Form.Span
            small
          >
            *
          </Form.Span>
        </Form.Label>
        <Form.Input
          type="text"
          id="lastName"
          name="lastName"
          placeholder="Sobrenome..."
          required
          minLength="3"
        />
      </Form.Container>
      <Form.Container>
        <Form.Label htmlFor="email">
          Email
          <Form.Span
            small
          >
            *
          </Form.Span>
        </Form.Label>
        <Form.Input
          type="email"
          id="email"
          name="email"
          placeholder="exemplo@email.com"
          required
        />
      </Form.Container>
      <Form.Container>
        <Form.Label htmlFor="tel">
          Número
          <Form.Span
            small
          >
            *
          </Form.Span>
        </Form.Label>
        <Form.Input
          type="tel"
          name="tel"
          id="tel"
          placeholder="(DDD) 99999-9999"
          required
        />
      </Form.Container>
      <Form.Container>
        <Form.Label htmlFor="subject">
          Assunto
          <Form.Span
            small
          >
            *
          </Form.Span>
        </Form.Label>
        <Form.Input
          type="text"
          id="subject"
          name="subject"
          placeholder="Assunto..."
          required
        />
      </Form.Container>
      <Form.Container>
        <Form.Label htmlFor="select">
          Qual é a melhor forma para entrar em contato com você?
        </Form.Label>
        <Form.Select
          id="select"
        >
          <Form.Option>
            WhatsApp
          </Form.Option>
          <Form.Option>
            Ligação
          </Form.Option>
          <Form.Option>
            Email
          </Form.Option>
        </Form.Select>
      </Form.Container>
      <Form.Container>
        <Form.Label htmlFor="message">
          Mensagem
          <Form.Span
            small
          >
            *
          </Form.Span>
        </Form.Label>
        <Form.Text
          id="message"
          placeholder="Mensagem..."
        />
      </Form.Container>
      <Form.Container>
        <Form.Button
          type="submit"
        >
          Enviar
        </Form.Button>
      </Form.Container>
    </Form>
  );
}
