/* Triggered when a split test is deactivated. */
exports.handler = async (event, context) => {
  console.log('split-test-deactivated')
  console.log('event', event)
  console.log('context', context)
  return {
    statusCode: 200,
    body: 'Hello, World'
  }
}
