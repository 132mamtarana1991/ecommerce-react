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
      <Category />
      <About />
      {filteredCountries.slice(0, 5).map((item) => (
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
    </>
  );
};
