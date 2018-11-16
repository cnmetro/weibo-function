'use strict'

const qs = require('querystring')
const axios = require('axios')

exports.sendWeibo = status => {
  return axios.post(
    'https://api.weibo.com/2/statuses/share.json',
    qs.stringify({
      access_token: process.env.WEIBO_ACCESS_TOKEN,
      status
    })
  )
}

exports.fetchFlow = city => {
  return axios
    .get(`http://metro.sinchang.me/api/flows?city=${city}`)
    .then(res => res.data.data[0])
}
