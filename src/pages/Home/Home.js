import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadUsers } from "../../redux/action";
import Product from "../../components/Product/Product";
import Banner from "../../components/banner";
import Category from "../../components/category";
import About from "../../components/about/about";

export const Home = () => {
  let dispatch = useDispatch();
  const { users, search } = useSelector((state) => ({
    users: state.data.users,
    search: state.data.search,
  }));
  useEffect(() => {
    dispatch(loadUsers());
  }, []);

  const [filteredCountries, setFilteredCountries] = useState([]);
  useEffect(() => {
    setFilteredCountries(
      users.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, users]);
  return (
    <>
      <Banner />
      <div className="container categories" style={{ padding: "50px 0px 0px" }}>
        <h3>Featured Categories</h3>
        <div className="row ">
          {filteredCountries.slice(0, 7).map((item) => (
            <Category
              key={item.id}
              image={item.image}
              id={item.id}
              categories={item.categories}
            />
          ))}
        </div>
      </div>
      <About />
      <div className="container">
        <h3 style={{ marginTop: '70px'}}>Popular Products</h3>
        <div className=" row">
          {filteredCountries.slice(10, 19).map((item) => (
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
      <div className="container" style={{ margin: '60px auto'}}> <img src="/images/bg1.png" style={{ width: '100%'}}/></div>
    </>
  );
};
