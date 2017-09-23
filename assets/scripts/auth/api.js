'use strict'
const app = require('../app.js')

// POST (signup)
const signUp = function (data) {
  return $.ajax({
    url: app.host + '/sign-up',
    headers: {'header': 'Content-Type: application/json'},
    method: 'POST',
    data: {
      'credentials': {
        'email': data.credentials.email,
        'password': data.credentials.password,
        'password_confirmation': data.credentials.password
      }
    }
  })
}

// GET (signin)
const signIn = function (data) {
  return $.ajax({
    url: app.host + '/sign-in',
    headers: {'header': 'Content-Type: application/json'},
    method: 'POST',
    data: {
      'credentials': {
        'email': data.credentials.email,
        'password': data.credentials.password
      }
    }
  })
}

// DELETE (signout)
const signOut = (data) => {
  return $.ajax({
    url: app.host + '/sign-out/' + app.user.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

// PATCH (changepw)
const changePassword = (data) => {
  return $.ajax({
    url: app.host + '/change-password/' + app.user.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    data: {
      'passwords': {
        'old': data.credentials.password,
        'new': data.credentials.newpassword
      }
    }
  })
}

module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword
}
