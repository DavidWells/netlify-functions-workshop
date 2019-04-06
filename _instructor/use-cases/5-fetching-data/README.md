# Using functions to fetch external API data

This lesson will walk through creating a function that will fetch data from third party APIs

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
    netlify init --manual
    ```

    Choose "create & configure a new site", then add a site name or hit enter for one to be generated for you. 

5. After configuring your redirect, its time to deploy

    Open your terminal and run the following command:

    ```bash
    netlify deploy -p
    ```

6. Invoke the function to ensure it's working properly

    Visit your site and the URL https://your-site-url.netlify.com/.netlify/functions/node-fetch

    It should redirect you to a new location.
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

<!-- Step 5. After configuring your redirect, its time to deploy

    Open your terminal and run the following command:

    ```bash
    netlify deploy -p
    ```
-->

<!-- Step 6. Invoke the function to ensure it's working properly

    Visit your site and the URL https://your-site-url.netlify.com/.netlify/functions/node-fetch

    It should redirect you to a new location.

-->

<!-- AUTO-GENERATED-CONTENT:START (README_BOTTOM) -->
## Complete code

If you need help or get stuck refer to the completed code of this lesson

[View Complete Code](https://github.com/DavidWells/netlify-functions-workshop/tree/master/lessons-code-complete/use-cases/5-fetching-data)
<!-- AUTO-GENERATED-CONTENT:END -->
