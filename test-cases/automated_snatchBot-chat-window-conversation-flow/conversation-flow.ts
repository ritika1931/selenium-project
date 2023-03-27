import DriverUtils from '../../utils/driver.utils';
import MochaUtils from '../../utils/mocha.utils';
import AssertUtils from '../../utils/assert.utils';
import { WEB_URL, CHROME_BROWSER } from '../../constants/web-config.constants';
import HomepagePageObjects from '../../page-objects/home-page';
import ConversationPageObjects from '../../page-objects/conversation-window';
import CHAT_WINDOW_TEST_DATA from '../../test-data/chat-window-test-data';
import { WebDriver, WebElement } from 'selenium-webdriver';
import { convertCompilerOptionsFromJson } from 'typescript';
var driver: WebDriver;

describe('Test conversation flow on chat bot window', async () => {
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
    await driver.wait(waitForAllMessagesToBeLoaded, 15000);
  });

  it('1: Verify chat bot message and user message for first conversation', async () => {
    await DriverUtils.enterValue(
      driver,
      ConversationPageObjects.chatBotInputBox,
      CHAT_WINDOW_TEST_DATA.conversation1.userQuery
    );
    const sendButtonElement = await DriverUtils.findElementByXPath(
      driver,
      ConversationPageObjects.sendTextButton
    );
    await sendButtonElement.click();
    await driver.sleep(5000);
    const actualUserMesg = await ConversationPageObjects.getUserTextMesg(
      driver
    );
    const actualAutomatedMesg =
      await ConversationPageObjects.getChatBotTextMesg(driver);
    MochaUtils.verifyEquals(
      actualUserMesg,
      CHAT_WINDOW_TEST_DATA.conversation1.userQuery,
      'Input text box icon is not getting disabled'
    );
    MochaUtils.verifyEquals(
      actualAutomatedMesg,
      CHAT_WINDOW_TEST_DATA.conversation1.chatBotResponse,
      'Input text box icon is not getting disabled'
    );
  });

  it('2: Verify the provided name in further conversations', async () => {
    await DriverUtils.enterValue(
      driver,
      ConversationPageObjects.chatBotInputBox,
      CHAT_WINDOW_TEST_DATA.conversation2.userQuery
    );
    const sendButtonElement = await DriverUtils.findElementByXPath(
      driver,
      ConversationPageObjects.sendTextButton
    );
    await sendButtonElement.click();
    await driver.sleep(5000);
    const actualUserMesg = await ConversationPageObjects.getUserTextMesg(
      driver
    );
    const actualAutomatedMesg =
      await ConversationPageObjects.getChatBotTextMesg(driver);

    MochaUtils.verifyEquals(
      actualUserMesg,
      CHAT_WINDOW_TEST_DATA.conversation2.userQuery,
      'Input text box icon is not getting disabled'
    );
    MochaUtils.verifyEquals(
      actualAutomatedMesg,
      CHAT_WINDOW_TEST_DATA.conversation2.chatBotResponse,
      'Input text box icon is not getting disabled'
    );
  });

  it('3: Verify menu button is displayed and enabled on conversation window', async () => {
    const element = await DriverUtils.findElementByXPath(
      driver,
      ConversationPageObjects.menuButtonIcon
    );
    const isFocusable = await AssertUtils.elementIsEnabled(element);
    MochaUtils.verifyIsTrue(isFocusable, 'Menu icon is not keyboard focusable');
  });

  after('Close the browser', async () => {
    await driver.quit();
  });
});
