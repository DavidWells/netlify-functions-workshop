# Protecting Endpoints

This lesson will walk through protecting function endpoints

<!-- AUTO-GENERATED-CONTENT:START (TOC) -->
- [Lesson Steps](#lesson-steps)
- [Complete code](#complete-code)
<!-- AUTO-GENERATED-CONTENT:END -->

## Lesson Steps

<!-- AUTO-GENERATED-CONTENT:START (GENERATE_LESSONS_STEPS)-->
1. Create a `netlify.toml` file in your project.

    The `netlify.toml` file is where we configure how the site builds and where your serverless functions live.

2. In `netlify.toml`, add a `[build]` section and add `publish` and `functions` values

3. We need to create this site in Netlify

    Open your terminal and run the following command:

    ```bash
    netlify init
    ```

    Choose manual deployments

4. Login to Netlify and enable identity in the site

    Open your terminal and run the following command:

    ```bash
    netlify open:admin
    ```

    This will pop open the site admin. Navigate to "identity" and enable identity.

5. In `functions/protected.js`, check `context` for `clientContext.user`

  The `context` parameter of a function contains information about where the function is running and a bunch of other information that is useful like auth info.

  When you run functions inside Netlify and enable Netlify identity, authorization is streamlined.

  The `context.clientContext.user` data contains the claims of the user.

5. Create `protected.js` and check

    Open your terminal and run the following command:

    ```bash
    netlify addons:create fauna
    ```

    This will scaffold out a Fauna DB noSQL database for us to use in our functions
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

<!-- Step 4. Login to Netlify and enable identity in the site

    Open your terminal and run the following command:

    ```bash
    netlify open:admin
    ```

    This will pop open the site admin. Navigate to "identity" and enable identity.

-->


<!-- Step 5. Create `protected.js` and check

    Open your terminal and run the following command:

    ```bash
    netlify addons:create fauna
    ```

    This will scaffold out a Fauna DB noSQL database for us to use in our functions
-->


<!-- AUTO-GENERATED-CONTENT:START (README_BOTTOM) -->
## Complete code

If you need help or get stuck refer to the completed code of this lesson

[View Complete Code](https://github.com/DavidWells/netlify-functions-workshop/tree/master/lessons-code-complete/core-concepts/6-authenication)
<!-- AUTO-GENERATED-CONTENT:END -->
