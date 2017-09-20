'use strict'
const app = require('../app.js')
const Handlebars = require('../../handlebars-v4.0.10.js')

const onAddProductSuccess = (id, title, price, img) => {
  console.log('onAddProductSuccess')
  // $('#cartContainer').append('<li>' + title + ' $ ' + price + '</li>')
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
  $('#user-cart-table').remove()
  // for (let i = 0; i < app.user.cart.length; i++) {
  // $('#cartContainer').append(
  //   '<li>' + app.user.cart[i].title + ' $ ' + app.user.cart[i].price + '</li>'
  // )
  // }
  // HANDLEBARS REFACTOR
  const cartData = data.user.cart
  const createHTML = function (data) {
    const rawTemplate = $('#cart-template').html()
    console.log(rawTemplate)
    const compiledTemplate = Handlebars.compile(rawTemplate)
    console.log(compiledTemplate)
    const context = {
      cart: data
    }
    const compiledHTML = compiledTemplate(context)
    console.log('appending HTML')
    console.log(compiledHTML)
    $('#cartContainer').append(compiledHTML)
  }
  createHTML(cartData)
}

const onShowCartFailure = (error) => {
  console.log(error)
}

const onEmptyCartSuccess = (data) => {
  $('#cartContainer').empty()
  for (let i = 0; i < app.user.cart.length; i++) {
    $('#cartContainer').append(
      '<li>' + app.user.cart[i].title + ' $ ' + app.user.cart[i].price + '</li>'
    )
  }
  console.log('onEmptyCartSuccess')
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
