const mailgunSdk = require('mailgun-js')
const apiKey = process.env.MAILGUN_API_KEY
const domain = `mail.${process.env.DOMAIN}`
const mailgun = mailgunSdk({ apiKey, domain })

exports.handler = async (event, context, callback) => {
  const data = JSON.parse(event.body)

  let response
  try {
    /* Send email to recicipent */
    response = await mailgun.messages().send({
      to: data.to,
      from: data.from,
      subject: data.subject,
      text: data.text,
    })
  } catch (e) {
    console.log('Err', e)
    return {
      statusCode: e.statusCode || 500,
      body: JSON.stringify({
        error: e.message
      })
    }
  }

  return {
    statusCode: 200,
    body: JSON.stringify({
      result: response.message
    })
  }
}
