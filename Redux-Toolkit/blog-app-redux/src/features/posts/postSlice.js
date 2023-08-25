import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";
import { sub } from "date-fns";
import axios from "axios";

const POST_URL = "https://jsonplaceholder.typicode.com/posts";

// creating initialState and slice for posts (this are all the posts which will be shown on webpage)
const initialState = {
  posts: [],
  status: "idle", // 'idle' | 'loading' 'succeed' | 'failed'
  error: null,
};

// function for getting posts from API
export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  try {
    const response = await axios.get(POST_URL);
    return [...response.data];
  } catch (error) {
    console.log(error.message);
    return error.message;
  }
});

// function for adding new post into API (but data doesn't get really added into API)
export const addNewPost = createAsyncThunk(
  "posts/addNewPost",
  async (initialPost) => {
    try {
      const response = await axios.post(POST_URL, initialPost);
      return response.data;
    } catch (error) {
      return error.message;
    }
  }
);

// function for updating post into API (but data doesn't get really added into API)
export const updatePost = createAsyncThunk(
  "posts/updatePost",
  async (initialPost) => {
    const {id} = initialPost
    try {
      const response = await axios.put(`${POST_URL}/${id}`, initialPost);
      return response.data;
    } catch (error) {
      // return error.message;
      return initialPost ; // only for testing Redux!
    }
  }
);



const postSlice = createSlice({
  name: "posts",
  initialState,
  //
  reducers: {
    // functn for adding post , from form
    /* postAdded func automatically generate the action creator fucn with same name */
    /*The postAdded reducer function is defined as an object with two properties: reducer and prepare. */
    postAdded: {
      reducer(state, action) {
        /* state.push(...) seems like it's mutating a state but behind the scenes
                    it's not mutating the state , bcz immer-js creates the new state underneath 
                    and it only in createSlice functn , if you try writing the same code 
                    anywhere else in application it'll not work.
                */
        state.posts.push(action.payload);
      },
      /*The prepare property is a function that generates the action creator 
        function for the postAdded action. It takes the title, content, and userId 
        as arguments, and returns an object with a payload property. 
        The payload object contains properties such as id, title, content, date, 
        userId, and reactions, which are used to create a new post.
         */
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            date: new Date().toISOString(),
            userId,
            reactions: {
              thumbsUp: 0,
              wow: 0,
              heart: 0,
              rocket: 0,
              clap: 0,
            },
          },
        };
      },
    },
    // handles an action for adding a reaction to a post.
    reactionAdded(state, action) {
      const { postId, reaction } = action.payload;
      const existingPost = state.posts.find((post) => post.id === postId);
      if (existingPost) {
        existingPost.reactions[reaction]++;
      }
    },
  },
  /*The reducers property both creates an action creator function and responds to that action in the slice reducer. The extraReducers allows you to respond to an action in your slice reducer but does not create an action creator function.
   */
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "succeed";
        // Adding date & reactions
        let min = 1;
        const loadedPosts = action.payload.map((post) => {
          post.date = sub(new Date(), { minutes: min++ }).toISOString();
          post.reactions = {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            clap: 0,
          };
          return post;
        });

        // Add any fetched posts to array
        state.posts = state.posts.concat(loadedPosts);
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addNewPost.fulfilled, (state, action) => {
        action.payload.userId = Number(action.payload.userId);
        action.payload.date = new Date().toISOString();
        action.payload.reactions = {
          thumbsUp: 0,
          wow: 0,
          heart: 0,
          rocket: 0,
          clap: 0,
        };
        console.log(action.payload);
        state.posts.push(action.payload);
      })
      .addCase(updatePost.fulfilled,(state, action)=> {
        if (!action.payload?.id) {
          console.log("Couldn't find the post you want to edit");
          console.log(action.payload);
          return;
        }
        const {id} = action.payload;
        action.payload.date = new Date().toISOString();
        const posts = state.posts.filter(post => post.id !== id);
        state.posts = [...posts, action.payload]
      })
      .addCase(deletePost.fulfilled,(state, action)=> {
        if (!action.payload?.id) {
          console.log("Couldn't delete the post you want to delete");
          console.log(action.payload);
          return;
        }
        const {id} = action.payload;
        const posts = state.posts.filter(post => post.id !== id);
        state.posts = posts;  
      })
  },
});

// selectors
export const selectAllPosts = (state) => state.posts.posts;
export const getPostsStatus = (state) => state.posts.status;
export const getPostsError = (state) => state.posts.error;

// selector for selecting(single) post By Id
export const selectPostById = (state, postId) => 
  state.posts.posts.find(post => post.id === postId);

export const { postAdded, reactionAdded } = postSlice.actions;

export default postSlice.reducer;
