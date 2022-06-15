import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ClientInfo } from './components/ClientInfo';
import { CreateNewClient } from './components/CreateNewClient';

export const Pages = () => {
  return (
    <Routes> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' element={<ClientInfo />}></Route>
      <Route exact path='/newclient' element={<CreateNewClient />}></Route>
    </Routes>
  );
}