
import DisplayData from '../functions/DisplayData';
import {useState, useEffect} from 'react';



function GetProducts(props) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
   
    
    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
        fetch("https://api.kroger.com/v1/products?filter.term="+ props.query +"&filter.locationId=01400441", {
            headers: {
              Authorization: "Bearer " + props.tk,
              "Cache-Control": "no-cache"
            }
          }).then(res => res.json())
        .then(
          (result) => {
            setItems(result);
            setIsLoaded(true);
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            setError(error);
            setIsLoaded(true);
          }
        )
    }, [])
  
    
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return ( 
        <DisplayData data={items.data} />
      );
    }
  }

  export default GetProducts;