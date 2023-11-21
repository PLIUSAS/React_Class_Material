import React, { useState, useEffect } from "react";
import axios from "axios";
import Product from "../Product/Product";

const endpoint = "http://localhost:3001/products";
export default function ProductList() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get(endpoint)
      .then(({ data }) => setProducts(data))
      .catch((err) => alert(err));
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Kaina</th>
            <th>Kiekis</th>
            <th>Aprasymas</th>
            <th>Galiojimo laikas</th>
            <th>Delete</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            return (
              <Product
                setProducts={setProducts}
                product={product}
                key={product.id}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
