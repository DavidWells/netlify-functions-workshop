/* Triggered when a user logs in via Netlify Identity */
exports.handler = function (event, context, callback) {
  console.log('identity-login')
  console.log('event', event)
  console.log('context', context)
  return callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      data: true
    })
  })
}
