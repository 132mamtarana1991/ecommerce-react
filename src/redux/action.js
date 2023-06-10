import * as types from "./actionType";
import axios from "axios";

export const allProduct = () => async (dispatch) => {
  const result = await axios.get("http://localhost:5000/products", {
    headers: {
      authorization: "bearer " + JSON.parse(localStorage.getItem("token")),
    },
  });
  dispatch({
    type: types.GET_USERS,
    payload: result.data,
  });
};

export const getSingleProduct = (id) => async (dispatch) => {
  const result = await axios.get(`http://localhost:5000/product/${id}`, {
    headers: {
      authorization: "bearer " + JSON.parse(localStorage.getItem("token")),
    },
  });
  dispatch({
    type: types.GET_SINGLE_USER,
    payload: result.data,
  });
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
  if (result?.data?.auth) {
    localStorage.setItem("user", JSON.stringify(result?.data?.user));
    localStorage.setItem("token", JSON.stringify(result?.data?.auth));
  } else {
    alert("no found user please add corrert user");
  }
  dispatch({
    type: types.LOGIN_USER,
    payload: loginUser,
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

export const searchAllData = (item) => ({
  type: types.SEARCH,
  payload: item,
});

export const selectFood = (item) => ({
  type: types.SELECT_FOOD,
  payload: item,
});


// Admin
export const deleteAdmin = (id) => async (dispatch) => {
  await axios.delete(`http://localhost:3000/posts/${id}`);
  dispatch({
    type: types.DELETE_ADMIN,
    payload: id,
  });
  dispatch(allProduct());
};

export const addUsers = (user) => async (dispatch) => {
  await axios.post("http://localhost:3000/posts/", user);
  dispatch({
    type: types.ADD_USER,
    payload: user,
  });
  dispatch(allProduct());
};

export const getSingleAdmin = (id) => async (dispatch) => {
  const result = await axios.get(`http://localhost:3000/users/${id}`);
  dispatch({
    type: types.GET_SINGLE_ADMIN,
    payload: result.data,
  });
};

export const updateSingleUser = (user, id) => async (dispatch) => {
  const result = await axios.put(`http://localhost:3000/users/${id}`, user);
  dispatch({
    type: types.GET_SINGLE_USER,
    payload: result.data,
  });
  dispatch(allProduct());
};
