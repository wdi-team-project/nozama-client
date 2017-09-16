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
      for (let i = 0; i < product.length; i++) {
        const title = product[i].title
        const price = product[i].price
        const img = product[i].imageLink
        $('#productList').append(
          '<div class="productBorder col-md-2 center">' +
            '<h3>' + title + '</h3>' + '<br>' +
            '<img class="productListed" src="' + img + '">' + '<br>' +
            '<p class="productDisplay"> $ ' + price + '</p>' + '<br>' +
            '<button type="button class=btn center">Add to Cart</button>' +
        '</div>'
        )
      }
    }
  })
}
module.exports = {
  getProduct
}
