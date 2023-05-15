import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // list : ["toto", "titi"],
  list: [
    {
      title: "sauver le monde",
      isDone: false,
    },
    {
      title: "décrocher la lune",
      isDone: false,
    },
  ],
};

// configuration des actions du reducer
export const productSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {
    add: (state, action) => {
      state.list = [...state.list, action.payload];
    },
    newList: (state, action) => {
      state.list = action.payload;
    },
    deleteAll: (state) => {
      console.log("ici");
      state.list = [];
    },

    itIsDone: (state, action) => {
      state.list.map((elet) => {
        if (elet.title === action.payload) elet.isDone = !elet.isDone;
      });
    },
  },
});

export const {add, newList, deleteAll, itIsDone} = productSlice.actions;

export default productSlice.reducer; 