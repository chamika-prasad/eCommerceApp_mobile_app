/* eslint-disable prettier/prettier */
import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

export default function Signin_signup_form(props) {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [error, setError] = useState('');

  function setInputs() {
    if (props.email === '') {
      props.setError('Email feild can not be empty');
      props.setSubmit(true);
      return;
    }
    if (props.password === '') {
        props.setError('Password feild can not be empty');
        props.setSubmit(true);
        return;
    }
    // eslint-disable-next-line eqeqeq
    if (props.email != '') {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      var flag = re.test(String(props.email).toLowerCase());

      if (flag === false) {
        props.setError('Email is not valide');
        props.setSubmit(true);
        return;
      }
    }
    if (props.error === '') {
        if (props.action === 'LOGIN'){
          props.setLogIn('Login success');
        } else if (props.action === 'SIGNUP'){
          props.setSignUp('Registration Success');
        }
    }

  }

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Email..."
            placeholderTextColor="#003f5c"
            onChangeText={text => props.setEmail(text)}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            secureTextEntry
            style={styles.inputText}
            placeholder="Password..."
            placeholderTextColor="#003f5c"
            onChangeText={text => props.setPassword(text)}
          />
        </View>
        <TouchableOpacity style={styles.loginBtn} onPress={setInputs}>
          <Text style={styles.actionText}>{props.action}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputView: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 25,
    height: 60,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    height: 50,
    color: 'black',
  },
  loginBtn: {
    width: '80%',
    backgroundColor: 'green',
    borderRadius: 25,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  actionText: {
    color: 'white',
  },

  linkText: {
    fontWeight: 'bold',
  },

  error: {
    color: 'red',
    fontSize: 12,
    marginTop: 2,
    alignSelf: 'center',
  },
});
