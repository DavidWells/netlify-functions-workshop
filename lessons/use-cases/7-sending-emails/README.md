# Using functions for sending email

This lesson will walk through creating a function to send emails.

There are two examples: [Mailgun](./functions/mailgun) & [Sendgrid](./functions/sendgrid)

- [Lesson Steps](#lesson-steps)
- [Complete code](#complete-code)
- [Additional Resources](#additional-resources)

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

5. After configuring your redirect, its time to deploy

    Open your terminal and run the following command:

    ```bash
    netlify deploy -p
    ```

6. Invoke the function to ensure it's working properly

    Visit your site and the URL https://your-site-url.netlify.com/.netlify/functions/redirect

    It should redirect you to a new location.







## Complete code

If you need help or get stuck refer to the completed code of this lesson

[View Complete Code](https://github.com/DavidWells/netlify-functions-workshop/tree/master/lessons-code-complete/use-cases/7-sending-emails)


## Additional Resources

- [Serverless User Engagement with AWS Lambda, SendGrid, BadgeUp and Node.js](https://codeburst.io/serverless-user-engagement-with-aws-lambda-sendgrid-badgeup-and-node-js-53cdc4fa1ddd)
- [Sendgrid Send HTML Email](https://github.com/BadgeUp/badgeup-serverless-email-demo/blob/a686df908d77713271142dbae285f322db670969/index.js)
