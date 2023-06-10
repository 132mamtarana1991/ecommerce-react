import * as types from "./actionType";

const initialState = {
  users: [],
  user: {},
  loading: false,
  basket: [],
  error: null,
  count: 0,
  search: "",
  selectfood: "",

  usersAdmin: [],
  userAdmin: {},
  registerUser: {},
  loginUser: {},
};

const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.REGISTER_USER:
      return {
        ...state,
        registerUser: action.payload,
        loading: false,
      };
    case types.LOGIN_USER:
      return {
        ...state,
        loginUser: action.payload,
        loading: false,
      };   
    case types.SEARCH:
      return {
        ...state,
        search: action.payload,
        loading: false,
      };
    case types.SELECT_FOOD:
      return {
        ...state,
        selectfood: action.payload,
        loading: false,
      };
    case types.GET_SINGLE_USER:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case types.GET_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };

    case types.ADD_BASKET:
      const newBasket = [...state.basket, action.payload];
      return {
        ...state,
        basket: newBasket,
      };
    case types.DELETE_USER:
      const updateBasket = [...state.basket];
      const index = state.basket.findIndex(
        (item) => item.id === action.payload
      );
      if (index >= 0) {
        updateBasket.splice(index, 1);
      }
      return {
        ...state,
        basket: updateBasket,
      };
 
    case types.ADD_USER:
    case types.USER_UPDATE_USER:
      return {
        ...state,
        loading: false,
      };

    case types.GET_SINGLE_ADMIN:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case types.DELETE_ADMIN:

    // eslint-disable-next-line no-fallthrough
    default:
      return state;
  }
};

export default basketReducer;
