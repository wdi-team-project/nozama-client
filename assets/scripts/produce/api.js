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
      // console.log(product.length)
      let count = 0
      for (let i = 0; i < product.length; i++) {
        const title = product[i].title
        const price = product[i].price
        const img = product[i].imageLink
        count++
        if (count % 4 === 0) {
          $('#productList').append('<li>' + title + ' ' + price + '  ' + img + '  ' + '</li><br><br>')
        } else {
          $('#productList').append('<li>' + title + ' ' + price + '  ' + img + '  ' + '</li>')
        }
      }
    }
  })
}
module.exports = {
  getProduct
}
