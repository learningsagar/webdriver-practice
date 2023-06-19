import {WebDriver,Capabilities, Builder} from 'selenium-webdriver';

export class DriverUtils{
    driver: WebDriver;
    public async initDriver(): Promise<WebDriver> {
        this.driver= new Builder().forBrowser('chrome').build();
        return this.driver;
    }

    public async attachDriverWithChrome(){
        let userProfilePath = "/Users/praveensilvery/Documents/tools/webdriver-libs/chrome_profile";

        const { Options } = require('selenium-webdriver/chrome');
        const options = new Options();
        options.addArguments("--user-data-dir="+userProfilePath);
        options.options_["debuggerAddress"] = "127.0.0.1:9222";

        // options.addArguments('debuggerAddress=127.0.0.1:9222');
        this.driver= new Builder().forBrowser('chrome')
        .setChromeOptions(options)
        .build();
        return this.driver;
    }


    public async close(){
        await this.driver.quit();
    }

    public async launchUrl(url:string){
        await this.driver.get(url);
        await this.driver.navigate().to(url);
    }


}

export const driverUtils = new DriverUtils();