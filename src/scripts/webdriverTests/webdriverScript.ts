import {WebDriver,Capabilities,By, Key, Builder, until} from 'selenium-webdriver';

describe('script-template-sample',async function(){
    let driver:WebDriver;

    let capabilities = {
        "capabilities": {
            "acceptInsecureCerts": true,
          "alwaysMatch": {
            "browserName": "firefox",
            "moz:firefoxOptions": {
              "profile": "<base64 encoded profile>",
              "args": ["-headless"],
              "prefs": { "dom.ipc.processCount": 8 },
              "log": { "level": "trace" }
            }
          },
          "firstMatch": [{ "platformName": "macos" }, { "platformName": "linux" }]
        }
      }


    this.beforeAll(async function(){
        driver = await new Builder().forBrowser('chrome').build()
        console.log('before all hook...')
    })

    this.beforeEach(async function(){
        console.log('beforeEach hook...')
    })
    it('it- testcase', async function(){
        console.log('testcase ...')
        await driver.get('https://www.google.com');
        await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
        await driver.wait(until.titleIs('webdriver - Google Search')); 
    })

    this.afterEach(async function(){
        console.log('afterEach hook...')
    })
    this.afterAll(async function(){
        console.log('afterAll hook...')
        await driver.quit()
    })
})