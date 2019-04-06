# Using Function middleware

In this lesson we will be covering how to use function middleware to re-use logic across multiple functions.

We will be using [middy](https://www.npmjs.com/package/middy) for middleware.

See [full list of middlewares](https://github.com/middyjs/middy/blob/ba65c55578c68e03280e0fabecd279f482cd405a/docs/middlewares.md)

<!-- AUTO-GENERATED-CONTENT:START (TOC) -->
- [Lesson Steps](#lesson-steps)
- [Complete code](#complete-code)
<!-- AUTO-GENERATED-CONTENT:END -->

## Lesson Steps

<!-- AUTO-GENERATED-CONTENT:START (GENERATE_LESSONS_STEPS)-->
2. In `netlify.toml`, add a `[build]` section and add `publish = "site"` and `functions = "functions"` values

3. Now deploy the `cors` enabled endpoint.

    Open your terminal and run the following command:

    ```bash
    netlify deploy -p
    ```
<!-- AUTO-GENERATED-CONTENT:END -->

<!-- Step 3. Now deploy the `cors` enabled endpoint.

    Open your terminal and run the following command:

    ```bash
    netlify deploy -p
    ```
-->

<!-- AUTO-GENERATED-CONTENT:START (README_BOTTOM) -->
## Complete code

If you need help or get stuck refer to the completed code of this lesson

[View Complete Code](https://github.com/DavidWells/netlify-functions-workshop/tree/master/lessons-code-complete/core-concepts/7-using-middleware)
<!-- AUTO-GENERATED-CONTENT:END -->
