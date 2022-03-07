import { createSlice } from '@reduxjs/toolkit';

export const ShowingResultSlice = createSlice({
  name: 'Filter Color',
  initialState: {
    value: [],
  },
  reducers: {
    newArrFilter: (state, action) => {
        state.value = action.payload
    },
  },
})

const { reducer, actions } = ShowingResultSlice;

export const { newArrFilter } = actions;
export default reducer;