'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const authEvents = require('./auth/events.js')
const produce = require('./produce/api.js')

$(() => {
  setAPIOrigin(location, config)

  $('.user-signup').hide()
  $('.user-signin').hide()
  $('.user-signout').hide()
  $('#show-change-pw').hide()
  $('.change-password').hide()
  $('#show-my-cart').hide()
})

$('.productBtn').on('load', produce.getProduct())

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

$('#productList').click(function () {
  const productCollection = $('#productList').children()
  const prodTitle = productCollection.children().first().children().html() //.children().html() //.children().first().html()
  const priceLocator = productCollection.children().first().siblings().next().html()
  const prodTypeMod = priceLocator.split('').splice(2, 6).join('')
  const prodPrice = parseInt(prodTypeMod) + 0.99
  console.log('productCollection')
  console.log(productCollection)
  console.log('prodTitle')
  console.log(prodTitle)
  console.log('priceLocator')
  console.log(priceLocator)
  console.log('prodPrice')
  console.log(prodPrice)
  console.log(typeof (prodPrice))
  // console.log('Cart Button')
  // console.log($('#productList').children().first())
  // console.log('productCollection')
  // console.log(prodName)
  // console.log('singleProduct')
  //
  // console.log(productCollection.length)
  // console.log('Product Title')
  // console.log($('#productList').children().first().contents().first().html())
})

// const productCollection = $('#productList').children()
// console.log(productCollection.length)
// $('#productList').children().click(function () {
//   console.log('toto')
// })


// $('#productList').click(function () {
//   console.log('hello')
//   console.log($('#productList').children().last().contents().last().html())
// })
// $('#landing-image').click(function () {
//   console.log('hello')
// })

// const cartButton = $('#productList').children().last().contents().last().html()
// console.log(cartButton)
