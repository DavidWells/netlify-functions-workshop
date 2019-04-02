/* Step 5. In this_file, `require` in the new `faker` npm module

  In the response include the `faker.name.findName()` in the message.
*/
exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `Hi [NAME HERE]`,
    })
  }
}
