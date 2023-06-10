import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addBasket, getSingleProduct } from "../../redux/action";
import SideBar from "../../components/SideBar";
import {  Link } from "react-router-dom";
import Review from "../../components/review";
export const SingleProduct = () => {
  const { user } = useSelector((state) => ({
    user: state.data.user,
  }));

  let { id } = useParams();
  let dispatch = useDispatch();
  let singleProductSelect = user;

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getSingleProduct(id));
  }, [id]);

  const addProduct = () => {
    const item = {
      id: singleProductSelect._id,
      img: singleProductSelect.image,
      price: singleProductSelect.price,
      detail: singleProductSelect.detail,
      rating: singleProductSelect.rating,
      title: singleProductSelect.title,
    };
    dispatch(addBasket({ ...item, quantity: 1 }));
  };
  return (
    <div className="singleProductpage">
      <div className="page-header breadcrumb-wrap">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/" rel="nofollow">
              <i className="fa fa-home mr-1"></i>Home
            </Link>
            <span></span> Seeds of Change Organic
          </div>
        </div>
      </div>
      <div className="singleProductSelect container">
        <div className="row ">
          <div className="col-lg-4 img-single">
            <img src={singleProductSelect.image} />
          </div>
          <div className="col-lg-5 body-single">
            <span className="stock-status out-stock"> Sale Off </span>
            <h2>{singleProductSelect.title}</h2>
            <div className="product-detail-rating ">
              <div className="product-rate-cover text-end">
                <div className="product-rate d-inline-block">
                  <div className="product-rating" style={{ width: "90%" }}>
                    {Array(singleProductSelect.rating)
                      .fill()
                      .map((_, ind) => (
                        <p key={ind}>⭐</p>
                      ))}
                  </div>
                </div>
                <span className="font-small ml-1 text-muted"> (32 reviews)</span>
              </div>
            </div>
            <div className="product-price primary-color float-left">
              <span className="current-price text-brand">
                ${singleProductSelect.price}
              </span>
              <span>
                <span className="save-price font-md color3 ml-15">26% Off</span>
                <span className="old-price font-md ml-15">$52</span>
              </span>
            </div>
            <div className="clear"></div>

            <div className="short-desc mb-30">
              <p className="font-lg">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aliquam rem officia, corrupti reiciendis minima nisi modi,
                quasi, odio minus dolore impedit fuga eum eligendi.
              </p>
            </div>
            <button
              type="submit"
              onClick={addProduct}
              className="button button-add-to-cart"
            >
              <i className="fa fa-shopping-cart"></i>Add to cart
            </button>

            <div className="attr-detail attr-size mb-30">
              <strong className="mr-10">Size / Weight: </strong>
              <ul className="list-filter size-filter font-small">
                <li className="">
                  <a href="#">50g</a>
                </li>
                <li className="">
                  <a href="#">60g</a>
                </li>
                <li className="">
                  <a href="#">80g</a>
                </li>
                <li className="active">
                  <a href="#">100g</a>
                </li>
                <li>
                  <a href="#">150g</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3">
            <SideBar />
          </div>
        </div>
      </div>
      <Review/>
    </div>
  );
};
