import { createSlice } from "@reduxjs/toolkit";
import { TOKEN } from "../const/Token";
import { product } from "../data/Products";

const dataSlice = createSlice({
  name: "dataBase",
  initialState: {
    data: [...product],
    selected: [],
    countSum: 0,
    isContainerActive: false,
    clientAccount: JSON.parse(localStorage.getItem(TOKEN)),
  },
  reducers: {
    dataBase: (state, action) => {
      state.selected.push(action.payload);
      state.countSum += Math.floor(action.payload.price * 0.0072);
      state.isContainerActive = true;
      console.log(action);
    },
    addProduct: (state, action) => {
      state.selected[
        state.selected.findIndex((item) => item.id === action.payload)
      ].quality += 1;
    },
    unAddProduct: (state, action) => {
      if (
        state.selected[
          state.selected.findIndex((item) => item.id === action.payload)
        ].quality > 1
      ) {
        state.selected[
          state.selected.findIndex((item) => item.id === action.payload)
        ].quality -= 1;
      }
    },
    animate: (state) => {
      state.isContainerActive = false;
    },

    createData: (state, action) => {
      if (!action.payload.editButton) {
        state.data.push({
          ...action.payload.values,
          id: state.data.length + 1,
          category: action.payload.category,
          img: action.payload.urlImg,
        });
      } else {
        let obj = state.data.find(
          (item) => item.id === action.payload.editButton.id
        );
        obj.price = action.payload.values.price;
        obj.title = action.payload.values.title;
        obj.text = action.payload.values.text;
        obj.img = action.payload.urlImg;
        obj.status = action.payload.values.status;
      }
    },
    deleteData: (state, action) => {
      console.log(state.selected);
      action.payload.forEach((element) => {
        state.data = state.data.filter((item) => item.id !== element.id);
      });
    },
    takeDataClient: (state) => {
      state.clientAccount = JSON.parse(localStorage.getItem(TOKEN));
    },
  },
});

export default dataSlice.reducer;
export const {
  dataBase,
  addProduct,
  animate,
  unAddProduct,
  createData,
  deleteData,
  takeDataClient,
} = dataSlice.actions;
