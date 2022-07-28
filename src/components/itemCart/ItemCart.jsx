import React, { useContext } from "react";
import CartContext from "../context/CartContext";
import styles from "./itemCart.scss";

export const ItemCart = ({ item }) => {
  /* Traemos del context las funciones para agregar y sacar productos del carrito */
  const { DeleteItemToCart, AddItemToCart } = useContext(CartContext);

  /* Desestructuramos el item para sacar solo la id */
  const { id } = item;

  return (
    <div className={styles.cartItem}>
      <img src={item.images[1].sizes[3].url}  />
      <div className={styles.dataContainer}>
        <div className={styles.left}>
          <p>{item.description}</p>
          <div className={styles.buttons}>
            <button onClick={() => AddItemToCart(item)}>AGREGAR</button>
            <button onClick={() => DeleteItemToCart(id)}>SACAR</button>
          </div>
        </div>
        <div className={styles.right}>
          <div>{item.amount}</div>
          <p>Total: ${item.amount * item.price}</p>
        </div>
      </div>
    </div>
  );
};
