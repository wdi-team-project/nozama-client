'use strict'

const app = require('../app.js')
const config = require('../config.js')

// GET products
const getProduct = function (data) {
  console.log(data)
  return $.ajax({
    method: 'GET',
    url: app.host + '/products',
    contentType: 'application/json; charset=utf-8',
    dataType: 'json',
    success: function (response, textStatus, jqXhr) {
      const product = response.products
      console.log(product)
      // for (let i = 0; i < product.length(); i++) {
      //   $('#productList').append('<li>' + product + '</li>')
      // }
    }
  })
}
module.exports = {
  getProduct
}
