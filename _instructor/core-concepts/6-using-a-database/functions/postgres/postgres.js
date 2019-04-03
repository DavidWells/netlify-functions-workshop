const pg = require('pg')
const { PGUSER, PGPASSWORD, PGHOST, PGDATABASE, PGPORT } = process.env

/* Connect to postgres outside of handler */
const pool = new pg.Pool({
  user: PGUSER,
  password: PGPASSWORD,
  host: PGHOST,
  database: PGDATABASE,
  port: PGPORT,
})

pool.connect((err) => {
  if (err) console.log(err)
})

exports.handler = async (event, context) => {
  if (event.httpMethod !== 'GET') {
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: 'Invalid http method'
      })
    }
  }
  context.callbackWaitsForEmptyEventLoop = false

  try {
    const data = await db.getAll()
    return {
      statusCode: 200,
      body: JSON.stringify(data)
    }
  } catch (error) {
    console.error(error)
    return {
      statusCode: error.statusCode || 500,
      body: JSON.stringify({
        message: error.message
      })
    }
  }
}

/* postgres database utility */
var db = {
  getAll: async () => {
    let result
    try {
      const query = 'SELECT * FROM notes'
      result = await pool.query(query)
      console.log(result.rows)
    } catch (err) {
      console.log(err)
    }
    return result
  },
  insert: async (params) => {
    let result
    try {
      const query = 'INSERT INTO notes(id, title, created_at) VALUES ($1, $2, $3)'
      const values = [params.slug, params.title, params.created_at]
      result = await pool.query(query, values)
      console.log(result)
      return result
    } catch (err) {
      console.log(err)
    }
    return result
  }
}
