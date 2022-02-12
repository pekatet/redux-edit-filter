import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../Slices/listSlice'
import { change, initial } from '../Slices/formSlice'

function ServiceAdd() {
  const dispatch = useDispatch();
  const item = useSelector(store => store.formSlice)

  const handleChange = (event) => {
    const { name, value } = event.target;
    dispatch(change({...item, [name]: value}))
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addItem(item));
    dispatch(initial());
  };

  return (<form onSubmit={handleSubmit}>
    <input name='name' onChange={handleChange} value={item.name}/>
    <input name='price' onChange={handleChange} value={item.price}/>
    <button type='submit'>Save</button>
  </form>)
}

export default ServiceAdd;