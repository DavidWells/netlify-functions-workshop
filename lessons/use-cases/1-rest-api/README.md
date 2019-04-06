# Using functions for REST APIs

This lesson will walk through using functions as a REST backend.

- [Lesson Steps](#lesson-steps)
- [Other examples](#other-examples)
- [Complete code](#complete-code)

## Lesson Steps

1. Create a `netlify.toml` file in your project.

    The `netlify.toml` file is where we configure how the site builds and where your serverless functions live.

3. We need to create this site in Netlify

    Open your terminal and run the following command:

    ```bash
    netlify init --manual
    ```

    Choose "create & configure a new site", then add a site name or hit enter for one to be generated for you.

4. Deploy the site

    Open your terminal and run the following command:

    ```bash
    netlify deploy -p
    ```





## Other examples

- [Using Express](https://github.com/netlify/addons/blob/master/examples/netlify-functions/functions/addons.js)

## Complete code

If you need help or get stuck refer to the completed code of this lesson

[View Complete Code](https://github.com/DavidWells/netlify-functions-workshop/tree/master/lessons-code-complete/use-cases/1-rest-api)
