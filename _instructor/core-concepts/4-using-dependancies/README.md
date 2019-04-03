# Using NPM dependencies

This lesson will walk through creating a basic function using an `npm` module.

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
    netlify init
    ```

    Choose manual deployments

4. Navigate to the `functions` directory

    Open your terminal and run the following command:

    ```bash
    npm init -y

    # Then install faker
    npm install faker
    ```

    This will install the `faker` npm module for us to use in the function

5. In `functions/using-npm-modules.js`, `require` in the new `faker` npm module

  In the response include the `faker.name.findName()` in the message.

6. Now deploy the site & functions

    Open your terminal and run the following command:

    ```bash
    netlify deploy
    ```

    Your function should now be using the bundled npm dependencies when you invoke the function

7. Invoke the function to ensure it's working properly
<!-- AUTO-GENERATED-CONTENT:END -->

<!-- SCROLL UP FOR STEPS -->

<!-- Step 1. Create a `netlify.toml` file in your project.

    The `netlify.toml` file is where we configure how the site builds and where your serverless functions live.

-->

<!-- Step 3. We need to create this site in Netlify

    Open your terminal and run the following command:

    ```bash
    netlify init
    ```

    Choose manual deployments
-->

<!-- Step 4. Navigate to the `functions` directory

    Open your terminal and run the following command:

    ```bash
    npm init -y

    # Then install faker
    npm install faker
    ```

    This will install the `faker` npm module for us to use in the function
-->

<!-- Step 6. Now deploy the site & functions

    Open your terminal and run the following command:

    ```bash
    netlify deploy
    ```

    Your function should now be using the bundled npm dependencies when you invoke the function
-->

<!-- Step 7. Invoke the function to ensure it's working properly -->

<!-- AUTO-GENERATED-CONTENT:START (README_BOTTOM) -->
## Complete code

If you need help or get stuck refer to the completed code of this lesson

[View Complete Code](https://github.com/DavidWells/netlify-functions-workshop/tree/master/lessons-code-complete/core-concepts/4-using-dependancies)
<!-- AUTO-GENERATED-CONTENT:END -->
