import React, { useEffect } from "react";
export default function Footer() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  function progressBarScroll() {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop,
        height = document.documentElement.scrollHeight - document.documentElement.clientHeight,
        scrolled = (winScroll / height) * 100;
    document.getElementById("progressBar").style.width = scrolled + "%";
  }
  
  window.onscroll = function () {
    progressBarScroll();
  };
  return (
    <>
    <div class="header">
  <div class="progress-container">
    <div class="progress-bar" id="progressBar"></div>
  </div>
</div>
      <section className="section-padding footer-mid">
        <div className="container pt-15 pb-20">
          <div className="row">
            <div className="col">
              <div className="widget-about font-md mb-md-3 mb-lg-3 mb-xl-0 wow animate__ animate__fadeInUp animated">
                <div className="logo mb-30">
                  <a href="index.html" className="mb-15">
                    <img
                      src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/logo.svg"
                      alt="logo"
                    />
                  </a>
                  <p className="font-lg text-heading">
                    Awesome grocery store website template
                  </p>
                </div>
                <ul className="contact-infor">
                  <li>
                    <img
                      src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-location.svg"
                      alt=""
                    />
                    <strong>Address: </strong>{" "}
                    <span>
                      5171 W Campbell Ave undefined Kent, Utah 53127 United
                      States
                    </span>
                  </li>
                  <li>
                    <img
                      src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-contact.svg"
                      alt=""
                    />
                    <strong>Call Us:</strong>
                    <span>(+91) - 540-025-124553</span>
                  </li>
                  <li>
                    <img
                      src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-email-2.svg"
                      alt=""
                    />
                    <strong>Email:</strong>
                    <span>sale@Nest.com</span>
                  </li>
                  <li>
                    <img
                      src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-clock.svg"
                      alt=""
                    />
                    <strong>Hours:</strong>
                    <span>10:00 - 18:00, Mon - Sat</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-link-widget col wow animate__ animate__fadeInUp animated">
              <h4 className="widget-title">Company</h4>
              <ul className="footer-list mb-sm-5 mb-md-0">
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Delivery Information</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms &amp; Conditions</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
                <li>
                  <a href="#">Support Center</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
              </ul>
            </div>
            <div className="footer-link-widget col wow animate__ animate__fadeInUp animated">
              <h4 className="widget-title">Account</h4>
              <ul className="footer-list mb-sm-5 mb-md-0">
                <li>
                  <a href="#">Sign In</a>
                </li>
                <li>
                  <a href="#">View Cart</a>
                </li>
                <li>
                  <a href="#">My Wishlist</a>
                </li>
                <li>
                  <a href="#">Track My Order</a>
                </li>
                <li>
                  <a href="#">Help Ticket</a>
                </li>
                <li>
                  <a href="#">Shipping Details</a>
                </li>
                <li>
                  <a href="#">Compare products</a>
                </li>
              </ul>
            </div>
            <div className="footer-link-widget col wow animate__ animate__fadeInUp animated">
              <h4 className="widget-title">Corporate</h4>
              <ul className="footer-list mb-sm-5 mb-md-0">
                <li>
                  <a href="#">Become a Vendor</a>
                </li>
                <li>
                  <a href="#">Affiliate Program</a>
                </li>
                <li>
                  <a href="#">Farm Business</a>
                </li>
                <li>
                  <a href="#">Farm Careers</a>
                </li>
                <li>
                  <a href="#">Our Suppliers</a>
                </li>
                <li>
                  <a href="#">Accessibility</a>
                </li>
                <li>
                  <a href="#">Promotions</a>
                </li>
              </ul>
            </div>
            <div className="footer-link-widget col wow animate__ animate__fadeInUp animated">
              <h4 className="widget-title">Popular</h4>
              <ul className="footer-list mb-sm-5 mb-md-0">
                <li>
                  <a href="#">Milk &amp; Flavoured Milk</a>
                </li>
                <li>
                  <a href="#">Butter and Margarine</a>
                </li>
                <li>
                  <a href="#">Eggs Substitutes</a>
                </li>
                <li>
                  <a href="#">Marmalades</a>
                </li>
                <li>
                  <a href="#">Sour Cream and Dips</a>
                </li>
                <li>
                  <a href="#">Tea &amp; Kombucha</a>
                </li>
                <li>
                  <a href="#">Cheese</a>
                </li>
              </ul>
            </div>
            <div className="footer-link-widget widget-install-app col wow animate__ animate__fadeInUp animated">
              <h4 className="widget-title">Install App</h4>
              <p className="">From App Store or Google Play</p>
              <div className="download-app">
                <a href="#" className="hover-up mb-sm-2 mb-lg-0">
                  <img
                    className="active"
                    src="assets/imgs/theme/app-store.jpg"
                    alt=""
                  />
                </a>
                <a href="#" className="hover-up mb-sm-2">
                  <img
                    src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/google-play.jpg"
                    alt=""
                  />
                </a>
              </div>
              <p className="mb-20">Secured Payment Gateways</p>
              <img
                className=""
                src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/payment-method.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <marquee className="marquee" direction="left" height="100px">
        This is a sample scrolling text that has scrolls texts to left.
      </marquee>
    </>
  );
}
