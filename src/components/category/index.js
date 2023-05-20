import React from "react";
import {  Link } from "react-router-dom";
export default function Category({categories, image, id}) {
  return (

        <div className="col" key={id} >
          <div  style={{ width: "100%", display: "inline-block", background: '#f2fce4' }}>
            <a href="category-page(vegetables).html" >
              <div className={"category-boxes" + ' ' + 'bg' + id}>
                <div className="img-sec">
                  <img
                    src={image}
                    className="img-fluid"
                    alt=""
                  />
                </div>
               <Link  to={`/categories-product/${categories}`}> <h4>{categories}</h4></Link>
              </div>
            </a>
          </div>
        </div>
  );
}
