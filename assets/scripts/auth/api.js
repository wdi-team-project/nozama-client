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


module.exports = {
  signUp,
  signIn,
  signOut

}
