/* Triggered when Netlify starts building a site for deployment. */
exports.handler = function(event, context, callback) {
  console.log('deploy-building')
  console.log('event', event)
  console.log('context', context)
  return callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      data: true
    })
  })
}
