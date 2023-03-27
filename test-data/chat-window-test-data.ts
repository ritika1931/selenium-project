const chatWindowTitle = 'SnatchBot';
const welcomeMesg1 = '👋 Hello there, glad to hear from you.';
const welcomeMesg2 =
  "I am Jamie, 🤖 Snatchbot's chatbot assistant, and I am here to present you our handy tech solutions.";
const welcomeMesg3 =
  'Would you like to chat with me, or contact our sales department?';
const maxCharForInputBox =
  "In today's fast-paced world, technology has become an integral part of our lives. From the way we communicate to the way we work, technology has revolutionized every aspect of our daily routine. With the advent of smartphones, social media, and various other digital platforms, we are constantly connected to the world around us. However, this constant connectivity has also led to several negative consequences that we need to address.  One of the biggest downsides of technology is the impact it has on our mental health. With the constant barrage of notifications, emails, and messages, it can be challenging to disconnect and take a break. This can lead to increased stress, anxiety, and even depression. Additionally, social media has made it easier for people to compare themselves to others, leading to feelings of inadequacy and low self-esteem.  Another issue with technology is the impact it has on our physical health. With many of us spending hours sitting in front of a screen, we are more sedentary than ever before. This lack of physical activity can lead to obesity, heart disease, and other health problems. Additionally, the blue light emitted by screens can disrupt our sleep patterns, leading to insomnia and other sleep disorders.  Despite these challenges, technology also has several benefits. It has made it easier for us to connect with people across the globe, work from anywhere, and access information on virtually any topic. It has also revolutionized industries such as healthcare, education, and transportation, making our lives easier and more convenient.  To address the negative consequences of technology, we need to adopt a more balanced approach. We need to be mindful of how much time we spend on screens and make a conscious effort to disconnect and engage in physical activities. We can also limit our exposure to negative social media content by unfollowing or muting accounts that do not bring us joy. Additionally, we can use technology to improve our mental and physical health by downloading apps that help us meditate, exercise, or track our sleep patterns.  In conclusion, technology has transformed our lives in many ways, but it also has its downsides. By adopting a more balanced approach, we can harness the benefits of technology while mitigating its negative consequences. We need to prioritize our mental and physical health, disconnect from technology when necessary, and use it mindfully to enhance our lives. In today's fast-paced world, technology has become an integral part of our lives. From the way we communicate to the way we work, technology has revolutionized every aspect of our daily routine. With the advent of smartphones, social media, and various other digital platforms, we are constantly connected to the world around us. However, this constant connectivity has also led to several negative consequences that we need to address.  One of the biggest downsides of technology is the impact it has on our mental health. With the constant barrage of notifications, emails, and messages, it can be challenging to disconnect and take a break. This can lead to increased stress, anxiety, and even depression. Additionally, social media has made it easier for people to compare themselves to others, leading to feelings of inadequacy and low self-esteem.  Another issue with technology is the impact it has on our physical health. With many of us spending hours sitting in front of a screen, we are more sedentary than ever before. This lack of physical activity can lead to obesity, heart disease, and other health problems. Additionally, the blue light emitted by screens can disrupt our sleep patterns, leading to insomnia and other sleep disorders.  Despite these challenges, technology also has several benefits. It has made it easier for us to connect with people across the globe, work from anywhere, and access information on virtually any topic. It has also revolutionized industries such as healthcare, education, and transpor";
const automatedTextMegForNoAudio =
  'Sorry, could not recognize your message, please try again.';
const duplicateSessionAlertMesg =
  'You have an active conversation in another tab. Do you want to continue existing conversation or start a new one in this tab?';
const conversation1 = {
  userQuery: 'What is chatBot',
  chatBotResponse:
    'There’s lots I can show you but first please let me know your name.',
};

const conversation2 = {
  userQuery: 'Ritika',
  chatBotResponse: 'Hi Ritika! Good to chat to you. Did I get your name right?',
};
const conversation3 = {
  userQuery: 'What is weather today',
  chatBotResponse:
    "I'm sorry, Ritika, I didn't get that. Let me tell you again what I can do for you.",
};

const CHAT_WINDOW_TEST_DATA = {
  chatWindowTitle,
  welcomeMesg1,
  welcomeMesg2,
  welcomeMesg3,
  maxCharForInputBox,
  automatedTextMegForNoAudio,
  duplicateSessionAlertMesg,
  conversation1,
  conversation2,
  conversation3,
};

export default CHAT_WINDOW_TEST_DATA;
