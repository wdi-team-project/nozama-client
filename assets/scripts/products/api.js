'use strict'
const app = require('../app.js')

// GET products
const getProducts = function (data) {
  console.log(data)
  return $.ajax({
    method: 'GET',
    url: app.host + '/products',
    contentType: 'application/json; charset=utf-8',
    dataType: 'json',
    success: function (response, textStatus, jqXhr) {
      const product = response.products
      for (let i = 0; i < product.length; i++) {
        const title = product[i].title
        const price = product[i].price
        const img = product[i].imageLink
        const id = product[i]._id
        $('#productList').append(
          '<div id="" class="productBorder col-md-2 center">' +
            '<div>' +
            '<h3 class="productTitle">' + title + '</h3>' + '<br>' +
            '</div>' +
            '<div>' +
            '<img class="productListed" src="' + img + '">' + '<br>' +
            '</div>' +
            '<p class="productPrice">$ ' + price + '</p>' +
            '<button id="' + id + '" class="add-to-cart-btn btn center">Add to Cart</button>' +
        '</div>'
        )
      }
    }
  })
}

const getProduct = (id) => {
  console.log('getProduct')
  return $.ajax({
    url: app.host + '/products/' + id,
    headers: {'header': 'Content-Type: application/json'},
    method: 'GET',
    data: {
      'products': {
        '_id': id
      }
    }
  })
}

// Add Product to user Cart
const addProduct = (data) => {
  console.log(data)
  console.log('addProduct')
  console.log('title: ' + data.product.title + ' price: ' + data.product.price)
  const title = data.product.title
  const price = data.product.price
  return $.ajax({
    url: app.host + '/users/' + app.user.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    data: {
      'products': {
        'title': title,
        'price': price
      }
    }
  })
}

const showCart = (user, token) => {
  console.log(user)
  return $.ajax({
    url: app.host + '/users/' + user,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    data: {
      'user': {
        'id': user,
        'token': token
      }
    }
  })
}

const emptyCart = (data) => {
  console.log(data)
  return $.ajax({
    url: app.host + '/users/' + app.user.id + '/cart',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    data: app.user.cart
  })
}

module.exports = {
  getProducts,
  getProduct,
  addProduct,
  showCart,
  emptyCart
}
