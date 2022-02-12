import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteItem } from '../Slices/listSlice'
import { change } from '../Slices/formSlice'

function ServiceList() {
  const dispatch = useDispatch();

  const items = useSelector(store => store.listSlice.items);
  const filter = useSelector(store => store.listSlice.filter);

  const handleRemove = id => {
    dispatch(deleteItem(id));
  }

  const handleEdit = (o) => {
    dispatch(change(o))
    console.log('items in list: ', items)
  }

  return (<ul>
    {items
      .filter(o => o.name.includes(filter))
      .map(o => <li className="item" key={o.id}>
      {o.name} {o.price}
    <button className="btn" onClick={() => handleEdit(o)}>
      <span className="material-icons" style={{fontSize: 1.25 +'rem'}}>edit</span>
    </button>
    <button className="btn" onClick={() => handleRemove(o.id)}>✕</button>
  </li>)}
  </ul>)
}

export default ServiceList;