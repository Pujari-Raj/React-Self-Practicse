import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

// creating initialState and slice for posts (this are all the posts which will be shown on webpage)
const initialState = [
    { id: '1', 
    title: 'Learning Redux ', content: "How you doing!!, Ahhh",
    date : sub(new Date(), { minutes: 10}).toISOString(),
},
    { id: '2', 
    title: 'Learning Redux  Toolkit', content: "Joey Doesn't share Food",
    date : sub(new Date(), { minutes: 5}).toISOString(),
},
]

const postSlice = createSlice({
    name: 'posts',
    initialState,
    // 
    reducers: {
        // functn for adding post , from form
        /* postAdded func automatically generate the action creator fucn with same name */
        postAdded: {
            reducer(state, action) {
                /* state.push(...) seems like it's mutating a state but behind the scenes
                    it's not mutating the state , bcz immer-js creates the new state underneath 
                    and it only in createSlice functn , if you try writing the same code 
                    anywhere else in application it'll not work.
                */
                state.push(action.payload);
            },
            //
            prepare(title, content, userId) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content,
                        date: new Date().toISOString(),
                        userId
                    }
                }
            }
        }
    }
})

export const selectAllPosts = (state) => state.posts;

export const { postAdded } = postSlice.actions;

export default postSlice.reducer;