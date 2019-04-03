# Adding CORS support

Sometimes we need multiple sites to access our serverless functions.

For these cross domain api calls to work, **cors** must be enabled.

**CORS** or Cross-Origin Resource Sharing (CORS) is a mechanism that uses additional HTTP headers to let a user agent gain permission to access selected resources from a server on a different origin (domain) than the site currently in use.

This lesson will walk through creating an http function triggered by a `POST` request with **CORS** support enabled.

<!-- AUTO-GENERATED-CONTENT:START (TOC) -->
- [Lesson Steps](#lesson-steps)
- [Complete code](#complete-code)
<!-- AUTO-GENERATED-CONTENT:END -->

## Lesson Steps

<!-- AUTO-GENERATED-CONTENT:START (GENERATE_LESSONS_STEPS)-->
2. In `functions/using-cors.js`, set `headers` key of the function response object.

    Set the `"Access-Control-Allow-Origin"` & `"Access-Control-Allow-Credentials"` headers.

2. In `netlify.toml`, add a `[build]` section and add `publish` and `functions` values

3. Now deploy the `cors` enabled endpoint.

    Open your terminal and run the following command:

    ```bash
    netlify deploy
    ```
<!-- AUTO-GENERATED-CONTENT:END -->

<!-- Step 3. Now deploy the `cors` enabled endpoint.

    Open your terminal and run the following command:

    ```bash
    netlify deploy
    ```
-->

<!-- AUTO-GENERATED-CONTENT:START (README_BOTTOM) -->
## Complete code

If you need help or get stuck refer to the completed code of this lesson

[View Complete Code](https://github.com/DavidWells/netlify-functions-workshop/tree/master/lessons-code-complete/core-concepts/9-using-cors)
<!-- AUTO-GENERATED-CONTENT:END -->
