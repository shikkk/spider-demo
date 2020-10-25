(async() => {
    const puppeteer = require('puppeteer')
    const goUrl = 'http://localhost:8080/login'
    const username = 'test@pensees.com'
    const password = '123456'
    // 启动浏览器
    const browser = await puppeteer.launch()
    // 地址监听变化
    browser.on('targetchanged', async (targer) =>{
        if(page){
            console.log('登录成功')
            console.log(targer)
        }
    })


    // 新建tab页面
    const page = await browser.newPage()
    // 打开网站地址
    await page.goto(goUrl)
    // 等待网页中某个元素加载完成
    await page.waitForSelector('input[placeholder=用户名]')
    await page.waitForSelector('input[type=password]')

    await page.type('input[placeholder=邮箱]',username)
    await page.type('input[type=password]',password)

    const submitBtn = '.login-btn'
    await page.waitForSelector(submitBtn)
    await page.click(submitBtn)
})()


/*
// 等待某个请求应答完成
page.waitForResponse()

// 备注：网页截图
page.screenshot()
//备注：获取网页cookie
page.cookies()  
 
//获取网页内容 
page.content()  

// 关闭网页 
page.close()

// 关闭浏览器
browser.close()
*/



