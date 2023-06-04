import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { searchFood, totalPrice, deleteUsers } from "../../redux/action";
import {  Link } from "react-router-dom";
export default function NewHeader() {
  let dispatch = useDispatch();
  const { basket, total } = useSelector((state) => ({
    basket: state.data.basket,
    total: state.data.total,
  }));
  console.log(basket,'basket')
  const removeProduct = (id) => {
    dispatch(deleteUsers(id))
  }
  function getSum(total, num) {
    return total + Math.round(num);
  }

  const numbers = basket.map((item) => item.price);
  return (
    <div className="header-fix">
     
    
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="main-menu">
              <div className="menu-left">
                <div className="brand-logo">
                  <Link to="/">
                    <img
                      src="https://themes.pixelstrap.com/multikart/assets/images/icon/logo/37.png"
                      className="img-fluid blur-up lazyloaded"
                      alt=""
                    />
                  </Link>
                </div>
              </div>
              <div>
                <form className="form_search" role="form">
                  <input
                    id="query search-autocomplete"
                    type="search"
                    placeholder="Search any Food..."
                    className="nav-search nav-search-field"
                    aria-expanded="true"
                    onChange={(e) =>dispatch(searchFood(e.target.value))}
                  />
                  <button
                    type="submit"
                    name="nav-submit-button"
                    className="btn-search"
                  >
                    <i className="ti-search"></i>
                  </button>
                </form>
              </div>
              <div className="menu-right pull-right">
                <div>
                  <div className="icon-nav">
                    <ul>
                      <li className="onhover-div mobile-search d-xl-none d-inline-block">
                        <div>
                          <img
                            src="../assets/images/icon/search.png"
                            className="img-fluid blur-up lazyload"
                            alt=""
                          />
                          <i className="ti-search"></i>
                        </div>
                        <div id="search-overlay" className="search-overlay">
                          <div>
                            <span
                              className="closebtn"
                              title="Close Overlay"
                            >
                              ×
                            </span>
                            <div className="overlay-content">
                              <div className="container">
                                <div className="row">
                                  <div className="col-xl-12">
                                    <form>
                                      <div className="form-group">
                                        <input
                                          type="text"
                                          className="form-control"
                                          id="exampleInputPassword1"
                                          placeholder="Search a Product"
                                        />
                                      </div>
                                      <button
                                        type="submit"
                                        className="btn btn-primary"
                                      >
                                        <i className="fa fa-search"></i>
                                      </button>
                                    </form>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="onhover-div mobile-setting">
                        <div>
                          <img
                            src="https://themes.pixelstrap.com/multikart/assets/images/icon/setting.png"
                            className="img-fluid blur-up lazyloaded"
                            alt=""
                          />
                          <i className="ti-settings"></i>
                        </div>
                        <div className="show-div setting">
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
                          <ul className="list-inline">
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
                      <li className="onhover-div mobile-cart">
                      <Link to="/checkout" >
                          <img
                            src="https://themes.pixelstrap.com/multikart/assets/images/icon/cart.png"
                            className="img-fluid blur-up lazyloaded"
                            alt=""
                          />
                          <i className="ti-shopping-cart"></i>
                        </Link>
                        <span className="cart_qty_cls">{basket ? basket.length : 0}</span>
                        <ul className="show-div shopping-cart">
                          {basket?.length > 0 && basket.map((item, index)=>{
                            return(
                          
                              <li key={index}>
                              <div className="media">
                                <Link to={`/single-product/${item.id}`}>
                                  <img
                                    alt=""
                                    className="me-3"
                                    src={item.img}
                                  />
                                </Link>
                                <div className="media-body">
                                  <Link to={`/single-product/${item.id}`}>
                                    <h4>{item.title}</h4>
                                  </Link>
                                  <h4>
                                    <span>${item.price}</span>
                                  </h4>
                                </div>
                              </div>
                              <div className="close-circle">
                                <button  onClick={() => removeProduct(item.id)}>
                                  <i className="fa fa-times" aria-hidden="true"></i>
                                </button>
                              </div>
                            </li>
                            )
                          })}
                         
                         
                          <li>
                            <div className="total">
                              <h5>
                                subtotal : {numbers.length > 0 ? <span>${numbers.reduce(getSum, 0)}.00</span> :  '0.00'}
                              </h5>
                            </div>
                          </li>
                          <li>
                            <div className="buttons">
                              <Link to="/checkout" className="view-cart">
                                view cart
                              </Link>{" "}
                             
                            </div>
                          </li>

                          
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
