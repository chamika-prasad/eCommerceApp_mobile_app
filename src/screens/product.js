/* eslint-disable prettier/prettier */
/* eslint-disable no-alert */

import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import {addProductToCart,buyNow} from './../apiservices/apiservices.js';

export default function Product({route}) {
  const [quantity, setQuantity] = useState(0);
  const userEmail = useSelector(state => state.user.Email);
  const product = route.params.item;
  const productId = product.productId;

  function handleIncrement() {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  }

  function handleDecrement() {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  }

  function addToCart() {
    if (quantity == 0){
      alert('Add more quantity');
    } else {
      addProductToCart(productId,userEmail,quantity);
    }
  }

  function orderPlaced() {
    if (quantity == 0){
      alert('Add more quantity');
    } else {
      buyNow(productId,userEmail,quantity);
    }
  }

  return (
    <View style={styles.container}>
      <Image
        source={{uri: 'https://picsum.photos/1000'}}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.category}>{product.categoryName}</Text>
        <Text style={styles.price}>{product.price}</Text>
        <Text style={styles.quantity}>Quantity: {product.stock}</Text>
        <Text style={styles.description}>{product.description}</Text>
      </View>

      <View style={styles.quantityContainer}>
        <TouchableOpacity
          onPress={handleDecrement}
          style={styles.quantityButton}>
          <Text style={styles.quantityText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.buyQuantity}>{quantity}</Text>
        <TouchableOpacity
          onPress={handleIncrement}
          style={styles.quantityButton}>
          <Text style={styles.quantityText}>+</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={addToCart} style={styles.button}>
          <Text style={styles.buttonText}>Add to Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={orderPlaced} style={styles.button}>
          <Text style={styles.buttonText}>Buy Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
  detailsContainer: {
    padding: 20,
    backgroundColor: '#f7f7f7',
    borderRadius: 10,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  category: {
    fontSize: 18,
    color: 'gray',
    marginBottom: 10,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3f72af',
    marginVertical: 10,
  },
  quantity: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#3f72af',
    padding: 10,
    borderRadius: 5,
    width: '45%',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
    paddingLeft: 97,
  },
  quantityButton: {
    width: 50,
    height: 50,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#3f72af',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buyQuantity: {
    paddingLeft: 20,
    paddingRight: 20,
    fontSize: 25,
    fontWeight: 'bold',
  },
  quantityText: {
    fontSize: 25,
    color: '#3f72af',
  },
});
