import { driverUtils } from "../../lib/utils/driverUtils";
import { WebDriver, By, Key, until } from "selenium-webdriver";


/*
* run belo command from terminal before executing this script.
* /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --remote-debugging-port=9222 --user-data-dir="/Users/praveensilvery/Documents/tools/webdriver-libs/chrome_profile"
*/
describe('script-template-sample',async function(){
    let driver:WebDriver;
    let url= 'https://www.google.com';
    // url= 'https://www.facebook.com';
    this.beforeAll(async function(){
        console.log('before all hook...')
        driver = await driverUtils.attachDriverWithChrome();
        
        console.log('capabilities')
        console.log(await driver.getCapabilities());
       
        await driverUtils.launchUrl(url);
        
    })

    it('it- testcase', async function(){
        console.log('it testcase...')
        await driver.findElement(By.name('q')).sendKeys('webdriver',Key.RETURN);
        await driver.wait(until.titleIs('webdriver - Google Search'));
        const browserTitle = await driver.getTitle();
        console.log(`browserTitle : ${browserTitle}`);
    })

    this.afterAll(async function(){
        // await driver.close();
        console.log('afterAll hook...')
    })
})