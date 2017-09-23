'use strict'
const api = require('./api.js')
const ui = require('./ui.js')
const app = require('../app.js')

const onGetProducts = function (event) {
  api.getProducts()
    .then(ui.onGetProductsSuccess)
    .catch(ui.onGetProductsFailure)
}

const onShowCart = function (event) {
  event.preventDefault()
  const user = app.user.id
  const token = app.user.token
  api.showCart(user, token)
    .then(ui.onShowCartSuccess)
    .catch(ui.onShowCartFailure)
}

const onAddProduct = function (event) {
  event.preventDefault()
  const id = $(event.target).data('id')
  const title = $(event.target).data('title')
  const price = $(event.target).data('price')
  const img = $(event.target).data('img')
  if (app.user === undefined) {
    $('#shopping-prompt').text('You must log in to add items to your cart!')
  } else {
    api.addProduct(id, title, price, img)
      .then(ui.onAddProductSuccess(id, title, price, img))
      .catch(ui.onAddProductFailure)
  }
}

const onEmptyCart = function (event) {
  const id = $(this).data('data-id')
  api.emptyCart()
    .then(ui.onAddProductSuccess)
    .catch(ui.onAddProductFailure)
}

const onCreateProduct = function (event) {
  event.preventDefault()
  const titleText = $('#pTitle').val()
  const priceText = $('#pPrice').val()
  const linkText = $('#pLink').val()
  api.createProduct(titleText, priceText, linkText)
    .then(ui.onCreateProductSuccess)
    .catch(ui.onCreateProductFailure)
}

const onDeleteProduct = function (event) {
  event.preventDefault()
  const idText = $('#pId').val()
  api.deleteProduct(idText)
    .then(ui.onDeleteProductSuccess)
    .catch(ui.onDeleteProductFailure)
}

module.exports = {
  onGetProducts,
  onShowCart,
  onAddProduct,
  onEmptyCart,
  onCreateProduct,
  onDeleteProduct
}
