import * as React from "react";
import { FunctionComponent } from "react";

import { Photo } from "../../components/Photo/Photo";
import { useAppSelector } from "../../../hooks";

export const PhotoGrid: FunctionComponent = ({}) => {
  const posts = useAppSelector((state) => state.posts);

  return (
    <div className="photo-grid">
      {posts.map((post) => (
        <Photo key={post.id} postCode={post.code} />
      ))}
    </div>
  );
};
