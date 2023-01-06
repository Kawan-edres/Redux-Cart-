import { createSlice } from "@reduxjs/toolkit";
import { usersData } from "../fakeData";



const users=localStorage.getItem('users')!==null ?JSON.parse(localStorage.getItem("users")):usersData;
const initialState = { value: users };


const Users = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.value.push(action.payload);
      localStorage.setItem("users",JSON.stringify(state.value.map(item=>item)))
    },
    deleteUser: (state, action) => {
      state.value = state.value.filter((user) => user.id !== action.payload.id);
      localStorage.setItem("users",JSON.stringify(state.value.map(item=>item)))

    },
    updateUser: (state, action) => {
      state.value.map((user) => {
        if (user.id === action.payload.id) {
          user.name = action.payload.newName;
        }
      });
      localStorage.setItem("users",JSON.stringify(state.value.map(item=>item)))

    },
  },


});

export const { addUser, deleteUser, updateUser } = Users.actions;

export default Users.reducer;
