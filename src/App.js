import './App.css';
import Currency from './components/Currency';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Header from './components/Header';
import Archive from './components/Archive';

function App() {
  return (
    <div className="App">
      <Header/>
        <Routes>
        <Route path='/' element={<Currency/>} />
        <Route path='/archive' element={<Archive />}  />
      </Routes>
    </div>
  );
}

export default App;
