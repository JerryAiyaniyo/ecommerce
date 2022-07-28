import React, { useState } from "react";
import "./cart.scss";
import { BiMinus } from "react-icons/bi";
import { GrAdd } from "react-icons/gr";


function Cart({ cartItem, addToCart, decreaseQty }) {
    const totalPrice = cartItem.reduce((price, item) => price + item.qty * item.price, 0)
    

    return (

      
        <div className="G-container">
          
            <div className="postal-code">
                <span className="cart"><b>Cart</b></span>
                <span>Envío a CP. 08035</span>
                <span><b>Productos agregados</b></span>
                
                
            </div>
                    
                    {cartItem.length === {} && <h3 className="no-items product">No hay productos en el carrito</h3>}
                        


                {cartItem.map((item) => {
                    const prodcutQty = item.price * item.qty
                    return (
                        <div className="container">
                            
                            <div className="cont-img">
                                <img src={item.cover} alt="" />
                            </div>
                            <div className="cont-text">
                                <h3 className="cont-text-1">{item.name}</h3>
                                <h3 className="cont-text-2"><b>{item.price} €*</b></h3>
                                <span>
                                    {item.price}.00 €
                                    * {item.qty}

                                </span>
                                <span>€ {prodcutQty}.00</span>
                            </div>
                            <div className="cont-btn">
                                <h5 className="cont-btn-text">{item.qty} ud.</h5>
                                <div className="cont-btn-click">
                                    <a href="#" className="btn-1"><BiMinus className="btn-del" onClick={() => decreaseQty(item)} /></a>
                                    <a href="#" className="btn-2"><GrAdd className="btn-add" onClick={() => addToCart(item)} /></a>
                                </div>
                            </div>

                        </div>
                    )
                })}
                <div className="cart-item-price">
                    <div className="cart-total product">
                        <h2>Resumen de Compra</h2>
                        <div className="d_flex">
                            <h4>Total</h4> 
                            <h3>€{totalPrice}</h3>
                        </div>
                    </div>
                </div>
            </div>
        

    )
}

export default Cart
