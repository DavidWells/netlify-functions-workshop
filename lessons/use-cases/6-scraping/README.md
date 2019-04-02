# Using functions for web scraping

This lesson will walk through creating a function scrape websites.

There are 2 methods for doing this:

1. Requesting sites and parsing via the `cheerio` module
2. Using `headless-chrome` a.k.a `puppeteer`

- [Lesson Steps](#lesson-steps)
- [Complete code](#complete-code)

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






## Complete code

If you need help or get stuck refer to the completed code of this lesson

[View Complete Code](https://github.com/DavidWells/netlify-functions-workshop/tree/master/lessons-code-complete/use-cases/6-scraping)
