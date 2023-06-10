import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { totalPrice } from "../../redux/action";
import { Link } from "react-router-dom";
import SubTotal from "../../components/sub-total";
import { deleteUsers } from "../../redux/action";
export const Checkout = () => {
  const { basket, total, count } = useSelector((state) => state.data);
  let dispatch = useDispatch();
  const numbers = basket.map((item) => parseFloat(item.price));

  function getSum(total, num) {
    return total + num;
  }
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (count > 0) {
      const countTotal = numbers.reduce(getSum, 0) * count;
      dispatch(totalPrice(countTotal));
    } else if (count < total) {
      const countTotal = numbers / count;
      dispatch(totalPrice(countTotal));
    } else {
      dispatch(totalPrice(numbers.reduce(getSum, 0)));
    }
  }, [basket, count]);

  const removeProduct = (id) => {
    dispatch(deleteUsers(id));
  };

  const [CART, setCART] = useState([]);

  useEffect(() => {
    setCART(basket);
  }, [basket]);

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
      {CART && CART?.length > 0 ? (
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
                {CART?.length > 0 &&
                  CART?.map((cartItem, cartindex) => (
                    <tbody>
                      <tr className="pt-30" key={cartItem.key}>
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
                                CART &&
                                CART.map((item, index) => {
                                    return cartindex === index
                                      ? {
                                          ...item,
                                          quantity:
                                            item.quantity > 0
                                              ? item.quantity - 1
                                              : 0,
                                        }
                                      : item;
                                  });
                                setCART(_CART);
                              }}
                            >
                              -
                            </button>
                            <span> {cartItem.quantity} </span>
                            <button
                              onClick={() => {
                                const _CART =
                                CART &&
                                CART.map((item, index) => {
                                    return cartindex === index
                                      ? { ...item, quantity: item.quantity + 1 }
                                      : item;
                                  });
                                setCART(_CART);
                              }}
                            >
                              +
                            </button>
                          </div>
                        </td>
                        <td className="" data-title="Price">
                          <h4 className="text-brand">
                            $ {cartItem.price * cartItem.quantity}{" "}
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
              <SubTotal />
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
