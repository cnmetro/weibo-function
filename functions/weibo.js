const subDays = require('date-fns/sub_days')
const format = require('date-fns/format')
const { sendWeibo, fetchFlow } = require('../utils')

exports.handler = async (event, context, callback) => {
  const cityObject = {	  
    bj: '北京',
    gz: '广州',	    
    sh: '上海'
  }

  const { city } = JSON.parse(event.body)

  if (!cityObject[city]) {
    return callback(null, {
      statusCode: 400,
      body: 'city not found',
    })
  }

  try {
    const yesterday = format(subDays(new Date(), 1), 'YYYY-MM-DD')
    const data = await fetchFlow(city)
    const date = data.date

    if (yesterday !== date) return

    const status = `${cityObject[city]}地铁 ${date} 总客流量为 ${
      data.num
    } 万人次 http://metro.sinchang.me/${city}`

    await sendWeibo(status)

    callback(null, {
      statusCode: 200,
      body: 'Yep',
    })
  } catch (e) {
    callback(null, {
      statusCode: 500,
      body: JSON.stringify((e.response && e.response.data)) || e.message,
    })
  }
}