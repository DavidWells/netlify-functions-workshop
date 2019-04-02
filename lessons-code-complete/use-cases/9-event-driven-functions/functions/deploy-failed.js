/* Triggered when Netlify fails to deploy a site. */
exports.handler = function(event, context, callback) {
  console.log('deploy-failed')
  console.log('event', event)
  console.log('context', context)
  return callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      data: true
    })
  })
}
