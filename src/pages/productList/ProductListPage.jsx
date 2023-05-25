import React from "react";
import ProductList from "../../components/productList/ProductList";

function ProductListPage({
  productList,
  handleIncrement,
  handleDecrement,
  handleDelete,
  handleReset,
}) {
  return (
    <ProductList
      productList={productList}
      handleIncrement={handleIncrement}
      handleDecrement={handleDecrement}
      handleDelete={handleDelete}
      handleReset={handleReset}
    />
  );
}

export default ProductListPage;
