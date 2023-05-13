import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { searchFood, deleteUsers } from "../../redux/action";
import {  Link } from "react-router-dom";
export default function NewHeader() {
  let dispatch = useDispatch();
  const { basket } = useSelector((state) => ({
    basket: state.data.basket,
  }));
  const removeProduct = (id) => {
    dispatch(deleteUsers(id))
  }

  return (
    <div className="header-fix">
     
    
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="main-menu">
              <div class="menu-left">
                <div class="brand-logo">
                  <a href="/">
                    <img
                      src="https://themes.pixelstrap.com/multikart/assets/images/icon/logo/37.png"
                      class="img-fluid blur-up lazyloaded"
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div>
                <form class="form_search" role="form">
                  <input
                    id="query search-autocomplete"
                    type="search"
                    placeholder="Search any Food..."
                    class="nav-search nav-search-field"
                    aria-expanded="true"
                    onChange={(e) =>dispatch(searchFood(e.target.value))}
                  />
                  <button
                    type="submit"
                    name="nav-submit-button"
                    class="btn-search"
                  >
                    <i class="ti-search"></i>
                  </button>
                </form>
              </div>
              <div class="menu-right pull-right">
                <div>
                  <div class="icon-nav">
                    <ul>
                      <li class="onhover-div mobile-search d-xl-none d-inline-block">
                        <div>
                          <img
                            src="../assets/images/icon/search.png"
                            onclick="openSearch()"
                            class="img-fluid blur-up lazyload"
                            alt=""
                          />
                          <i class="ti-search" onclick="openSearch()"></i>
                        </div>
                        <div id="search-overlay" class="search-overlay">
                          <div>
                            <span
                              class="closebtn"
                              onclick="closeSearch()"
                              title="Close Overlay"
                            >
                              ×
                            </span>
                            <div class="overlay-content">
                              <div class="container">
                                <div class="row">
                                  <div class="col-xl-12">
                                    <form>
                                      <div class="form-group">
                                        <input
                                          type="text"
                                          class="form-control"
                                          id="exampleInputPassword1"
                                          placeholder="Search a Product"
                                        />
                                      </div>
                                      <button
                                        type="submit"
                                        class="btn btn-primary"
                                      >
                                        <i class="fa fa-search"></i>
                                      </button>
                                    </form>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li class="onhover-div mobile-setting">
                        <div>
                          <img
                            src="https://themes.pixelstrap.com/multikart/assets/images/icon/setting.png"
                            class="img-fluid blur-up lazyloaded"
                            alt=""
                          />
                          <i class="ti-settings"></i>
                        </div>
                        <div class="show-div setting">
                          <h6>language</h6>
                          <ul>
                            <li>
                              <a href="#">english</a>
                            </li>
                            <li>
                              <a href="#">french</a>
                            </li>
                          </ul>
                          <h6>currency</h6>
                          <ul class="list-inline">
                            <li>
                              <a href="#">euro</a>
                            </li>
                            <li>
                              <a href="#">rupees</a>
                            </li>
                            <li>
                              <a href="#">pound</a>
                            </li>
                            <li>
                              <a href="#">doller</a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li class="onhover-div mobile-cart">
                      <Link to="/checkout" >
                          <img
                            src="https://themes.pixelstrap.com/multikart/assets/images/icon/cart.png"
                            class="img-fluid blur-up lazyloaded"
                            alt=""
                          />
                          <i class="ti-shopping-cart"></i>
                        </Link>
                        <span class="cart_qty_cls">{basket ? basket.length : 0}</span>
                        <ul class="show-div shopping-cart">
                          {basket?.length > 0 && basket.map((item)=>{
                            return(
                              <>
                              <li>
                              <div class="media">
                                <Link to={`/single-product/${item.id}`}>
                                  <img
                                    alt=""
                                    class="me-3"
                                    src={item.img}
                                  />
                                </Link>
                                <div class="media-body">
                                  <Link to={`/single-product/${item.id}`}>
                                    <h4>{item.title}</h4>
                                  </Link>
                                  <h4>
                                    <span>${item.price}</span>
                                  </h4>
                                </div>
                              </div>
                              <div class="close-circle">
                                <button  onClick={() => removeProduct(item.id)}>
                                  <i class="fa fa-times" aria-hidden="true"></i>
                                </button>
                              </div>
                            </li>
                            </>
                            )
                          })}
                         
                         
                          {/* <li>
                            <div class="total">
                              <h5>
                                subtotal : <span>$299.00</span>
                              </h5>
                            </div>
                          </li>
                          <li>
                            <div class="buttons">
                              <a href="cart.html" class="view-cart">
                                view cart
                              </a>{" "}
                              <Link to={`/single-product/${id}`}  class="checkout">
                                checkout
                              </Link>
                            </div>
                          </li> */}

                          
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

  

     

    
   
    </div>
  );
}
