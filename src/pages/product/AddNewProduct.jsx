import Joi from "joi";
import { useValidator } from "react-joi";
import React from "react";
import { useNavigate } from "react-router-dom";

function AddNewProduct({ handleAddProduct }) {
  const navigate = useNavigate();

  const { state, setData, setExplicitField, validate } = useValidator({
    initialData: {
      name: null,
      price: null,
      amount: null,
    },
    schema: Joi.object({
      name: Joi.string().min(4).required(),
      price: Joi.number().min(0).required(),
      amount: Joi.number().min(1).required(),
    }),
    explicitCheck: {
      name: true,
      price: true,
      amount: true,
    },
    validationOptions: {
      abortEarly: true,
    },
  });

  const updateName = (e) => {
    setData((old) => ({
      ...old,
      name: e.target.value,
    }));
  };

  const updatePrice = (e) => {
    setData((old) => ({
      ...old,
      price: e.target.value,
    }));
  };

  const updateAmount = (e) => {
    setData((old) => ({
      ...old,
      amount: e.target.value,
    }));
  };

  const clickAdd = () => {
    validate();

    if (state.$all_source_errors.length === 0) {
      handleAddProduct({
        ...state.$data,
        price: +state.$data.price,
        amount: +state.$data.amount,
      });
      navigate("/product-list");
    }
  };

  return (
    <>
      <div>
        <br />
        <br />

        <label>Product name:</label>
        <br />
        <input
          type="text"
          onChange={updateName}
          onBlur={() => setExplicitField("name", true)}
        />
        <br />
        {state.$errors.name.map((data) => data.$message).join(",")}

        <br />
        <br />

        <label>Price:</label>
        <br />
        <input
          type="text"
          onChange={updatePrice}
          onBlur={() => setExplicitField("price", true)}
        />
        <br />
        {state.$errors.price.map((data) => data.$message).join(",")}

        <br />
        <br />

        <label>Amount:</label>
        <br />
        <input
          type="text"
          onChange={updateAmount}
          onBlur={() => setExplicitField("amount", true)}
        />
        <br />
        {state.$errors.amount.map((data) => data.$message).join(",")}

        <br />
        <br />

        <button className="btn btn-primary" onClick={clickAdd}>
          Add
        </button>
      </div>

      <br />
      <hr />
      <br />

      {/* <code>
        <pre>{JSON.stringify(state, null, 2)}</pre>
      </code> */}
    </>
  );
}

export default AddNewProduct;
