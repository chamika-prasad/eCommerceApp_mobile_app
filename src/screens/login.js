/* eslint-disable prettier/prettier */
/* eslint-disable no-alert */
/* eslint-disable eqeqeq */
import React, {useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Signin_signup_form from './component/signin_signup_form.js';
import {useNavigation} from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import {fetchUserLoginData} from '../redux/actions/UserAction';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [submit, setSubmit] = useState(false);
  const [login, setLogIn] = useState('');
  const navigation = useNavigation();
  const dispatch = useDispatch();

  if (error != '' && submit === true) {
    alert(error);
    setError('');
    setSubmit(false);
  }

  if (login != ''){
    setError('');
    setSubmit(false);
    setLogIn('');
    dispatch(fetchUserLoginData(email,password));
  }

  return (
    <View style={styles.container}>
      <View>
        <Signin_signup_form
          action={'LOGIN'}
          error ={error}
          setError={setError}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          setSubmit={setSubmit}
          setLogIn={setLogIn}
        />
      </View>
      <View style={styles.Text}>
        <Text>Don't have an account?</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Signup');
          }}>
          <Text style={styles.linkText}> Register</Text>
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
