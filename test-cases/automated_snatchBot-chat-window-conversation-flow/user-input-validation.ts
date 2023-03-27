import DriverUtils from '../../utils/driver.utils';
import MochaUtils from '../../utils/mocha.utils';
import AssertUtils from '../../utils/assert.utils';
import { WEB_URL, CHROME_BROWSER } from '../../constants/web-config.constants';
import HomepagePageObjects from '../../page-objects/home-page';
import ConversationPageObjects from '../../page-objects/conversation-window';
import CHAT_WINDOW_TEST_DATA from '../../test-data/chat-window-test-data';
import { WebDriver, WebElement } from 'selenium-webdriver';
import WaitUtils from '../../utils/wait.utils';
var driver: WebDriver;

describe('Test input validations on chat bot conversation window', async () => {
  before('Launch the browser and load the web url', async () => {
    driver = await DriverUtils.getDriverBuild(CHROME_BROWSER);
    await DriverUtils.maximizeWindow(driver);
    await DriverUtils.getURL(driver, WEB_URL);

    HomepagePageObjects.clickSnatchBotIcon(driver);
    ConversationPageObjects.getChatBotIframe(driver);

    await WaitUtils.waitUntilDefaultMsgLoaded(driver);
  });

  it('1: Verify input text box icon is displayed and enabled when chat bot window opens up', async () => {
    const inputBoxElement = await DriverUtils.findElementByXPath(
      driver,
      ConversationPageObjects.chatBotInputBox
    );
    const isFocusable =
      (await AssertUtils.elementIsDisplayed(inputBoxElement)) &&
      (await AssertUtils.elementIsEnabled(inputBoxElement));
    MochaUtils.verifyIsTrue(
      isFocusable,
      'Input text box is not keyboard focusable'
    );
  });

  it('2: BOUNDARY VALUE ANALYSIS: Verify input text box icon is getting disabled after entering 4002 characters', async () => {
    const textBoxElement = await DriverUtils.findElementByXPath(
      driver,
      ConversationPageObjects.chatBotInputBox
    );
    await DriverUtils.enterValue(
      driver,
      ConversationPageObjects.chatBotInputBox,
      CHAT_WINDOW_TEST_DATA.maxCharForInputBox
    );
    const sendButtonElement = await DriverUtils.findElementByXPath(
      driver,
      ConversationPageObjects.sendTextButton
    );
    const isEnabled = await AssertUtils.elementIsEnabled(sendButtonElement);
    MochaUtils.verifyIsFalse(
      isEnabled,
      'Input text box icon is not getting disabled'
    );
    await textBoxElement.clear();
  });

  it('3: Verify microphone is enabled in chat box window', async () => {
    const microphoneElement = await DriverUtils.findElementByXPath(
      driver,
      ConversationPageObjects.chatBotMicrophone
    );
    const isEnabled = await AssertUtils.elementIsEnabled(microphoneElement);
    MochaUtils.verifyIsTrue(
      isEnabled,
      'Microphone is not enabled in chat bot window'
    );
  });

  it('4: Verify the user voice message is showing up when there is no speech', async () => {
    const microphoneElement = await DriverUtils.findElementByXPath(
      driver,
      ConversationPageObjects.chatBotMicrophone
    );
    // Record speech for 5 seconds
    const waitForTimerToStop = async () => {
      const timerIcon = await DriverUtils.findElementByXPath(
        driver,
        ConversationPageObjects.counterIconOnMic
      );
      const timerCount = await timerIcon.getText();
      return timerCount === '5';
    };

    await microphoneElement.click();
    await driver.wait(waitForTimerToStop, 15000);
    await microphoneElement.click();
    await driver.sleep(7000);

    //Checking if the last user message shows up in chat successfully
    const lastAutomatedMesg =
      await ConversationPageObjects.getUserLastMesgElement(driver);
    const isMesgDisplayed = await AssertUtils.elementIsDisplayed(
      lastAutomatedMesg
    );
    MochaUtils.verifyIsTrue(
      isMesgDisplayed,
      'Expected user audio message is not showing up'
    );
  });

  it('5: Verify the chat bot message when there is no speech', async () => {
    const lastAutomatedMesgElement =
      await ConversationPageObjects.getAutomatedLastMesgElement(driver);
    const isMesgDisplayed = await AssertUtils.elementIsDisplayed(
      lastAutomatedMesgElement
    );
    const actualAutomatedTextMesg = await lastAutomatedMesgElement.getText();
    MochaUtils.verifyEquals(
      actualAutomatedTextMesg,
      CHAT_WINDOW_TEST_DATA.automatedTextMegForNoAudio,
      'Expected chat bot text message is not showing up'
    );
  });

  after('Close the browser', async () => {
    await driver.quit();
  });
});
