import React from "react";
import { Link } from "react-router-dom";
export default function TopProduct({title, price, img, id}) {
  return (
      <>
        <div className="product-list-small animated animated">
          <article className="row align-items-center hover-up">
            <figure className="col-md-4 mb-0">
            <Link to={`/single-product/${id}`} className="title">
                <img
                  src={img}
                  alt={title}
                />
              </Link>
            </figure>
            <div className="col-md-8 mb-0">
              <h6>
              <Link to={`/single-product/${id}`} className="title">
                {title}
              </Link>
              </h6>
              <div className="product-price">
                <span>$32.85</span>
                <span className="old-price">${price}</span>
              </div>
            </div>
          </article>
        </div>
      </>
  );
}
