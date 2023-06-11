import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { allProduct, selectFood } from "../../redux/action";
import Product from "../../components/Product/Product";
import Banner from "../../components/banner";
import Category from "../../components/category";
import About from "../../components/about/about";
import TopProduct from "../../components/top-product";

export const Home = () => {
  let dispatch = useDispatch();
  const [numberOfitemsShown, setNumberOfItemsToShown] = useState(7);
  const [numberOfFoodShown, setNumberOfFoodShown] = useState(10);
  const [currentCategories, setCurrentCategories] = useState([]);
  const [foodName, setFoodName] = useState([]);

  const { users, search, selectfood } = useSelector((state) => ({
    users: state.data.users,
    search: state.data.search,
    selectfood: state.data.selectfood,
  }));

  useEffect(() => {
    dispatch(allProduct());
  }, []);


  const checkUniqueCat = users.map((item)=> item.categories.toLowerCase())
  const uniqueAges = [...new Set(checkUniqueCat)]
  
  const thirdArray = users.filter((elem) => { return uniqueAges.some((ele) => {
    return ele === elem.categories});
    });


  const result = [];
  const map = new Map();
  for (const item of users) {
    if (!map.has(item.categories.toLowerCase())) {
      map.set(item.categories.toLowerCase(), true);
      result.push({
        id: item._id,
        categories: item.categories,
        image: item.image,
        title: item.title,
      });
    }
  }

  useEffect(() => {
    setFoodName(
      users.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, users]);

  useEffect(() => {
    if (selectfood === "all" && result) {
      return setCurrentCategories(result.filter((item) => item?.categories));
    } else {
      return setCurrentCategories(
        result.filter((item) =>
          item?.categories?.toLowerCase().includes(selectfood?.toLowerCase())
        )
      );
    }
  }, [selectfood, users]);

  const changeFruit = (newFruit) => {
    dispatch(selectFood(newFruit));
  };

  const showMore = () => {
    if (numberOfitemsShown === currentCategories.length) {
      setNumberOfItemsToShown(7);
    } else if (numberOfitemsShown + 7 <= currentCategories.length) {
      setNumberOfItemsToShown(numberOfitemsShown + 7);
    } else {
      setNumberOfItemsToShown(currentCategories.length);
    }
  };


  const showMoreProduct = () => {
    if (numberOfFoodShown === foodName.length) {
      setNumberOfFoodShown(10);
    } else if (numberOfFoodShown + 5 <= foodName.length) {
      setNumberOfFoodShown(numberOfFoodShown + 5);
    } else {
      setNumberOfFoodShown(foodName.length);
    }
  };
  return (
    <>
      <Banner />
      <div className="container categories" style={{ padding: "50px 0px 0px" }}>
        <div className="flex">
          <div className="flex-haeding">
            <h3>Featured Categories</h3>
            <select
              onChange={(event) => changeFruit(event.target.value)}
              value={selectfood}
            >
              <option value={"all"}>{"All"}</option>
              {result.length &&
                result?.map((item, ind) => {
                  return (
                    <option key={ind} value={item.categories}>
                      {item.categories}
                    </option>
                  );
                })}
            </select>
          </div>
          {currentCategories.length < 6 ? (
            ""
          ) : (
            <button className="button button-add-to-cart" onClick={showMore}>
              {numberOfitemsShown === currentCategories.length
                ? "Less More"
                : "See More"}
            </button>
          )}
        </div>
        <div className="row col-set">
          {currentCategories?.slice(0, numberOfitemsShown)?.map((item, index) => (
            <Category
              key={index}
              id={item._id}
              image={item.image}
              categories={item.categories}
            />
          ))}
        </div>
      </div>
      <About />
      <div className="container ProductsAll">
        <h3 style={{ marginTop: "70px" }}>Popular Products</h3>

        <div className=" row">
          {foodName.slice(0, numberOfFoodShown).map((item) => (
            <Product
              key={item._id}
              id={item._id}
              title={item.title}
              price={item.price}
              rating={item.rating}
              detail={item.detail}
              img={item.image}
            />
          ))}
        </div>
        <button className="button button-add-to-cart" onClick={showMoreProduct}>
          {numberOfFoodShown === foodName.length ? "Less More" : "See More"}
        </button>
      </div>
      <div className="container" style={{ margin: "60px auto" }}>
        {" "}
        <img src="/images/bg1.png" style={{ width: "100%" }} />
      </div>
      <div className="container selling">
        <div className="row">
          <div className="col-xl-3 col-lg-4 col-md-6 mb-sm-5 mb-md-0">
            <h4 className="section-title style-1 mb-30 animated animated">
              Top Selling
            </h4>
            {users.slice(0, 4).map((item) => (
              <TopProduct
                key={item._id}
                id={item._id}
                title={item.title}
                price={item.price}
                img={item.image}
              />
            ))}
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 mb-sm-5 mb-md-0">
            <h4 className="section-title style-1 mb-30 animated animated">
              Trending Products
            </h4>
            {users.slice(4, 8).map((item) => (
              <TopProduct
                key={item._id}
                id={item._id}
                title={item.title}
                price={item.price}
                img={item.image}
              />
            ))}
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 mb-sm-5 mb-md-0">
            <h4 className="section-title style-1 mb-30 animated animated">
              Recently added
            </h4>
            {users.slice(8, 12).map((item) => (
              <TopProduct
                key={item._id}
                id={item._id}
                title={item.title}
                price={item.price}
                img={item.image}
              />
            ))}
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 mb-sm-5 mb-md-0">
            <h4 className="section-title style-1 mb-30 animated animated">
              Top Rated
            </h4>
            {users.slice(12, 16).map((item) => (
              <TopProduct
                key={item._id}
                id={item._id}
                title={item.title}
                price={item.price}
                img={item.image}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
