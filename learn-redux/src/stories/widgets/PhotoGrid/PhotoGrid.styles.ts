import styled from "styled-components";

const Wrapper = styled.div`
  --columns: 1;
  display: grid;
  grid-template-columns: repeat(var(--columns), 1fr);
  gap: 2rem;
  max-width: 1200px;
  padding: 2rem;
  margin: auto;

  @media only screen and (min-width: 600px) {
    --columns: 2;
  }

  @media only screen and (min-width: 1200px) {
    --columns: 3;
  }
`;

const PhotoContainer = styled.div`
  padding: 1rem;
  border: 1px solid var(--lightgrey);
  background: white;
  box-shadow: 0 0 0 5px rgba(0, 0, 0, 0.03);
  display: flex;
  gap: 1rem;
`;

export const PhotoGridStyles = {
  Wrapper,
  PhotoContainer,
};
