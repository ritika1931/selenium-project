import { Driver } from 'selenium-webdriver/chrome';
import {Builder,By} from '../libs/selenium-libs';

async function getDriverBuild(browser: string) {
     return new Builder()
    .forBrowser(browser)
    .build();
}

async function getURL(driver:any, url: string) {
    await driver.get(url);
}

async function maximizeWindow(driver:any) {
    await driver.manage().window().maximize();
} 
async function getTitle(driver:any) {
    let pageTitle =  await driver.getTitle();
    return pageTitle;
}

async function findElementById(driver:Driver, locator:string) {
    return await driver.findElement(By.id(locator));
}

async function findElementByXPath(driver:Driver, locator:string) {
    return await driver.findElement(By.xpath(locator));
}

async function switchToFrame(driver:Driver, locator:string) {
    // Find the iframe element
    const iframe = await DriverUtils.findElementById(driver, locator)
    // Switch to the iframe
    await driver.switchTo().frame(iframe); 
}

async function getAttribute(driver:any, locator:string, attribute: string) {
    return await driver.findElement(By.xpath(locator)).getAttribute(attribute);
}

const DriverUtils = {
    getDriverBuild,
    getURL,
    maximizeWindow,
    getTitle,
    findElementById,
    findElementByXPath,
    getAttribute
}
export default DriverUtils