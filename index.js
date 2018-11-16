'use strict'

const { asyncWrap } = require('fc-helper')
const { sendWeibo, fetchFlow } = require('./utils')

exports.handler = asyncWrap(async event => {
  const name = {
    bj: '北京',
    gz: '广州',
    sh: '上海'
  }
  const evt = JSON.parse(event)
  console.log(evt)
  const city = evt['payload']
  console.log(city)
  if (!city) return

  const data = await fetchFlow(city)
  console.log(data)
  const status = `${name[city]}地铁 ${data.date} 总客流量为 ${data.num} 万人次 http://metro.sinchang.me/${city}`
  await sendWeibo(status)
})