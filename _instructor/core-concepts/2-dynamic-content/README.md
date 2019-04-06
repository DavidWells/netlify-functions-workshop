# Rendering Dynamic Content

This lesson will walk you setting up an http endpoint that uses dynamic values from the URL path.

We will take the path values and return back custom HTML.

The pattern is used for dynamic server-side rendering in functions.

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

4. Create a function to use path params to dynamically render back HTML

    Inside the `functions/using-path.js` function, read the `event.path` value and grab the sub path to render back HTML.

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

5. Deploy the function

    Open your terminal and run the following command:

    ```bash
    netlify deploy -p
    ```

6. Create a function to use queryStringParameters params to dynamically render back HTML

    Inside `functions/using-query-params.js` function, read the `event.queryStringParameters` value and grab the sub path to render back HTML.

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

7. Deploy the function

    Open your terminal and run the following command:

    ```bash
    netlify deploy -p
    ```
<!-- AUTO-GENERATED-CONTENT:END -->

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

<!-- Step 5. Deploy the function

    Open your terminal and run the following command:

    ```bash
    netlify deploy -p
    ```
-->

<!-- Step 7. Deploy the function

    Open your terminal and run the following command:

    ```bash
    netlify deploy -p
    ```
-->

<!-- AUTO-GENERATED-CONTENT:START (README_BOTTOM) -->
## Complete code

If you need help or get stuck refer to the completed code of this lesson

[View Complete Code](https://github.com/DavidWells/netlify-functions-workshop/tree/master/lessons-code-complete/core-concepts/2-dynamic-content)
<!-- AUTO-GENERATED-CONTENT:END -->
