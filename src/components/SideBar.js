import React from "react";

export default function SideBar() {
  return (
    <div>
      <div className="sidebar-widget widget-category-2 mb-30">
        <h5 className="section-title style-1 mb-30">Category</h5>
        <ul>
          <li>
            <a href="shop-grid-right.html">
              {" "}
              <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/category-1.svg" alt="" />
              Milks &amp; Dairies
            </a>
            <span className="count">30</span>
          </li>
          <li>
            <a href="shop-grid-right.html">
              {" "}
              <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/category-2.svg" alt="" />
              Clothing
            </a>
            <span className="count">35</span>
          </li>
          <li>
            <a href="shop-grid-right.html">
              {" "}
              <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/category-3.svg" alt="" />
              Pet Foods{" "}
            </a>
            <span className="count">42</span>
          </li>
          <li>
            <a href="shop-grid-right.html">
              {" "}
              <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/category-4.svg" alt="" />
              Baking material
            </a>
            <span className="count">0</span>
          </li>
          <li>
            <a href="shop-grid-right.html">
              {" "}
              <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/category-5.svg" alt="" />
              Fresh Fruit
            </a>
            <span className="count">0</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
