/* Triggered when a deploy is locked in production and Netlify stops autopublishing deploys. */
exports.handler = function(event, context, callback) {
  console.log('deploy-locked')
  console.log('event', event)
  console.log('context', context)
  return callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      data: true
    })
  })
}
