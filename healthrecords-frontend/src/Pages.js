import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ClientInfo } from './components/ClientInfo';
import { CreateNewClient } from './components/CreateNewClient';
import { EditClientInfo } from './components/EditClientInfo';

export const Pages = () => {
  return (
    <Routes> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' element={<ClientInfo />}></Route>
      <Route exact path='/newclient' element={<CreateNewClient />}></Route>
      <Route exact path='/edit/:id' element={<EditClientInfo />}></Route>
    </Routes>
  );
}