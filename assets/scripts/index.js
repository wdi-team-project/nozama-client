'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const authEvents = require('./auth/events.js')

$(() => {
  setAPIOrigin(location, config)
})

$(() => {
// $('#sign-up-modal').hide()
// $('#sign-in-modal').hide()
// $('#user-signout').hide()
// $('#change-pw').hide()
})

$
$('.user-signup').on('submit', authEvents.onSignUp)
$('.user-signin').on('submit', authEvents.onSignIn)
