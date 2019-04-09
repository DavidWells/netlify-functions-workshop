# Protecting Endpoints

This lesson will walk through protecting function endpoints

- [Auth Options](#auth-options)
- [Lesson Steps](#lesson-steps)
- [Complete code](#complete-code)
- [Additional Resources](#additional-resources)

## Auth Options

Let's run through the list of different options for serverless [serverless auth](https://github.com/DavidWells/serverless-auth-strategies)

Then we will implement authenication using [Netlify identity](https://identity.netlify.com/)

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

4. Login to Netlify and enable identity in the site

    Open your terminal and run the following command:

    ```bash
    netlify open:admin
    ```

    This will pop open the site admin. Navigate to "identity" and enable identity.

    The identity UI can be found at `https://app.netlify.com/sites/{your-site-slug}/identity`

5. Now deploy the site & functions

    Open your terminal and run the following command:

    ```bash
    netlify deploy -p
    ```

6. Visit your site and create a user account

    Open your site with the following command

    ```bash
    netlify open:site
    ```

    Click on "Sign up" and create an account.

    Then verify your account with the email link.

7. Now lets create our protected endpoint.

  In the `functions/protected.js` function, we need to check `context` for `clientContext.user`

  The `context` parameter of a function contains information about where the function is running and a bunch of other information that is useful like auth info.

  When you run functions inside Netlify and enable Netlify identity, authorization is streamlined.

  The `context.clientContext.user` data contains the claims of the user.

8. Deploy the site again

    Open your terminal and run the following command:

    ```bash
    netlify deploy -p
    ```

    The `https://{your-site}.netlify.com/.netlify/functions/open` function should be public

    The `https://{your-site}.netlify.com/.netlify/functions/protected` function should return `'NOT ALLOWED'`

9. Login to your user account

    Then try the protected endpoint again.

    You should see the data returning to the browser.

    You can open up the console and see the `JWT` of the user. You can inspect the JWT at [JWT.io](https://jwt.io/)









## Complete code

If you need help or get stuck refer to the completed code of this lesson

[View Complete Code](https://github.com/DavidWells/netlify-functions-workshop/tree/master/lessons-code-complete/core-concepts/5-authenication)

## Additional Resources

- [Serverless Auth strategies](https://github.com/DavidWells/serverless-auth-strategies)
- [Netlify identity demo](https://identity.netlify.com/)
- [Netlify identity docs](https://www.netlify.com/docs/identity/)
- [Using Netlify Identity in a production application](https://auspicus.io/post/using-netlify-identity-in-a-production-application/#abilitytocreateaccountsprogrammatically)
