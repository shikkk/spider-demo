(async() => {
    const puppeteer = require('puppeteer')
    const goUrl = 'http://dev.cimevue.cn:3379/'
    // 启动浏览器
    const browser = await puppeteer.launch(
        {
            headless: false,
            defaultViewport: { width: 1440, height: 1000 },
            }
        )
    // 地址监听变化
    browser.on('targetchanged', async (targer) =>{
        if(page){
            if(targer.url() === 'http://dev.cimevue.cn:3379/login?from=/'){
                const username = 'admin'
                const password = 'pensees@1234'
                await page.waitForSelector('input[name=j_username]')
                await page.type('input[name=j_username]',username,{delay:100})
                await page.waitForSelector('input[name=j_password]')
                await page.type('input[name=j_password]',password,{delay:100})
                const submitBtn = '.submit-button'
                await page.waitForSelector(submitBtn)
                await page.click(submitBtn)
                console.log('登录成功')
            }
        }
    })
    // 新建tab页面
    const page = await browser.newPage()
    // 打开网站地址
    await page.goto(goUrl)
    // 等待网页中某个元素加载完成
    await page.waitForSelector('.call-to-action a')
    await page.click('.call-to-action a')
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



