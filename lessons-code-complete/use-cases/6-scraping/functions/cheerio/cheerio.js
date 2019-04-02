const request = require('axios')
const cheerio = require('cheerio')

exports.handler = async (event, context) => {
  const url = 'https://whatever.com'
  try {
    const { data } = await request(url)
    const $ = cheerio.load(data)
    /* queryDOM */
    const items = $('#idXyz li')
    console.log('items', items)
    const itemsText = items.map((i, el) => {
      return $(el).text().trim()
    })
    console.log('itemsText', items)
    return {
      statusCode: 200,
      body: JSON.stringify({
        items: itemsText,
      })
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: error
      })
    }
  }
}
