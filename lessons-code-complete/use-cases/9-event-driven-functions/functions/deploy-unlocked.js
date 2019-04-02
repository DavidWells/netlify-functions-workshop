/* Triggered when a deploy is unlocked from production and Netlify resumes autopublishing deploys. */
exports.handler = function(event, context, callback) {
  console.log('deploy-unlocked')
  console.log('event', event)
  console.log('context', context)
  return callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      data: true
    })
  })
}
