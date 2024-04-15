import * as React from "react";
import { FunctionComponent, SyntheticEvent } from "react";

import { Comment } from "../types";
import { useAppDispatch } from "../hooks";
import { addComment, removeComment } from "../reducers/comments";

interface CommentsProps {
  postId: string;
  postComments: Comment[];
}

export const Comments: FunctionComponent<CommentsProps> = ({
  postId,
  postComments,
}) => {
  const dispatch = useAppDispatch();

  const renderComment = (comment: Comment, i: number) => {
    return (
      <div className="comment" key={i}>
        <p>
          <strong>{comment.user}</strong>
          {comment.text}
          <button
            className="remove-comment"
            onClick={() => dispatch(removeComment({ postId, i }))}
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
    dispatch(addComment({ postId, author, comment }));
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
