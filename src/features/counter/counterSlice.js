//--1 Creating a slice requires a STRING 'name' to identify the slice, an 'initialState' value, and one or more 'reducer functions' to define how the state can be updated.

//--2.1 Redux requires that we write all state updates immutably, by making copies of data and updating the copies.
//--2.2 Redux-Toolkit allows us to write "mutating" logic in reducers. It doesn't actually mutate the state because it uses the Immer library, which detects changes to a 'draft state' and produces a brand new immutable state based off those changes

//--3 Action creators are the functions that encapsulate the process of creation of an action object. These functions simply return a plain Js object which is an action. It promotes writing clean code and helps to achieve reusability.

//--4.1 Reducers, as the name suggests, take in two things: previous state and an action. Then they reduce it (read it'return') to one entity: the new updated instance of state.
//--4.2 So reducers are basically pure JS functions which take in the previous state and an action and return the newly updated state.\

import { createSlice } from "@reduxjs/toolkit";

// 1
export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      // 2
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// 3
// action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// 4
export default counterSlice.reducer;
