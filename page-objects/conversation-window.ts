import DriverUtils from "../utils/driver.utils";
import { Driver } from "selenium-webdriver/chrome";
import { WebDriver, WebElement } from "selenium-webdriver";

//conversation window locators
const snatchBotIcon = "sntch_button";
const snatchBotFrame = "//*[@id = 'sntch_iframe']"
const chatbotIframeElement = "//*[@id = 'sntch_webchat']/div/iframe";
const welcomeMesgsElement = "angular-with-newlines ng-star-inserted"
const chatbotCloseWindowIcon = "//*[@id = 'sntch_close']";
const chatBotInputBox = "//*[@id = 'chat_input']";
const chatBotMicrophone = "//*[@id = 'sendAudioRec']";
const sendTextButton = "//*[@type='submit']";
const chatBoxAutomatedMesgsElement = "//*[@class='message__body ng-star-inserted']";
const userAudioMesgsElement = "//*[@class='message__body message__body_audio ng-star-inserted']";
const chatBotMesgText = "//*[@class='message__body ng-star-inserted']/p";
const counterIconOnMic = "//*[@class='mat-mini-fab mat-button-base mat-primary ng-star-inserted']/span";
const userInputTextMesg = "//*[@class ='message message--right ng-star-inserted']/div/div/div/p"
const chatBotResponseTextMesg = "//*[@class='message ng-star-inserted']/div/div/div/p"
const firstButtonForSelection = "//*[@data-test='message-suggested-btn'][1]/span"
const mesgDate = "//*[@class = 'message__date ng-star-inserted']/p"
const menuButtonIcon = "//*[contains(@class, 'persistent-menu-btn')]";
const infoIcon = "//*[contains(@class, 'persistent-menu-btn')]";


//conversation window methods
async function getChatBotIframe(driver: WebDriver){
    const IframeElement = await DriverUtils.findElementByXPath(driver, chatbotIframeElement )
    await driver.switchTo().frame(IframeElement);
}

async function switchToMainPage(driver: WebDriver){
    await driver.switchTo().defaultContent();
}

async function clickChatBotCloseIcon(driver: WebDriver){
    const closeIconElement = await DriverUtils.findElementById(driver, chatbotCloseWindowIcon );
    await closeIconElement.click();
}

async function getUserLastMesgElement(driver: WebDriver){
    const microphoneInputElements:WebElement[] = await DriverUtils.findElementsByXPath(driver, userAudioMesgsElement );
    return microphoneInputElements[microphoneInputElements.length-1]
}

async function getAutomatedLastMesgElement(driver: WebDriver){
    const microphoneInputElements:WebElement[] = await DriverUtils.findElementsByXPath(driver, chatBoxAutomatedMesgsElement );
    return microphoneInputElements[microphoneInputElements.length-1]
}

async function getUserTextMesg(driver: WebDriver){
    const microphoneInputElements:WebElement[] = await DriverUtils.findElementsByXPath(driver, userInputTextMesg );
    return microphoneInputElements[microphoneInputElements.length-1].getText();
}

async function getChatBotTextMesg(driver: WebDriver){
    const microphoneInputElements:WebElement[] = await DriverUtils.findElementsByXPath(driver, chatBotResponseTextMesg );
    return microphoneInputElements[microphoneInputElements.length-1].getText();
}

async function getChatBotTextMesgDate(driver: WebDriver){
    const microphoneInputElements:WebElement[] = await DriverUtils.findElementsByXPath(driver, mesgDate );
    return microphoneInputElements[microphoneInputElements.length-1].getText();
}

async function waitForTimeToStop(driver: WebDriver){
    const waitForTimerToStop = async () => {
        const timerIcon = await DriverUtils.findElementByXPath(driver, ConversationPageObjects.counterIconOnMic);
        const timerCount = await timerIcon.getText();
        return timerCount === '5'; 
    }
}

const ConversationPageObjects = {
    snatchBotIcon,
    snatchBotFrame,
    chatbotIframeElement,
    welcomeMesgsElement,
    chatbotCloseWindowIcon,
    chatBotInputBox,
    sendTextButton,
    chatBotMicrophone,
    chatBoxAutomatedMesgsElement,
    userAudioMesgsElement,
    counterIconOnMic,
    chatBotMesgText,
    userInputTextMesg,
    firstButtonForSelection,
    mesgDate,
    menuButtonIcon,
    getChatBotIframe,
    clickChatBotCloseIcon,
    switchToMainPage,
    getUserLastMesgElement,
    getAutomatedLastMesgElement,
    waitForTimeToStop,
    getUserTextMesg,
    getChatBotTextMesg,
    getChatBotTextMesgDate,
    chatBotResponseTextMesg
}


export default ConversationPageObjects;