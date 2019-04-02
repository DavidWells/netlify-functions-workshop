/* Triggered when a form submission is posted to your site. */
exports.handler = function(event, context, callback) {
  console.log('split-test-deactivated')
  console.log('event', event)
  console.log('context', context)
  return callback(null, {
    statusCode: 200,
    body: "Hello, World"
  })
}
