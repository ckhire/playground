// import { stringify } from "querystring";
import React, { useState, useEffect, FC } from "react";

interface CartItem {
  title: string;
  imageName: String;
  id: Number;
  category: stringify;
  price: number;
  addToCart: any;
}

const Cart = ({
  imageName,
  title,
  id,
  category,
  price,
  addToCart,
}: CartItem) => {
  return (
    <div
      className="card border-5 border-primary text-center"
      style={{ width: "400px", height: "500px", margin: "5px" }}
    >
      <img
        src={imageName}
        className="card-img-top"
        alt="..."
        height={250}
        width={350}
      />
      <div className="card-body">
        <h5 className="card-title"> {id}</h5>
        <h5 className="card-title">Title: {title}</h5>
        <h5 className="card-title">Category : {category}</h5>
        <h5 className="card-title">Price. {price}</h5>
        {/* <p className="card-text">{ele.description}</p> */}
        <button onClick={addToCart} className='btn btn-success'>
          Add Item
        </button>
      </div>
    </div>
  );
};

export default Cart;
