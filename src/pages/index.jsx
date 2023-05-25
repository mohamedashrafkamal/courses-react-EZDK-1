import React from "react";
import NavBar from "../components/navBar/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "../pages/about/About";
import Home from "../pages/home/Home";
import NotFound from "../pages/notFound/NotFound";
import ProductListPage from "../pages/productList/ProductListPage";
import ProductPage from "../pages/product/ProductPage";
import AddNewProduct from "./product/AddNewProduct";
function RouterRoot({
  totalAmount,
  totalPrice,
  productList,
  handleIncrement,
  handleDecrement,
  handleDelete,
  handleReset,
  handleAddProduct,
}) {
  return (
    <BrowserRouter>
      <NavBar totalAmount={totalAmount} totalPrice={totalPrice} />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<Home />} />
        <Route
          path="/product-list"
          element={
            <ProductListPage
              productList={productList}
              handleIncrement={handleIncrement}
              handleDecrement={handleDecrement}
              handleDelete={handleDelete}
              handleReset={handleReset}
            />
          }
        />
        <Route
          path="/product/:id"
          element={<ProductPage productList={productList} />}
        />
        <Route
          path="/add-new-product"
          element={<AddNewProduct handleAddProduct={handleAddProduct} />}
        />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouterRoot;
