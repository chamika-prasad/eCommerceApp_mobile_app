/* eslint-disable prettier/prettier */
/* eslint-disable no-alert */
/* eslint-disable eqeqeq */

import axios from 'axios';
import {useNavigation} from '@react-navigation/native';

export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGOUT_SUCCESS = 'USER_LOGOUT_SUCCESS';
export const USER_SIGNUP_SUCCESS = 'USER_SIGNUP';
export const USER_LOGIN_FAIL = 'USER_LOGIN_FAIL';
export const USER_REGISTRATION_FAIL = 'USER_REGISTRATION_FAIL';

export const fetchUserLoginData = (email, password) => async dispatch => {
  const navigation = useNavigation();

  try {
    const res = await axios
      .post('https://firstorangeglass77.conveyor.cloud/api/User/Login', {
        email,
        password,
      })
      .then(response => {
        return response.data.detail;
      });

    const userData = {Email: res.email, Token: res.token};

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: userData,
    });

    alert('Login Success');
    navigation.navigate('TabNavigation');
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });

    alert('Login Faild');
  }
};

export const fetchUserSignUpData = (email, password) => async dispatch => {
  const navigation = useNavigation();

  try {
    const res = await axios
      .post('https://firstorangeglass77.conveyor.cloud/api/User/register', {
        email,
        password,
      })
      .then(response => {
        //console.log(response.data);
        const userData = response.data.state;

        if (userData == true) {
          dispatch({
            type: USER_SIGNUP_SUCCESS,
            payload: userData,
          });

          alert('Registration Success');
          navigation.navigate('Login');
        } else {
          dispatch({
            type: USER_REGISTRATION_FAIL,
            payload: userData,
          });
          alert('Registration Faild');
        }
      });
  } catch (error) {
    dispatch({
      type: USER_REGISTRATION_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
    //console.log(error);

    alert('Registration Faild');
  }
};

export const logOut = ({navigation}) => dispatch => {
 // const navigation = useNavigation();
  //console.log("logOut");
  dispatch({
    type: USER_LOGOUT_SUCCESS,
  });
  alert('LogOut Successfull');
   navigation.navigate('Login');
};
