import React from 'react'
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
export const SubTotal = () => {
  const { user, basket } = useSelector((state) => state.data);

  return (
    <>

      <div><h1>Hello {user?.email}</h1>{basket && basket.length === 0 ? 'Empty Product' : ' Your Shipping Basket'}

      </div>
    </>
  )
}
