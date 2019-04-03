
# Using functions for web scraping

This lesson will walk through creating a function to send sms text messages via [Twilio](https://www.twilio.com/).

- [Lesson Steps](#lesson-steps)
- [Complete code](#complete-code)
- [Additional Resources](#additional-resources)

## Lesson Steps

1. Create a `netlify.toml` file in your project.

    The `netlify.toml` file is where we configure how the site builds and where your serverless functions live.

2. In `netlify.toml`, add a `[build]` section and add `publish` and `functions` values

3. We need to create this site in Netlify

    Open your terminal and run the following command:

    ```bash
    netlify init
    ```

    Choose manual deployments

5. After configuring your redirect, its time to deploy

    Open your terminal and run the following command:

    ```bash
    netlify deploy -p
    ```

6. Invoke the function to ensure it's working properly

    Visit your site and the URL https://your-site-url.netlify.com/.netlify/functions/redirect

    It should redirect you to a new location.







1. Sign up for a [Twilio account](http://www.twilio.com)

2. Create a [new phone number](https://www.twilio.com/console/phone-numbers/) in your Twilio trial account

3. Grab your ACCOUNT SID and AUTH TOKEN from the [Twilio console](https://www.twilio.com/console) and plug those into the Netlify admin UI


## Complete code

If you need help or get stuck refer to the completed code of this lesson

[View Complete Code](https://github.com/DavidWells/netlify-functions-workshop/tree/master/lessons-code-complete/use-cases/8-sending-sms)

## Additional Resources

- [How to send text messages from your static site using Netlify, Twilio and serverless functions](https://dev.to/twilio/how-to-send-text-messages-from-your-static-site-using-netlify-twilio-and-serverless-functions-24ci)
