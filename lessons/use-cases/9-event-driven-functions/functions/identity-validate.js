/* Triggered when a user tries to sign up via Identity. */
exports.handler = function(event, context, callback) {
  console.log('identity-validate')
  console.log('event', event)
  console.log('context', context)
  return callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      data: true
    })
  })
}
