import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { SubTotal } from '../../components/SubTotal/SubTotal';
import { totalPrice, deleteUsers } from '../../redux/action';
import { increaseCounter, decreaseCounter } from '../../redux/action';
export const Checkout = () => {
  const { user, basket, total, count } = useSelector((state) => state.data);
  let dispatch = useDispatch();
  const numbers = basket.map((item) => item.price);
  const numbersid = basket.map((item) => item.id);
  console.log(numbersid, 'numbersid')
  console.log(total, 'total')
  const [totalmy, setTotal] = useState(0)
  const removeProduct = (id) => {
    dispatch(deleteUsers(id))
  }
  function getSum(total, num) {
    return total + Math.round(num);
  }
  useEffect(() => {
    if (count > 0) {
      const countTotal = numbers * count
      dispatch(totalPrice(countTotal))
    }
    else if (count < total) {
      const countTotal = numbers / count
      dispatch(totalPrice(countTotal))
    }
    else {
      dispatch(totalPrice(numbers.reduce(getSum, 0)))
    }
  }, [basket, count]);
  // handle click events
  let increaseBtn = () => {
    dispatch(increaseCounter())
  }

  // handle click events
  let decreaseBtn = () => {
    dispatch(decreaseCounter())
  }
  return (
    <>

      <div>
        <div className='container-fuild'>
          <div className='row'>
            <div className='col-lg-8'>
              <div className='row'>
                {basket && basket.map((item, ind) => (
                  <>

                    <div className='col-lg-6'>
                      <div class="card" >
                        <img src={item.img} style={{ width: '150px' }} class="card-img-top" alt="..." />
                        <div class="card-body">
                          <h5 class="card-title">{item.title}</h5>
                          <p class="card-text">{item.detail}</p>
                          <a href="#" class="btn btn-primary">Price ${item.price}</a>
                          <button onClick={() => removeProduct(item.id)}>Remove</button>
                        </div>
                        <div className="mx-4">
                          <h1 alt="" width="100" height="80" onClick={decreaseBtn} className='clickEffect' >-</h1>
                        </div>
                        <div className='numberBorder mx-4' >

                          <span>{count}</span>
                        </div>
                        <div className="mx-4">
                          <h1 alt="" width="100" height="80" onClick={increaseBtn} className='clickEffect'>+</h1>
                        </div>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </div>
            <div className='col-lg-4'>
              <SubTotal />
              <b>TOTAL PRICE - {total}</b>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}
