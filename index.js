'use strict'

const subDays = require('date-fns/sub_days')
const format = require('date-fns/format')
const { sendWeibo, fetchFlow } = require('./utils')

const cities = [
  {
    key: 'sh',
    value: '上海'
  },
  {
    key: 'bj',
    value: '北京'
  },
  {
    key: 'sh',
    value: '广州'
  }
]

;(async () => {
  for (const city of cities) {
    try {
      const yesterday = format(subDays(new Date(), 1), 'YYYY-MM-DD')
      const data = await fetchFlow(city.key)
      const date = data.date

      if (yesterday !== date) return

      const status = `${city.name}地铁 ${date} 总客流量为 ${
        data.num
      } 万人次 http://metro.sinchang.me/${city.key}`

      await sendWeibo(status)
    } catch (e) {
      console.log(e)
    }
  }
})()
