import { createSlice } from '@reduxjs/toolkit'

export const FilterBrandSlice = createSlice({
  name: 'Filter Brand',
  initialState: {
    value: [],
  },
  reducers: {
    filterValueBrand: (state, action) => {
        state.value = action.payload
    },
  },
})

const { reducer, actions } = FilterBrandSlice;

export const { filterValueBrand } = actions;
export default reducer;