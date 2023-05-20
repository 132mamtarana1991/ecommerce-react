import React from 'react'
import './CheckoutProduct.css'
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { addBasket } from '../../redux/action';
const CheckoutProduct = ({ id, title, price, rating, detail, specification, img }) => {
    let dispatch = useDispatch();
    const removeProduct = () => {
        const item = {
            id, title, price, rating, detail, specification, img
        }
        dispatch(addBasket(item))
    }
    return (
        <div className='CheckoutProduct'>
            <div className='info'>
                <Link to={`/single-product/${id}`} className="title"><p>{title}</p></Link>
                <p className='price'>
                    <strong>$ </strong>
                    <strong>{price}</strong>
                </p>
                <div className='rating'>
                    {Array(rating).fill().map((_, ind) => <p key={ind}>⭐</p>)}
                </div>
            </div>
            <img src={img} />
            <button onClick={removeProduct}>
                <i>
                </i>
                Remove To Basket
            </button>

        </div>
    )
}
export default CheckoutProduct