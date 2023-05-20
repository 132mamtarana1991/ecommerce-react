import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addBasket } from "../../redux/action";

const Product = ({ id, title, price, rating, detail, specification, img }) => {
  let dispatch = useDispatch();
  const addProduct = () => {
    const item = {
      id,
      title,
      price,
      rating,
      detail,
      specification,
      img,
    };
    dispatch(addBasket(item));
  };
  return (
    <>
      <div className="col-lg-3">
        <div className="product-card">
          <div className="badge">Sale</div>
          <div className="product-tumb">
            <img src={img} alt="" />
          </div>
          <div className="product-details">
            <span className="product-catagory">Snack</span>
            <h4>
              <Link to={`/single-product/${id}`} className="title">
                {title}
              </Link>
            </h4>
            <div className="product-bottom-details">
              <div className="product-price">
                <small>$96.00</small>${price}
              </div>
              <div className="product-links">
                <a href="">
                  <i className="fa fa-heart"></i>
                </a>
                <a onClick={addProduct}>
                  <i className="fa fa-shopping-cart"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Product;
