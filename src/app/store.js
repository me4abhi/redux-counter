import { configureStore } from "@reduxjs/toolkit";

// importing the reducer function from the 'counter slice' and add it to 'store'
import counterReducer from "../features/counter/counterSlice";

// creating a redux store
export default configureStore({
  reducer: {
    // [** : counterReducer] by defining a field inside the 'reducer' parameter, we tell the store to use thhis 'slice reducer' function to handle all updates to that state
    counter: counterReducer,
  },
});
