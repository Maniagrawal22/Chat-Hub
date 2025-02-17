import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name:"chatData",
  initialState:{
    value:{name:undefined,image:null,token:undefined,isLoginStatus:false}
  },
  reducers:{
    changeUserInfo : (state,action)=>{
      console.log("Action : "+JSON.stringify(action.payload))
      var data = action.payload;
      state.value = data;
    }
  }
})
export const {changeUserInfo} = slice.actions;
export default slice.reducer;