import React from "react";
import "./Product.css";

const Product = (props) => {
  
  const { name, image, price, teacher } = props.course;

  return (
    <div className="card col mb-4 ">
      <img src={image} className="card-img-top" alt="..." />
      <div className="card-body text-center">
        <h4 className="card-title">{name}</h4>
        <p className="card-text">Mentor: {teacher}</p>
        <p className="card-text">Price: ${price}</p>
        <a href="#" className="btn btn-primary" onClick={() => props.enrollBtn(props.course)}>
          Enroll Now
        </a>
      </div>
    </div>
  );
};

export default Product;
