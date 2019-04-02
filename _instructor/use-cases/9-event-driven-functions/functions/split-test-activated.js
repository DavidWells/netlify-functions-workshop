/* Triggered when a split test is activated. */
exports.handler = function(event, context, callback) {
  console.log('split-test-activated')
  console.log('event', event)
  console.log('context', context)
  return callback(null, {
    statusCode: 200,
    body: "Hello, World"
  })
}
