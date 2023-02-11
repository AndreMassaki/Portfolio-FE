import styled, { css } from 'styled-components';

const Form = styled.form`
  background-color: ${({ theme }) => theme.default.currentLine};
  width: 85vw;
  padding: 1rem;
  max-width: 36rem;
`;

Form.Container = styled.div`
  display: flex;
  flex-direction: column;

  & + & {
    margin-top: 2rem;
  }
`;

Form.Label = styled.label`
  color: ${({ theme }) => theme.default.green};
  margin-bottom: 0.3rem;
`;

Form.Span = styled.span`
  ${({ small }) => small && css`
    font-size: 0.75rem;
  `};
`;

Form.Input = styled.input`
  background-color: ${({ theme }) => theme.default.comment};
  padding: 0.7rem 0.5rem;
  border: none;
  box-shadow: 0.15rem 0.15rem 0.15rem 0.15rem rgba(0, 0, 0, 0.25);
  border-radius: 0.5rem;
  transition: outline 0.2s ease-in;
  color: ${({ theme }) => theme.default.remaining.white};

  &::placeholder {
    color: ${({ theme }) => theme.default.remaining.gray.dark};
  }

  &:focus-visible {
    outline: 0.1rem solid ${({ theme }) => theme.default.green};
  }
`;

Form.Select = styled.select`
  background-color: ${({ theme }) => theme.default.comment};
  padding: 0.7rem 0.5rem;
  border: none;
  box-shadow: 0.15rem 0.15rem 0.15rem 0.15rem rgba(0, 0, 0, 0.25);
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.default.remaining.white};

  &:focus-visible {
    outline: none;
  }
`;

Form.Option = styled.option`
  color: ${({ theme }) => theme.default.remaining.gray.dark};
`;

Form.Text = styled.textarea`
  background-color: ${({ theme }) => theme.default.comment};
  padding: 1rem;
  border: none;
  box-shadow: 0.15rem 0.15rem 0.15rem 0.15rem rgba(0, 0, 0, 0.25);
  border-radius: 0.5rem;
  transition: outline 0.2s ease-in;
  color: ${({ theme }) => theme.default.remaining.white};
  resize: vertical;
  min-height: 10rem;

  &::placeholder {
    color: ${({ theme }) => theme.default.remaining.gray.dark};
  }

  &:focus-visible {
    outline: 0.1rem solid ${({ theme }) => theme.default.green};
  }
`;

Form.Button = styled.button`
  width: 100%;
  padding: 1rem 0;
  background-color: ${({ theme }) => theme.default.green};
  border: none;

  &:hover {
    background-color: ${({ theme }) => theme.default.remaining.alpha.green[65]};
    cursor: pointer;
  }

  &:active {
    background-color: ${({ theme }) => theme.default.remaining.alpha.green[45]};
  }

  &[disabled] {
    background-color: ${({ theme }) => theme.default.remaining.gray};
    cursor: not-allowed;
  }
`;

export default Form;
