import {useState, useEffect, useRef,useContext} from 'react';
import CartContext from "../components/context/CartContext";
import '../container/Cards/card.scss'

function DisplayData(props) {
    const { AddItemToCart } = useContext(CartContext);

  return (
    <div className="container">
            {props.data.map((productItems, i) => {
                return (
                <div key={i} className="card">
                            <div className="row-img">
                                <img src={productItems.images[1].sizes[3].url} className="card-img-top" alt="..." />
                            </div>

                            <div className="card-body">
                                <h5 className="card-title">{productItems.description}</h5>
                                <p className="card-text1">1 ud.</p>
                                <button onClick={() => AddItemToCart(productItems)}>Add to cart</button>                                
                            </div>
                        </div>

                    
                )
            })}
    </div>
  )
} 

export default DisplayData;