import React from "react";
import { useParams } from "react-router-dom";

function ProductPage({ productList }) {
  const { id } = useParams();

  const product = productList.find((product) => product.id === Number(id));

  if (!product) {
    return <h1>Product not found</h1>;
  }

  return (
    <ul>
      {Object.keys(product).map((key) => (
        <li key={key}>{`${key}: ${product[key]}`}</li>
      ))}
    </ul>
  );
}

export default ProductPage;
