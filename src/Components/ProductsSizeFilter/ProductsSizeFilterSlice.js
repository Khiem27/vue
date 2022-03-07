import { createSlice } from '@reduxjs/toolkit'

export const ProductsFilterSizeSlice = createSlice({
  name: 'Filter Size',
  initialState: {
    value: [],
  },
  reducers: {
    filterValueSize: (state, action) => {
        state.value = action.payload
    }
  },
})

const { reducer, actions } = ProductsFilterSizeSlice;

export const { filterValueSize } = actions;
export default reducer;