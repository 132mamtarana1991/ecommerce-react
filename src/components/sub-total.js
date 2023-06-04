import React from 'react'

export default function SubTotal({total}) {
  return (
    <div ClassName="border p-md-4 cart-totals ml-30">
              <div ClassName="table-responsive">
                <table ClassName="table no-border">
                  <tbody>
                    <tr>
                      <td ClassName="cart_total_label">
                        <h6 ClassName="text-muted">Subtotal</h6>
                      </td>
                      <td ClassName="cart_total_amount">
                        <h4 ClassName="text-brand text-end">${total.toFixed(2)}</h4>
                      </td>
                    </tr>
                    <tr>
                      <td  colspan="2">
                        <div ClassName="divider-2 mt-10 mb-10"></div>
                      </td>
                    </tr>
                    <tr>
                      <td ClassName="cart_total_label">
                        <h6 ClassName="text-muted">Shipping</h6>
                      </td>
                      <td ClassName="cart_total_amount">
                        <h5 ClassName="text-heading text-end">Free </h5>
                      </td>
                    </tr>{" "}
                    <tr>
                      <td ClassName="cart_total_label">
                        <h6 ClassName="text-muted">Estimate for</h6>
                      </td>
                      <td ClassName="cart_total_amount">
                        <h5 ClassName="text-heading text-end">United Kingdom </h5>
                      </td>
                    </tr>{" "}
                    <tr>
                      <td scope="col" colspan="2">
                        <div ClassName="divider-2 mt-10 mb-10"></div>
                      </td>
                    </tr>
                    <tr>
                      <td ClassName="cart_total_label">
                        <h6 ClassName="text-muted">Total</h6>
                      </td>
                      <td ClassName="cart_total_amount">
                        <h4 ClassName="text-brand text-end">${total.toFixed(2)}</h4>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <a href="#" ClassName="btn mb-20 w-100">
                Proceed To CheckOut<i ClassName="fi-rs-sign-out ml-15"></i>
              </a>
            </div>
  )
}
