import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUsers } from "../../redux/action";

export const Checkout = () => {
  let dispatch = useDispatch();
  const auth = localStorage.getItem("user");
  const authParse = JSON.parse(auth);
  const [cartProduct, setAddProduct] = useState([]);
  const { basket } = useSelector((state) => state.data);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const removeProduct = (id) => {
    dispatch(deleteUsers(id));
  };


  useEffect(() => {
    setAddProduct(basket);
  }, [basket]);

 const totalPrice = cartProduct?.length > 0 && cartProduct?.map((item) => item.price * item.quantity).reduce((total, value) => total + value, 0)

  return (
    <>
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
      {cartProduct && cartProduct?.length > 0 ? (
        <div className="container">
          <div className="row table ">
            <div className="table-responsive shopping-summery col-lg-8">
              <table className="table table-wishlist">
                <thead>
                  <tr className="main-heading">
                    <th scope="col"></th>
                    <th scope="col">Title</th>
                    <th scope="col"></th>
                    <th scope="col">Price</th>
                    <th scope="col" className="end">
                      Remove
                    </th>
                  </tr>
                </thead>
                {cartProduct?.length > 0 &&
                  cartProduct?.map((cartItem, cartindex) => (
                    <tbody>
                      <tr className="pt-30" key={cartindex}>
                        <td className="image product-thumbnail pt-40">
                          <img src={cartItem.img} alt="#" />
                        </td>
                        <td className="product-des product-name">
                          <h6 className="">
                            <Link
                              className="product-name mb-10 text-heading"
                              to={`/single-product/${cartItem.id}`}
                            >
                              {cartItem.title}
                            </Link>
                          </h6>
                        </td>

                        <td
                          className="text-center detail-info"
                          data-title="Stock"
                        >
                          <div className="detail-extralink mr-15">
                            <button
                              onClick={() => {
                                const _CART =
                                  cartProduct &&
                                  cartProduct.map((item, index) => {
                                    return cartindex === index
                                      ? {
                                          ...item,
                                          quantity:
                                            item.quantity > 1
                                              ? item.quantity - 1
                                              : 1,
                                        }
                                      : item;
                                  });
                                setAddProduct(_CART);
                              }}
                            >
                              -
                            </button>
                            <span> {cartItem.quantity} </span>
                            <button
                              onClick={() => {
                                const _CART =
                                  cartProduct &&
                                  cartProduct.map((item, index) => {
                                    return cartindex === index
                                      ? { ...item, quantity: item.quantity + 1 }
                                      : item;
                                  });
                                setAddProduct(_CART);
                              }}
                            >
                              +
                            </button>
                          </div>
                        </td>
                        <td className="" data-title="Price">
                          <h4 className="text-brand">
                            $ {(cartItem.price * cartItem.quantity).toFixed(2)}
                          </h4>
                        </td>
                        <td className="action text-center" data-title="Remove">
                          <button
                            onClick={() => removeProduct(cartItem.id)}
                            className="text-body"
                          >
                            <i className="fa fa-trash"></i>
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  ))}
              </table>
            </div>
            <div className="col-lg-4">
              <div className="border p-md-4 cartProduct-totals ml-30">
                <div className="table-responsive">
                  <table className="table no-border">
                    <tbody>
                      <tr>
                        <td className="cart_total_label">
                          <h6 className="text-muted">Subtotal</h6>
                        </td>
                        <td className="cart_total_amount">
                          <h4 className="text-brand text-end">
                            ${" "}
                           {totalPrice.toFixed(2)}
                          </h4>
                        </td>
                      </tr>
                      <tr>
                        <td colSpan="2">
                          <div className="divider-2 mt-10 mb-10"></div>
                        </td>
                      </tr>
                      <tr>
                        <td className="cart_total_label">
                          <h6 className="text-muted">Shipping</h6>
                        </td>
                        <td className="cart_total_amount">
                          <h5 className="text-heading text-end">Free </h5>
                        </td>
                      </tr>{" "}
                      <tr>
                        <td className="cart_total_label">
                          <h6 className="text-muted">Estimate for</h6>
                        </td>
                        <td className="cart_total_amount">
                          <h5 className="text-heading text-end">
                            United Kingdom{" "}
                          </h5>
                        </td>
                      </tr>{" "}
                      <tr>
                        <td  colSpan="2">
                          <div className="divider-2 mt-10 mb-10"></div>
                        </td>
                      </tr>
                      <tr>
                        <td className="cart_total_label">
                          <h6 className="text-muted">Total</h6>
                        </td>
                        <td className="cart_total_amount">
                          <h4 className="text-brand text-end">
                            ${" "}
                           {totalPrice.toFixed(2)}
                          </h4>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {authParse && authParse?.name ? (
                  <Link to="#" className="btn mb-20 w-100">
                    Proceed To CheckOut<i className="fi-rs-sign-out ml-15"></i>
                  </Link>
                ) : (
                  <Link to="/login" className="btn mb-20 w-100">
                    Login First<i className="fi-rs-sign-out ml-15"></i>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="empty">
          <h1>Cart Empty</h1>
          <img src="https://cdn.dribbble.com/users/2059463/screenshots/4828452/polizas_gif.gif" />
        </div>
      )}
    </>
  );
};
