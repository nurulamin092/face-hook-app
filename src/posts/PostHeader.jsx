import { useState } from "react";

import ThreeDotIcon from "../assets/icons/3dots.svg";
import EditIcon from "../assets/icons/edit.svg";
import DeleteIcon from "../assets/icons/delete.svg";
import TimeIcon from "../assets/icons/time.svg";
import { getDateDifferenceFromNow } from "../utils";
import { useAvatar } from "../hooks/useAvatar";
import { useAuth } from "../hooks/useAuth";
import { usePost } from "../hooks/usePost";
import { actions } from "../actions";
import useAxios from "../hooks/useAxios";
const PostHeader = ({ post }) => {
  const { avatarUrl } = useAvatar(post);
  const { auth } = useAuth();
  const { dispatch } = usePost();
  const { api } = useAxios();
  const [showAction, setShowAction] = useState(false);
  const isMe = post?.author?.id === auth?.user?.id;

  const handlePostDelete = async (e) => {
    dispatch({ type: actions.post.DATA_FETCHING });
    try {
      const response = await api.delete(
        `${import.meta.env.VITE_SERVER_BASE_URL}/posts/${post.id}`
      );
      if (response.status === 200) {
        dispatch({ type: actions.post.POST_DELETED, data: post.id });
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <header className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img
            className="max-w-10 max-h-10 rounded-full lg:max-h-[58px] lg:max-w-[58px]"
            src={avatarUrl}
            alt="avatar"
          />
          <div>
            <h6 className="text-lg lg:text-xl">{post?.author?.name}</h6>
            <div className="flex items-center gap-1.5">
              <img src={TimeIcon} alt="time" />
              <span className="text-sm text-gray-400 lg:text-base">
                {`${getDateDifferenceFromNow(post?.createAt)} ago`}
              </span>
            </div>
          </div>
        </div>

        <div className="relative">
          {isMe && (
            <button onClick={() => setShowAction(!showAction)}>
              <img src={ThreeDotIcon} alt="3dots of Action" />
            </button>
          )}
          {showAction && (
            <div className="action-modal-container">
              <button className="action-menu-item hover:text-lwsGreen">
                <img src={EditIcon} alt="Edit" />
                Edit
              </button>
              <button
                className="action-menu-item hover:text-red-500"
                onClick={handlePostDelete}
              >
                <img src={DeleteIcon} alt="Delete" />
                Delete
              </button>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default PostHeader;
