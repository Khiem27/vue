import { createSlice } from '@reduxjs/toolkit';

export const ShopNavSlice = createSlice({
  name: 'ShopNavSlice',
  initialState: {
      col2Nav: null,
      col3Nav: 3,
  },
  
  reducers: {
    // Khi click thì sẽ đổi giao diện
    changeCol3Nav: (state, action) => {
        state.col3Nav = action.payload
    },
  },
})

const { reducer, actions } = ShopNavSlice;

export const { changeCol3Nav } = actions;
export default reducer;