const DB = require('s3-db')
const { S3_BUCKET_NAME } = process.env
const db = new DB()

var cachedDb

function connectToDatabase(bucketName) {
  console.log('=> connect to database')

  if (cachedDb) {
    console.log('=> using cached database instance')
    return Promise.resolve(cachedDb)
  }

  return db.getCollection(bucketName).then((db) => {
    cachedDb = db
    return cachedDb
  })
}

exports.handler = async (event, context) => {
  try {
    const data = JSON.parse(event.body)

    const collection = await connectToDatabase(S3_BUCKET_NAME)

    /* save person to s3 */
    const response = await collection.saveDocument({
      id: 'my-user-stats',
      boo: true,
      lol: 'wow'
    })

    console.log(response)

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Let's become serverless conductors!!!"
      })
    }
  } catch (e) {
    console.log(e)
    return {
      statusCode: 500,
      body: e.mssage
    }
  }
}
