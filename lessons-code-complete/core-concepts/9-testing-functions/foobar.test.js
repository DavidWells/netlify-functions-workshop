
const test = require('ava')
const fetch = require('node-fetch')
const siteUrl = process.env.URL || 'https://determined-brown-d8d1b5.netlify.com'
const functionsUrl = `${siteUrl}/.netlify/functions`

test('return valid response', async t => {
  const foobarEndpoint = `${functionsUrl}/foobar`

  const res = await fetch(foobarEndpoint, {
    method: 'get'
  })

  console.log(`url: ${res.url}`)
  console.log(`res.ok: ${res.ok}`)
  console.log(`res.status: ${res.status}`)
  console.log(`res.statusText: ${res.statusText}\n`)

  t.is(res.status, 200)

  const body = await res.json()

  t.is(body.success, true)
})
