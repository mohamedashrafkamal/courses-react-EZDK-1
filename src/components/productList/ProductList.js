import React, { useEffect } from "react";
import Product from "../product/Product";
import { Link } from "react-router-dom";

function ProductList({
  productList,
  handleIncrement,
  handleDecrement,
  handleDelete,
  handleReset,
}) {
  return (
    <div className="d-flex flex-column">
      <div>
        {productList.length !== 0 &&
          productList.filter((item) => item.amount !== 0).length > 0 && (
            <button
              className="btn btn-secondary m-2 align-self-start"
              onClick={handleReset}
            >
              Reset
            </button>
          )}
        <Link
          className="btn btn-secondary m-2 align-self-start"
          to={"/add-new-product"}
        >
          Add new product
        </Link>
      </div>
      {productList
        .sort((a, b) => a.id - b.id)
        .map((product, index) => (
          <Product
            key={index}
            product={product}
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
            handleDelete={handleDelete}
          />
        ))}
    </div>
  );
}

export default ProductList;
