# Using functions to set cookies

This lesson will walk through using functions to set browser cookies.

<!-- AUTO-GENERATED-CONTENT:START (TOC) -->
- [Lesson Steps](#lesson-steps)
- [Complete code](#complete-code)
<!-- AUTO-GENERATED-CONTENT:END -->

## Lesson Steps

<!-- AUTO-GENERATED-CONTENT:START (GENERATE_LESSONS_STEPS)-->
1. Create a `netlify.toml` file in your project.

    The `netlify.toml` file is where we configure how the site builds and where your serverless functions live.

2. In `netlify.toml`, add a `[build]` section and add `publish = "site"` and `functions = "functions"` values

3. We need to create this site in Netlify

    Open your terminal and run the following command:

    ```bash
    netlify init --manual
    ```

    Choose "create & configure a new site", then add a site name or hit enter for one to be generated for you.

4. In `functions/set-cookie.js`, include the `cookie` npm module

    We will be using the [cookie](https://www.npmjs.com/package/cookie) module to set cookie headers in the response.

5. In `functions/set-cookie.js`, use the cookie module to generate a new cookie string

      We will use the `cookie.serialize` method and set the `secure` option to `true`

      Set `maxAge` to 2 weeks. Below is a helper function to set 2 week cookie life

      ```js
      const hour = 3600000
      const twoWeeks = 14 * 24 * hour
      ```

6. In `functions/set-cookie.js`, choose a redirect URL to send visitors to after we set our cookie

7. In `functions/set-cookie.js`, we will be using html meta refresh as our redirect mechanism

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

8. In `functions/set-cookie.js`, return the response

    Set the `statusCode` to 200

    Set the `headers['Set-Cookie']` value to your cookie string value

    Set the `headers['Content-Type']` to `'text/html'` and return our generated html in the `body`

9. Its time to deploy!

    Open your terminal and run the following command:

    ```bash
    netlify deploy -p
    ```

10. Invoke the function to ensure it's working properly

    Visit your site and the URL https://your-site-url.netlify.com/.netlify/functions/set-cookie

    It should set a cookie in your browser and redirect you to a new location.

    Open up your site homepage and verify the httpOnly cookie has been set via the browser developer tools.
<!-- AUTO-GENERATED-CONTENT:END -->

<!-- SCROLL UP FOR STEPS -->

<!-- Step 1. Create a `netlify.toml` file in your project.

    The `netlify.toml` file is where we configure how the site builds and where your serverless functions live.

-->

<!-- Step 3. We need to create this site in Netlify

    Open your terminal and run the following command:

    ```bash
    netlify init --manual
    ```

    Choose "create & configure a new site", then add a site name or hit enter for one to be generated for you.
-->

<!-- Step 9. Its time to deploy!

    Open your terminal and run the following command:

    ```bash
    netlify deploy -p
    ```
-->

<!-- Step 10. Invoke the function to ensure it's working properly

    Visit your site and the URL https://your-site-url.netlify.com/.netlify/functions/set-cookie

    It should set a cookie in your browser and redirect you to a new location.

    Open up your site homepage and verify the httpOnly cookie has been set via the browser developer tools.

-->

<!-- AUTO-GENERATED-CONTENT:START (README_BOTTOM) -->
## Complete code

If you need help or get stuck refer to the completed code of this lesson

[View Complete Code](https://github.com/DavidWells/netlify-functions-workshop/tree/master/lessons-code-complete/use-cases/4-setting-cookies)
<!-- AUTO-GENERATED-CONTENT:END -->
