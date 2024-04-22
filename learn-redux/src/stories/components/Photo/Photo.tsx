import * as React from "react";
import { FunctionComponent } from "react";
import { FaComment, FaHeart } from "react-icons/fa";
import { AnimatePresence } from "framer-motion";

import { useAppDispatch, useAppSelector } from "@hooks/useStore";
import { incrementLikes } from "@reducers/posts";
import { PhotoStyles as s } from "./Photo.styles";

export interface PhotoProps {
  postCode: string;
}

export const Photo: FunctionComponent<PhotoProps> = ({ postCode }) => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector((state) => state.posts);
  const comments = useAppSelector((state) => state.comments);
  const post = posts.find((post) => post.code === postCode);
  const postComments = comments[postCode] || [];

  return (
    <s.Figure>
      <s.Wrapper>
        <s.ImageLink to={`/view/${post.code}`}>
          <s.Image src={post.display_src} alt={post.caption} />
        </s.ImageLink>
        <AnimatePresence initial={false}>
          <s.Likes
            key={post.likes}
            animate={{ opacity: [0, 0.8, 1, 0], scale: [0, 0.8, 1] }}
            transition={{ duration: 0.5 }}
          >
            <FaHeart />
            <span>{post.likes}</span>
          </s.Likes>
        </AnimatePresence>
      </s.Wrapper>
      <figcaption>
        <p>{post.caption}</p>
        <s.Controls>
          <s.Button
            onClick={() => dispatch(incrementLikes({ postId: post.id }))}
          >
            <FaHeart /> {post.likes}
          </s.Button>
          <s.Link to={`/view/${post.code}#comment`}>
            <FaComment />
            {postComments?.length || 0}
          </s.Link>
        </s.Controls>
      </figcaption>
    </s.Figure>
  );
};
