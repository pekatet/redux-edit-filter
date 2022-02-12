import React, { Fragment } from 'react'
import ServiceAdd from './Components/ServiceAdd'
import ServiceList from './Components/ServiceList'
import SearchField from './Components/SearchField'


function App() {
  return (
    <Fragment>
      <SearchField/>
      <ServiceAdd/>
      <ServiceList/>
    </Fragment>
  );
}

export default App;
