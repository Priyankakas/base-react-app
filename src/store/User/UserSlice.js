import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  loggedInUser: null,
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLoggedInUser(state, action) {
      console.log("state", state, action);
      return {
        ...state,
        loggedInUser: action.payload,
      };
    },
  },
});

export const { setLoggedInUser } = userSlice.actions;
export default userSlice.reducer;
