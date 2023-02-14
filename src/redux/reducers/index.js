/* eslint-disable prettier/prettier */
import {combineReducers} from 'redux';
import userInfo from './UserReduser';
import products from './ProductReduser';
import carts from './CartReduser';

const rootReduser = combineReducers({
    user : userInfo,
    productSet : products,
    cartList : carts,
});

export default rootReduser;
