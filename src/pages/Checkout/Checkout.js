import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { totalPrice, deleteUsers } from "../../redux/action";
import { increaseCounter, decreaseCounter } from "../../redux/action";
import { Link } from "react-router-dom";
import SubTotal from "../../components/sub-total";
export const Checkout = () => {
  const { basket, total, count } = useSelector((state) => state.data);
  console.log(basket,'basket')
  let dispatch = useDispatch();
  const numbers = basket.map((item) => item.price);
  const removeProduct = (id) => {
    dispatch(deleteUsers(id));
  };
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

  let increaseBtn = () => {
    dispatch(increaseCounter());
  };

  // handle click events
  let decreaseBtn = () => {
    dispatch(decreaseCounter());
  };
  console.log(total,'total')
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
      {basket && basket?.length > 0 ? 
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
              <tbody>
                {basket && basket?.length > 0 &&
                  basket?.map((item, ind) => (
                    <tr className="pt-30" key={ind}>
                      <td className="image product-thumbnail pt-40">
                        <img src={item.img} alt="#" />
                      </td>
                      <td className="product-des product-name">
                        <h6 className="">
                          <Link
                            className="product-name mb-10 text-heading"
                            to={`/single-product/${item.id}`}
                          >
                            {item.title}
                          </Link>
                        </h6>
                      </td>

                      <td
                        className="text-center detail-info"
                        data-title="Stock"
                      >
                        <div className="detail-extralink mr-15">
                          <div className="detail-qty border radius">
                            <h1
                              alt=""
                              width="100"
                              height="80"
                              onClick={() => decreaseBtn()}
                              className="clickEffect"
                            >
                              -
                            </h1>
                            <span className="qty-val">{count}</span>
                            <h1
                              alt=""
                              width="100"
                              height="80"
                              onClick={() => increaseBtn()}
                              className="clickEffect"
                            >
                              +
                            </h1>
                          </div>
                        </div>
                      </td>
                      <td className="" data-title="Price">
                        <h4 className="text-brand">$ {item.price} </h4>
                      </td>
                      <td className="action text-center" data-title="Remove">
                        <a
                          onClick={() => removeProduct(item.id)}
                          className="text-body"
                        >
                          <i className="fa fa-trash"></i>
                        </a>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
          <div className="col-lg-4">
          {total && total.length > 0 && <SubTotal total={total}/>} 
          </div>
        </div>
      </div>
      :
      <div className="empty">
      <h1>Cart Empty</h1>
      <img src="https://cdn.dribbble.com/users/2059463/screenshots/4828452/polizas_gif.gif"/>
      </div>
                  }
    </>
  );
};
