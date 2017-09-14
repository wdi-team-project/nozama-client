'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')

$(() => {
  setAPIOrigin(location, config)
})

$(() => {
$('#sign-up-modal').hide()
$('#sign-in-modal').hide()
$('#user-logout').hide()
$('#change-pw').hide()
})
