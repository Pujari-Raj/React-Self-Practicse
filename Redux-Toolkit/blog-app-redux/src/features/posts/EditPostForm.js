import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectPostById, updatePost, deletePost } from "./postSlice";
import { selectAllUsers } from "../users/usersSlice";
import { useParams, useNavigate } from "react-router-dom";

// Component for editing posts
const EditPostForm = () => {
  const { postId } = useParams();
  const navigate = useNavigate();

  const post = useSelector((state) => selectPostById(state, Number(postId)));
  const users = useSelector(selectAllUsers);

  const [title, setTitle] = useState(post?.title);
  const [content, setContent] = useState(post?.body);
  const [userId, setUserId] = useState(post?.userId);

  // state for status of a post
  const [requestStatus, setRequestStatus] = useState("idle");

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);
  const onAuthorChanged = (e) => setUserId(e.target.value);
  const dispatch = useDispatch();

  if (!post) {
    return (
      <section>
        <h2>Post Not Found</h2>
      </section>
    );
  }

  // checking boolean condition whether all the fields are filled.
  const canSave =
    [title, content, userId].every(Boolean) && requestStatus === "idle";

  //function for adding/saving post
  const onsavePostClicked = () => {
    if (canSave) {
      try {
        setRequestStatus("pending");
        dispatch(
          updatePost({
            id: post.id,
            title,
            body: content,
            userId,
            reactions: post.reactions,
          })
        ).unwrap();

        setTitle("");
        setContent("");
        setUserId("");
        navigate(`/post/${postId}`);
      } catch (err) {
        console.error("Failed to save the post", err);
      } finally {
        setRequestStatus("idle");
      }
    }
  };

   //function for deleting post
   const ondeletePostClicked = () => { 
      try {
        setRequestStatus("pending");
        dispatch(
          deletePost({ id: postId })
        ).unwrap();

        setTitle("");
        setContent("");
        setUserId("");
        navigate('/');
      } catch (err) {
        console.error("Failed to delete the post", err);
      } finally {
        setRequestStatus("idle");
      }
  };

  const usersOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  return (
    <>
      <section>
        <h2>Edit This Post</h2>
        <form>
          <label htmlFor="postTitle">Post Title:</label>
          <input
            type="text"
            id="postTitle"
            name="postTitle"
            value={title}
            onChange={onTitleChanged}
          />
          <label htmlFor="postAuthor">Author:</label>
          <select id="postAuthor" value={userId} onChange={onAuthorChanged}>
            <option value=""></option>
            {usersOptions}
          </select>
          <label htmlFor="postContent">Content:</label>
          <textarea
            id="postContent"
            name="postContent"
            value={content}
            onChange={onContentChanged}
          />
          <button type="button" onClick={onsavePostClicked} disabled={!canSave}>
            Save Post
          </button>
          <button type="button" onClick={ondeletePostClicked}>
            Delete Post
          </button>
        </form>
      </section>
    </>
  );
};

export default EditPostForm;
