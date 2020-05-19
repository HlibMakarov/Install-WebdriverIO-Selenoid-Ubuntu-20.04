describe('webdriver.io page', () => {
    it('should open API,Help,Contribute pages', () => {
     browser.url('https://webdriver.io')
     browser.setWindowSize(1920, 1080)
 
     const APIbut = $('li a[href="/docs/api.html"]')
     const Help   = $('li a[href="/help.html"]')
     const Contribute = $('li a[href="/docs/contribute.html"]')
     

     browser.pause(5000)
     APIbut.isDisplayed()
     APIbut.click()
     browser.pause(3000)
     Help.isDisplayed()
     Help.click()
     browser.pause(3000)
     Contribute.isDisplayed()
     Contribute.click()
     browser.pause(3000)
 })
 })