import React from "react";

import { Photo } from "./Photo";
import { Comments } from "./Comments";

export const Single = React.createClass({
  render() {
    const { postId } = this.props.params;
    const i = this.props.posts.findIndex((post) => post.code === postId);
    const post = this.props.posts[i];
    const postComments = this.props.comments[postId] || [];

    return (
      <div className="single-photo">
        <Photo {...this.props} i={i} post={post} />
        <Comments {...this.props} postComments={postComments} />
      </div>
    );
  },
});
