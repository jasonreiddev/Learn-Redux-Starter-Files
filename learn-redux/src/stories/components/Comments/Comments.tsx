import * as React from "react";
import { FunctionComponent, SyntheticEvent } from "react";

import { Comment } from "../../../types";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { addComment, removeComment } from "../../../reducers/comments";
import { CommentStyles as s } from "./Comments.styles";

export interface CommentsProps {
  postCode: string;
}

export const Comments: FunctionComponent<CommentsProps> = ({ postCode }) => {
  const dispatch = useAppDispatch();
  const comments = useAppSelector((state) => state.comments);
  const postComments = comments[postCode] || [];

  const renderComment = (comment: Comment, i: number) => {
    return (
      <s.Comment key={i}>
        <p>
          <strong>{comment.user}</strong>
          {comment.text}
          <s.RemoveButton
            onClick={() => dispatch(removeComment({ postCode, i }))}
          >
            &times;
          </s.RemoveButton>
        </p>
      </s.Comment>
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
    <s.Wrapper>
      <s.Container>
        <s.Form onSubmit={handleSubmit}>
          <input type="text" id="author" required={true} placeholder="author" />
          <input
            type="text"
            id="comment"
            required={true}
            placeholder="comment"
          />
          <input type="submit" hidden />
        </s.Form>
        {postComments
          .slice(0)
          .reverse()
          .map((comment, i) => renderComment(comment, i))}
      </s.Container>
    </s.Wrapper>
  );
};
