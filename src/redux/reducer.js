import * as types from "./actionType";

const initialState = {
  users: [],
  user: {},
  loading: false,
  basket: [],
  error: null,
  total: 0,
  count: 0,
  search: "",

  usersAdmin: [],
  userAdmin: {},
};

const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SEARCH:
      return {
        ...state,
        search: action.payload,
        loading: false,
      };

      case types.GET_SINGLE_USER: return {
        ...state,
        user: action.payload,
        loading: false
    }
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
    case types.TOTAL_PRICE:
      return {
        ...state,
        total: action.payload,
      };
    case types.INCREASE_COUNTER:
      return {
        ...state,
        count: state.count + 1,
      };

    case types.DECREASE_COUNTER:
      return {
        ...state,
        count: state.count - 1 > 0 ? state.count - 1 : 1,
      };





   
    case types.ADD_USER:
    case types.USER_UPDATE_USER:
    return {
        ...state,
        loading: false
    }
 
    case types.GET_SINGLE_ADMIN: return {
        ...state,
        user: action.payload,
        loading: false
    }







    default:
      return state;
  }
};

export default basketReducer;
