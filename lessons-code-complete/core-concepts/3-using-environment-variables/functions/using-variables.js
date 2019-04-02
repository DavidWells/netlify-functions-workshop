exports.handler = async (event, context) => {
  console.log('process.env.MY_ENV_VAR', process.env.MY_ENV_VAR)
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      headers: {
        /* Required for CORS support to work */
        "Access-Control-Allow-Origin" : "*",
        /* Required for cookies, authorization headers with HTTPS */
        "Access-Control-Allow-Credentials" : true
      },
      message: `hello ${process.env.MY_ENV_VAR}`
    }),
  }
  return callback(null, response)
}
