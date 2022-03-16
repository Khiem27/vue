import { createSlice } from "@reduxjs/toolkit";

export const AddToWishlistSlice = createSlice({
  name: "AddToWishlistSlice",
  initialState: {
    products: [],
  },

  reducers: {
    addToWishlist: (state, action) => {
      // Check tồn tại hay chưa
      const checkId = state.products.findIndex((item) => {
        return item.id === action.payload.id;
      });

      if (checkId < 0) {
        let newArr = action.payload
        newArr = {
            ...newArr,
            wishlist: "true"
        }
        state.products.push(newArr);
      } else {
        const removeProducts = state.products.filter((item) => {
          return item.id !== action.payload.id;
        });
        state.products = removeProducts;
      }

      // Lưu local
      localStorage.setItem("wishlistProduct", JSON.stringify(state.products));
    },

    addFromLocal: (state, action) => {
        state.products = action.payload
    },

    removeWishlist: (state, action) => {
        state.products = state.products.filter(item => item.id !== action.payload)
        localStorage.setItem("wishlistProduct", JSON.stringify(state.products))
    },
  },
});

const { reducer, actions } = AddToWishlistSlice;

export const { addToWishlist, addFromLocal, removeWishlist } = actions;
export default reducer;
