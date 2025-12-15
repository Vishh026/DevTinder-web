import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: null
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.userInfo = action.payload.user;
    },
    removeUser: (state, action) => {
      action.payload = null;
    },
  },
});
export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
