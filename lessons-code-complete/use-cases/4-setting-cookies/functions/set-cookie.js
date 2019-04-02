exports.handler = async (event, context) => {

  const redirectUrl = 'https://google.com'

  return {
    statusCode: 302,
    headers: {
      Location: redirectUrl,
      'Cache-Control': 'no-cache',
    },
    body: JSON.stringify({})
  }
}
