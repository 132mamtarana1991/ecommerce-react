import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import Product from "../components/Product/Product";
export default function CategoriesProduct() {
  const location = useLocation();
  const { users } = useSelector((state) => ({
    users: state.data.users,
  }));

  const categoriesProduct = users?.filter((item) =>
    item?.categories.toLowerCase().includes(location?.pathname?.split("/")[2])
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container">
      <div className="archive-header">
        <div className="row align-items-center">
          <div className="col-xl-3">
            <h1 className="mb-15">{location?.pathname?.split("/")[2]}</h1>
            <div className="breadcrumb">
              <Link to="/" >
                <i className="fa fa-home mr-2"></i>Home
              </Link>
              <span></span> Shop <span></span>{" "}
              {location?.pathname?.split("/")[2]}
            </div>
          </div>
        </div>
      </div>
      <div className="row ProductsAll page-categories">
        {categoriesProduct.map((item) => (
          <Product
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            rating={item.rating}
            detail={item.detail}
            specification={item.specification}
            img={item.image}
          />
        ))}
      </div>
    </div>
  );
}
