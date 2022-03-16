import { createSlice } from "@reduxjs/toolkit";

export const AddToConpareSlice = createSlice({
  name: "AddToConpareSlice",
  initialState: {
    products: [],
  },

  reducers: {
    addToCompare: (state, action) => {
      // Check tồn tại hay chưa
      const checkId = state.products.findIndex((item) => {
        return item.id === action.payload.id;
      });

      if (checkId < 0) {
        let newArr = action.payload
        newArr = {
            ...newArr,
            compare: "true"
        }
        state.products.push(newArr);
      } else {
        const removeProducts = state.products.filter((item) => {
          return item.id !== action.payload.id;
        });
        state.products = removeProducts;
      }

      // Lưu local
      localStorage.setItem("compareProduct", JSON.stringify(state.products));
    },

    addFromLocal: (state, action) => {
        state.products = action.payload
    },

    removeCompare: (state, action) => {
        state.products = state.products.filter(item => item.id !== action.payload)
        localStorage.setItem("compareProduct", JSON.stringify(state.products))
    },
  },
});

const { reducer, actions } = AddToConpareSlice;

export const { addToCompare, addFromLocal, removeCompare } = actions;
export default reducer;
