import {useState, useEffect, useRef} from 'react';

function DisplayData(props) {

  return (
    <div className="container">
        
        {
            props.data.map((productItems) => {
                return (
                    
                        <div className="card">
                            <div className="row-img">
                                <img src={productItems.images[1].sizes[3].url} className="card-img-top" alt="..." />
                            </div>

                            <div className="card-body">
                                <h5 className="card-title">{productItems.description}</h5>
                                <p className="card-text1">1 ud.</p>                                                                                   
                            </div>
                        </div>                   
                )
            })}
    </div>
  )
} 

export default DisplayData;