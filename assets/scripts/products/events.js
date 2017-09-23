'use strict'
const api = require('./api.js')
const ui = require('./ui.js')
const app = require('../app.js')

const onGetProducts = function (event) {
  console.log('onGetProducts in events.js')
  api.getProducts()
    .then(ui.onGetProductsSuccess)
    .catch(ui.onGetProductsFailure)
}

const onShowCart = function (event) {
  event.preventDefault()
  console.log('onShowCart')
  const user = app.user.id
  const token = app.user.token
  api.showCart(user, token)
    .then(ui.onShowCartSuccess)
    .catch(ui.onShowCartFailure)
}

const onAddProduct = function (event) {
  console.log('onAddProduct')
  console.log('user: ' + app.user)
  console.log('product id = ' + this.id)
  event.preventDefault()
  const id = $(event.target).data('id')
  const title = $(event.target).data('title')
  const price = $(event.target).data('price')
  const img = $(event.target).data('img')
  // const pp = function () {
  //   const productCollection = $('#productList').children()
  //   const priceLocator = productCollection.children().first().siblings().next().html()
  //   const prodTypeMod = priceLocator.split('').splice(2, 6).join('')
  //   const prodPrice = parseInt(prodTypeMod) + 0.99
  //   return prodPrice
  // }
  // const price = pp()
  // console.log(price)
  // console.log('Got Here, got price')
  // const pt = function () {
  //   const productCollection = $('#productList').children()
  //   const prodTitle = productCollection.children().first().children().html()
  //   return prodTitle
  // }
  // const title = pt()
  // console.log('got here 3')
  // console.log(title)
  if (app.user === undefined) {
    $('#shopping-prompt').text('You must log in to add items to your cart!')
  } else {
    const user = app.user.id
    const token = app.user.token
    console.log('user:' + app.user)
    console.log('user:' + user + 'token: ' + token)
    // console.log('Events User')
    // console.log(user)
    api.addProduct(id, title, price, img)
      .then(ui.onAddProductSuccess(id, title, price, img))
      .catch(ui.onAddProductFailure)
  }
}

const onEmptyCart = function (event) {
  console.log('onEmptyCart')
  const id = $(this).data('data-id')
  // event.preventDefault()
  // const data = event
  console.log('data')
  // console.log(data)
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
