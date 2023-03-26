import { WebElement } from 'selenium-webdriver';
import {AxeBuilder, Builder, By, Key, until, chrome} from '../libs/selenium-libs';

async function waitUntilElementIsVisible(driver: any, element: WebElement, timeout:number) {
    return await driver.wait(until.elementIsVisible(element), timeout);
}

async function waitUntilElementIsLocated(driver: any, locator: string, timeout:number) {
    const popupBox = driver.wait(until.elementLocated(By.id(locator)), 5000);
    return popupBox;
}


// async function waitForElement(driver: any, locator: string) {
//     await driver.wait(until.elementLocated(locator), timeout);
//   }
  
const WaitUtils = {
    waitUntilElementIsVisible,
    waitUntilElementIsLocated

}
export default WaitUtils