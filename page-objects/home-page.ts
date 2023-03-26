import DriverUtils from "../utils/driver.utils";
import { Driver } from "selenium-webdriver/chrome";
import { WebDriver } from "selenium-webdriver";

const snatchBotIcon = "sntch_button";
const snatchBotFrame = "sntch_iframe"
const snatchBotPopUp_circle = "//*[@id = 'sntch_popup_circle']";
const snatchBotPopUpBox = "//*[@id = 'sntch_popup']";
const language_en = "//html[@lang= 'en']"
// Home page methods

async function clickSnatchBotIcon(driver: WebDriver){
    const iconElement = await DriverUtils.findElementById(driver, snatchBotIcon);
    await iconElement.click();
}

const HomepagePageObjects = {
    snatchBotIcon,
    snatchBotFrame,
    language_en,
    snatchBotPopUp_circle,
    snatchBotPopUpBox,
    clickSnatchBotIcon
}


export default HomepagePageObjects;
