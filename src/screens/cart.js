/* eslint-disable prettier/prettier */
/* eslint-disable no-unreachable */
/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */

import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {products} from './../asserts/cart.js';
import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux';
import {fetchCartList} from '../redux/actions/CartAction';

const TotalPrice = () => {
  const [total, setTotal] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [selectedItems, setSelectedItems] = useState({});
  const [dataSet, setDataSet] = useState([]);
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const cartList = useSelector(state => state.cartList);
  const userEmail = user.Email;

  const updateSelectedItems = (name, price, quantity, checked) => {
    if (checked) {
      setSelectedItems({...selectedItems, [name]: {price, quantity}});
      let value = total + price;
      let qty = totalQuantity + quantity;
      setTotal(value);
      setTotalQuantity(qty);
    } else {
      const newSelectedItems = {...selectedItems};
      delete newSelectedItems[name];
      setSelectedItems(newSelectedItems);
      let value = total - price;
      let qty = totalQuantity - quantity;
      setTotal(value);
      setTotalQuantity(qty);
    }
    console.log(selectedItems);
  };

  useEffect(() => {
    dispatch(fetchCartList());
    loading();
  }, []);

  const loading = () => {
    setDataSet(cartList);
    console.log(dataSet);
  };

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text style={{width: '20%', padding: 10}}>Product Name</Text>
        <Text style={{width: '20%', padding: 10}}>Price</Text>
        <Text style={{width: '20%', padding: 10}}>Quantity</Text>
        <Text style={{width: '20%', padding: 10}}>IsCheck</Text>
      </View>
      <FlatList
        data={cartList}
        renderItem={({item}) => (
          <View
            key={item.Id}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                width: '20%',
                paddingBottom: 10,
                paddingTop: 10,
                paddingLeft: 10,
                paddingRight: 10,
              }}>
              {item.productName}
            </Text>
            <Text
              style={{
                width: '20%',
                paddingBottom: 10,
                paddingTop: 10,
                paddingLeft: 10,
                paddingRight: 10,
              }}>
              ${item.totalPrice}
            </Text>
            <Text
              style={{
                width: '20%',
                paddingBottom: 10,
                paddingTop: 10,
                paddingLeft: 20,
                paddingRight: 10,
              }}>
              {item.quantity}
            </Text>
            <CheckBox
              style={{width: '15%', paddingBottom: 10, paddingTop: 10}}
              value={item.productName in selectedItems}
              onValueChange={checked =>
                updateSelectedItems(
                  item.productName,
                  item.totalPrice,
                  item.quantity,
                  checked,
                )
              }
            />
          </View>
        )}
      />
      <Text>Total Price: ${total}</Text>
      <Text>Total Quantity: {totalQuantity}</Text>
    </View>
  );
};

export default TotalPrice;
