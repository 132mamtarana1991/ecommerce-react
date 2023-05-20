import React from 'react'

export default function SubTotal({total}) {
  return (
    <div class="border p-md-4 cart-totals ml-30">
              <div class="table-responsive">
                <table class="table no-border">
                  <tbody>
                    <tr>
                      <td class="cart_total_label">
                        <h6 class="text-muted">Subtotal</h6>
                      </td>
                      <td class="cart_total_amount">
                        <h4 class="text-brand text-end">${total.toFixed(2)}</h4>
                      </td>
                    </tr>
                    <tr>
                      <td scope="col" colspan="2">
                        <div class="divider-2 mt-10 mb-10"></div>
                      </td>
                    </tr>
                    <tr>
                      <td class="cart_total_label">
                        <h6 class="text-muted">Shipping</h6>
                      </td>
                      <td class="cart_total_amount">
                        <h5 class="text-heading text-end">Free </h5>
                      </td>
                    </tr>{" "}
                    <tr>
                      <td class="cart_total_label">
                        <h6 class="text-muted">Estimate for</h6>
                      </td>
                      <td class="cart_total_amount">
                        <h5 class="text-heading text-end">United Kingdom </h5>
                      </td>
                    </tr>{" "}
                    <tr>
                      <td scope="col" colspan="2">
                        <div class="divider-2 mt-10 mb-10"></div>
                      </td>
                    </tr>
                    <tr>
                      <td class="cart_total_label">
                        <h6 class="text-muted">Total</h6>
                      </td>
                      <td class="cart_total_amount">
                        <h4 class="text-brand text-end">${total.toFixed(2)}</h4>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <a href="#" class="btn mb-20 w-100">
                Proceed To CheckOut<i class="fi-rs-sign-out ml-15"></i>
              </a>
            </div>
  )
}
