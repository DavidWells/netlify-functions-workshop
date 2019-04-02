/* Step 4. Create a function to use path params to dynamically render back HTML

    Inside the this_file function, read the `event.path` value and grab the sub path to render back HTML.

    Set the response body with the dynamic HTML. Below is a helper function. Any type of templating engine can be used.

    ```js
    const generateHtml = (name = 'there') => {
      return `
      <html lang="en">
        <head>
          <meta charset="utf-8">
        </head>
        <body>
          <h1>Hi ${name}</h1>
        </body>
      </html>`
    }
    ```

    Finally remember to set the headers of the response as `'Content-Type': 'text/html'` to return HTML instead of the default `json`
 */

exports.handler = async (event, context) => {
  // WORKSHOP_START
  console.log('event.path', event.path)
  // WORKSHOP_END
  // FINAL_START
  const path = event.path.replace(/\/\.netlify\/functions\/[^/]*\//, '')
  const pathParts = (path) ? path.split('/') : []

  const generateHtml = (name = 'there') => {
    /** For security *always* escape output html
      const safeValues = escapeHtml(name)
    */
    return `
    <html lang="en">
      <head>
        <meta charset="utf-8">
      </head>
      <body>
        <h1>Hi ${name}</h1>
      </body>
    </html>`
  }

  return {
    'statusCode': 200,
    'headers': {
      'Cache-Control': 'no-cache',
      'Content-Type': 'text/html',
    },
    'body': generateHtml(pathParts[0])
  }
  // FINAL_END
}
