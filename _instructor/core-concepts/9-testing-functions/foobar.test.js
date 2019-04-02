// FINAL_START
/* Step 6. In this_file, require `ava` and `node-fetch` */
const test = require('ava')
const fetch = require('node-fetch')
// FINAL_END
// FINAL_START
const siteUrl = process.env.URL || 'https://determined-brown-d8d1b5.netlify.com'
const functionsUrl = `${siteUrl}/.netlify/functions`
// FINAL_END
/* Step 7. In this_file, use `node-fetch` to call into your live URL to verify the response */
test('return valid response', async t => {
  // FINAL_START
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
  // FINAL_END
})
