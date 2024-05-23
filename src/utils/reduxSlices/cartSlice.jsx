import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart1",
  initialState: {
    items: [],
  },
  reducers: {
    addItems: (state, action) => {
      state.items.push(action.payload);
    },
    removeItems: (state) => {
      state.items.pop();
    },
    emptyCart: (state) => {
      state.items.length = 0;
    },
  },
});


export const {addItems, removeItems, emptyCart} = cartSlice.actions;

export default cartSlice.reducer;
    