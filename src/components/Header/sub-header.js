import React from "react";
import { Link } from "react-router-dom";
export default function SubHeader() {
  const auth = localStorage.getItem("user");
  const authParse = JSON.parse(auth);
  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };
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
                  <i className="fa fa-heart" aria-hidden="true"></i>
                </li>
                <li className="onhover-dropdown mobile-account">
                  <i className="fa fa-user" aria-hidden="true"></i>
                  My Account {authParse && authParse.name}
                  <ul className="onhover-show-div">
                    {auth && auth.length ? (
                      <li onClick={handleLogout}>logout</li>
                    ) : (
                      <>
                        <li>
                          <Link to="/login">Login</Link>
                        </li>
                        <li>
                          <Link to="/register">register</Link>
                        </li>
                      </>
                    )}
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
