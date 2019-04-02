// FINAL_START
const faker = require('faker')
// FINAL_END
/* Step 5. In this_file, `require` in the new `faker` npm module

  In the response include the `faker.name.findName()` in the message.
*/
exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      // WORKSHOP_START
      message: `Hi [NAME HERE]`,
      // WORKSHOP_END
      // FINAL_START
      message: `Hi ${faker.name.findName()}`,
      // FINAL_END
    })
  }
}
