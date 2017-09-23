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
  $('#create-field').hide()
  $('#delete-field').hide()

  $('.productBtn').on('load', productEvents.onGetProducts())

  $('#show-signup').click(function () {
    $('.user-signup').show()
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
  $(document).on('click', '#empty-cart-btn', productEvents.onEmptyCart)

  $('#create-product').on('submit', productEvents.onCreateProduct)
  $('#remove-product').on('submit', productEvents.onDeleteProduct)
})
