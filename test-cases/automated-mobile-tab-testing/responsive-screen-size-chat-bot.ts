import DriverUtils from '../../utils/driver.utils';
import MochaUtils from '../../utils/mocha.utils';
import { WEB_URL, CHROME_BROWSER } from '../../constants/web-config.constants';
import HomepagePageObjects from '../../page-objects/home-page';
import ConversationPageObjects from '../../page-objects/conversation-window';
import { WebDriver, WebElement } from 'selenium-webdriver';
import WaitUtils from '../../utils/wait.utils';
let driver: WebDriver;

describe('Test chat window welcome messages on different screens', async () => {
  before('Launch the browser and load the web url', async () => {
    driver = await DriverUtils.getDriverBuild(CHROME_BROWSER);
    await DriverUtils.maximizeWindow(driver);
    await DriverUtils.getURL(driver, WEB_URL);
  });

  it('1: Mobile: Verify welcome messages are showing up correctly when chat box window opens up', async () => {
    // set the size of the viewport
    await driver.manage().window().setRect({ width: 375, height: 812 });
    HomepagePageObjects.clickSnatchBotIcon(driver);
    ConversationPageObjects.getChatBotIframe(driver);

    await WaitUtils.waitUntilDefaultMsgLoaded(driver);
    const defaultMessageLength =
      await ConversationPageObjects.getAllDefaultMessagesLength(driver);
  });

  it('2: iPhoneTab: Verify welcome messages are showing up correctly when chat box window opens up', async () => {
    // set the size of the viewport
    await driver.manage().window().setRect({ width: 820, height: 1180 });
    HomepagePageObjects.clickSnatchBotIcon(driver);
    ConversationPageObjects.getChatBotIframe(driver);

    await WaitUtils.waitUntilDefaultMsgLoaded(driver);
    const defaultMessageLength =
      await ConversationPageObjects.getAllDefaultMessagesLength(driver);
  });

  afterEach('Maximize the browser', async () => {
    await DriverUtils.maximizeWindow(driver);
    await DriverUtils.getURL(driver, WEB_URL);
  });

  after('Close the browser', async () => {
    await driver.quit();
  });
});
