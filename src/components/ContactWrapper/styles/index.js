import styled from 'styled-components';

const Contact = styled.section`
  background-color: ${({ theme }) => theme.default.background};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

Contact.Title = styled.h2`
  color: ${({ theme }) => theme.default.green};
  font-size: 2rem;
  font-weight: 700;

  @media screen and (min-width: 375px) {
    font-size: 2.5rem;
  }

  @media screen and (min-width: 425px) {
    font-size: 2.85rem;
  }

  @media screen and (min-width: 768px) {
    font-size: 2.75rem;
  }

  @media screen and (min-width: 1024px) {
    font-size: 3.5rem;
  }

  @media screen and (min-width: 1440px) {
    font-size: 4rem;
  }
`;

Contact.Technologies = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 3rem 0;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
  }

  @media screen and (min-width: 1024px) {
    max-width: 64rem;
  }
`;

export default Contact;
