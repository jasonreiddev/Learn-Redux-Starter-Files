import * as React from "react";
import { FunctionComponent } from "react";
import { useParams } from "react-router-dom";

import { Photo } from "../../components/Photo/Photo";
import { Comments } from "../../components/Comments/Comments";
import { SingleStyles } from "./Single.styles";

interface SingleRouteParams {
  postCode?: string;
}

export const Single: FunctionComponent = () => {
  const { postCode } = useParams<SingleRouteParams>();

  return (
    <SingleStyles.Wrapper>
      <Photo postCode={postCode} />
      <Comments postCode={postCode} />
    </SingleStyles.Wrapper>
  );
};
