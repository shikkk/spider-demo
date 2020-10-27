
(async() => {
    const puppeteer = require('puppeteer')
    const fs = require('fs')
    const webUrl = 'http://127.0.0.1:8080/#/'
    const selectorJs = './src/skeletonJs.js'
    // 启动浏览器
    const browser = await puppeteer.launch()
    const buildFindRootEle = '#app';
    const buildUseStartRootEle = '';
    const buildUseEndRootEle = ''
    const buildFileUrl = './dist/index.html'
    const buildFileSaveUrl = './dist/index2.html'
    // 新建tab页面
    const page = await browser.newPage()
    // 打开网站地址
    await page.goto(webUrl)
    //插入骨架屏js
    await page.addScriptTag({
       path:selectorJs
    })
    await page.waitForTimeout(2000)
    const skeletonStr = await page.evaluate(async (buildFindRootEle) => {
        window.skeleton()
        let str = document.querySelector(buildFindRootEle).innerHTML
        return str
    },buildFindRootEle)
    console.log('生成骨架屏结构')
    // console.log(skeletonStr)
    // const addSkeletonStr = buildUseStartRootEle + skeletonStr + buildUseEndRootEle
    // console.log(addSkeletonStr)
    //读取文件
    fs.readFile(buildFileUrl,'utf8',async (err,data) => {
        if(err) {
            console.log(err)
            return false
        }
        let reg = /<body>/;
        const newContent = data.replace(reg,'<body>'+ skeletonStr)
        fs.writeFile(buildFileSaveUrl,newContent,'utf8',async(err)=>{
            if(err) {
                console.log(err)
                return false
            }
            //关闭无界面浏览器
            await browser.close()

            console.log('构建完毕！结束子进程')
        })

    })

})()




