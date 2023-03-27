import { WebDriver, WebElement } from 'selenium-webdriver';
import chrome, { Driver } from 'selenium-webdriver/chrome';
import { Builder, By } from '../libs/selenium-libs';

async function getDriverBuild(browser: string) {
  const options = new chrome.Options();
  // Open browser in incognito mode
  //options.addArguments('--incognito');
  //options.addArguments('--headless');
  options.addArguments('--use-fake-ui-for-media-stream'); // allow media stream
  options.addArguments('--use-fake-device-for-media-stream'); // allow fake devices

  return new Builder().forBrowser(browser).setChromeOptions(options).build();
}

async function getURL(driver: any, url: string) {
  await driver.get(url);
}

async function maximizeWindow(driver: any) {
  await driver.manage().window().maximize();
}
async function getTitle(driver: any) {
  let pageTitle = await driver.getTitle();
  return pageTitle;
}

async function findElementById(driver: WebDriver, locator: string) {
  return await driver.findElement({ id: locator });
}

async function findElementsByClassName(driver: WebDriver, locator: string) {
  return await driver.findElements({ className: locator });
}

async function findElementsByXPath(driver: WebDriver, locator: string) {
  return await driver.findElements({ xpath: locator });
}

async function findElementByXPath(driver: WebDriver, locator: string) {
  return await driver.findElement(By.xpath(locator));
}

async function enterValue(
  driver: WebDriver,
  locator: string,
  inputText: string
) {
  const textBoxElement = await DriverUtils.findElementByXPath(driver, locator);
  await textBoxElement.sendKeys(inputText);
}

async function clearTextBoxValue(driver: WebDriver, locator: string) {
  const textBoxElement = await DriverUtils.findElementByXPath(driver, locator);
  await textBoxElement.clear();
}
async function getAttribute(driver: any, locator: string, attribute: string) {
  return await driver.findElement(By.xpath(locator)).getAttribute(attribute);
}

async function getText(driver: any, locator: string) {
  return await driver.findElement(By.xpath(locator)).getText();
}

async function click(driver: any, locator: string) {
  return await driver.findElement(By.xpath(locator)).click();
}

const DriverUtils = {
  getDriverBuild,
  getURL,
  maximizeWindow,
  getTitle,
  findElementById,
  findElementByXPath,
  getAttribute,
  getText,
  findElementsByClassName,
  enterValue,
  findElementsByXPath,
  clearTextBoxValue,
  click,
};
export default DriverUtils;
