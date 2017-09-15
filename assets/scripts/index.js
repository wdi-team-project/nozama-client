'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const authEvents = require('./auth/events.js')
const produce = require('./produce/api.js')

$(() => {
  setAPIOrigin(location, config)
})

$(() => {
// $('#sign-up-modal').hide()
// $('#sign-in-modal').hide()
// $('#user-signout').hide()
// $('#change-pw').hide()
  $('.productBtn').on('load', produce.getProduct())
})

$('.user-signup').on('submit', authEvents.onSignUp)
$('.user-signin').on('submit', authEvents.onSignIn)
