# Deploying Your First Endpoint

This lesson will walk through creating a basic hello world function.

We will be creating 2 lambda functions.

1. The first using the `callback` param
2. The second using ES6 `async/await`

<!-- AUTO-GENERATED-CONTENT:START (TOC) -->
- [Lesson Steps](#lesson-steps)
- [Complete code](#complete-code)
<!-- AUTO-GENERATED-CONTENT:END -->

## Lesson Steps

<!-- AUTO-GENERATED-CONTENT:START (GENERATE_LESSONS_STEPS)-->
1. Create a `netlify.toml` file in your project.

    The `netlify.toml` file is where we configure how the site builds and where your serverless functions live.

2. In `netlify.toml`, add a `[build]` section and add `publish = "site"` and `functions = "functions"` values

3. In `functions/hello-world.js`, Create a `200` response code and return the `event` data in the response body.

    The response needs a `statusCode` and a `body` object returned. Remember to `JSON.stringify` the body.

    For more details, see the [docs](https://bit.ly/2uEFyKU)

3. We need to create this site in Netlify

    Open your terminal and run the following command:

    ```bash
    netlify init --manual
    ```

    Choose "create & configure a new site", then add a site name or hit enter for one to be generated for you.

4. After your handler is returning a response, it's time to deploy.

    Open your terminal and run the following command:

    ```bash
    netlify deploy -p
    ```

5. Invoke the function to ensure it's working properly

    Open your terminal and run the command:

    ```bash
    curl -X GET https://your-site-url.netlify.com/.netlify/functions/hello-world
    ```

    Or visit your site and the URL https://your-site-url.netlify.com/.netlify/functions/hello-world

    Notice that the function file name corresponds with the URL in which it will live.

6. Create additional function in the `functions` folder named `hello-world-async`

    We are going to create an `async` lambda function.

    `async` functions don't use the `callback` to return a response and also allow us to use `await` inside our function body for cleaner code.

    ```js
    exports.handler = async (event, context) => {
      // function logic
    }
    ```

7. Create the async function response

    In `functions/hello-world-async.js`, Create a `200` response code and return the `event` data in the response body.

    The response needs a `statusCode` and a `body` object returned. Remember to `JSON.stringify` the body.

    For more details, see the [docs](https://bit.ly/2uEFyKU)

    Remember this is an `async` function and we don't need to use the `callback` to return the response

8. Deploy the new function

    To deploy your new functions run `deploy` again

    ```bash
    netlify deploy -p
    ```

    `-p` or `--prod` tells the Netlify CLI to deploy this to the live URL.
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

<!-- Step 4. After your handler is returning a response, it's time to deploy.

    Open your terminal and run the following command:

    ```bash
    netlify deploy -p
    ```
-->

<!-- Step 5. Invoke the function to ensure it's working properly

    Open your terminal and run the command:

    ```bash
    curl -X GET https://your-site-url.netlify.com/.netlify/functions/hello-world
    ```

    Or visit your site and the URL https://your-site-url.netlify.com/.netlify/functions/hello-world

    Notice that the function file name corresponds with the URL in which it will live.

-->

<!-- Step 6. Create additional function in the `functions` folder named `hello-world-async`

    We are going to create an `async` lambda function.

    `async` functions don't use the `callback` to return a response and also allow us to use `await` inside our function body for cleaner code.

    ```js
    exports.handler = async (event, context) => {
      // function logic
    }
    ```

-->

<!-- Step 8. Deploy the new function

    To deploy your new functions run `deploy` again

    ```bash
    netlify deploy -p
    ```

    `-p` or `--prod` tells the Netlify CLI to deploy this to the live URL.

-->

<!-- AUTO-GENERATED-CONTENT:START (README_BOTTOM) -->
## Complete code

If you need help or get stuck refer to the completed code of this lesson

[View Complete Code](https://github.com/DavidWells/netlify-functions-workshop/tree/master/lessons-code-complete/core-concepts/1-hello-world)
<!-- AUTO-GENERATED-CONTENT:END -->
