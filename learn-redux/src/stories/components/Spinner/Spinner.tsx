import * as React from "react";
import { FunctionComponent } from "react";

import { SpinnerStyles as s } from "./Spinner.styles";

export const Spinner: FunctionComponent = () => {
  return (
    <s.Wrapper>
      <s.Spinner
        animate={{ rotate: 360 }}
        transition={{ ease: "linear", repeat: Infinity, duration: 2 }}
      >
        <span>Loading...</span>
      </s.Spinner>
    </s.Wrapper>
  );
};
