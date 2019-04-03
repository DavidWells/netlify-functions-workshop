/* Triggered when Netlify starts building a site for deployment. */
exports.handler = async (event, context) => {
  console.log('deploy-building')
  console.log('event', event)
  console.log('context', context)
  return {
    statusCode: 200,
    body: JSON.stringify({
      data: true
    })
  }
}
