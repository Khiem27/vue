import { createSlice } from '@reduxjs/toolkit';

export const ModalSlice = createSlice({
  name: 'ModalSlice',
  initialState: {
      value: null,
  },
  
  reducers: {
    showModal: (state, action) => {
        state.value = action.payload
    },
  },
})

const { reducer, actions } = ModalSlice;

export const { showModal } = actions;
export default reducer;