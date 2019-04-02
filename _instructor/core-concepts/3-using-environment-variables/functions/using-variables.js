// WORKSHOP_START
/* Step 5. In this_file, access the newly created environment variables

    Lambda environment variables are accessible on the `process.env` object in node.

    `process.env.[YourEnvKeyName]`

    Return the environment variable in the `foo` function response
*/
// WORKSHOP_END
exports.handler = async (event, context) => {
  // FINAL_START
  console.log('process.env.MY_ENV_VAR', process.env.MY_ENV_VAR)
  // FINAL_END
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      headers: {
        /* Required for CORS support to work */
        "Access-Control-Allow-Origin" : "*",
        /* Required for cookies, authorization headers with HTTPS */
        "Access-Control-Allow-Credentials" : true
      },
      // WORKSHOP_START
      message: 'return env variable here'
      // WORKSHOP_END
      // FINAL_START
      message: `hello ${process.env.MY_ENV_VAR}`
      // FINAL_END
    }),
  }
  return callback(null, response)
}
