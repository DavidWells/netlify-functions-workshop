/* Triggered when a user tries to sign up via Identity. */
exports.handler = async (event, context) => {
  console.log('identity-validate')
  console.log('event', event)
  console.log('context', context)
  return {
    statusCode: 200,
    body: JSON.stringify({
      data: true
    })
  }
}
