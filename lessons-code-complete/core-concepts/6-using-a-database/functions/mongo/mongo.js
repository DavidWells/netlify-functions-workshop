const { MongoClient } = require('mongodb')
const { MONGODB_URI } = process.env

let cachedDb = null

function connectToDatabase (uri) {
  console.log('=> connect to database')

  if (cachedDb) {
    console.log('=> using cached database instance')
    return Promise.resolve(cachedDb)
  }

  return MongoClient.connect(uri).then((db) => {
    cachedDb = db
    return cachedDb
  })
}

exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false

  let result
  try {
    const db = await connectToDatabase(MONGODB_URI)
    result = await db.collection('items').find({}).toArray()
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
