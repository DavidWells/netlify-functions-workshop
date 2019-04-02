exports.handler = async (event, context) => {
  // WORKSHOP_START
  /* Step 4. In this_file, set `headers` key of the function response object.

      Set the `"Location"` & `"Cache-Control"` headers to redirect the `GET` request to a new URL.
  */
  return {}
  // WORKSHOP_END
  // FINAL_START

  const redirectUrl = 'https://google.com'

  return {
    statusCode: 302,
    headers: {
      Location: redirectUrl,
      'Cache-Control': 'no-cache',
    },
    body: JSON.stringify({})
  }
  // FINAL_END
}
