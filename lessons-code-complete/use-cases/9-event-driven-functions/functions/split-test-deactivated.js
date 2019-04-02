/* Triggered when a split test is deactivated. */
exports.handler = function(event, context, callback) {
  console.log('split-test-deactivated')
  console.log('event', event)
  console.log('context', context)
  return callback(null, {
    statusCode: 200,
    body: "Hello, World"
  })
}
