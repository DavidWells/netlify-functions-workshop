# Using functions for REST APIs

This lesson will walk through using functions as a REST backend.

<!-- AUTO-GENERATED-CONTENT:START (TOC) -->
- [Lesson Steps](#lesson-steps)
- [Other examples](#other-examples)
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

4. Create your API function

    Create a function name `api` in the `/functions` folder

5. In `functions/api.js`, we are going to setup our API router

    Use the `event.path` & `event.httpMethod` to determine how to handle the request

6. Create your API function

    Create a function name `api` in the `/functions` folder

    <details>
    <summary>"See code"</summary>

    ```bash
    exports.handler = async (event, context) => {
      const path = event.path.replace(/\.netlify\/functions\/[^/]+/, '')
      const segments = path.split('/').filter(e => e)

      switch (event.httpMethod) {
        case 'GET':
          // GET /.netlify/functions/api
          if (segments.length === 0) {
            return api.readAll(event, context)
          }
          // GET /.netlify/functions/api/123456
          if (segments.length === 1) {
            event.id = segments[0]
            return api.read(event, context)
          } else {
            return {
              statusCode: 500,
              body: 'too many segments in GET request'
            }
          }
        // POST /.netlify/functions/api
        case 'POST':
          return api.create(event, context)
        // PUT /.netlify/functions/api/123456 
        case 'PUT':
          if (segments.length === 1) {
            event.id = segments[0]
            return api.update(event, context)
          } else {
            return {
              statusCode: 500,
              body: 'invalid segments in POST request, must be /.netlify/functions/api/123456'
            }
          }
        // DELETE /.netlify/functions/api/123456
        case 'DELETE':
          if (segments.length === 1) {
            event.id = segments[0]
            return api.delete(event, context)
          } else {
            return {
              statusCode: 500,
              body: 'invalid segments in DELETE request, must be /.netlify/functions/api/123456'
            }
          }
        // Fallthrough case
        default:
          return {
            statusCode: 500,
            body: 'unrecognized HTTP Method, must be one of GET/POST/PUT/DELETE'
          }
      }
    }
    ```
    </details>

7. Create a `/functions/methods` folder

    We will add in our logic to handling the different routes here

8. Install the function dependencies

    Change directories into your functions folder and install the dependencies

    ```bash
    cd functions && npm install
    ```

    This will install the `fauandb` sdk our functions will use to talk to our database.

    Install the faunaDB addon

    ```
    netlify addons:create fauna
    ```

    Scaffold our database schema

    ```
    npm run setup
    ```

9. Deploy the site

    Open your terminal and run the following command:

    ```bash
    netlify deploy -p
    ```

    Visit the frontend to verify your api works!
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

<!-- Step 4. Create your API function

    Create a function name `api` in the `/functions` folder

-->

<!-- Step 6. Create your API function

    Create a function name `api` in the `/functions` folder

    <details>
    <summary>"See code"</summary>

    ```bash
    exports.handler = async (event, context) => {
      const path = event.path.replace(/\.netlify\/functions\/[^/]+/, '')
      const segments = path.split('/').filter(e => e)

      switch (event.httpMethod) {
        case 'GET':
          // GET /.netlify/functions/api
          if (segments.length === 0) {
            return api.readAll(event, context)
          }
          // GET /.netlify/functions/api/123456
          if (segments.length === 1) {
            event.id = segments[0]
            return api.read(event, context)
          } else {
            return {
              statusCode: 500,
              body: 'too many segments in GET request'
            }
          }
        // POST /.netlify/functions/api
        case 'POST':
          return api.create(event, context)
        // PUT /.netlify/functions/api/123456 */
        case 'PUT':
          if (segments.length === 1) {
            event.id = segments[0]
            return api.update(event, context)
          } else {
            return {
              statusCode: 500,
              body: 'invalid segments in POST request, must be /.netlify/functions/api/123456'
            }
          }
        // DELETE /.netlify/functions/api/123456
        case 'DELETE':
          if (segments.length === 1) {
            event.id = segments[0]
            return api.delete(event, context)
          } else {
            return {
              statusCode: 500,
              body: 'invalid segments in DELETE request, must be /.netlify/functions/api/123456'
            }
          }
        // Fallthrough case
        default:
          return {
            statusCode: 500,
            body: 'unrecognized HTTP Method, must be one of GET/POST/PUT/DELETE'
          }
      }
    }
    ```
    </details>

-->

<!-- Step 7. Create a `/functions/methods` folder

    We will add in our logic to handling the different routes here
    
-->

<!-- Step 8. Install the function dependencies

    Change directories into your functions folder and install the dependencies

    ```bash
    cd functions && npm install
    ```

    This will install the `fauandb` sdk our functions will use to talk to our database.

    Install the faunaDB addon

    ```
    netlify addons:create fauna
    ```

    Scaffold our database schema

    ```
    npm run setup
    ```
-->

<!-- Step 9. Deploy the site

    Open your terminal and run the following command:

    ```bash
    netlify deploy -p
    ```

    Visit the frontend to verify your api works!
-->


## Other examples

- [Using Express](https://github.com/netlify/addons/blob/master/examples/netlify-functions/functions/addons.js)
- [Using Serverless + API gateway](https://github.com/DavidWells/serverless-workshop/blob/83566b0ead08853e07f11b55791efcd6657906d7/lessons-code-complete/core-concepts/1-http-hello-world/serverless.yml#L11-L14)

<!-- AUTO-GENERATED-CONTENT:START (README_BOTTOM) -->
## Complete code

If you need help or get stuck refer to the completed code of this lesson

[View Complete Code](https://github.com/DavidWells/netlify-functions-workshop/tree/master/lessons-code-complete/use-cases/1-rest-api)
<!-- AUTO-GENERATED-CONTENT:END -->
