import React from 'react'

export default function SubHeader() {
  return (
    <>
        <div className="top-header top-header-theme">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="header-contact">
                <ul>
                  <li>Welcome to Our store Multikart</li>
                  <li>
                    <a href="become-vendor.html" className="text-white fw-bold">
                      Become a Vendor
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 text-end">
              <ul className="header-dropdown">
                <li className="mobile-wishlist pe-0">
                  <a href="#">
                    <i className="fa fa-heart" aria-hidden="true"></i>
                  </a>
                </li>
                <li className="onhover-dropdown mobile-account">
                  <i className="fa fa-user" aria-hidden="true"></i>
                  My Account
                  <ul className="onhover-show-div">
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
