/* eslint-disable prettier/prettier */
import axios from 'axios';
export const CART_PRODUCT_GET_SUCCESS = 'CART_PRODUCT_GET_SUCCESS';
export const CART_PRODUCT_GET_FAILD = 'CART_PRODUCT_GET_FAILD';

export const fetchCartList = () => async dispatch => {
    //console.log("fetchCartList");
    try {
      let products;
      let userEmail = 'user@example.com';
      const res = axios
        .get(
          `https://firstorangeglass77.conveyor.cloud/api/Oder/GetAllProductsInCart/${userEmail}`,
        )
        .then(response => {
          products = response.data;
        var dataSet = [...products];
          console.log('cartTest' + dataSet);
          dispatch({
            type: CART_PRODUCT_GET_SUCCESS,
            payload: dataSet,
          });
        })
        .catch(error => {
          dispatch({
            type: CART_PRODUCT_GET_FAILD,
          });
          console.log(error);
        });
    } catch (error) {
      error.response && error.response.data.message
        ? dispatch({
            type: CART_PRODUCT_GET_FAILD,
          })
        : dispatch({
            type: CART_PRODUCT_GET_FAILD,
          });
    }
  };