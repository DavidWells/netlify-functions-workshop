const faker = require('faker')

exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `Hi ${faker.name.findName()}`,
    })
  }
}
