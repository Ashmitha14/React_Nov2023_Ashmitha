import './App.css';
import React from 'react';
import MedicalShopHome from './component/MedicalShopHome';
import Login from './component/Login';
import Registration from './component/Registration';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './component/Cart';
import OTCMedicinePage from './component/OTCMedicinePage';
import Prescription from './component/Prescription';
import AboutUs from './component/AboutUs';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MedicalShopHome />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<MedicalShopHome />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/otc" element={<OTCMedicinePage />} />
          <Route path="/prs" element={<Prescription/>} />
          <Route path="/about" element={<AboutUs/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
