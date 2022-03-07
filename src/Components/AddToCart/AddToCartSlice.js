import { createSlice } from '@reduxjs/toolkit';

export const AddToCartSlice = createSlice({
  name: 'AddToCartSlice',
  initialState: {
      products: [],
      cartTotal: 0,
  },
  
  reducers: {
    addToCart: (state, action) => {
        const { id, quantity } = action.payload

        const index = state.products.findIndex((item) => item.id === id);

        if (index < 0 ) {
            state.products.push(action.payload)
        } else {
            state.products[index].quantity += quantity;
        }

        // Tính toán tổng giá trị sản phẩm
        state.products = state.products.map((item) => {
            const product = {
                ...item,
                total: item.price * item.quantity
            }

            return product
        })
        
        if (state.products.length) {
            localStorage.setItem("productsInCart", JSON.stringify(state.products))
        }
    },

    removeFromCart: (state, action) => {
        state.products = state.products.filter(item => item.id !== action.payload)
        localStorage.setItem("productsInCart", JSON.stringify(state.products))
    },

    updateQuantity: (state, action) => {
        const {id, stt} = action.payload;
        const index = state.products.findIndex((item) => item.id === id)
        const item = state.products[index]

        if (stt === 'increase') {
            item.quantity += 1
        } else {
            item.quantity -= 1
        }

        item.total = item.price * item.quantity
        localStorage.setItem("productsInCart", JSON.stringify(state.products))

    },

    calculatorTotalProducts: (state, action) => {
        state.cartTotal = state.products.reduce((acmulator, item) => acmulator + item.total, 0)
        localStorage.setItem("totalInCart", JSON.stringify(state.cartTotal))
    },

    addFromLocal: (state, action) => {
        state.products = action.payload
    }
  },
})

const { reducer, actions } = AddToCartSlice;

export const { addToCart, removeFromCart, updateQuantity, calculatorTotalProducts, addFromLocal } = actions;
export default reducer;