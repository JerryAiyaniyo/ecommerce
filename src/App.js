import './App.css';
import {React, useState} from 'react';
import Welcome from './views/welcome/Welcome';
import Support from './views/support/Support';
import Home from '../src/views/home/Home';
import Cart from './views/cart/Cart';
import Card from './container/Cards/Card';
import Data from './container/Cards/Data';
import Navbar from './components/navbar/Navbar';
import GetToken from './functions/GetToken';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  const { productItems } = Data

  const [cartItem, setCardItem] = useState([])
  
  const addToCart = (product) => {
    const productExit = cartItem.find((item) => item.id === product.id)

    if (productExit) {
      setCardItem(cartItem.map((item) =>
      (item.id === product.id ?
        { ...productExit, qty: productExit.qty + 1 } : item)))
    } else {
      setCardItem([...cartItem, { ...product, qty: 1 }])
    }
  }

  const decreaseQty = (product) => {
    const productExit = cartItem.find((item) => item.id === product.id)
    if (productExit.qty === 1) {
      setCardItem(cartItem.filter((item) => item.id !== product.id))
    } else {
      setCardItem(cartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty - 1 } : item)))
    }
  }

  return (
    
  
    
    <BrowserRouter>
    <Navbar/>
        <Routes>
          
          <Route path="/" element={<Welcome />}/> 
          <Route path="/home" element={<Home />}/>  
          <Route path="/support" element={<Support />}/>  
          <Route path="/card" element={<GetToken scope={"product.compact"}/>} />  
          <Route path="/cart" element={<Cart cartItem={cartItem} productItems={productItems} addToCart={addToCart} decreaseQty={decreaseQty}/>} />  
    
        </Routes>
    </BrowserRouter>
    

        
  );
}

export default App;