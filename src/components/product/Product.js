import React, { memo } from "react";
import { Link } from "react-router-dom";

function Product({ product, handleIncrement, handleDecrement, handleDelete }) {
  return (
    <div className="border m-2 d-flex flex-row align-items-center">
      <div className="flex-grow-1">
        <span className="badge bg-secondary m-2">{`ID: ${product.id}`}</span>
        <span className="badge bg-primary m-2">{`Name: ${product.name}`}</span>
        <span
          className={`badge bg-${
            product.amount === 0 ? "secondary" : "warning"
          } m-2`}
        >{`Amount: ${product.amount}`}</span>
      </div>
      <div>
        <button
          className="btn btn-primary m-2"
          onClick={() => handleIncrement(product)}
        >
          +
        </button>
        <button
          className="btn btn-danger m-2"
          onClick={() => handleDecrement(product)}
          disabled={product.amount === 0}
        >
          -
        </button>
        <button
          className="btn btn-danger m-2"
          onClick={() => handleDelete(product)}
        >
          Delete
        </button>
        <Link to={`/product/${product.id}/`} className="btn btn-warning m-2">
          View
        </Link>
      </div>
    </div>
  );
}

export default memo(Product);
