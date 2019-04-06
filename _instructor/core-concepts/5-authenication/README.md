# Protecting Endpoints

This lesson will walk through protecting function endpoints

<!-- AUTO-GENERATED-CONTENT:START (TOC) -->
- [Lesson Steps](#lesson-steps)
- [Complete code](#complete-code)
- [Additional Resources](#additional-resources)
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

6. Invoke the function to ensure it's working properly
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

<!-- Step 4. Login to Netlify and enable identity in the site

    Open your terminal and run the following command:

    ```bash
    netlify open:admin
    ```

    This will pop open the site admin. Navigate to "identity" and enable identity.

    The identity UI can be found at `https://app.netlify.com/sites/{your-site-slug}/identity`

-->

<!-- Step 5. Now deploy the site & functions

    Open your terminal and run the following command:

    ```bash
    netlify deploy -p
    ```

-->

<!-- Step 6. Visit your site and create a user account

    Open your site with the following command

    ```bash
    netlify open:site
    ```

    Click on "Sign up" and create an account.

    Then verify your account with the email link.

-->

<!-- Step 8. Deploy the site again

    Open your terminal and run the following command:

    ```bash
    netlify deploy -p
    ```

    The `https://{your-site}.netlify.com/.netlify/functions/open` function should be public

    The `https://{your-site}.netlify.com/.netlify/functions/protected` function should return `'NOT ALLOWED'`

-->

<!-- Step 9. Invoke the function to ensure it's working properly -->

<!-- AUTO-GENERATED-CONTENT:START (README_BOTTOM) -->
## Complete code

If you need help or get stuck refer to the completed code of this lesson

[View Complete Code](https://github.com/DavidWells/netlify-functions-workshop/tree/master/lessons-code-complete/core-concepts/5-authenication)
<!-- AUTO-GENERATED-CONTENT:END -->

## Additional Resources

- [Netlify identity demo](https://identity.netlify.com/)
- [Netlify identity docs](https://www.netlify.com/docs/identity/)
- [Using Netlify Identity in a production application](https://auspicus.io/post/using-netlify-identity-in-a-production-application/#abilitytocreateaccountsprogrammatically)
