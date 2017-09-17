'use strict'
const app = require('../app.js')
const config = require('../config.js')

// POST (signup)
const signUp = function (data) {
  console.log(data)
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
  console.log(data)
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
  console.log(data)
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
  console.log(app.user)
  console.log(app.user.token)
  console.log(data)
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

// Add Product to user Cart
const addProduct = (data) => {
  return $.ajax({
    url: app.host + '/users' + app.user.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token= ' + app.user.token
    },
    data: {
      'products': {
        'title': 'banana',
        'price': 2
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
