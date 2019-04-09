const api = require('./methods')
/* Step 5. In this_file, we are going to setup our API router

    Use the `event.path` & `event.httpMethod` to determine how to handle the request
*/

exports.handler = async (event, context) => {
  const path = event.path.replace(/\.netlify\/functions\/[^/]+/, '')
  const segments = path.split('/').filter(e => e)

}
