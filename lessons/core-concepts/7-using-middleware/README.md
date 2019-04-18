# Using Function middleware

In this lesson we will be covering how to use function middleware to re-use logic across multiple functions.

We will be using [middy](https://www.npmjs.com/package/middy) for middleware.

See [full list of middlewares](https://github.com/middyjs/middy/blob/ba65c55578c68e03280e0fabecd279f482cd405a/docs/middlewares.md)

- [Lesson Steps](#lesson-steps)
- [Complete code](#complete-code)

## Lesson Steps

1. Create the site in Netlify

    Open your terminal and run the following command:

    ```bash
    netlify init --manual
    ```

    Choose "create & configure a new site", then add a site name or hit enter for one to be generated for you.

2. Navigate to the `functions` directory

    Open your terminal and run the following command:

    ```bash
    npm init -y

    # Then install middy
    npm install middy
    ```

    This will install the `middy` npm module for us to use in the function

3. In our function, the require `middy` module & implement

  [See the middy usage docs](https://bit.ly/2VnK5gA)

  Convert the `exports.handler` function and wrap it with `middy`

  ```js
  const middy = require('middy')
  const businessLogic = (event, context, callback) => {
    // do stuff
  }
  exports.handler = middy(businessLogic)
  ```

4. In our function, import the `jsonBodyParser` middleware & `.use` it

  We also need to include a piece of middleware

  ```js
  const { jsonBodyParser } = require('middy/middlewares')
  ```

  The `jsonBodyParser` middleware will automatically `JSON.parse(event.body)` for us so we don't need to clutter up our function logic with this.

  ```js
  exports.handler = middy(businessLogic).use(jsonBodyParser())
  ```

  Inside your function's businessLogic you now can use the `body` object without parsing it.

  ```js
  const businessLogic = (event, context, callback) => {
    console.log(typeof event.body) // object
  }
  ```

6. In our function, let's implement our own custom middleware

  [Middy middleware docs](https://bit.ly/2I1Lkiv)

  ```js
  const myMiddleware = (config) => {
     We can supply config when we .use() this middleware 
    return ({
      before: (handler, next) => {
        console.log('Before', handler)
        next()
      },
      after: (handler, next) => {
        console.log('After', handler)
        next()
      },
      onError: (handler, next) => {
        console.log('onError', handler)
        next()
      }
    })
  }
  ```

  Then apply it to our function.

  ```js
  exports.handler = middy(businessLogic)
    .use(jsonBodyParser())
    .use(myMiddleware({ foo: 'bar' }))
  ```

7. Now deploy the site & functions

    Open your terminal and run the following command:

    ```bash
    netlify deploy -p
    ```

8. Verify the function is working

    Invoke the functions to verify they are returning the environment values

    Open your terminal and run the following command:

    ```bash
    curl -X GET https://your-site-url.netlify.com/.netlify/functions/using-middleware
    ```

    Or visit the URL in your browser.

    Open your site admin and visit the function logs. Verify your `console.log` is logging data

9. Bonus: Add the `validator` middleware

    [Validator middleware docs](https://github.com/middyjs/middy/blob/master/docs/middlewares.md#validator)

    The validator middleware will ensure the data into your function matches the correct shape.

    You can also validate the response out of the function.









## Complete code

If you need help or get stuck refer to the completed code of this lesson

[View Complete Code](https://github.com/DavidWells/netlify-functions-workshop/tree/master/lessons-code-complete/core-concepts/7-using-middleware)
