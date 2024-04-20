import styled from "styled-components";

const Wrapper = styled.div`
  flex: 1 0 40%;
  position: relative;
  min-height: 100%;
`;

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: auto;
  display: flex;
  flex-direction: column-reverse;
`;

const FormWrapper = styled.div`
  margin-top: auto;
`;

const RemoveButton = styled.button`
  background: none;
  border: 0;
  line-height: 1;
  opacity: 0;
  display: inline;

  &:hover {
    color: red;
  }
`;

const Comment = styled.div`
  border-bottom: 1px solid var(--lightgrey);
  padding: 0.5rem 0;
  p {
    font-size: 1.2rem;
    margin: 0;
  }
  strong {
    color: var(--blue);
    margin-right: 5px;
  }

  &:hover {
    ${RemoveButton} {
      opacity: 1;
    }
  }
`;

export const CommentStyles = {
  Wrapper,
  Container,
  FormWrapper,
  Comment,
  RemoveButton,
};
