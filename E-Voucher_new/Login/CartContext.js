import React, {createContext, useState} from 'react';

import { getProduct } from './src/consts/tour.js';

export const CartContext = createContext();

export function CartProvider(props) {
  const [items, setItems] = useState([]);
  
  function addItemToCart(id) {
    setItems((prevItems) => {
      const item = prevItems.find((item) => (item.id == id));
      if(!item) {
          return [...prevItems, {
              item
          }];
      }
      else { 
          return prevItems.map((item) => {
            if(item.id == id) {
              item.qty++;
              item.price += item.price;
            }
            return item;
          });
      }
    });

  }

 
  
  function getItemsCount() {
      return items.reduce((sum, item) => (sum + item.qty), 0);
  }
  
  function getTotalPrice() {
      return items.reduce((sum, item) => sum + item.qty * item.price, 0);
  }
  function getTotal() {
    return items.reduce((sum, item) => (sum + item.qty*item.price), 0);
} 
  
 
  
  return (
    <CartContext.Provider 
      value={{items, setItems, getItemsCount, addItemToCart, getTotalPrice,getTotal}}>
      {props.children}
    </CartContext.Provider>
  );
}

