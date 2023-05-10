import React from "react";

export default function Banner() {
  return (
    <div
      class="home bg-size blur-up lazyloaded"
      style={{
        backgroundImage: `url("https://themes.pixelstrap.com/multikart/assets/images/vegetables/banner/16.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: " center center",
        display: "block",
      }}
    >
      <img
        src="https://themes.pixelstrap.com/multikart/assets/images/vegetables/banner/16.jpg"
        alt=""
        class="bg-img blur-up lazyload"
        style={{ display: "none" }}
      />
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="slider-contain product-detail">
              <div>
                <h4 class="animated fadeInUp" data-animation-in="fadeInUp">
                  moods of the earth
                </h4>
                <h1 class="animated fadeInUp">trending products</h1>
                <p class="animated d-lg-block d-none fadeInUp">
                  An ode to the Earth's artistry, watch how these marvels come
                  alive with diamonds, rubies, tanzanite, citrines, emeralds,
                  rubellite, sapphires
                </p>
                <a href="#" class="btn btn-solid animated rounded-3 fadeInUp">
                  shop now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
