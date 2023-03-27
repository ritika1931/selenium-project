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
  const waitForAllMessagesToBeLoaded = async () => {
    const defaultMessageLength =
      await ConversationPageObjects.getAllDefaultMessagesLength(driver);
    return defaultMessageLength === 3;
  };

  // Wait up to 10 seconds for all 3 default message to be loaded
  await driver.wait(waitForAllMessagesToBeLoaded, 25000);
}

const WaitUtils = {
  waitUntilElementIsVisible,
  waitUntilElementIsLocated,
  waitUntilDefaultMsgLoaded,
};
export default WaitUtils;
