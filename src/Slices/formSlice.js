import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  id: null,
  name: '',
  price: ''
};

const formSlice = createSlice({
  name: 'formSlice',
  initialState,
  reducers: {
    change(state, action) {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.price = action.payload.price;
    },
    initial(state, _action) {
      state.id = initialState.id;
      state.name = initialState.name;
      state.price = initialState.price;
    }
  }
});

export const {change, initial} = formSlice.actions;
export default formSlice.reducer;