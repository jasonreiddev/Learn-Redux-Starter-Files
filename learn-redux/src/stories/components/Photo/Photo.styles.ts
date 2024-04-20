import styled from "styled-components";
import { Link as _Link } from "react-router-dom";
import { motion } from "framer-motion";

const Figure = styled.div`
  background: white;
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;

  figcaption {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
`;

const Wrapper = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
`;

const ImageLink = styled(_Link)`
  grid-area: 1 / 1;
  width: 100%;
`;

const Image = styled.img`
  width: 100%;
`;

const Likes = styled(motion.span)`
  font-size: 2rem;
  padding: 1rem;
  grid-area: 1 / 1;
  color: var(--blue);
  pointer-events: none;
  display: grid;
  align-items: center;
  justify-items: center;

  span {
    grid-area: 1 / 1;
    margin: 12px;
  }

  svg {
    grid-area: 1 / 1;
    color: white;
    width: 100%;
    height: 100%;
  }
`;

const Controls = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: auto;
`;

const Link = styled(_Link)`
  border: 2px solid lightgrey;
  background: none;
  flex-basis: 48%;
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: center;
  line-height: 2;
  text-decoration: none;
  padding: 5px;
  text-align: center;
  font-size: 15px;
  color: var(--blue);
  transition: all 0.2s;
  &:hover,
  &:focus {
    border-color: var(--blue);
    outline: 0;
  }
`;

export const PhotoStyles = {
  Figure,
  Wrapper,
  ImageLink,
  Image,
  Likes,
  Controls,
  Link,
};
