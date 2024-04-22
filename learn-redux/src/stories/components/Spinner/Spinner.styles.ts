import styled from "styled-components";
import { motion } from "framer-motion";

const Wrapper = styled.div`
  position: relative;
`;

const Spinner = styled(motion.span)`
  margin: auto;
  display: block;
  width: 8em;
  height: 8em;
  border-radius: 50%;
  border: 1em solid lightgray;
  border-left-color: var(--blue);
  position: relative;

  span {
    display: none;
  }
`;

export const SpinnerStyles = {
  Wrapper,
  Spinner,
};
