import DriverUtils from "../utils/driver.utils";
import { Driver } from "selenium-webdriver/chrome";

const snatchBotIcon = "sntch_button";
const snatchBotFrame = "sntch_iframe"

const HOMEPAGE_LOCATOR = {
    snatchBotIcon,
    snatchBotFrame
}

async function VerifyConversationWindowTitle(driver: Driver){
    const element = await DriverUtils.findElementById(driver, HOMEPAGE_LOCATOR.snatchBotIcon)
    element.click()
}



export default HOMEPAGE_LOCATOR;