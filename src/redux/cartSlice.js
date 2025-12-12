import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        Additem: (state, action)=> {
            state.push(action.payload)
        }
    }
})

export const {AddItem} = cartSlice.actions
export default cartSlice.reducer