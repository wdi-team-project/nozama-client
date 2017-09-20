'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const authEvents = require('./auth/events.js')
const productEvents = require('./products/events.js')
const products = require('./products/api.js')

$(() => {
  setAPIOrigin(location, config)

  $('.user-signup').hide()
  $('.user-signin').hide()
  $('.user-signout').hide()
  $('#show-change-pw').hide()
  $('.change-password').hide()
  $('#show-my-cart').hide()
  $('#empty-cart').hide()

  $('.productBtn').on('load', productEvents.onGetProducts())

  $('#show-signup').click(function () {
    $('.user-signup').show()
    $('#show-signin').hide()
    $('#show-signup').hide()
    $('#already-prompt').hide()
  })

  $('#show-signin').click(function () {
    $('.user-signin').show()
    $('#show-signin').hide()
    $('#show-signup').hide()
    $('#already-prompt').hide()
  })

  $('#show-change-pw').click(function () {
    $('.change-password').show()
    $('#show-change-pw').hide()
    $('#show-my-cart').hide()
  })

  $('.user-signup').on('submit', authEvents.onSignUp)
  $('.user-signin').on('submit', authEvents.onSignIn)
  $('.user-signout').on('submit', authEvents.onSignOut)
  // $('#show-change-pw')
  $('.change-password').on('submit', authEvents.onChangePassword)

  $(document).on('click', '.add-to-cart-btn', productEvents.onAddProduct)
  $('#show-my-cart').on('click', productEvents.onShowCart)
  $('#empty-cart').on('click', productEvents.onEmptyCart)
})

// const pp = function () {
//   const productCollection = $('#productList').children()
//   const priceLocator = productCollection.children().first().siblings().next().html()
//   const prodTypeMod = priceLocator.split('').splice(2, 6).join('')
//   const prodPrice = parseInt(prodTypeMod) + 0.99
//   console.log(prodPrice)
//   return prodPrice
// }
// $('#productList').click(function () {
//   pp()
// })
//
// const pt = function () {
//   const productCollection = $('#productList').children()
//   const prodTitle = productCollection.children().first().children().html()
//   console.log(prodTitle)
// }
//
// $('#productList').click(function () {
//   pt()
// })

// $('#productList').click(function () {
//   const productCollection = $('#productList').children()
//   const prodTitle = productCollection.children().first().children().html()
//   const priceLocator = productCollection.children().first().siblings().next().html()
//   const prodButton = productCollection.children().first().siblings().next().next()
//   const prodTypeMod = priceLocator.split('').splice(2, 6).join('')
//   const prodPrice = parseInt(prodTypeMod) + 0.99
//   console.log('productCollection')
//   console.log(productCollection)
//   console.log('prodTitle')
//   console.log(prodTitle)
//   console.log('priceLocator')
//   console.log(priceLocator)
//   console.log('prodPrice')
//   console.log(prodPrice)
//   console.log(typeof (prodPrice))
//   console.log('prodButton')
//   console.log(prodButton)
//   const a = prodPrice
//   console.log('a')
//   console.log(a)
//   // prodButton.click(console.log('wtf'))
// })

// const productCollection = $('#productList').children()
// const prodTitle = productCollection.children().first().children().html()
// $($('#productList').click(function () {
//   console.log('fuck me')
// })
//
// const lImage = $('#landing-image')
//
// $(lImage).click(function () {
//   console.log('WWWTFF')
// })
