# Deploying Your First Endpoint

This lesson will walk through creating a basic hello world function.

We will be creating 2 lambda functions.

1. The first using the `callback` param
2. The second using ES6 `async/await`

<!-- AUTO-GENERATED-CONTENT:START (TOC) -->
- [Lesson Steps](#lesson-steps)
- [Add-on CLI commands](#add-on-cli-commands)
- [Frontend source code](#frontend-source-code)
- [Complete code](#complete-code)
<!-- AUTO-GENERATED-CONTENT:END -->

## Lesson Steps

<!-- AUTO-GENERATED-CONTENT:START (GENERATE_LESSONS_STEPS)-->
1. We need to create this site in Netlify

    Open your terminal and run the following command:

    ```bash
    netlify init --manual
    ```

    Choose "create & configure a new site", then add a site name or hit enter for one to be generated for you.

2. Lets add our first add-on

    Open your terminal and run the following command:

    ```bash
    netlify addons:create fauna
    ```

    This will scaffold out a Fauna DB noSQL database for us to use in our functions.

3. Create the fauna schema!

    In order to use our fauna database we need to setup a data schema for it to use.

    In the root directory of this lesson, install the `package.json` dependencies

    ```
    npm install
    ```

    Then we will be executing a script that will setup our database. That script lives in `./scripts/setup-schema.js`

    We will be using the `netlify dev:exec` command to run this. It will automatically inject our new fauna addon `env` variables into the process.

    ```bash
    netlify dev:exec npm run setup
    ```

    Alternatively, you can get your `add-on` environment variables by running the following command:

    ```
    netlify addons:list --json
    ```

    Then you could manually set your enviroment variables

    ```
    export FAUNADB_SERVER_SECRET=YourValue
    ```

4. Install the function dependencies

    Change directories into your functions folder and install the dependencies

    ```bash
    cd functions && npm install
    ```

    This will install the `fauandb` sdk our functions will use to talk to our database

5. Deploy the site

    Open your terminal and run the following command:

    ```bash
    netlify deploy -p
    ```

6. Visit your site

    ```bash
    netlify open:site
    ```

    You should have a working todo application!

7. Optionally try the one click install

    Visit [https://github.com/netlify/fauna-one-click](https://github.com/netlify/fauna-one-click) and click the "Deploy to Netlify" button

    This will automatically setup our site + repo and the fauna add-on
<!-- AUTO-GENERATED-CONTENT:END -->

<!-- SCROLL UP FOR STEPS -->

<!-- Step 1. We need to create this site in Netlify

    Open your terminal and run the following command:

    ```bash
    netlify init --manual
    ```

    Choose "create & configure a new site", then add a site name or hit enter for one to be generated for you.
-->

<!-- Step 2. Lets add our first add-on

    Open your terminal and run the following command:

    ```bash
    netlify addons:create fauna
    ```

    This will scaffold out a Fauna DB noSQL database for us to use in our functions.

-->

<!-- Step 3. Create the fauna schema!

    In order to use our fauna database we need to setup a data schema for it to use.

    In the root directory of this lesson, install the `package.json` dependencies

    ```
    npm install
    ```

    Then we will be executing a script that will setup our database. That script lives in `./scripts/setup-schema.js`

    We will be using the `netlify dev:exec` command to run this. It will automatically inject our new fauna addon `env` variables into the process.

    ```bash
    netlify dev:exec npm run setup
    ```

    Alternatively, you can get your `add-on` environment variables by running the following command:

    ```
    netlify addons:list --json
    ```

    Then you could manually set your enviroment variables

    ```
    export FAUNADB_SERVER_SECRET=YourValue
    ```
-->

<!-- Step 4. Install the function dependencies

    Change directories into your functions folder and install the dependencies

    ```bash
    cd functions && npm install
    ```

    This will install the `fauandb` sdk our functions will use to talk to our database

-->

<!-- Step 5. Deploy the site

    Open your terminal and run the following command:

    ```bash
    netlify deploy -p
    ```
-->

<!-- Step 6. Visit your site

    ```bash
    netlify open:site
    ```

    You should have a working todo application!

-->

<!-- Step 7. Optionally try the one click install

    Visit [https://github.com/netlify/fauna-one-click](https://github.com/netlify/fauna-one-click) and click the "Deploy to Netlify" button

    This will automatically setup our site + repo and the fauna add-on
-->

## Add-on CLI commands

1. Create and add-on

    ```bash
    netlify addons:create name
    ```

2. Delete an add-on

    ```bash
    netlify addons:delete name
    ```

3. Update an add-on

    ```bash
    netlify addons:config name
    ```   

4. Execute scripts with add-on env variables

    ```bash
    netlify dev:exec command
    ```   

## Frontend source code

For the frontend source code of this lesson visit [https://github.com/netlify/netlify-faunadb-example](https://github.com/netlify/netlify-faunadb-example)

<!-- AUTO-GENERATED-CONTENT:START (README_BOTTOM) -->
## Complete code

If you need help or get stuck refer to the completed code of this lesson

[View Complete Code](https://github.com/DavidWells/netlify-functions-workshop/tree/master/lessons-code-complete/core-concepts/8-using-addons)
<!-- AUTO-GENERATED-CONTENT:END -->
