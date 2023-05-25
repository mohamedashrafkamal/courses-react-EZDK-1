import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ProductList from "../productList/ProductList";

function NavBar({ totalAmount, totalPrice }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid d-flex flex-row justify-content-between">
        <div>
          <button onClick={() => navigate("/home")} className="navbar-brand">
            Home
          </button>
          <button
            onClick={() => navigate("/product-list")}
            className="navbar-brand"
          >
            Product list
          </button>
          <button onClick={() => navigate("/about")} className="navbar-brand">
            About
          </button>
        </div>

        {!pathname.includes("about") && (
          <div
            className="collapse navbar-collapse d-flex flex-column align-self-end justify-content-end flex-shrink-1 w-auto"
            id="navbarSupportedContent"
          >
            <span className="text-start text-primary-emphasis">{`Total: ${totalAmount}`}</span>
            <span className="">{`Price: ${totalPrice}`}</span>
            {/* <button class="btn btn-outline-success" type="submit">
              Buy
            </button> */}
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
