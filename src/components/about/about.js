import React from 'react'

export default function About() {
  return (
    <section className="banner-goggles banner-offer ratio2_1">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-4">
              <a href="#">
                <div className="collection-banner p-right text-end">
                  <div
                    className="img-part bg-size blur-up lazyloaded"
                    style={{
                      backgroundImage:
                        "url(https://themes.pixelstrap.com/multikart/assets/images/vegetables/banner/17.jpg",
                      backgroundSize: "cover",
                      backgroundPosition: "center center",
                      display: "block",
                    }}
                  ></div>

                  <div className="contain-banner white-content banner-3">
                    <div>
                      <h4>Flat $10 Cashbook</h4>
                      <h2 className="mb-1">min txn: $250</h2>
                      <h6 className="mb-0">valid once per user</h6>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-4">
              <a href="#">
                <div className="collection-banner p-right text-end">
                  <div
                    className="img-part bg-size blur-up lazyloaded"
                    style={{
                      backgroundImage:
                        "url(https://themes.pixelstrap.com/multikart/assets/images/vegetables/banner/19.jpg",
                      backgroundSize: "cover",
                      backgroundPosition: "center center",
                      display: "block",
                    }}
                  ></div>
                  <div className="contain-banner banner-3">
                    <div>
                      <h4 className="text-dark">Flat $10 Cashbook</h4>
                      <h2 className="mb-1 text-dark">min txn: $250</h2>
                      <h6 className="text-dark mb-0">valid once per user</h6>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-4">
              <a href="#">
                <div className="collection-banner p-right text-end">
                  <div
                    className="img-part bg-size blur-up lazyloaded"
                    style={{
                      backgroundImage:
                        "url(https://themes.pixelstrap.com/multikart/assets/images/vegetables/banner/18.jpg",
                      backgroundSize: "cover",
                      backgroundPosition: "center center",
                      display: "block",
                    }}
                  ></div>
                  <div className="contain-banner white-content banner-3">
                    <div>
                      <h4>Flat $10 Cashbook</h4>
                      <h2 className="mb-1">min txn: $250</h2>
                      <h6 className="mb-0">valid once per user</h6>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
  )
}
