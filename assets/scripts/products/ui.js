'use strict'
const app = require('../app.js')

const onAddProductSuccess = (data) => {
  console.log('onAddProductSuccess')
  console.log(app.user.cart)
  console.log(app.user.cart.length)
  console.log(data)
  $('#cartContainer').append('<li>' + app.user.cart.title + ' $ ' + app.user.cart.price + '</li>')
}

const onAddProductFailure = (data) => {
  console.log('failure')
}

const onShowProductSuccess = (data) => {
  console.log('onShowProductSuccess')
  $('#login-prompt').text('Added new item to cart!')
}

const onShowProductFailure = (error) => {
  console.log(error)
}

const onShowCartSuccess = (data) => {
  console.log('onShowCartSuccess')
  console.log(data)
  $('#cartContainer').empty()
  for (let i = 0; i < app.user.cart.length; i++) {
    $('#cartContainer').append(
      '<li id="cartList">' + ' - ' + app.user.cart[i].title + ': $ ' + app.user.cart[i].price + '</li>'
    )
  }
}

const onShowCartFailure = (error) => {
  console.log(error)
}

const onEmptyCartSuccess = (data) => {
  $('#cartContainer').empty()
  console.log('should be empty')
}

const onEmptyCartFailure = (data) => {
  console.log('shit')
}

module.exports = {
  onAddProductSuccess,
  onAddProductFailure,
  onShowProductSuccess,
  onShowProductFailure,
  onShowCartSuccess,
  onShowCartFailure,
  onEmptyCartSuccess,
  onEmptyCartFailure
}
