import { Routes, Route } from 'react-router-dom';
import React, { useState, createRef } from "react";
import './App.css';

import { Homepage } from './pages/homePage';
import { Layout } from './components/layout';
import { Sotr } from './pages/sotr';
import { Instr } from './pages/instr';
import { Dok } from './pages/dok';
import { Krab } from './pages/krab';
import { PrR } from './pages/prR';
import { View } from './pages/view';
import { AuthForm } from './pages/authForm';


function App() {
  const ref = React.createRef();
  <letRef ref={ref}></letRef>
  return (
    <>
      <Routes>
      
        <Route path='/' element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path='sotr' element={<Sotr />} />
          <Route path='instr' element={<Instr />} />
          <Route path='dok' element={<Dok />} />
          <Route path='krab' element={<Krab />} />
          <Route path='prR' element={<PrR />} />
          <Route path='view' element={<View />} />
          <Route path='auth' element={<AuthForm/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;