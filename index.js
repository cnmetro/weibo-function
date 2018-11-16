'use strict'

const subDays = require('date-fns/sub_days')
const format = require('date-fns/format')
const { asyncWrap } = require('fc-helper')
const { sendWeibo, fetchFlow } = require('./utils')

module.exports.handler = asyncWrap(async (request, response) => {
  const name = {
    bj: '北京',
    gz: '广州',
    sh: '上海'
  }

  try {
    const city = request.queries.city
    const yesterday = format(subDays(new Date(), 1), 'YYYY-MM-DD')

    if (!city) return response.send('City Empty')

    const data = await fetchFlow(city)
    const date = data.date

    if (yesterday !== date) return response.send('No Update')

    const status = `${name[city]}地铁 ${date} 总客流量为 ${data.num} 万人次 http://metro.sinchang.me/${city}`

    await sendWeibo(status)

    response.send('OK')
  } catch (e) {
    response.send(e.message)
  }
})