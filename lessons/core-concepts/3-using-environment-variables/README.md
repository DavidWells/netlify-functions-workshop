# Using environment variables

Environment variables are used for setting sensitive information such as secret API keys.

They keep things out of source control and are used very frequently in CI/CD flows.

This lesson will teach you the basics of using environment variables in lambda functions.

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

4. Login to your Netlify site

    Navigate to deploys and build environment settings

    Here we need to set an environment variable we will access through our function

    Add a `MY_ENV_VAR` key and a value of `foobar`

    See the [build environment variable docs](https://www.netlify.com/docs/continuous-deployment/#build-environment-variables)

5. In `functions/using-variables.js`, access the newly created environment variables

    Lambda environment variables are accessible on the `process.env` object in node.

    `process.env.[YourEnvKeyName]`

    Return the environment variable in the `foo` function response

6. Now deploy the site & functions

    Open your terminal and run the following command:

    ```bash
    netlify deploy -p
    ```

7. Verify the environment variables are set by invoking your function

    Invoke the functions to verify they are returning the environment values

    Open your terminal and run the following command:

    ```bash
    curl -X GET https://your-site-url.netlify.com/.netlify/functions/using-variables
    ```

    Or visit the URL in your browser







## Complete code

If you need help or get stuck refer to the completed code of this lesson

[View Complete Code](https://github.com/DavidWells/netlify-functions-workshop/tree/master/lessons-code-complete/core-concepts/3-using-environment-variables)
