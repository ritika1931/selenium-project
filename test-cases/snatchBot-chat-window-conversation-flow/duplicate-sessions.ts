import DriverUtils from '../../utils/driver.utils';
import MochaUtils from '../../utils/mocha.utils';
import AssertUtils from '../../utils/assert.utils'
import {WEB_URL,CHROME_BROWSER} from '../../constants/web-config.constants';
import  HomepagePageObjects from '../../page-objects/home-page';
import ConversationPageObjects from '../../page-objects/conversation-window';
import CHAT_WINDOW_TEST_DATA from '../../test-data/chat-window-test-data';
import { By, WebDriver, WebElement } from 'selenium-webdriver';
var driver: WebDriver;

describe('Duplicate session tabs', async () => {

    before('Launch the browser and load the web url', async () => {
        driver = await DriverUtils.getDriverBuild(CHROME_BROWSER)
        await DriverUtils.maximizeWindow(driver);
        await DriverUtils.getURL(driver, WEB_URL)

        HomepagePageObjects.clickSnatchBotIcon(driver);
        ConversationPageObjects.getChatBotIframe(driver);

        let messageElements: WebElement[] = []; 
        const waitForAllMessagesToBeLoaded = async () => {
                messageElements = await DriverUtils.findElementsByClassName(driver, ConversationPageObjects.welcomeMesgsElement);
                return messageElements.length === 3; 
        }
        // Wait up to 10 seconds for all 3 default message to be loaded
        await driver.wait(waitForAllMessagesToBeLoaded, 10000);
    });

    it('1: Verify alert message on the duplicate session tab', async () => {
        // Execute a JavaScript snippet to open a new tab
        await driver.executeScript('window.open()');

        // Switch to the new tab
        await driver.switchTo().window(await driver.getAllWindowHandles().then(handles => handles.pop()));

        // Navigate to a new web page in the new tab
        await DriverUtils.getURL(driver, WEB_URL);
        await HomepagePageObjects.clickSnatchBotIcon(driver);
        await ConversationPageObjects.getChatBotIframe(driver);
        await driver.sleep(5000)

        const dupliacteModalElement = await driver.findElement({xpath: "//*[@data-test='chat_modal_duplicated_conversation']/mat-dialog-content/p"});
        const actualAlertMesg = await dupliacteModalElement.getText();
        MochaUtils.verifyContainsText(actualAlertMesg, CHAT_WINDOW_TEST_DATA.duplicateSessionAlertMesg, "Duplicate session window is not showing alert message");
    })
    after('Close the browser', async () => {
        await driver.quit()
    });

});
