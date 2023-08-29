import { useSelector } from "react-redux";
import { selectPostIds } from "./postsSlice";
import PostsExcerpt from "./PostsExcerpt";
import { useGetPostsQuery } from "./postsSlice";

const PostsList = () => {
  const { data, isLoading, isSuccess, isError, error } = useGetPostsQuery();

  const orderedPostIds = useSelector(selectPostIds);

  let content;
  if (isLoading) {
    content = <p>"Loading..."</p>;
  } else if (isSuccess) {
    // content = orderedPostIds.map((postId) => (
    //   <PostsExcerpt key={postId} postId={postId} />
    // ));
    content = Array.isArray(data) ? (
      data.map((post) => <PostsExcerpt key={post.id} postId={post.id} />)
    ) : (
      <p>No posts available.</p>
    );
  } else if (isError) {
    content = <p>{error.message}</p>;
  }

  return <section>{content}</section>;
};
export default PostsList;
