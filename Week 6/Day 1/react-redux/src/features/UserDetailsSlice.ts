import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UserDetails = {
  user: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    cpassword: string;
  };
};

const initialUserDetailsState: UserDetails = {
  user: {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    cpassword: "",
  },
};

const userDetailsSlice = createSlice({
  name: "userDetails",
  initialState: initialUserDetailsState,
  reducers: {
    handleUserData(state, action: PayloadAction<UserDetails["user"]>) {
      state.user = action.payload;
    },
  },
});

export const { handleUserData } = userDetailsSlice.actions;

export default userDetailsSlice.reducer;