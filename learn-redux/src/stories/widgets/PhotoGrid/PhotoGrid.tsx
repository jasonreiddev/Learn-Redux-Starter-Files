import * as React from "react";
import { FunctionComponent } from "react";

import { Photo } from "@components/Photo/Photo";
import { useAppSelector } from "@hooks/useStore";
import { PhotoGridStyles as s } from "./PhotoGrid.styles";

export const PhotoGrid: FunctionComponent = ({}) => {
  const posts = useAppSelector((state) => state.posts);

  return (
    <s.Wrapper>
      {posts.map((post) => (
        <s.PhotoContainer key={post.id}>
          <Photo postCode={post.code} />
        </s.PhotoContainer>
      ))}
    </s.Wrapper>
  );
};
