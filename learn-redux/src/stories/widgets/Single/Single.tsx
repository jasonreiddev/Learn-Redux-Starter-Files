import * as React from "react";
import { FunctionComponent } from "react";
import { useParams } from "react-router-dom";

import { Photo } from "../../components/Photo/Photo";
import { Comments } from "../../components/Comments/Comments";

interface SingleRouteParams {
  postCode?: string;
}

export const Single: FunctionComponent = () => {
  const { postCode } = useParams<SingleRouteParams>();

  return (
    <div className="single-photo">
      <Photo postCode={postCode} />
      <Comments postCode={postCode} />
    </div>
  );
};
