/* Triggered when a deploy is unlocked from production and Netlify resumes autopublishing deploys. */
exports.handler = async (event, context) => {
  console.log('deploy-unlocked')
  console.log('event', event)
  console.log('context', context)
  return {
    statusCode: 200,
    body: JSON.stringify({
      data: true
    })
  }
}
