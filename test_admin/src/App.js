import { Admin,Resource,ListGuesser } from 'react-admin';
import React from 'react';
import './App.css';
import UserIcon from '@material-ui/icons/People';
import Dashboard from './dashboard'
//import jsonServerProvider from 'ra-data-json-server';
import dataProvider from './dataProvider'
//import simpleRestProvider from 'ra-data-simple-rest';


const App=()=>{
  return (
   <>
    <Admin dashboard={Dashboard} dataProvider={dataProvider}>
   
     <Resource name="users" list={ListGuesser} icon={UserIcon}/>
      </Admin>
      </>
     
  )
}

export default App;
