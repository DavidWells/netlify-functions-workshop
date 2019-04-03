# Deploying Your First Endpoint

This lesson will walk through creating a basic hello world function.

We will be creating 2 lambda functions.

1. The first using the `callback` param
2. The second using ES6 `async/await`

- [Lesson Steps](#lesson-steps)
- [Complete code](#complete-code)

## Lesson Steps

1. Create a `netlify.toml` file in your project.

    The `netlify.toml` file is where we configure how the site builds and where your serverless functions live.

2. In `netlify.toml`, add a `[build]` section and add `publish = "site"` and `functions = "functions"` values

3. We need to create this site in Netlify

    Open your terminal and run the following command:

    ```bash
    netlify init
    ```

    Choose manual deployments

4. Lets add our first add-on

    Open your terminal and run the following command:

    ```bash
    netlify addons:create fauna
    ```

    This will scaffold out a Fauna DB noSQL database for us to use in our functions






## Complete code

If you need help or get stuck refer to the completed code of this lesson

[View Complete Code](https://github.com/DavidWells/netlify-functions-workshop/tree/master/lessons-code-complete/core-concepts/8-using-addons)
