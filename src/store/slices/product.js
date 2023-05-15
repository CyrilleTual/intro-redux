import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // list : ["toto", "titi"],
  list: [
    {
      id: 0,
      title: "sauver le monde",
      isDone: false,
    },
    {
      id: 1,
      title: "décrocher la lune",
      isDone: false,
    },
    {
      id: 2,
      title: "Grimper l'Everest",
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

    // itIsDone: (state, action) => {
    //   state.list.map((elet) => {
    //     if (elet.title === action.payload) elet.isDone = !elet.isDone;
    //   });
    // },
    itIsDone: (state, action) => {
        // recherche de l'index de l'item 
        let myIndex = state.list.map((item) =>item.title).indexOf(action.payload) ;
        console.log (myIndex);
        state.list[myIndex].isDone = !state.list[myIndex].isDone
    },
  },
});

export const { add, newList, deleteAll, itIsDone } = productSlice.actions;

export default productSlice.reducer;
