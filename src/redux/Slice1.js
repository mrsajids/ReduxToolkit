import { createSlice } from "@reduxjs/toolkit";
const initialState = []
const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        adduser(state,action){
            state.push({no:1, text: action.payload});
            console.log(action);
        },
        removeuser(state,action){
            state.pop();
        }
    }
})
export const { adduser,removeuser } = userSlice.actions
export default userSlice.reducer;