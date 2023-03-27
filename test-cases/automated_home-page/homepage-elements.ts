import AssertUtils from '../../utils/assert.utils';
import { WebDriver } from '../../libs/selenium-libs';
import DriverUtils from '../../utils/driver.utils';
import MochaUtils from '../../utils/mocha.utils';
import { WEB_URL, CHROME_BROWSER } from '../../constants/web-config.constants';
import HOMEPAGE_TEST_DATA from '../../test-data/homepage-test-data';
import HomepagePageObjects from '../../page-objects/home-page';
var driver: WebDriver;

describe('Test if home page loads successfully', async () => {
  before('Launch the browser and load the web url', async () => {
    driver = await DriverUtils.getDriverBuild(CHROME_BROWSER);
    await DriverUtils.maximizeWindow(driver);
    await DriverUtils.getURL(driver, WEB_URL);
  });

  it('1: Verify the page title to check if home page loads successful', async () => {
    let actualTitle = await DriverUtils.getTitle(driver);
    let expectedTitle = HOMEPAGE_TEST_DATA.pageTitle;
    MochaUtils.verifyEquals(
      actualTitle,
      expectedTitle,
      'The page is not loaded successfully'
    );
  });

  it('2. ACCESSIBILITY TESTING: Verify if the snatch bot icon is keyboard focusable', async () => {
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

  it('3. Verify if home page is showing up in english language by default', async () => {
    const eleExists = await AssertUtils.isElementExists(
      driver,
      HomepagePageObjects.language_en
    );
    MochaUtils.verifyIsTrue(
      eleExists,
      'The web page is not showing up in English language'
    );
  });

  after('Quit the driver', async () => {
    await driver.quit();
  });
});
