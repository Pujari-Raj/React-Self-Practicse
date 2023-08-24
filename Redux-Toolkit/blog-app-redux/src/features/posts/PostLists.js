import { useSelector, useDispatch } from "react-redux";
import { selectAllPosts, fetchPosts, getPostsError, getPostsStatus } from "./postSlice";
import { useEffect } from "react";
import PostsExcerpt from "./PostsExcerpt";


const PostLists = () => {
    // const posts = useSelector(state=> state.posts)

    const dispatch = useDispatch()

    //state for getting all posts
    const posts = useSelector(selectAllPosts);
    
    //state for getting postsStatus
    const postsStatus = useSelector(getPostsStatus);
    //state for getting postsError   
    const error = useSelector(getPostsError);

    useEffect(() => {
        // if postsStatus is idle then fetch all the posts
      if (postsStatus === 'idle') {
        dispatch(fetchPosts())
      }

    }, [postsStatus, dispatch])
    
    let content;
    
    // if postsStatus == loading , then show loading
    if (postsStatus === 'loading') {
        content  = <p>"loading"</p>
    }
        // if postsStatus == succeed , then show all posts
    else if (postsStatus === 'succeed') {
        const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a, b));
        content = orderedPosts.map(post => <PostsExcerpt key={post.id} post={post} />);
    }
        // if postsStatus == failed , then show error
    else if (postsStatus === 'failed') {
        content = <p>{error}</p>;
    }

    return(
        <section>
            <h2>Recent Posts</h2>
            {content}
        </section>
    )
}

export default PostLists