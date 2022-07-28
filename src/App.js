import './App.css';
import {React, useState} from 'react';
import Welcome from './views/welcome/Welcome';
import Support from './views/support/Support';
import Home from '../src/views/home/Home';
import Cart from './views/cart/Cart';
import Card from './container/Cards/Card';
import Data from './container/Cards/Data';
import Navbar from './components/navbar/Navbar';
import NavigationWeb from './Routes/NavigationWeb';
import GetToken from './functions/GetToken';
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {

  return (
   <NavigationWeb/>
  );
}

export default App;