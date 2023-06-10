import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  increaseCounter,
  decreaseCounter,
  deleteUsers,
} from "../../redux/action";

export default function CheckoutTable({ count, id, key, img, title, price }) {
  let dispatch = useDispatch();
  const increaseQuantity = (id) => {
    dispatch(increaseCounter(id));
  };

  const decreaseBtn = (id) => {
    dispatch(decreaseCounter(id));
  };
  const removeProduct = (id) => {
    dispatch(deleteUsers(id));
  };
  return (
    <tbody>
      <tr className="pt-30" key={key}>
        <td className="image product-thumbnail pt-40">
          <img src={img} alt="#" />
        </td>
        <td className="product-des product-name">
          <h6 className="">
            <Link
              className="product-name mb-10 text-heading"
              to={`/single-product/${id}`}
            >
              {title}
            </Link>
          </h6>
        </td>

        <td className="text-center detail-info" data-title="Stock">
          <div className="detail-extralink mr-15">
            <div className="detail-qty border radius">
              <h1
                alt=""
                width="100"
                height="80"
                onClick={() => decreaseBtn(id)}
                className="clickEffect"
              >
                -
              </h1>
              <span className="qty-val">{count}</span>
              <h1
                alt=""
                width="100"
                height="80"
                onClick={() => increaseQuantity(id)}
                className="clickEffect"
              >
                +
              </h1>
            </div>
          </div>
        </td>
        <td className="" data-title="Price">
          <h4 className="text-brand">$ {price} </h4>
        </td>
        <td className="action text-center" data-title="Remove">
          <button onClick={() => removeProduct(id)} className="text-body">
            <i className="fa fa-trash"></i>
          </button>
        </td>
      </tr>
    </tbody>
  );
}
