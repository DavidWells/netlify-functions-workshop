/* Triggered when a form submission is posted to your site. */
exports.handler = async (event, context) => {
  console.log('split-test-deactivated')
  console.log('event', event)
  console.log('context', context)
  return {
    statusCode: 200,
    body: 'Hello, World'
  }
}
