import * as React from "react";
import { FunctionComponent } from "react";
import { FaComment, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useAppDispatch } from "../hooks";
import { incrementLikes } from "../reducers/posts";

import { Post, Comments } from "../types";

interface PhotoProps {
  post: Post;
  comments: Comments;
}

export const Photo: FunctionComponent<PhotoProps> = ({ post, comments }) => {
  const dispatch = useAppDispatch();

  return (
    <figure className="grid-figure">
      <div className="grid-photo-wrap">
        <Link to={`/view/${post.code}`} className="grid-photo-link">
          <img
            src={post.display_src}
            alt={post.caption}
            className="grid-photo"
          />
        </Link>
        <AnimatePresence initial={false}>
          <motion.span
            key={post.likes}
            className="likes-heart"
            animate={{ opacity: [0, 0.8, 1, 0], scale: [0, 0.8, 1] }}
            transition={{ duration: 0.5 }}
          >
            <FaHeart />
            <span>{post.likes}</span>
          </motion.span>
        </AnimatePresence>
      </div>
      <figcaption>
        <p>{post.caption}</p>
        <div className="control-buttons">
          <button onClick={() => dispatch(incrementLikes({ postId: post.id }))}>
            <FaHeart /> {post.likes}
          </button>
          <Link className="button" to={`/view/${post.code}`}>
            <FaComment />
            {comments[post.code] ? comments[post.code].length : 0}
          </Link>
        </div>
      </figcaption>
    </figure>
  );
};
