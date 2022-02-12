import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid'

const initialState = {
  items: [
    {id: nanoid(), name: 'serv1', price: 10000},
    {id: nanoid(), name: 'serv2', price: 1000},
    {id: nanoid(), name: 'serv3', price: 5000},
    {id: nanoid(), name: 'serv4', price: 70000}
  ],
  filter: ''
}

const listSlice = createSlice({
  name: 'listSlice',
  initialState,
  reducers: {
    addItem(state, action){
      let newItem = {
        id: action.payload.id,
        name: action.payload.name,
        price: action.payload.price
      }
      console.log('new item: ', newItem)
      if(newItem.id == null){
        state.items.push({...newItem, id: nanoid()})
      }
      else{
        state.items = state.items.map(o => o.id !== newItem.id ? o : {...o, name:newItem.name, price:newItem.price});
        console.log('items: ', state.items)
      }
    },
    setFilter(state, action){
      state.filter = action.payload
    },
    deleteItem(state, action){
      state.items = state.items.filter(item => item.id !== action.payload)
    }
  }
})

export const { addItem, deleteItem, setFilter } = listSlice.actions;
export default listSlice.reducer;