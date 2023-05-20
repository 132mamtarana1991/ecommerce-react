import React, { useEffect } from "react";
import { useLocation } from 'react-router-dom'
export default function CategoriesProduct() {
 const location = useLocation();
 useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="container">
      <div className="archive-header">
        <div className="row align-items-center">
          <div className="col-xl-3">
            <h1 className="mb-15">{location?.pathname?.split('/')[2]}</h1>
            <div className="breadcrumb">
              <a href="index.html" rel="nofollow">
                <i className="fa fa-home mr-2"></i>Home
              </a>
              <span></span> Shop <span></span> {location?.pathname?.split('/')[2]}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
