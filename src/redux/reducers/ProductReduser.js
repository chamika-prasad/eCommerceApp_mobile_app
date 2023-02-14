/* eslint-disable prettier/prettier */
import {PRODUCT_GET_SUCCESS,PRODUCT_GET_FAILD} from '../actions/ProductAction';

const initialState = {
    dataSet: [],
  };

  export default function productReduser(state = initialState, action) {
    switch (action.type) {
      case PRODUCT_GET_SUCCESS:
        return action.payload;

      case PRODUCT_GET_FAILD:
        return state;

      default:
        return state;
    }
  }
