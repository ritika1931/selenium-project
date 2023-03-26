import DriverUtils from '../../utils/driver.utils';
import MochaUtils from '../../utils/mocha.utils';
import {WEB_URL,CHROME_BROWSER} from '../../constants/web-config.constants';
import  HomepagePageObjects from '../../page-objects/home-page';
import ConversationPageObjects from '../../page-objects/conversation-window';
import CHAT_WINDOW_TEST_DATA from '../../test-data/chat-window-test-data';
import { WebDriver, WebElement } from 'selenium-webdriver';
var driver: WebDriver;

describe('Test greetings and introduction messages when chat box window opens up', async () => {

    before('Launch the browser and load the web url', async () => {
        driver = await DriverUtils.getDriverBuild(CHROME_BROWSER)
        await DriverUtils.maximizeWindow(driver);
        await DriverUtils.getURL(driver, WEB_URL)
    });

    it('1: Verify welcome messages are showing up correctly when chat box window opens up', async () => {
        try {
            HomepagePageObjects.clickSnatchBotIcon(driver);
            ConversationPageObjects.getChatBotIframe(driver);
        
            var messageElements: WebElement[] = []; 
            const waitForAllMessagesToBeLoaded = async () => {
                messageElements = await DriverUtils.findElementsByClassName(driver, ConversationPageObjects.welcomeMesgsElement);
                return messageElements.length === 3; 
            }
            
            // Wait up to 10 seconds for all 3 default message to be loaded
            await driver.wait(waitForAllMessagesToBeLoaded, 10000);
            const allMessages:string[] = [];
            for (let i = 0; i < messageElements.length; i++) {
                let text = await messageElements[i].getText();
                allMessages.push(text);
            }
            MochaUtils.verifyEquals(allMessages[0] , CHAT_WINDOW_TEST_DATA.welcomeMesg1, "Welcome message 1 is not showing up correctly");
            MochaUtils.verifyEquals(allMessages[1] , CHAT_WINDOW_TEST_DATA.welcomeMesg2, "Welcome message 2 is not showing up correctly");
            MochaUtils.verifyEquals(allMessages[2] , CHAT_WINDOW_TEST_DATA.welcomeMesg3, "Welcome message 3 is not showing up correctly");
            MochaUtils.verifyEquals(messageElements.length , 3, "All the three messages are not showing up")
        } catch (error) {
            console.error(error);
        }
        
    })

    after('Close the browser', async () => {
            await driver.quit()
    });

});
