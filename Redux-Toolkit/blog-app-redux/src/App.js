import AddPostForm from './features/posts/AddPostForm';
import PostLists from "./features/posts/PostLists";
import SinglePostPage from './features/posts/SinglePostPage';
import Layout from './components/Layout';
import { Route, Routes } from 'react-router-dom';
import EditPostForm from './features/posts/EditPostForm';

function App() {
  return (
    <Routes>  
      <Route path='/'  element={<Layout/>}>

      {/* It has the index prop, which means it will be rendered when the URL matches the exact path of its parent route. In this case, when the root path ('/') is matched, the <PostLists/> component will be rendered.
    */}
        <Route index element={<PostLists/>} />

        <Route path='post'>
          <Route index element={<AddPostForm/>} />
          <Route path=':postId' element={<SinglePostPage/>} />
          <Route path='edit/:postId' element={<EditPostForm/>} />
        </Route>
      </Route>

    </Routes>
  );
}

export default App;
