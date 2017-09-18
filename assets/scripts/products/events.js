'use strict'
const api = require('./api.js')
const ui = require('./ui.js')
const app = require('../app.js')

// const onGetProducts = function (event) {
//   console.log('onGetProducts in events.js')
//   api.getProduct()
//     .then(ui.onGetProductsSuccess)
//     .catch(ui.onGetProductsFailure)
// }

const onShowCart = function (event) {
  event.preventDefault()
  console.log(event.target)
  console.log('onShowCart')
  const user = app.user.id
  const token = app.user.token
  api.showCart(user, token)
    .then(ui.onShowCartSuccess)
    .catch(ui.onShowCartFailure)
}

const onAddProduct = function (event) {
  console.log('onAddProduct')
  console.log('product id =' + this.id)
  event.preventDefault()
  const id = this.id
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
  const user = app.user.id
  const token = app.user.token
  // console.log('Events User')
  // console.log(user)
  api.getProduct(id)
    .then(api.addProduct)
    .then(ui.onAddProductSuccess)
    .catch(ui.onAddProductFailure)
}

const onEmptyCart = function (event) {
  console.log('Step 1: Events Start')
  // event.preventDefault()
  // const data = event
  console.log('data')
  // console.log(data)
  api.emptyCart()
    .then(ui.onAddProductSuccess)
    .catch(ui.onAddProductFailure)
}
module.exports = {
  onShowCart,
  onAddProduct,
  onEmptyCart
}
