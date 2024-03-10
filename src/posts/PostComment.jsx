import React from "react";
import { useState } from "react";
import { useAvatar } from "../hooks/useAvatar";
import PostCommentList from "./PostCommentList";

const PostComment = ({ post }) => {
  const { avatarUrl } = useAvatar(post);
  const [showAllComment, setShowAllComment] = useState(false);

  return (
    <>
      <div>
        <div className="flex-center mb-3 gap-2 lg:gap-4">
          <img
            className="max-w-7 max-h-7 rounded-full lg:max-h-[34px] lg:max-w-[34px]"
            src={avatarUrl}
            alt="avatar"
          />

          <div className="flex-1">
            <input
              type="text"
              className="h-8 w-full rounded-full bg-lighterDark px-4 text-xs focus:outline-none sm:h-[38px]"
              name="post"
              id="post"
              placeholder="What's on your mind?"
            />
          </div>
        </div>
        <div className="mt-4">
          <button
            className="text-gray-300 max-md:text-sm"
            onClick={() => setShowAllComment(!showAllComment)}
          >
            All Comment ▾
          </button>
        </div>
        {showAllComment && <PostCommentList comments={post?.comments} />}
      </div>
    </>
  );
};

export default PostComment;
