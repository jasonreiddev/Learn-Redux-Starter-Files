import styled from "styled-components";

const Form = styled.form`
  input,
  textarea {
    width: 100%;
    border: 0;
    font-size: 1.3rem;
    padding: 1rem 0.5rem;
    border-bottom: 1px solid var(--lightgrey);
    outline: none;
    resize: vertical;

    &:focus {
      border-color: var(--blue);
    }
  }
`;

export const FormStyles = {
  Form,
};
