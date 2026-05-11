import { configureStore } from "@reduxjs/toolkit";
import slice1Reducer from "./Slicer1"
// store map the reducer belongs to which slice
const stores = configureStore({
    reducer:{
      slice1: slice1Reducer,  //manish with increment(+1)
      slice2: slice1Reducer,  // shubham with incremmt(+2)
      
      //everyone in company see that this slice have this reducer
    }
})

export default stores;

// slice name: Reducer
