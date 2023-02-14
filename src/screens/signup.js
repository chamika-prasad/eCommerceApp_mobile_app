/* eslint-disable prettier/prettier */
/* eslint-disable eqeqeq */
/* eslint-disable no-alert */

import React, {useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Signin_signup_form from './component/signin_signup_form.js';
import {useNavigation} from '@react-navigation/native';
import {fetchUserSignUpData} from '../redux/actions/UserAction';
import { useDispatch } from 'react-redux';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [submit, setSubmit] = useState(false);
  const [signUp, setSignUp] = useState('');
  const navigation = useNavigation();
  const dispatch = useDispatch();

  if (error != '' && submit === true) {
    alert(error);
    setError('');
    setSubmit(false);
  }

  if (signUp != ''){
    //alert('Registration Success');
    setError('');
    setSubmit(false);
    setSignUp('');
    dispatch(fetchUserSignUpData(email,password));
    //navigation.navigate('Login');
  }

  return (
    <View style={styles.container}>
      <Signin_signup_form
        action={'SIGNUP'}
        error ={error}
        setError={setError}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        setSubmit={setSubmit}
        setSignUp={setSignUp}
      />

      <View style={styles.Text}>
        <Text>Already have an account?</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Login');
          }}>
          <Text style={styles.linkText}> Signin</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 350,
  },

  Text: {
    marginTop: 125,
    paddingLeft: 100,
    flexDirection: 'row',
  },

  linkText: {
    fontWeight: 'bold',
  },
});
