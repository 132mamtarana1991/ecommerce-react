import * as types from "./actionType";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
    type: types.GET_SINGLE_USER,
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

export const selectFood = (item) => ({
  type: types.SELECT_FOOD,
  payload: item,
});

// Admin
export const DeleteAdmin = (id) => async (dispatch) => {
  await axios.delete(`http://localhost:3000/posts/${id}`);
  dispatch({
    type: types.DELETE_ADMIN,
    payload: id,
  });
  dispatch(loadUsers());
};

export const addUsers = (user) => async (dispatch) => {
  await axios.post("http://localhost:3000/posts/", user);
  dispatch({
    type: types.ADD_USER,
    payload: user,
  });
  dispatch(loadUsers());
};

export const getSingleAdmin = (id) => async (dispatch) => {
  const result = await axios.get(`http://localhost:3000/users/${id}`);
  dispatch({
    type: types.GET_SINGLE_ADMIN,
    payload: result.data,
  });
};

export const updateSingleuser = (user, id) => async (dispatch) => {
  const result = await axios.put(`http://localhost:3000/users/${id}`, user);
  dispatch({
    type: types.GET_SINGLE_USER,
    payload: result.data,
  });
  dispatch(loadUsers());
};

export const registerUser = (registerUser) => async (dispatch) => {
  await axios.post("http://localhost:5000/register/", registerUser);
  dispatch({
    type: types.REGISTER_USER,
    payload: registerUser,
  });
};

export const loginUser = (loginUser) => async (dispatch) => {
  let result = await axios.post("http://localhost:5000/login/", loginUser);
  console.log(result, "result");
  if (result?.data?.email) {
    localStorage.setItem("user", JSON.stringify(result?.data));

  } else {
    alert("no found user please add corrert user");
  }
  dispatch({
    type: types.LOGIN_USER,
    payload: loginUser,
  });
};
