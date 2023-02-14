/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { useSelector,useDispatch } from 'react-redux';
import {fetchProductList} from '../redux/actions/ProductAction';

export default function () {
  const [searchTerm, setSearchTerm] = useState('');
  const [dataSet, setDataSet] = useState([]);
  const navigation = useNavigation();
  const productSet = useSelector(state => state.productSet);
  const dispatch = useDispatch();

  useEffect(() => {
  dispatch(fetchProductList());
  console.log(searchTerm);
 });

  const handleSearch = text => {
    setSearchTerm(text);
    search();
  };

const search =()=>{
  const filteredProducts = productSet.filter(

    product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.categoryName.toLowerCase().includes(searchTerm.toLowerCase()),
  );
  console.log( "test" + filteredProducts);
  setDataSet(filteredProducts);
};


  //console.log(productSet);

  return (
    <View style={{flex: 1}}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search for a product"
          onChangeText={handleSearch}
          value={searchTerm}
        />
      </View>

      {searchTerm === '' ? (
        <FlatList
          data={productSet}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => navigation.navigate('Product', {item})}>
              <View style={styles.productContainer}>
                <Image
                  source={{uri: 'https://picsum.photos/500'}}
                  style={styles.productImage}
                />
                <View style={styles.productInfo}>
                  <Text style={styles.productName}>{item.name}</Text>
                  <Text style={styles.productDescription}>{item.categoryName}</Text>
                  <Text style={styles.productPrice}>{item.price}</Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.productId.toString()}
          numColumns={1}
        />
      ) : (
        <FlatList
          data={dataSet}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => navigation.navigate('Product', {item})}>
              <View style={styles.productContainer}>
                <Image
                  source={{uri: 'https://picsum.photos/500'}}
                  style={styles.productImage}
                />
                <View style={styles.productInfo}>
                  <Text style={styles.productName}>{item.name}</Text>
                  <Text style={styles.productDescription}>{item.categoryName}</Text>
                  <Text style={styles.productPrice}>{item.price}</Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.productId.toString()}
          numColumns={1}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f2f2f2',
  },
  searchInput: {
    flex: 1,
    height: 40,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  searchIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  productContainer: {
    flexDirection: 'row',
    padding: 10,
    width: '100%',
  },
  productImage: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    marginRight: 10,
  },
  productInfo: {
    justifyContent: 'center',
    paddingLeft: 40,
  },
  productName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  productDescription: {
    fontSize: 14,
    color: 'grey',
    marginBottom: 10,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
