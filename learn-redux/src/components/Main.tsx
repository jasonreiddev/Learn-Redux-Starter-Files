import * as React from "react";
import { FunctionComponent, ReactElement } from "react";
import { Link } from "react-router-dom";

interface MainProps {
  children: ReactElement;
}

export const Main: FunctionComponent<MainProps> = ({ children }) => {
  return (
    <div className="main">
      <h1>
        <Link to="/">Reduxstagaram</Link>
      </h1>
      {children}
    </div>
  );
};
