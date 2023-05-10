import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";
import { FaShoppingBag } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addBasket } from "../../redux/action";

const Product = ({ id, title, price, rating, detail, specification, img }) => {
  let dispatch = useDispatch();
  const addProduct = () => {
    const item = {
      id,
      title,
      price,
      rating,
      detail,
      specification,
      img,
    };
    dispatch(addBasket(item));
  };

  return (
    <>
      <div className="row">
        <div class="col-12">
          <div class="title8">
            <h2>Vegetables</h2>
            <p>atta, dal, rice and more</p>
          </div>
        </div>
        
      </div>
    <div className="product">
      <div className="info">
        <Link to={`/single-product/${id}`} className="title">
          <p>{title}</p>
        </Link>
        <p className="price">
          <strong>$ </strong>
          <strong>{price}</strong>
        </p>
      </div>
      <img src={img} />
      <button onClick={addProduct}>
        <i>
          <FaShoppingBag />
        </i>
        Add To Basket
      </button>
    </div>
    </>
  
  );
};
export default Product;
