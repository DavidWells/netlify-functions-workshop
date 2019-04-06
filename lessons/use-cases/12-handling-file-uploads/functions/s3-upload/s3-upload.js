const AWS = require('aws-sdk')
const { MY_AWS_ACCESS_KEY_ID, MY_AWS_SECRET_ACCESS_KEY, S3_BUCKET_NAME } = process.env

const s3 = new AWS.S3({
  signatureVersion: 'v4',
  credentials: new AWS.Credentials(MY_AWS_ACCESS_KEY_ID, MY_AWS_SECRET_ACCESS_KEY)
})

module.exports.handler = async (event, context) => {
  const body = JSON.parse(event.body)
  const { fileName, fileType } = body

  if (!fileName && !fileType) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: 'Missing fileName or fileType on body'
      }),
    }
  }

  const s3Params = {
    Bucket: S3_BUCKET_NAME,
    Key: fileName,
    ContentType: fileType,
    ACL: 'public-read', /* Note: change if files are NOT public */
    /* Optionally add additional data
    Metadata: {
      foo: 'bar',
      lol: 'hi'
    }
    */
  }

  const uploadURL = s3.getSignedUrl('putObject', s3Params)

  return {
    statusCode: 200,
    body: JSON.stringify({
      uploadURL: uploadURL
    }),
  }
}
