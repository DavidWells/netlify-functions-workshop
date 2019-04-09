const api = require('./methods')
// WORKSHOP_START
/* Step 5. In this_file, we are going to setup our API router

    Use the `event.path` & `event.httpMethod` to determine how to handle the request
*/
// WORKSHOP_END

exports.handler = async (event, context) => {
  const path = event.path.replace(/\.netlify\/functions\/[^/]+/, '')
  const segments = path.split('/').filter(e => e)

  // FINAL_START
  switch (event.httpMethod) {
    case 'GET':
      /* GET /.netlify/functions/api */
      if (segments.length === 0) {
        return api.readAll(event, context)
      }
      /* GET /.netlify/functions/api/123456 */
      if (segments.length === 1) {
        event.id = segments[0]
        return api.read(event, context)
      } else {
        return {
          statusCode: 500,
          body: 'too many segments in GET request'
        }
      }
    /* POST /.netlify/functions/api */
    case 'POST':
      return api.create(event, context)
    /* PUT /.netlify/functions/api/123456 */
    case 'PUT':
      if (segments.length === 1) {
        event.id = segments[0]
        return api.update(event, context)
      } else {
        return {
          statusCode: 500,
          body: 'invalid segments in POST request, must be /.netlify/functions/api/123456'
        }
      }
    /* DELETE /.netlify/functions/api/123456 */
    case 'DELETE':
      if (segments.length === 1) {
        event.id = segments[0]
        return api.delete(event, context)
      } else {
        return {
          statusCode: 500,
          body: 'invalid segments in DELETE request, must be /.netlify/functions/api/123456'
        }
      }
    /* Fallthrough case */
    default:
      return {
        statusCode: 500,
        body: 'unrecognized HTTP Method, must be one of GET/POST/PUT/DELETE'
      }
  }
  // FINAL_END
}
