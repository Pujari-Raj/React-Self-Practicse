import { useSelector } from "react-redux";
import { selectAllPosts } from "./postSlice";

const PostLists = () => {
    // const posts = useSelector(state=> state.posts)
    const posts = useSelector(selectAllPosts)

    const renderedPosts = posts.map(post => (
        <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.desc.substring(0, 100)}</p>
        </article>
    ))

    return(
        <section>
            <h2>Posts</h2>
            {renderedPosts}
        </section>
    )
}

export default PostLists