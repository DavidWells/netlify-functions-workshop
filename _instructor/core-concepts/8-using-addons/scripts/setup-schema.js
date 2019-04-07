/* bootstrap database in your FaunaDB account */
const readline = require('readline')
const faunadb = require('faunadb')
const insideNetlify = insideNetlifyBuildContext()
const q = faunadb.query

console.log('Attempting to creating your FaunaDB Database schema...\n')

// 1. Check for required enviroment variables
if (!process.env.FAUNADB_SERVER_SECRET) {
  console.log('Required FAUNADB_SERVER_SECRET enviroment variable not found.')
  if (insideNetlify) {
    console.log(`Visit https://app.netlify.com/sites/YOUR_SITE_HERE/settings/deploys`)
    console.log('and set a `FAUNADB_SERVER_SECRET` value in the "Build environment variables" section')
    process.exit(1)
  }
  // Local machine warning
  if (!insideNetlify) {
    console.log()
    console.log('You can create fauna DB keys here: https://dashboard.fauna.com/db/keys')
    console.log()
    ask('Enter your faunaDB server key', (err, answer) => {
      if (err) {
        console.log(err)
      }
      if (!answer) {
        console.log('Please supply a faunaDB server key')
        process.exit(1)
      }
      createFaunaDB(process.env.FAUNADB_SERVER_SECRET).then(() => {
        console.log('Database created')
      })
    })
  }
}

// Has var. Do the thing
if (process.env.FAUNADB_SERVER_SECRET) {
  createFaunaDB(process.env.FAUNADB_SERVER_SECRET).then(() => {
    console.log('Database schema created!')
  })
}

/* idempotent operation */
function createFaunaDB(key) {
  console.log('Create the database!')
  const client = new faunadb.Client({
    secret: key
  })

  /* Based on your requirements, change the schema here */
  return client.query(q.Create(q.Ref('classes'), { name: 'todos' }))
    .then(() => {
      return client.query(
        q.Create(q.Ref('indexes'), {
          name: 'all_todos',
          source: q.Ref('classes/todos')
        }))
    }).catch((e) => {
      // Database already exists
      if (e.requestResult.statusCode === 400 && e.message === 'instance not unique') {
        console.log('Your database schema already exists')
        throw e
      }
    })
}

/* util methods */

// Test if inside netlify build context
function insideNetlifyBuildContext() {
  if (process.env.DEPLOY_PRIME_URL) {
    return true
  }
  return false
}

// Readline util
function ask(question, callback) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })
  rl.question(question + '\n', function(answer) {
    rl.close()
    callback(null, answer)
  })
}
