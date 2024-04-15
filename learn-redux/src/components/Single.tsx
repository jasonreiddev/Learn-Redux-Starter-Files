import * as React from "react";
import { FunctionComponent } from "react";
import { useParams } from "react-router-dom";

import { Photo } from "./Photo";
import { Comments } from "./Comments";
import { useAppSelector } from "../hooks";

interface SingleRouteParams {
  postId?: string;
}

export const Single: FunctionComponent = () => {
  const { postId } = useParams<SingleRouteParams>();
  const comments = useAppSelector((state) => state.comments);
  const posts = useAppSelector((state) => state.posts);

  const i = posts.findIndex((post) => post.code === postId);
  const post = posts[i];
  const postComments = comments[postId] || [];

  return (
    <div className="single-photo">
      <Photo post={post} comments={comments} />
      <Comments postId={postId} postComments={postComments} />
    </div>
  );
};
