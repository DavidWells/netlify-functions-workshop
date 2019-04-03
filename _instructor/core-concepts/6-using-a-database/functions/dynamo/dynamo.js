const AWS = require('aws-sdk')
const {
  MY_AWS_ACCESS_KEY_ID,
  MY_AWS_SECRET_ACCESS_KEY,
  MY_AWS_REGION,
  MY_AWS_TABLE_NAME
} = process.env

const dynamoDb = new AWS.DynamoDB.DocumentClient({
  region: MY_AWS_REGION,
  credentials: new AWS.Credentials(
    MY_AWS_ACCESS_KEY_ID,
    MY_AWS_SECRET_ACCESS_KEY
  )
})

exports.handler = async (event, context) => {
  let result
  try {
    const body = JSON.parse(event.body)
    /* insert item to dynamo table */
    result = await dynamoDb.put({
      TableName: MY_AWS_TABLE_NAME,
      Item: {
        id: body.id,
        name: body.name
      }
    }).promise()
    console.log('result', result)
  } catch (error) {
    console.log('error', error)
    return {
      statusCode: error.statusCode || 500,
      body: JSON.stringify({
        message: error.message
      })
    }
  }

  return {
    statusCode: 200,
    body: JSON.stringify({
      data: result
    })
  }
}
