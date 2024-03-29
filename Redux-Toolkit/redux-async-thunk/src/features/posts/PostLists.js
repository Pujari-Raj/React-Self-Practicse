import { useSelector, useDispatch } from "react-redux";
import { selectAllPosts, fetchPosts, getPostsError, getPostsStatus } from "./postSlice";
import { useEffect } from "react";
import PostsExcerpt from "./PostsExcerpt";


const PostLists = () => {
    // const posts = useSelector(state=> state.posts)

    const dispatch = useDispatch()

    const posts = useSelector(selectAllPosts);
    const postsStatus = useSelector(getPostsStatus);
    const postsError = useSelector(getPostsError);

    useEffect(() => {
      if (postsStatus === 'idle') {
        dispatch(fetchPosts())
      }

    }, [postsStatus, dispatch])
    
    let content;
    
    if (postsStatus === 'loading') {
        content  = <p>"loading"</p>
    }
    else if (postsStatus === 'succeed') {
        const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a, b));
        content = orderedPosts.map(post => <PostsExcerpt key={post.id} post={post} />);
    }
    else if (postsStatus === 'failed') {
        content = <p>error</p>;
    }

    return(
        <section>
            <h2>Posts</h2>
            {content}
        </section>
    )
}

export default PostLists