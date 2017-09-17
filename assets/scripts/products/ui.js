'use strict'
const app = require('../app.js')

const onAddProductSuccess = (data) => {
  console.log('onAddProductSuccess')
  console.log(app.user.cart)
  console.log(app.user.cart.length)
  console.log(data)
  for (let i = 0; i < app.user.cart.length; i++) {
    $('#cartContainer').append(
      '<li>' + app.user.cart[i].title + ' $ ' + app.user.cart[i].price + '</li>'
    )
  }
}

const onAddProductFailure = (data) => {
  console.log('failure')
}

const onEmptyCartSuccess = (data) => {
  $('#cartContainer').remove('li')
  console.log('should be empty')
}

const onEmptyCartFailure = (data) => {
  console.log('shit')
}

module.exports = {
  onAddProductSuccess,
  onAddProductFailure,
  onEmptyCartSuccess,
  onEmptyCartFailure
}
