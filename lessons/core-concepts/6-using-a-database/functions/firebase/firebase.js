const firebaseAdmin = require('firebase-admin')
const {
  FIREBASE_DATABASE_URL,
  FIREBASE_PROJECT_ID,
  FIREBASE_CLIENT_EMAIL,
  FIREBASE_PRIVATE_KEY
} = process.env

firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert({
    projectId: FIREBASE_PROJECT_ID,
    clientEmail: FIREBASE_CLIENT_EMAIL,
    privateKey: FIREBASE_PRIVATE_KEY
  }),
  databaseURL: FIREBASE_DATABASE_URL
})

const firestore = firebaseAdmin.firestore()

exports.handler = async (event, context) => {
  const { email, subscriptionId } = event.queryStringParameters

  console.log('Searched email: ' + email)
  console.log('Searched subscription ID: ' + subscriptionId)

  const searchKey = email.length > 0 ? 'email' : 'subscriptionId'
  const searchQuery = email.length > 0 ? email : subscriptionId

  let userInfo
  try {
    const query = await firestore
      .collection('users')
      .where(searchKey, '==', searchQuery)
      .limit(1)
      .get()

    if (query.empty) {
      return {
        statusCode: 404,
        body: JSON.stringify({
          message: 'User not found'
        })
      }
    }

    userInfo = query.docs[0].data()
    console.log(userInfo)
  } catch (error) {
    console.log(error)
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: error.message
      })
    }
  }

  return {
    statusCode: 200,
    body: JSON.stringify(userInfo)
  }
}
