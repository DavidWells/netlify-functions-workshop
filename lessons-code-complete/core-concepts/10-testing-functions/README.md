# Testing Serverless functions

In this tutorial we will cover how to test your serverless functions.

- [Lesson Steps](#lesson-steps)
- [Complete code](#complete-code)

## Lesson Steps

1. Create a `netlify.toml` file in your project.

    The `netlify.toml` file is where we configure how the site builds and where your serverless functions live.

2. In `netlify.toml`, add a `[build]` section and add `publish = "site"` and `functions = "functions"` values

3. We need to create this site in Netlify

    Open your terminal and run the following command:

    ```bash
    netlify init --manual
    ```

    Choose "create & configure a new site", then add a site name or hit enter for one to be generated for you.

4. Deploy the site and functions

    Open your terminal and run the following command:

    ```bash
    netlify deploy -p
    ```

    The `foobar` function should be live on your new site

5. Install testing tools

    Let's install the testing utilities we will be using.

    ```
    npm install ava node-fetch --save-dev
    ```

6. In `foobar.test.js`, require `ava` and `node-fetch`

7. In `foobar.test.js`, use `node-fetch` to call into your live URL to verify the response

8. Add testing command to `package.json`

    Open up `package.json` and add `scripts.test`

    ```json
    "scripts": {
      "test": "ava **.test.js --verbose"
    },
    ```

9. Run your tests

    Open your terminal and run the following command:

    ```
    npm test
    ```








## Complete code

If you need help or get stuck refer to the completed code of this lesson

[View Complete Code](https://github.com/DavidWells/netlify-functions-workshop/tree/master/lessons-code-complete/core-concepts/10-testing-functions)
