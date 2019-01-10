'use strict'
const app = require('../app.js')

// POST (signup)
const signUpSuccess = (data) => {
  app.user = data.user
  $('#login-prompt').text('Created user ' + data.user.email + '. Sign in to start shopping!')
  $('.user-signup').hide()
  $('.user-signin').show()
  $('#show-signin').hide()
  $('#show-signup').show()
  $('#sign-up-alert').children().remove()
  $('input').val('')
  $('#show-my-cart').show()

}

const signUpFail = (error) => {
  console.error(error)
  $('#login-prompt').text('Could not make account. Username Taken. Please try again.')
  $('#sign-up-alert').children().remove()
  $('input').val('')
}

// GET (signin)
const signInSuccess = (data) => {
  app.user = data.user
  $('#login-prompt').text('Welcome ' + data.user.email + '!')
  $('.user-signin').hide()
  $('.user-signout').show()
  $('.user-signup').hide()
  $('#show-change-pw').show()
  $('#show-my-cart').show()
  $('#empty-cart').show()
  $('#create-field').show()
  $('#delete-field').show()
  $('#show-signup').hide()
  $('input').val('')
}

const signInFail = (error) => {
  console.error(error)
  $('#login-prompt').text('Login failed. Email/password combination not found. Please try again')
  $('.user-signin').hide()
  $('#show-signin').show()
  $('#show-signup').show()
  $('#already-prompt').show()
  $('input').val('')
}

// DELETE (signout)
const signOutSuccess = (data) => {
  app.user = null
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
  $('input').val('')
}

const signOutFail = (error) => {
  console.error(error)
}

// PATCH (changepw)

const changePasswordSuccess = (data) => {
  $('#login-prompt').text('Password successfully changed. Signed in as ' + app.user.email)
  $('.change-password').hide()
  $('#show-change-pw').show()
  $('.user-signout').show()
  $('#show-my-cart').show()
  $('input').val('')
}

const changePasswordFail = (error) => {
  console.error(error)
  $('#login-prompt').text('Original Password Incorrect. Please try again.')
  $('.change-password').hide()
  $('#show-change-pw').show()
  $('input').val('')
}

const passwordMatchFail = () => {
  $('#login-prompt').text('')
  $('#sign-up-alert').children().remove()
  $('#sign-up-alert').append(
    '<p> Password Confirmation Incorrect </p>'
  )
}

module.exports = {
  signUpSuccess,
  signUpFail,
  signInSuccess,
  signInFail,
  signOutSuccess,
  signOutFail,
  changePasswordSuccess,
  changePasswordFail,
  passwordMatchFail
}
