import { createSlice } from "@reduxjs/toolkit";


const reactslicer = createSlice({
    name: "slice1",
    initialState: {count:0},
    reducers: {
        Increment: (state)=> {state.count = state.count+1},  //state ={count:0}
        Decrement: (state) => {state.count = state.count-1}, // no return in these reeducers
        Reset: (state) => {state.count=0}
    }
})


export const {Increment, Decrement, Reset} = reactslicer.actions //we are gettign theses reducers fromo reactslicer.actions
//reactslicer me .actions dene ki wajah se hi vo normal inc()...etc nahi rahe

export default reactslicer.reducer;//  its not reducers its reducer

