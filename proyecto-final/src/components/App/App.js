import {BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import './App.css';
import React from 'react';
import Main from "../Main/Main";
import Offers from '../Offers';
import Layout from '../Layout';

function App() {

  return (
    <>
    <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="/offers" element={<Offers />}/>
       
        </Route>
      </Routes>
      
  
    </>
  );
}

export default App;
