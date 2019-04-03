// WORKSHOP_START
/* Step 4. In this_file, include the `cookie` npm module

    We will be using the [cookie](https://www.npmjs.com/package/cookie) module to set cookie headers in the response.
*/
// WORKSHOP_END
// FINAL_START
const cookie = require('cookie')
// FINAL_END

exports.handler = async (event, context) => {
  // WORKSHOP_START
  /* Step 5. In this_file, use the cookie module to generate a new cookie string

      We will use the `cookie.serialize` method and set the `secure` option to `true`

      Set `maxAge` to 2 weeks. Below is a helper function to set 2 week cookie life

      ```js
      const hour = 3600000
      const twoWeeks = 14 * 24 * hour
      ```
  */
  // WORKSHOP_END
  // FINAL_START
  const hour = 3600000
  const twoWeeks = 14 * 24 * hour
  const myCookie = cookie.serialize('my_cookie', 'lolHi', {
    secure: true,
    httpOnly: true,
    path: '/',
    maxAge: twoWeeks,
  })
  // FINAL_END
  // WORKSHOP_START
  /* Step 6. In this_file, choose a redirect URL to send visitors to after we set our cookie */
  const redirectUrl = 'https://google.com'

  /* Step 7. In this_file, we will be using html meta refresh as our redirect mechanism

    Because we are setting cookies from a `GET` request, we are returning back HTML to the browser to handle our final redirect.

    ```js
    const html = `
    <html lang="en">
      <head>
        <meta charset="utf-8">
      </head>
      <body>
        <noscript>
          <meta http-equiv="refresh" content="0; url=${redirectUrl}" />
        </noscript>
      </body>
      <script>
        setTimeout(function() {
          window.location.href = ${JSON.stringify(redirectUrl)}
        }, 0)
      </script>
    </html>`
    ```
  */


  /* Step 8. In this_file, return the response

    Set the `statusCode` to 200

    Set the `headers['Set-Cookie']` value to your cookie string value

    Set the `headers['Content-Type']` to `'text/html'` and return our generated html in the `body`

  */
  // WORKSHOP_END
  // FINAL_START
  const redirectUrl = 'https://google.com'
  // Do redirects via html
  const html = `
  <html lang="en">
    <head>
      <meta charset="utf-8">
    </head>
    <body>
      <noscript>
        <meta http-equiv="refresh" content="0; url=${redirectUrl}" />
      </noscript>
    </body>
    <script>
      setTimeout(function() {
        window.location.href = ${JSON.stringify(redirectUrl)}
      }, 0)
    </script>
  </html>`

  return {
    'statusCode': 200,
    'headers': {
      'Set-Cookie': myCookie,
      'Cache-Control': 'no-cache',
      'Content-Type': 'text/html',
    },
    'body': html
  }
  // FINAL_END
}
