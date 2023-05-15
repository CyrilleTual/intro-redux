import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // list : ["toto", "titi"],
  list: [
    {
      title: "toto",
      isDone: false,
    },
    {
      title: "titi",
      isDone: false,
    },
  ],
};

// configuration des actions du reducer
export const productSlice = createSlice ({
    name: "product",
    initialState: initialState , 
    reducers : {
        add: (state, action) => {
            state.list = [ ...state.list, action.payload]
        },
        newList: (state, action) =>{
            state.list = action.payload;
        },
        deleteAll: (state) => {
            console.log('ici');
            state.list = []},
    },
});

export const {add, newList, deleteAll} = productSlice.actions;

export default productSlice.reducer; 