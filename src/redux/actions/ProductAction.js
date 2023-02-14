/* eslint-disable prettier/prettier */
/* eslint-disable no-alert */
/* eslint-disable eqeqeq */

//import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';

export const PRODUCT_GET_SUCCESS = 'PRODUCT_GET_SUCCESS';
export const PRODUCT_GET_FAILD = 'PRODUCT_GET_FAILD';
export const CART_PRODUCT_GET_SUCCESS = 'CART_PRODUCT_GET_SUCCESS';
export const CART_PRODUCT_GET_FAILD = 'CART_PRODUCT_GET_FAILD';

export const fetchProductList = () => async dispatch => {
  try {
    let products;
    const res = await axios
      .get(
        `https://firstorangeglass77.conveyor.cloud/api/Product/GetAllProducts`,
      )
      .then(response => {
        products = response.data;
        var dataSet = [...products];
        dispatch({
          type: PRODUCT_GET_SUCCESS,
          payload: dataSet,
        });
      })
      .catch(error => {
        dispatch({
          type: PRODUCT_GET_FAILD,
        });
      });
  } catch (error) {
    error.response && error.response.data.message
      ? dispatch({
          type: PRODUCT_GET_FAILD,
        })
      : dispatch({
          type: PRODUCT_GET_FAILD,
        });
  }
};

