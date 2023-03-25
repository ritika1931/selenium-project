import { WebElement } from 'selenium-webdriver';
import {AxeBuilder, Builder, By, Key, until, chrome} from '../libs/selenium-libs';

async function waitUntilElementIsVisible(driver: any, element: WebElement, timeout:number) {
    await driver.wait(until.elementIsVisible(element), timeout);
}


// async function waitForElement(driver: any, locator: string) {
//     await driver.wait(until.elementLocated(locator), timeout);
//   }
  
const WaitUtils = {
    waitUntilElementIsVisible
}
export default WaitUtils