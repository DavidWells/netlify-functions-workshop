/* Triggered when Netlify finishes deploying a site. */
exports.handler = async (event, context) => {
  console.log('deploy-succeeded')
  console.log('event', event)
  console.log('context', context)
  return {
    statusCode: 200,
    body: JSON.stringify({
      data: true
    })
  }
}
