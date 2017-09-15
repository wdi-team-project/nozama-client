'use strict'

// POST (ash - signup)
const onSignUp = function (event) {
  event.preventDefault()
  console.log('onSignUp')
  const data = getFormFields(event.target)
  api.signUp(data)
  .done(ui.signUpSuccess)
  .fail(ui.signUpFail)
}

// GET (ash - signin)
const onSignin = function (event) {
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
  onSignUp

}
