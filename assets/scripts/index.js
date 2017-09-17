'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const authEvents = require('./auth/events.js')
const produce = require('./produce/api.js')

$(() => {
  setAPIOrigin(location, config)
  $('.carousel').carousel()
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
