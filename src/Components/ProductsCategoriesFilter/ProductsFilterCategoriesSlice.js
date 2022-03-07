import { createSlice } from '@reduxjs/toolkit'

export const FilterCategoriesSlice = createSlice({
  name: 'Filter Category',
  initialState: {
    value: [],
  },
  reducers: {
    filterValue: (state, action) => {
        state.value = action.payload
    },
  },
})

const { reducer, actions } = FilterCategoriesSlice;

export const { filterValue } = actions;
export default reducer;