import { configureStore } from "@reduxjs/toolkit";
import userSlice from './Users';

export const store =configureStore(
  {
    reducer:{
      users:userSlice,
    },
  }
)