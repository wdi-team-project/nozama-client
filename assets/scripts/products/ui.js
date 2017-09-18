'use strict'
const app = require('../app.js')

const onAddProductSuccess = (data) => {
  console.log('onAddProductSuccess')
  console.log(app.user.cart)
  console.log(app.user.cart.length)
  console.log(data)
}

const onAddProductFailure = (data) => {
  console.log('failure')
}

const onShowProductSuccess = (data) => {
  console.log('onShowProductSuccess')
  $('#cartContainer').append('<li>' + app.user.cart.title + ' $ ' + app.user.cart.price + '</li>')
}

const onShowProductFailure = (error) => {
  console.log(error)
}

const onShowCartSuccess = (data) => {
  console.log('onShowCartSuccess')
  console.log(data)
  for (let i = 0; i < app.user.cart.length; i++) {
    $('#cartContainer').append(
      '<li>' + app.user.cart[i].title + ' $ ' + app.user.cart[i].price + '</li>'
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
