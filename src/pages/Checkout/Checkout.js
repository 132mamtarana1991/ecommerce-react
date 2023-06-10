import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { totalPrice } from "../../redux/action";
import { Link } from "react-router-dom";
import SubTotal from "../../components/sub-total";
import CheckoutTable from "./checkout-table";
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
      {basket && basket?.length > 0 ? (
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
                {basket &&
                  basket?.length > 0 &&
                  basket?.map((item) => (
                    <>
                      <CheckoutTable
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        price={item.price}
                        img={item.img}
                      />
                    </>
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
