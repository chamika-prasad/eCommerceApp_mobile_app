/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Button} from 'react-native';
import {useDispatch} from 'react-redux';
import {logOut} from '../redux/actions/UserAction';
import {useNavigation} from '@react-navigation/native';

export default function Logout() {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handlePress = () => {
    dispatch(logOut({navigation}));
  }
  return (
    <View>
      <Button onPress={handlePress} title="Log Out" color="red" />
    </View>
  );
}
