
import React from "react";
import "./Product.css";

function Product(props) {

  return (
    <div className="card">

      <img src={props.image} alt={props.name} />

      <h2>{props.name}</h2>

      <p>{props.description}</p>

      <h3>{props.price}</h3>

      <button>ADD TO CART</button>

    </div>
  );
}

export default Product;
