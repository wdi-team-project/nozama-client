'use strict'
const app = require('../app.js')

// POST (signup)
const signUpSuccess = (data) => {
  app.user = data.user
  console.log('ui.js signUpSuccess')
  $('#login-prompt').text('Created user ' + data.user.email + '. Sign in to start shopping!')
}

const signUpFail = (error) => {
  console.error(error)
  console.log('ui.js signUpFail')
  $('#login-prompt').text('Could not make account. Passwords did not match or username taken. Please try again.')
}

// GET (signin)
const signInSuccess = (data) => {
  app.user = data.user
  console.log(data)
  console.log('ui.js signInSuccess')
  $('login-prompt').text('Signed in as ' + app.user.email)
}

const signInFail = (error) => {
  console.error(error)
  console.log('ui.js signInFail')
  $('login-prompt').text('Login failed. Email/password combination not found')
}

// DELETE (signout)
const signOutSuccess = (data) => {
  app.user = null
  console.log(data)
  console.log('Successfully signed out!')
  $('login-prompt').text('Log in to get shopping!')
}

const signOutFail = (error) => {
  console.error(error)
}

// PATCH (changepw)

module.exports = {
  signUpSuccess,
  signUpFail,
  signInSuccess,
  signInFail,
  signOutSuccess,
  signOutFail
}
