import React, { useCallback, useMemo, useState } from "react";
import RoutesRoot from "../../pages";

function ProductsState() {
  const [productList, setProductList] = useState([
    { id: 1, name: "Pepsi", amount: 1, price: 12 },
    { id: 2, name: "Cola", amount: 1, price: 20 },
  ]);
  const handleIncrement = useCallback((product) => {
    setProductList((prev) =>
      prev
        .filter((item) => item.id !== product.id)
        .concat([{ ...product, amount: product.amount + 1 }])
    );
  }, []);

  const handleDecrement = useCallback((product) => {
    setProductList((prev) =>
      prev
        .filter((item) => item.id !== product.id)
        .concat([
          {
            ...product,
            amount: product.amount === 0 ? 0 : product.amount - 1,
          },
        ])
    );
  }, []);

  const handleDelete = useCallback((product) => {
    setProductList((prev) => prev.filter((item) => item.id !== product.id));
  }, []);

  const handleReset = useCallback(() => {
    setProductList((prev) => prev.map((item) => ({ ...item, amount: 0 })));
  }, []);

  const handleAddProduct = useCallback((newProduct) => {
    setProductList((prev) =>
      prev.concat([{ ...newProduct, id: productList.length + 1 }])
    );
  }, []);

  const totalAmount = useMemo(
    () =>
      productList
        ? productList?.reduce((acc, curr) => (acc += curr.amount), 0)
        : 0,
    [productList]
  );

  const totalPrice = useMemo(
    () =>
      productList
        ? productList.reduce(
            (acc, curr) => (acc += curr.amount * curr.price),
            0
          )
        : 0,
    [productList]
  );
  return (
    <RoutesRoot
      totalAmount={totalAmount}
      totalPrice={totalPrice}
      productList={productList}
      handleIncrement={handleIncrement}
      handleDecrement={handleDecrement}
      handleDelete={handleDelete}
      handleReset={handleReset}
      handleAddProduct={handleAddProduct}
    />
  );
}

export default ProductsState;
