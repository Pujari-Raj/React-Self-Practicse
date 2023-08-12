import { createSlice } from "@reduxjs/toolkit";

const initialState =[
    {id:'0' , name: 'Joey Tribanni'},
    {id:'1' , name: 'Chandler Bing'},    
    {id:'2' , name: 'Rachel Green'},
]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers:{}
})

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer