import { Admin,Resource,ListGuesser } from 'react-admin';
import React from 'react';
import './App.css';
import Dashboard from './Dashboard'
//import jsonServerProvider from 'ra-data-json-server';
import DataProvider from './dataProvider'


const App=()=>{
  return (
   <>
    <Admin  dataProvider={DataProvider}>
     <Resource name="users"list={ListGuesser} />
      </Admin>
      </>
     
  )
}

export default App;
