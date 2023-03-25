import DriverUtils from "../utils/driver.utils";
import { Driver } from "selenium-webdriver/chrome";

const snatchBotIcon = "sntch_button";
const snatchBotFrame = "sntch_iframe"
const snatchBotPopUp_circle = "sntch_popup_circle";
const snatchBotPopUpBox = "sntch_popup";
const language_en = "//html[@lang= 'en']"

const HOMEPAGE_LOCATOR = {
    snatchBotIcon,
    snatchBotFrame,
    language_en
}

async function clickSnatchBotIcon(driver: Driver){
    const element = await DriverUtils.findElementById(driver, HOMEPAGE_LOCATOR.snatchBotIcon)
    element.click()
}



export default HOMEPAGE_LOCATOR;