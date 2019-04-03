const Airtable = require('airtable')
const { AIRTABLE_API_KEY, AIRTABLE_BASE, AIRTABLE_TABLE } = process.env

Airtable.configure({
  apiKey: AIRTABLE_API_KEY
})

const saveUser = async ({ name, email, message }) => {
  return new Promise((resolve, reject) => {
    const base = Airtable.base(AIRTABLE_BASE)
    base(AIRTABLE_TABLE).create({ name, email, message }, (err, resp) => {
      if (err) {
        return reject(err)
      }
      return resolve(resp)
    })
  })
}

exports.handler = async (event, context) => {
  try {
    const data = JSON.parse(event.body)

    /* save person to airtable */
    const response = await saveUser(data)
    console.log(response)

    return {
      statusCode: 200,
      body: JSON.stringify({
        data: response
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
