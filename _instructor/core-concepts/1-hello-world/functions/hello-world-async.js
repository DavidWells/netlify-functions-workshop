exports.handler = async (event, context) => {
  // WORKSHOP_START
  /* Step 7. Create the async function response

    In this_file, Create a `200` response code and return the `event` data in the response body.

    The response needs a `statusCode` and a `body` object returned. Remember to `JSON.stringify` the body.

    For more details, see the [docs](https://bit.ly/2uEFyKU)

    Remember this is an `async` function and we don't need to use the `callback` to return the response
  */
  const response = {}
  return response
  // WORKSHOP_END
  // FINAL_START
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hi ⊂◉‿◉つ',
      event: event,
    })
  }
  // FINAL_END
}
