import React from "react";
import { createPortal } from "react-dom";
import ShoppingCartProduct from "../ShoppingCartProduct/ShoppingCartProduct";

export default function Modal({ isOpen, shoppingCart = [], setShoppingCart }) {
  if (!isOpen) {
    return null;
  }

  const total = shoppingCart.reduce((acc, pr) => acc + pr.price * pr.amount, 0);

  return createPortal(
    <div>
      {shoppingCart.map((product) => (
        <ShoppingCartProduct
          product={product}
          key={`shoppingCartItem${product.id}`}
          setShoppingCart={setShoppingCart}
        />
      ))}
      <p>Total: {total}</p>
    </div>,
    document.body
  );
}
