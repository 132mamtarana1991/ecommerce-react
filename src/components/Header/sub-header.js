import React from 'react'

export default function SubHeader() {
  return (
    <>
        <div class="top-header top-header-theme">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <div class="header-contact">
                <ul>
                  <li>Welcome to Our store Multikart</li>
                  <li>
                    <a href="become-vendor.html" class="text-white fw-bold">
                      Become a Vendor
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-6 text-end">
              <ul class="header-dropdown">
                <li class="mobile-wishlist pe-0">
                  <a href="#">
                    <i class="fa fa-heart" aria-hidden="true"></i>
                  </a>
                </li>
                <li class="onhover-dropdown mobile-account">
                  <i class="fa fa-user" aria-hidden="true"></i>
                  My Account
                  <ul class="onhover-show-div">
                    <li>
                      <a href="login.html">Login</a>
                    </li>
                    <li>
                      <a href="register.html">register</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
