'use strict'
const app = require('../app.js')

// POST (signup)
const signUpSuccess = (data) => {
  app.user = data.user
  console.log('ui.js signUpSuccess')
  $('#login-prompt').text('Created user ' + data.user.email + '. Sign in to start shopping!')
  $('.user-signup').hide()
  $('.user-signin').show()
}

const signUpFail = (error) => {
  console.error(error)
  console.log('ui.js signUpFail')
  $('#login-prompt').text('Could not make account. Passwords did not match or username taken. Please try again.')
  $('.user-signup').hide()
  $('#show-signup').show()
}

// GET (signin)
const signInSuccess = (data) => {
  app.user = data.user
  console.log(data)
  console.log('ui.js signInSuccess')
  $('#login-prompt').text('Welcome ' + data.user.email + '!')
  $('.user-signin').hide()
  $('.user-signout').show()
  $('#show-change-pw').show()
  $('#show-my-cart').show()
  $('#empty-cart').show()
  $('#create-field').show()
  $('#delete-field').show()
}

const signInFail = (error) => {
  console.error(error)
  console.log('ui.js signInFail')
  $('#login-prompt').text('Login failed. Email/password combination not found. Please try again')
  $('.user-signin').hide()
  $('#show-signin').show()
  $('#show-signup').show()
  $('#already-prompt').show()
}

// DELETE (signout)
const signOutSuccess = (data) => {
  app.user = null
  console.log(data)
  console.log('ui.js signOutSuccess')
  $('#login-prompt').text('Log in to get shopping!')
  $('#show-change-pw').hide()
  $('#show-my-cart').hide()
  $('#user-signout').hide()
  $('#empty-cart').hide()
  $('#show-signup').show()
  $('#show-signin').show()
  $('#already-prompt').show()
  $('#create-field').hide()
  $('#delete-field').hide()
}

const signOutFail = (error) => {
  console.error(error)
}

// PATCH (changepw)

const changePasswordSuccess = (data) => {
  console.log('ui.js changePasswordSuccess')
  $('#login-prompt').text('Password successfully changed. Signed in as ' + app.user.email)
  $('.change-password').hide()
  $('.show-change-pw').show()
  $('.user-signout').show()
  $('#show-my-cart').show()
}

const changePasswordFail = (error) => {
  console.error(error)
  $('#login-prompt').text('Could not change password. Please try again.')
  $('.change-password').hide()
  $('#show-change-pw').show()
}

module.exports = {
  signUpSuccess,
  signUpFail,
  signInSuccess,
  signInFail,
  signOutSuccess,
  signOutFail,
  changePasswordSuccess,
  changePasswordFail
}
