import * as types from "./actionType";
import axios from "axios";

export const loadUsers = () => async (dispatch) => {
  const result = await axios.get("http://localhost:3000/posts");
  dispatch({
    type: types.GET_USERS,
    payload: result.data,
  });
};

export const getSingleuser = (id) => async (dispatch) => {
  const result = await axios.get(`http://localhost:3000/posts/${id}`);
  dispatch({
    type:  types.GET_SINGLE_USER,
    payload: result.data,
  });
};

export const deleteUsers = (id) => async (dispatch) => {
  dispatch({
    type: types.DELETE_USER,
    payload: id,
  });
};

export const addBasket = (item) => ({
  type: types.ADD_BASKET,
  payload: item,
});

export const totalPrice = (total) => ({
  type: types.TOTAL_PRICE,
  payload: total,
});
export const increaseCounter = () => {
  return {
    type: types.INCREASE_COUNTER,
    payload: "increase",
  };
};

export const decreaseCounter = () => {
  return {
    type: types.DECREASE_COUNTER,
    payload: "decrease",
  };
};
export const searchFood = (item) => ({
  type: types.SEARCH,
  payload: item,
});
