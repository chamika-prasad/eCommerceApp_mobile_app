/* eslint-disable prettier/prettier */
/* eslint-disable no-alert */

import axios from 'axios';

//add product to cart api
export function addProductToCart(productId, userEmail, quantity) {
  axios.post(
      `https://firstorangeglass77.conveyor.cloud/api/Oder/AddToCart/${productId}/${userEmail}/${quantity}`,
    )
    .then(response => {
      if (response.status == 200) {
        alert('Product added to cart successfully');
      } else {
        alert('Product added Faild');
      }
    })
    .catch(function (error) {
      if (error.response.status == 400) {
        alert(error.response.data.message);
      } else {
        alert('Product added Faild');
      }
    });
}

//order single product api
export function buyNow(productId,userEmail,quantity) {
  axios.post(
        `https://firstorangeglass77.conveyor.cloud/api/Oder/PlaceOrdersDirectly/${productId}`,
        {
          userEmail,
          quantity,
        },
      )
      .then(response => {
        let temp = response.data.state;

        if (temp == true) {

          alert('Order placed successfull');
        } else {
          alert('Order placed Faild');
        }
      })
      .catch(err => {
        console.log(err);

        alert('Order placed Faild');
      });
}
