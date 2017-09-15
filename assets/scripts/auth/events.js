'use strict'
const api = require('./api.js')
const getFormFields = require('../../../lib/get-form-fields.js')
const ui = require('./ui.js')

// POST (ash - signup)
const onSignUp = function (event) {
  console.log('onSignUp1')
  event.preventDefault()
  console.log('onSignUp')
  const data = getFormFields(event.target)
  api.signUp(data)
  .done(ui.signUpSuccess)
  .fail(ui.signUpFail)
}

// GET (ash - signin)
const onSignIn = function (event) {
  event.preventDefault()
  console.log('onSignIn')
  const data = getFormFields(event.target)
  api.signIn(data)
  .done(ui.signInSuccess)
  .fail(ui.signInFail)
}

// DELETE (will - signout)


// PATCH (will - changepw)


module.exports = {
  onSignUp,
  onSignIn

}
