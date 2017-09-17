'use strict'
const api = require('./api.js')
const getFormFields = require('../../../lib/get-form-fields.js')
const ui = require('./ui.js')
const app = require('../app.js')

// POST (ash - signup)
const onSignUp = function (event) {
  console.log('onSignUp1')
  event.preventDefault()
  console.log('onSignUp')
  const data = getFormFields(event.target)
  api.signUp(data)
    .done(ui.signUpSuccess)
    .fail(ui.signUpFail)
}

// GET (ash - signin)
const onSignIn = function (event) {
  event.preventDefault()
  console.log('onSignIn')
  const data = getFormFields(event.target)
  api.signIn(data)
    .done(ui.signInSuccess)
    .fail(ui.signInFail)
}

// DELETE (will - signout)
const onSignOut = function (event) {
  event.preventDefault()
  console.log('onSignOut')
  api.signOut()
    .done(ui.signOutSuccess)
    .fail(ui.signOutSuccess)
}

// PATCH (will - changepw)
const onChangePassword = function (event) {
  event.preventDefault()
  console.log('onChangePassword')
  const data = getFormFields(event.target)
  console.log(data)
  api.changePassword(data)
    .done(ui.changePasswordSuccess)
    .fail(ui.changePasswordFail)
}

const onAddProduct = function (event) {
  console.log('Step 1: Events Start')
  event.preventDefault()
  const pp = function () {
    const productCollection = $('#productList').children()
    const priceLocator = productCollection.children().first().siblings().next().html()
    const prodTypeMod = priceLocator.split('').splice(2, 6).join('')
    const prodPrice = parseInt(prodTypeMod) + 0.99
    return prodPrice
  }
  const price = pp()
  console.log(price)
  console.log('Got Here, got price')
  const pt = function () {
    const productCollection = $('#productList').children()
    const prodTitle = productCollection.children().first().children().html()
    return prodTitle
  }
  const title = pt()
  console.log('got here 3')
  console.log(title)
  let user = app.host.user
  console.log('Events User')
  console.log(user)
  api.addProduct(title, price)
    .then(ui.onAddProductSuccess)
    .catch(ui.onAddProductFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword,
  onAddProduct

}
