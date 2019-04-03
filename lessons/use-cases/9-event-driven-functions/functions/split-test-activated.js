/* Triggered when a split test is activated. */
exports.handler = async (event, context) => {
  console.log('split-test-activated')
  console.log('event', event)
  console.log('context', context)
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hello, World'
    })
  }
}
