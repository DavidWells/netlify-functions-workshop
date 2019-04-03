const sendGrid = require('@sendgrid/client')
const { SENDGRID_API_KEY, SENDGRID_SENDER_EMAIL, SENDGRID_SENDER_NAME } = process.env

/* initialize sendgrid client */
sendGrid.setApiKey(SENDGRID_API_KEY)

exports.handler = async (event, context) => {
  const body = JSON.parse(event.body)
  const email = body.email

  let response
  try {
    /* Add email to recicipent list https://bit.ly/2FPVNd3 */
    await await sendGrid.request({
      method: 'POST',
      url: '/v3/contactdb/recipients',
      body: [{
        email: email
      }]
    })

    /* Send email to recicipent https://bit.ly/2UjC5AR */
    response = await sendGrid.request({
      method: 'POST',
      url: '/v3/mail/send',
      body: {
        from: {
          email: SENDGRID_SENDER_EMAIL,
          name: SENDGRID_SENDER_NAME
        },
        reply_to: {
          email: SENDGRID_SENDER_EMAIL
        },
        personalizations: [{
          to: [{
            email: email
          }],
          subject: 'Hello, World!'
        }],
        content: [
          {
            type: 'text/plain',
            value: 'Hello, World!'
          }
        ]
        // template_id: 'YourTemplateId'
      }
    })
  } catch (e) {
    console.log('Error', e)
    return {
      statusCode: e.statusCode || 500,
      body: JSON.stringify({
        error: e.message
      })
    }
  }

  return {
    statusCode: response.statusCode,
    body: JSON.stringify({
      message: `${email} added`
    })
  }
}
