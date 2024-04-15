import * as React from "react";
import { FunctionComponent } from "react";

import { Post, Comments } from "../types";
import { Photo } from "./Photo";
import { useAppSelector } from "../hooks";

export const PhotoGrid: FunctionComponent = ({}) => {
  const comments = useAppSelector((state) => state.comments);
  const posts = useAppSelector((state) => state.posts);

  return (
    <div className="photo-grid">
      {posts.map((post, i) => (
        <Photo key={i} post={post} comments={comments} />
      ))}
    </div>
  );
};
