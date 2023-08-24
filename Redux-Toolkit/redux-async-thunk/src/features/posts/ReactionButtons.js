import { useDispatch } from "react-redux";
import { reactionAdded } from "./postSlice";
import React from "react";

const reactionEmoji = {
  thumbsUp: "👍",
  wow: " 😵",
  heart: "❤️",
  rocket: "🚀",
  clap: "👏",
};

const ReactionButtons = ({ post }) => {
    // console.log('reactionButton clicked');
  const dispacth = useDispatch()

  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return(
        <button
        key={name}
        className="reactionButton"
        onClick={() => dispacth(reactionAdded({ postId: post.id, reaction: name }))}
        >
            {emoji} {post.reactions[name]}
        </button>
    )
  })

  return <div>{reactionButtons}</div>
}

export default ReactionButtons;
