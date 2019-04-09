# Fauna Todo

Fauna Todo with netlify identity.

This example showcases how to use Netlify identity and Fauna DB together.

[fauna-todo](https://github.com/sw-yx/netlify-fauna-todo)

<!-- AUTO-GENERATED-CONTENT:START (TOC) -->
- [Lesson Steps](#lesson-steps)
- [Other examples](#other-examples)
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

4. Lets add our first add-on

    Open your terminal and run the following command:

    ```bash
    netlify addons:create fauna
    ```

    This will scaffold out a Fauna DB noSQL database for us to use in our functions.

5. Create the fauna schema!

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

6. Install the function dependencies

    Change directories into your functions folder and install the dependencies

    ```bash
    cd functions && npm install
    ```

    This will install the `fauandb` sdk our functions will use to talk to our database

7. Deploy the site

    Open your terminal and run the following command:

    ```bash
    netlify deploy -p
    ```

8. Visit your site

    ```bash
    netlify open:site
    ```

    You should have a working todo application!

9. Optionally try the one click install

    Visit [https://github.com/netlify/fauna-one-click](https://github.com/netlify/fauna-one-click) and click the "Deploy to Netlify" button

    This will automatically setup our site + repo and the fauna add-on
<!-- AUTO-GENERATED-CONTENT:END -->

<!-- SCROLL UP FOR STEPS -->

<!-- Step 1. Clone the project

    ```
    git clone git@github.com:sw-yx/netlify-fauna-todo.git
    ```

    And install the dependencies

    ```
    npm install
    ```

-->

<!-- Step 2. We need to create this site in Netlify

    Open your terminal and run the following command:

    ```bash
    netlify init --manual
    ```

    Choose "create & configure a new site", then add a site name or hit enter for one to be generated for you.
-->

<!-- Step 4. Lets add our first add-on

    Open your terminal and run the following command:

    ```bash
    netlify addons:create fauna
    ```

    This will scaffold out a Fauna DB noSQL database for us to use in our functions.

-->

<!-- Step 5. Create the fauna schema!

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

<!-- Step 6. Install the function dependencies

    Change directories into your functions folder and install the dependencies

    ```bash
    cd functions && npm install
    ```

    This will install the `fauandb` sdk our functions will use to talk to our database

-->

<!-- Step 7. Deploy the site

    Open your terminal and run the following command:

    ```bash
    netlify deploy -p
    ```
-->

<!-- Step 8. Visit your site

    ```bash
    netlify open:site
    ```

    You should have a working todo application!

-->

<!-- Step 9. Optionally try the one click install

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
