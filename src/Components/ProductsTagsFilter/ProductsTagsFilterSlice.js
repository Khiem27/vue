import { createSlice } from '@reduxjs/toolkit'

export const FilterTagsSlice = createSlice({
  name: 'Filter Tags',
  initialState: {
    value: [],
  },
  reducers: {
    filterValueTags: (state, action) => {
        state.value = action.payload
    },
  },
})

const { reducer, actions } = FilterTagsSlice;

export const { filterValueTags } = actions;
export default reducer;