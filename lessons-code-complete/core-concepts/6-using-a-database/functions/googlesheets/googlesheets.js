const { google } = require('googleapis')
const { GOOGLE_SERVICE_ACCOUNT, SPREADSHEET_ID } = process.env

const getClient = ({ scopes }) => {
  return google.auth.getClient({
    credentials: JSON.parse(Buffer.from(GOOGLE_SERVICE_ACCOUNT, 'base64').toString('ascii')),
    scopes: scopes,
  })
}

const authorizeSheets = async () => {
  const client = await getClient({
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  })
  return google.sheets({
    version: 'v4',
    auth: client,
  })
}

const addToCol = async (range, emailAddress) => {
  const sheets = await authorizeSheets()
  return new Promise((resolve, reject) => {
    sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range,
      valueInputOption: 'USER_ENTERED',
      resource: {
        values: [[emailAddress]],
      },
    },
    (err, response) => {
      if (err) {
        return reject(err)
      }
      return resolve(response)
    })
  })
}

exports.handler = async (event, context, callback) => {
  let sheetsResponse
  try {
    const body = JSON.parse(event.body)
    const { email } = body
    sheetsResponse = await addToCol('Local!F2', email)
  } catch (err) {
    console.log(err)
    return {
      statusCode: 500,
      body: err.toString()
    }
  }

  return {
    statusCode: sheetsResponse.status,
    body: JSON.stringify(sheetsResponse)
  }
}
