import DriverUtils from '../../utils/driver.utils';
import { WEB_URL, CHROME_BROWSER } from '../../constants/web-config.constants';
import HomepagePageObjects from '../../page-objects/home-page';
import ConversationPageObjects from '../../page-objects/conversation-window';
import { WebElement } from 'selenium-webdriver';
import AssertUtils from '../../utils/assert.utils';
import MochaUtils from '../../utils/mocha.utils';
var driver: any;

describe('Test open and close of chat bot window is working successfully', async () => {
  before('Launch the browser and load the web url', async () => {
    driver = await DriverUtils.getDriverBuild(CHROME_BROWSER);
    await DriverUtils.maximizeWindow(driver);
    await DriverUtils.getURL(driver, WEB_URL);

    HomepagePageObjects.clickSnatchBotIcon(driver);
    ConversationPageObjects.getChatBotIframe(driver);

    let messageElements: WebElement[] = [];
    const waitForAllMessagesToBeLoaded = async () => {
      messageElements = await DriverUtils.findElementsByClassName(
        driver,
        ConversationPageObjects.welcomeMesgsElement
      );
      return messageElements.length === 3;
    };
    // Wait up to 10 seconds for all 3 default message to be loaded
    await driver.wait(waitForAllMessagesToBeLoaded, 10000);
  });

  it('1: Verify close icon is showing when chat bot window opens up', async () => {
    ConversationPageObjects.switchToMainPage(driver);
    const closeIconElement = await DriverUtils.findElementByXPath(
      driver,
      ConversationPageObjects.chatbotCloseWindowIcon
    );
    const isIConDisplayed = await AssertUtils.elementIsDisplayed(
      closeIconElement
    );
    MochaUtils.verifyIsTrue(
      isIConDisplayed,
      'Close window icon is not showing up on chat bot window'
    );
  });

  it('2: Verify chat bot window is closing successfully', async () => {
    const closeIconElement = await DriverUtils.findElementByXPath(
      driver,
      ConversationPageObjects.chatbotCloseWindowIcon
    );
    await closeIconElement.click();
    const getDisplayAttribute = await closeIconElement.getCssValue('display');
    MochaUtils.verifyEquals(
      getDisplayAttribute,
      'none',
      'Close window icon is not showing up on chat bot window'
    );
  });

  it('3: Verify chat bot icon is showing up after closing the chat window', async () => {
    const element = await DriverUtils.findElementById(
      driver,
      HomepagePageObjects.snatchBotIcon
    );
    const isFocusable =
      (await AssertUtils.elementIsDisplayed(element)) &&
      (await AssertUtils.elementIsEnabled(element));
    MochaUtils.verifyIsTrue(
      isFocusable,
      'SnatchBot icon is not keyboard focusable'
    );
  });

  it.skip('4: Verify chat box retains the conversation after closing the window', async () => {});

  after('Close the browser', async () => {
    await driver.quit();
  });
});
