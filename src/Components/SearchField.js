import React, { useState } from 'react'
import { useDispatch} from 'react-redux'
import { setFilter } from '../Slices/listSlice'

function SearchField() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(setFilter(search));
  };

  return (<form onSubmit={handleSubmit}>
    <input name='search' onChange={e => setSearch(e.target.value)} value={search}/>
    <button onClick={_e => setSearch('')}>Clear</button>
    <button type='submit'>Search!</button>
  </form>)
}

export default SearchField;