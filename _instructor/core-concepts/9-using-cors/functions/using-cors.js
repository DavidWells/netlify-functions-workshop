// WORKSHOP_START
/* Step 1. In this_file, set `headers` key of the function response object.

    Set the `"Access-Control-Allow-Origin"` & `"Access-Control-Allow-Credentials"` headers.
*/
// WORKSHOP_END
exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    // FINAL_START
    headers: {
      /* Required for CORS support to work */
      'Access-Control-Allow-Origin': '*',
      /* Required for cookies, authorization headers with HTTPS */
      'Access-Control-Allow-Credentials': true
    },
    // FINAL_END
    body: JSON.stringify({
      message: 'Hi ⊂◉‿◉つ',
      event: event,
    })
  }
}
