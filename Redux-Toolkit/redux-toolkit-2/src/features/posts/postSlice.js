import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

// creating initialState and slice for posts (this are all the posts which will be shown on webpage)
const initialState = [
    { id: '1', 
    title: 'Learning Redux ', content: "How you doing!!, Ahhh",
    date : sub(new Date(), { minutes: 10}).toISOString(),
    reactions: {
        thumbsUp: 0,
        wow: 0,
        heart: 0,
        rocket: 0,
        clap: 0
    }
},
    { id: '2', 
    title: 'Learning Redux  Toolkit', content: "Joey Doesn't share Food",
    date : sub(new Date(), { minutes: 5}).toISOString(),
    reactions: {
        thumbsUp: 0,
        wow: 0,
        heart: 0,
        rocket: 0,
        clap: 0
    }
},
]

const postSlice = createSlice({
    name: 'posts',
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
                state.push(action.payload);
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
                        }
                    }
                }
            }
        },
        // handles an action for adding a reaction to a post.
        reactionAdded(state, action) {
            const { postId, reaction} = action.payload
            const existingPost = state.find(post => post.id === postId);
            if (existingPost) {
                existingPost.reactions[reaction]++;
            }
        }
    }
})

export const selectAllPosts = (state) => state.posts;

export const { postAdded, reactionAdded } = postSlice.actions;

export default postSlice.reducer;