import React, { useEffect } from "react";
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
            <div class="col-lg-3">
                <div class="product-card">
                    <div class="badge">Sale</div>
                    <div class="product-tumb">
                        <img src={img} alt="" />
                    </div>
                    <div class="product-details">
                        <span class="product-catagory">Snack</span>
                        <h4><Link to={`/single-product/${id}`} className="title">
                            {title}
                        </Link></h4>
                        <div class="product-bottom-details">
                            <div class="product-price"><small>$96.00</small>${price}</div>
                            <div class="product-links">
                                <a href=""><i class="fa fa-heart"></i></a>
                                <a onClick={addProduct}><i class="fa fa-shopping-cart"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};
export default Product;
