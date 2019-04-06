/* Anyone can access this function */

exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `Hi anyone can access me`
    })
  }
}
