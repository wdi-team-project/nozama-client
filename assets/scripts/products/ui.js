'use strict'
const app = require('../app.js')
const Handlebars = require('../../handlebars-v4.0.10.js')
const Api = require('./api.js')

const onAddProductSuccess = (id, title, price, img) => {
  // $('#cartContainer').append('<li>' + title + ' $ ' + price + '</li>')
}

const onAddProductFailure = (error) => {
  console.log('onAddProductFailure')

  console.log(error)
}

const onShowProductSuccess = (data) => {
  console.log('onShowProductSuccess')
}

const onShowProductFailure = (error) => {
  console.log(error)
}

const onShowCartSuccess = (data) => {
  $('#user-cart-table').remove()
  // $('#empty-cart-btn').remove()
  // for (let i = 0; i < app.user.cart.length; i++) {
  // $('#cartContainer').append(
  //   '<li>' + app.user.cart[i].title + ' $ ' + app.user.cart[i].price + '</li>'
  // )
  // }
  // HANDLEBARS REFACTOR
  const cartData = data.user.cart
  const createHTML = function (data) {
    const rawTemplate = $('#cart-template').html()
    const compiledTemplate = Handlebars.compile(rawTemplate)
    const context = {
      cart: data
    }
    const compiledHTML = compiledTemplate(context)
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
}

const onEmptyCartFailure = (data) => {
  console.log('Failure')
}

const onCreateProductSuccess = (data) => {
  $('.productBorder').remove()
  $('#create-alert').children().remove()
  $('#create-alert').append(
    '<p> Product Successfully Added </p>'
  )
  $('input').val('')
  Api.getProducts()
}

const onCreateProductFailure = (data) => {
  $('#create-alert').children().remove()
  $('#create-alert').append(
    '<p>Please Correctly Fill All Fields</p>'
  )
}

const onDeleteProductSuccess = (data) => {
  $('#delete-alert').children().remove()
  $('#delete-alert').append(
    '<p> Product Successfully Deleted </p>'
  )
  $('.productBorder').remove()
  $('input').val('')
  Api.getProducts()
}

const onDeleteProductFailure = (data) => {
  $('#delete-alert').children().remove()
  $('#delete-alert').append(
    '<p>Please Provide Valid Product Id</p>'
  )
}

module.exports = {
  onAddProductSuccess,
  onAddProductFailure,
  onShowProductSuccess,
  onShowProductFailure,
  onShowCartSuccess,
  onShowCartFailure,
  onEmptyCartSuccess,
  onEmptyCartFailure,
  onCreateProductSuccess,
  onCreateProductFailure,
  onDeleteProductSuccess,
  onDeleteProductFailure
}
