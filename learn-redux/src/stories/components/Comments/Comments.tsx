import * as React from "react";
import { FunctionComponent, SyntheticEvent } from "react";

import { Comment } from "../../../types";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { addComment, removeComment } from "../../../reducers/comments";

export interface CommentsProps {
  postCode: string;
}

export const Comments: FunctionComponent<CommentsProps> = ({ postCode }) => {
  const dispatch = useAppDispatch();
  const comments = useAppSelector((state) => state.comments);
  const postComments = comments[postCode] || [];

  const renderComment = (comment: Comment, i: number) => {
    return (
      <div className="comment" key={i}>
        <p>
          <strong>{comment.user}</strong>
          {comment.text}
          <button
            className="remove-comment"
            onClick={() => dispatch(removeComment({ postCode, i }))}
          >
            &times;
          </button>
        </p>
      </div>
    );
  };

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    const author = (document.getElementById("author") as HTMLInputElement)
      .value;
    const comment = (document.getElementById("comment") as HTMLInputElement)
      .value;
    dispatch(addComment({ postCode, author, comment }));
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="comments">
      {postComments.map((comment, i) => renderComment(comment, i))}
      <form className="comment-form" onSubmit={handleSubmit}>
        <input type="text" id="author" placeholder="author" />
        <input type="text" id="comment" placeholder="comment" />
        <input type="submit" hidden />
      </form>
    </div>
  );
};
