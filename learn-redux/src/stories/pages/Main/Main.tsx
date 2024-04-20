import * as React from "react";
import { FunctionComponent, ReactElement } from "react";
import { Link } from "react-router-dom";

import { MainStyles as s } from "./Main.style";

export interface MainProps {
  children: ReactElement;
}

export const Main: FunctionComponent<MainProps> = ({ children }) => {
  return (
    <s.Wrapper>
      <h1>
        <Link to="/">Reduxstagaram</Link>
      </h1>
      {children}
    </s.Wrapper>
  );
};
