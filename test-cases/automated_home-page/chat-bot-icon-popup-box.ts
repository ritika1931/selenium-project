import AssertUtils from '../../utils/assert.utils';
import WaitUtils from '../../utils/wait.utils';
import DriverUtils from '../../utils/driver.utils';
import MochaUtils from '../../utils/mocha.utils';
import {WEB_URL,CHROME_BROWSER} from '../../constants/web-config.constants';
import  HOMEPAGE_TEST_DATA  from '../../test-data/homepage-test-data';
import  HOMEPAGE_LOCATOR  from '../../page-objects/home-page';
var driver: any;

describe('Test if snatch bot pop up box and icon are showing correctly', async () => {

    before('Launch the browser and load the web url', async () => {
        driver = await DriverUtils.getDriverBuild(CHROME_BROWSER);
        await DriverUtils.maximizeWindow(driver);
        await DriverUtils.getURL(driver, WEB_URL)
    });

    beforeEach('Wait for snatchBotPopUpBox to load', async () => {
        await WaitUtils.waitUntilElementIsVisible(driver, await DriverUtils.findElementByXPath(driver, HOMEPAGE_LOCATOR.snatchBotPopUpBox), 10000);
    });

    it('1. Verify snatch bot icon showing pop up circle', async () => {
        const eleExists = await AssertUtils.isElementExists(driver, HOMEPAGE_LOCATOR.snatchBotPopUp_circle); 
        MochaUtils.verifyIsTrue(eleExists , "The snatch bot icon is not showing pop up circle")
    })

    it('2. Verify snatch bot icon showing pop up message box', async () =>{
        const eleExists = await AssertUtils.isElementExists(driver, HOMEPAGE_LOCATOR.snatchBotPopUpBox); 
        MochaUtils.verifyIsTrue(eleExists , "The snatch bot icon is not showing pop up message box")
    })

    it('3. Verify if correct message is showing up in snatch bot pop up message box', async () =>{
        const actualText = await DriverUtils.getText(driver, HOMEPAGE_LOCATOR.snatchBotPopUpBox )
        MochaUtils.verifyEquals(actualText , HOMEPAGE_TEST_DATA.snatchIconPopUpBox_msg, "The snatch bot icon pop up text box is not showing correct message")
    })

    after('Close the browser', async () => {
            await driver.quit()
    });

});
