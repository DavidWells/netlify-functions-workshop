const stripeSdk = require('stripe')
const stripe = stripeSdk(process.env.STRIPE_SECRET_KEY)

exports.handler = async (event, context) => {
  if (!event.body || event.httpMethod !== 'POST') {
    return {
      statusCode: 400,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type'
      },
      body: JSON.stringify({
        status: 'invalid-method'
      })
    }
  }

  const data = JSON.parse(event.body)

  if (!data.token || !data.amount || !data.idempotency_key) {
    console.error('Required information is missing.')

    return {
      statusCode: 400,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type'
      },
      body: JSON.stringify({
        status: 'missing-information'
      })
    }
  }

  /* Do stripe payment processing */
  let charge
  try {
    charge = await stripe.charges.create({
      currency: 'usd',
      amount: data.amount,
      source: data.token.id,
      receipt_email: data.token.email,
      description: `charge for a widget`
    }, {
      idempotency_key: data.idempotency_key
    })
  } catch (err) {
    console.log(err)
  }
  const status = (!charge || charge.status !== 'succeeded') ? 'failed' : charge.status
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type'
    },
    body: JSON.stringify({
      status: status
    })
  }
}
