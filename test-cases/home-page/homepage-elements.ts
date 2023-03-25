import AssertUtils from '../../utils/assert.utils';
import DriverUtils from '../../utils/driver.utils';
import MochaUtils from '../../utils/mocha.utils';
import {WEB_URL,CHROME_BROWSER} from '../../constants/web-config.constants';
import  HOMEPAGE_TEST_DATA  from '../../test-data/homepage-test-data';
import  HOMEPAGE_LOCATOR  from '../../page-objects/home-page';
var driver: any;

describe('Verify if home page loads successfully', async () => {

    before('create project', async () => {
        driver = await DriverUtils.getDriverBuild(CHROME_BROWSER);
        // To maximize the window
        await DriverUtils.maximizeWindow(driver);
        // Navigate to a web page
        await DriverUtils.getURL(driver, WEB_URL)
    });

    it('1: Verify the page title to check if home page loads successful', async () => {
        // To get the actual title from the web page
        let actualTitle =  await DriverUtils.getTitle(driver);
        // Getting the expected title from the page object file for home page
        let expectedTitle = HOMEPAGE_TEST_DATA.pageTitle;
        //Verify if actual title match with expected title
        MochaUtils.verifyEquals(actualTitle, expectedTitle , "The page title doesn't match");
    })

    it('2. Verify if the snatch bot icon is keyboad focusable for Accessibilty testing', async () =>{
        // find the element to be checked
        const element = await DriverUtils.findElementById(driver, HOMEPAGE_LOCATOR.snatchBotIcon);
        // check if the SnatchBot icon is keyboard focusable
        const isFocusable = await AssertUtils.elementIsDisplayed(element) && await AssertUtils.elementIsEnabled(element);
        MochaUtils.verifyIsTrue(isFocusable, "SnatchBot icon is not keyboard focusable")
    })

    it('3. Verify if home page is showing up in english language by default', async () =>{
        // find the element to be checked
        const eleExists = await AssertUtils.isElementExists(driver, HOMEPAGE_LOCATOR.language_en); 
        // check if language is showing up in english
        MochaUtils.verifyIsTrue(eleExists ,  "The web page is not showing up in English language")
    })


    afterEach('delete individual contact', async () => {
        
    });

    after('Quit the driver', async () => {
            await driver.quit()
    });

});
