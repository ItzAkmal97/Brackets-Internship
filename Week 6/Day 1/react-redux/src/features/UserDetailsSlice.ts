import { createSlice } from "@reduxjs/toolkit";

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
    handleUserDate(state, action) {
     state.user.firstName = action.payload.firstName;
     state.user.lastName = action.payload.lastName;
     state.user.email = action.payload.email;
     state.user.password = action.payload.password;
     state.user.cpassword = action.payload.cpassword;
    },
  },
});

export const { handleUserDate } = userDetailsSlice.actions;

export default userDetailsSlice.reducer;
