/* Triggered when Netlify fails to deploy a site. */
exports.handler = async (event, context) => {
  console.log('deploy-failed')
  console.log('event', event)
  console.log('context', context)
  return {
    statusCode: 200,
    body: JSON.stringify({
      data: true
    })
  }
}
