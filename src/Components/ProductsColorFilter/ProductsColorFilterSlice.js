import { createSlice } from '@reduxjs/toolkit'

export const FilterColorSlice = createSlice({
  name: 'Filter Color',
  initialState: {
    value: [],
  },
  reducers: {
    filterValueColor: (state, action) => {
        state.value = action.payload
    },
  },
})

const { reducer, actions } = FilterColorSlice;

export const { filterValueColor } = actions;
export default reducer;