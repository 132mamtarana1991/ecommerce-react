import React from 'react'
import { useParams } from "react-router-dom";
import { useDispatch,useSelector } from 'react-redux';
import { FaShoppingBag } from 'react-icons/fa';
import { addBasket } from '../../redux/action';

export const SingleProduct = () => {
  const { user } = useSelector((state) => ({
    user: state.data.users,
  }));
  let { id } = useParams()
  let dispatch = useDispatch();
  let singleProductSelect = user
  const addProduct = () => {
    const item = {
      id: singleProductSelect.id,
      image: singleProductSelect.image,
      price: singleProductSelect.price,
      detail: singleProductSelect.detail,
      rating: singleProductSelect.rating,
      specification: singleProductSelect.specification,
    }
    dispatch(addBasket(item))
  }
  return (
    <div className='singleProductSelect'>
      <img src={singleProductSelect.image} />
      <h2>{singleProductSelect.title}</h2>
      <h2>${singleProductSelect.price}</h2>
      <p>{singleProductSelect.detail}</p>
      <div className='rating'>
        {Array(singleProductSelect.rating).fill().map((_, ind) => <p key={ind}>⭐</p>)}
      </div>
      <button onClick={addProduct}>
        <i>
          <FaShoppingBag />
        </i>
        Add To Basket
      </button>
    </div>

  )
}
