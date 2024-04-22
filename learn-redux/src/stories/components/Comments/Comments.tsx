import * as React from "react";
import { FunctionComponent, useRef } from "react";

import { Comment } from "src/types";
import { useAppDispatch, useAppSelector } from "@hooks/useStore";
import { addComment, removeComment } from "@reducers/comments";
import { Form, FormData } from "@components/Form/Form";
import { CommentStyles as s } from "./Comments.styles";

export interface CommentsProps {
  postCode: string;
}

export const Comments: FunctionComponent<CommentsProps> = ({ postCode }) => {
  const dispatch = useAppDispatch();
  const comments = useAppSelector((state) => state.comments);
  const postComments = comments[postCode] || [];

  const form: FormData = [
    {
      type: "text",
      id: "author",
      placeholder: "author",
      required: true,
      value: "",
      ref: useRef<HTMLInputElement>(),
      retainOnSubmit: true,
    },
    {
      type: "text",
      id: "comment",
      placeholder: "comment",
      required: true,
      value: "",
      ref: useRef<HTMLInputElement>(),
    },
  ];

  const renderComment = (comment: Comment, i: number) => {
    return (
      <s.Comment key={i}>
        <p>
          <strong>{comment.user}</strong>
          {comment.text}
          <s.RemoveButton
            onClick={() =>
              dispatch(
                removeComment({ postCode, i: postComments.length - 1 - i })
              )
            }
          >
            &times;
          </s.RemoveButton>
        </p>
      </s.Comment>
    );
  };

  return (
    <s.Wrapper>
      <s.Container>
        <s.FormWrapper>
          <Form
            initialForm={form}
            callBack={(form) =>
              dispatch(
                addComment({
                  postCode,
                  author: form[0].value,
                  comment: form[1].value,
                })
              )
            }
            formId="comment"
          />
        </s.FormWrapper>
        {postComments.slice(0).reverse().map(renderComment)}
      </s.Container>
    </s.Wrapper>
  );
};
