import React from "react";
import PostActions from "./PostActions";
import PostBody from "./PostBody";
import PostComment from "./PostComment";
import PostHeader from "./PostHeader";

const PostCart = ({ post }) => {
  return (
    <>
      <article class="card mt-6 lg:mt-8">
        <PostHeader post={post} />
        <PostBody poster={post?.image} content={post?.content} />
        <PostActions postId={post?.id} commentCount={post?.comment?.length} />
        <PostComment post={post} />
      </article>
    </>
  );
};

export default PostCart;
