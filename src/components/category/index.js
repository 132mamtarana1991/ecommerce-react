import React from "react";
import { Link } from "react-router-dom";
export default function Category({categories, image, id, index}) {
  return (
        <div className="col-lg-2" key={id} >
          <div  style={{ width: "100%", display: "inline-block", background: '#f2fce4' }}>
            <Link to={`/categories-product/${categories}`}>
              <div className={"category-boxes" + ' ' + 'bg' + index}>
                <div className="img-sec">
                  <img
                    src={image}
                    className="img-fluid"
                    alt=""
                  />
                </div>
                  <h4>{categories}</h4>
              </div>
            </Link>
          </div>
        </div>
  );
}
