import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  item: {},
  totalprice: 0,
  itemaddcout: 0,
  otheritem: {},
};

const pcbuildslice = createSlice({
  name: "pcbuild",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const product = action.payload;
      state.item[product.category] = product;
      state.totalprice += +product.price.split("$")[1];
      state.itemaddcout++;
    },
    remove: (state, action) => {
      const product = action.payload;
      delete state.item[product.category];
      state.totalprice -= product.price.split("$")[1];
      state.itemaddcout--;
    },
    otheritem: (state, action) => {
      const product = action.payload;
      state.otheritem[product.category] = product;
      state.totalprice += +product.price.split("$")[1];
    },
    removeotheritem: (state, action) => {
      const product = action.payload;
      delete state.otheritem[product.category];
      state.totalprice -= product.price.split("$")[1];
    },
  },
});
export const { addItem, remove, otheritem, removeotheritem } =
  pcbuildslice.actions;
export default pcbuildslice.reducer;
