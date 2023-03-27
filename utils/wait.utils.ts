import ConversationPageObjects from '../page-objects/conversation-window';
import { WebDriver, WebElement } from 'selenium-webdriver';
import { By, until } from '../libs/selenium-libs';
import DriverUtils from '../utils/driver.utils';

async function waitUntilElementIsVisible(
  driver: WebDriver,
  element: WebElement,
  timeout: number
) {
  return await driver.wait(until.elementIsVisible(element), timeout);
}

async function waitUntilElementIsLocated(
  driver: WebDriver,
  locator: string,
  timeout: number = 5000
) {
  const locatedElement = driver.wait(
    until.elementLocated(By.id(locator)),
    timeout
  );
  return locatedElement;
}

async function waitUntilDefaultMsgLoaded(driver: WebDriver) {
  let messageElements: WebElement[] = [];
  const waitForAllMessagesToBeLoaded = async () => {
    messageElements = await DriverUtils.findElementsByClassName(
      driver,
      ConversationPageObjects.welcomeMesgsElement
    );
    return messageElements.length === 3;
  };
  // Wait up to 10 seconds for all 3 default message to be loaded
  await driver.wait(waitForAllMessagesToBeLoaded, 15000);
}

const WaitUtils = {
  waitUntilElementIsVisible,
  waitUntilElementIsLocated,
  waitUntilDefaultMsgLoaded,
};
export default WaitUtils;
