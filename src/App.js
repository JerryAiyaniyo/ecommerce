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
          {/* Categorías */}
          <Route path="/oil" element={<GetToken scope={"product.compact"} category="oil" />} />  
          <Route path="/water" element={<GetToken scope={"product.compact"} category="water" />} />  
          <Route path="/snacks" element={<GetToken scope={"product.compact"} category="snacks" />} />  
          <Route path="/rice" element={<GetToken scope={"product.compact"} category="rice" />} />  
          <Route path="/candy" element={<GetToken scope={"product.compact"} category="candy" />} />  
          <Route path="/baby" element={<GetToken scope={"product.compact"} category="baby" />} />  
          <Route path="/wine" element={<GetToken scope={"product.compact"} category="wine" />} />  
          <Route path="/coffee" element={<GetToken scope={"product.compact"} category="coffee" />} />  
          <Route path="/meat" element={<GetToken scope={"product.compact"} category="meat" />} />  
          <Route path="/cereals" element={<GetToken scope={"product.compact"} category="cereals" />} />  
          <Route path="/cheese" element={<GetToken scope={"product.compact"} category="cheese" />} />  
          <Route path="/frozen" element={<GetToken scope={"product.compact"} category="frozen" />} />  
          <Route path="/soup" element={<GetToken scope={"product.compact"} category="soup" />} />  
          <Route path="/shampoo" element={<GetToken scope={"product.compact"} category="shampoo" />} />  
          <Route path="/face" element={<GetToken scope={"product.compact"} category="face" />} />  
          <Route path="/pharmacy" element={<GetToken scope={"product.compact"} category="pharmacy" />} />  
          <Route path="/parapharmacy" element={<GetToken scope={"product.compact"} category="parapharmacy" />} />  
          <Route path="/fruits" element={<GetToken scope={"product.compact"} category="fruits" />} />  
          <Route path="/milk" element={<GetToken scope={"product.compact"} category="milk" />} />  
          <Route path="/cleaning" element={<GetToken scope={"product.compact"} category="cleaning" />} />  
          <Route path="/makeup" element={<GetToken scope={"product.compact"} category="makeup" />} />  
          <Route path="/fish" element={<GetToken scope={"product.compact"} category="fish" />} />  
          <Route path="/pets" element={<GetToken scope={"product.compact"} category="pets" />} />  
          <Route path="/cake" element={<GetToken scope={"product.compact"} category="cake" />} />  
          <Route path="/pizza" element={<GetToken scope={"product.compact"} category="pizza" />} />  
          <Route path="/dessert" element={<GetToken scope={"product.compact"} category="dessert" />} />  
          <Route path="/juice" element={<GetToken scope={"product.compact"} category="juice" />} />  
        </Routes>
    </BrowserRouter>
  );
}

export default App;