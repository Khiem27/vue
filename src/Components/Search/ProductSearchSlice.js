import { createSlice } from '@reduxjs/toolkit'

export const ProductSearchSlice = createSlice({
  name: 'Search value',
  initialState: {
    searchValue: null,
},
  reducers: {
    // Value khi search 
    getSearchInput: (state, action) => {
        state.searchValue = action.payload
    }
  },
})

const { reducer, actions } = ProductSearchSlice;

export const { getSearchInput } = actions;
export default reducer;