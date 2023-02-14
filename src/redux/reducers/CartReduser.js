/* eslint-disable prettier/prettier */
/* eslint-disable no-extra-semi */
import {CART_PRODUCT_GET_SUCCESS,CART_PRODUCT_GET_FAILD} from '../actions/CartAction';

const initialState = {
    cartList: [],
  };

  export default function productReduser(state = initialState, action) {
    switch (action.type) {

    case CART_PRODUCT_GET_SUCCESS:
      //console.log("payload" + JSON.stringify(action.payload));
      return action.payload;

    case CART_PRODUCT_GET_FAILD:
        return state;

      default:
        return state;
    }
  };
