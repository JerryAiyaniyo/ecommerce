import './App.css';
import {React, useState} from 'react';
import Welcome from './views/welcome/Welcome';
import NavigationWeb from './Routes/NavigationWeb';
import GetToken from './functions/GetToken';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./components/context/CartContext";



function App() {

  return (
    <CartProvider>

   <NavigationWeb/>
    </CartProvider>
  );
}

export default App;