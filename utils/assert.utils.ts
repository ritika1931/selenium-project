import {ChaiAssert} from '../libs/mocha-libs';
import { Driver } from 'selenium-webdriver/chrome';
import {Builder,By} from '../libs/selenium-libs';
import { WebElement } from 'selenium-webdriver';
import DriverUtils from '../utils/driver.utils';
import { elementsLocated } from 'selenium-webdriver/lib/until';

//To compare array of objects

async function verifyElementIsDisplayed(webElement: any) {
    let isDisplayed = await webElement.isDisplayed();
    ChaiAssert.isTrue(isDisplayed, "The webElement is not showing up");
}

async function elementIsDisplayed(webElement: any) {
    return await webElement.isDisplayed();
}

async function elementIsEnabled(webElement: any) {
    return await webElement.isEnabled();
}

async function verifyElementIsEnabled(webElement: any) {
    let isEnabled = await webElement.isEnabled();
    ChaiAssert.isTrue(isEnabled, "The webElement is not enabled");
}

async function isElementExists(driver: any, locator:string): Promise<boolean>{
    let isElementPresent = false;
    try{
        let  ele = await  DriverUtils.findElementByXPath(driver, locator);
        isElementPresent = true
    }catch(error){
        console.log("Exception: NoSuchElementFound")
    }
    return isElementPresent
 
}

const AssertUtils = {
    verifyElementIsDisplayed,
    verifyElementIsEnabled,
    elementIsEnabled,
    elementIsDisplayed,
    isElementExists
}
export default  AssertUtils