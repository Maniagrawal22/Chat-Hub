import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
   name:"userPostData",
   initialState:{
       value:[] 
    },
   reducers:{
       changeUserPostInfo : (state,action)=>{
           console.log("User POST Action :"+JSON.stringify(action.payload))
          var data = action.payload;
          state.value = data;
       }
   }
})
export const {changeUserPostInfo} = postSlice.actions;
export default postSlice.reducer;