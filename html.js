//网络模块  获取整个页面文档
const request = require('superagent')  
//网页编码处理模块，处理gbk编码乱码问题
const superagent = require('superagent-charset')(request)  
//快速构建网页DOM模型，采用类jquery语法
const cheerio = require('cheerio') 

let baseUrl = 'http://chengyu.t086.com/'
let allResArr = ['list/Z_1.html','list/Z_2.html','list/Z_3.html','list/Z_4.html','list/Z_5.html']
let allResArrIndex = 0

function stepCget(){
  if(allResArrIndex >= allResArr.length){
    console.log('结束成语爬取')
  }else{
    console.log('爬取页面成语：',allResArr[allResArrIndex])
    superagent.get(baseUrl + allResArr[allResArrIndex]).charset().buffer(true).end((err, ares)=>{
      if(err){
        console.log(err)
        allResArrIndex +=1
        stepCget()
        return false
      }
      const $ = cheerio.load(ares.text)
      let content = ''
      $('.listw ul li a').each((index, el) => {
        content = content + $(el).text() + ' '
      }) 
      console.log(content)
      allResArrIndex +=1
      stepCget()
    })
  }
}

stepCget()
