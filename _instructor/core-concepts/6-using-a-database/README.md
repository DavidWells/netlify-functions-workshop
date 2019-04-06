# Using a database

In this lesson we will be covering how to use a database persistence layer with your functions.

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

4. Choose the database type you would like to use

    There are a number of examples in this lesson. See the functions folder for all of them.

    Choose the database you want to work with

4. Now deploy the function

    Open your terminal and run the following command:

    ```bash
    netlify deploy -p
    ```
<!-- AUTO-GENERATED-CONTENT:END -->

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

<!-- Step 4. Choose the database type you would like to use

    There are a number of examples in this lesson. See the functions folder for all of them.

    Choose the database you want to work with
    
-->

<!-- Step 4. Now deploy the function

    Open your terminal and run the following command:

    ```bash
    netlify deploy -p
    ```
-->

<!-- AUTO-GENERATED-CONTENT:START (README_BOTTOM) -->
## Complete code

If you need help or get stuck refer to the completed code of this lesson

[View Complete Code](https://github.com/DavidWells/netlify-functions-workshop/tree/master/lessons-code-complete/core-concepts/6-using-a-database)
<!-- AUTO-GENERATED-CONTENT:END -->


## Additional Resources

- [Reuse SQL Database Connections in AWS Lambda](https://www.jeremydaly.com/reuse-database-connections-aws-lambda/)
