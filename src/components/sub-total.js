import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
export default function SubTotal() {
  const auth = localStorage.getItem("user");
  const authParse = JSON.parse(auth);
  const { total } = useSelector((state) => state.data);
  return (
    <div className="border p-md-4 cart-totals ml-30">
      <div className="table-responsive">
        <table className="table no-border">
          <tbody>
            <tr>
              <td className="cart_total_label">
                <h6 className="text-muted">Subtotal</h6>
              </td>
              <td className="cart_total_amount">
                <h4 className="text-brand text-end">
                  ${total && total.toFixed(2)}
                </h4>
              </td>
            </tr>
            <tr>
              <td colspan="2">
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
                <h5 className="text-heading text-end">United Kingdom </h5>
              </td>
            </tr>{" "}
            <tr>
              <td scope="col" colspan="2">
                <div className="divider-2 mt-10 mb-10"></div>
              </td>
            </tr>
            <tr>
              <td className="cart_total_label">
                <h6 className="text-muted">Total</h6>
              </td>
              <td className="cart_total_amount">
                <h4 className="text-brand text-end">
                  ${total && total.toFixed(2)}
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
  );
}
