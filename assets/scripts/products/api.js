'use strict'
const app = require('../app.js')

// GET products
const getProducts = function (data) {
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
            '<p>' + 'Product Id' + '</p>' +
            '<p>' + id + '</p>' +
            '</div>' +
            '<div>' +
            '<img class="productListed" src="' + img + '">' + '<br>' +
            '</div>' +
            '<p class="productPrice">$ ' + price + '</p>' +
            '<button id="' + id +
            '" data-id="' + id + '" data-title="' + title + '" data-img="' + img + '" data-price="' + price +
            '" class="add-to-cart-btn btn center">Add to Cart</button>' +
        '</div>'
        )
      }
    }
  })
}

const getProduct = (id) => {
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
const addProduct = (productId, title, price, img) => {
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
  return $.ajax({
    url: app.host + '/users/' + app.user.id + '/cart',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    data: app.user.cart
  })
}

const createProduct = function (titleText, priceText, linkText) {
  return $.ajax({
    url: app.host + '/products',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    data: {
      'product': {
        'title': titleText,
        'price': priceText,
        'imageLink': linkText
      }
    }
  })
}

const deleteProduct = function (idText) {
  return $.ajax({
    url: app.host + '/products/' + idText,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

module.exports = {
  getProducts,
  getProduct,
  addProduct,
  showCart,
  emptyCart,
  createProduct,
  deleteProduct
}
