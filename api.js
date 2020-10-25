const https = require('https')

const getApi = 'https://www.vcg.com/api/common/searchImage?phrase=%E6%98%A5%E5%A4%A9&graphicalStyle%5B0%5D=1&page=1'

https.get(getApi,(res) => {
  // res.setEncoding('utf8')
  let rawData = ''
  console.log(res)
  res.on('data', chunk => {
    rawData += chunk
    // console.log(chunk)
  })
  res.on('end', () => {
    try {
      const parseData = JSON.parse(rawData)
      console.log(parseData)
    } catch (e){
      console.log(e.message)
    }
  })
}).on('err', (e)=> {
  console.error(`出现错误：${e.message}`)
})