---
prev:
  text: 'Home'
  link: '/'
next:
  text: 'Demo REST API Access (Guide)'
  link: '/docs/demo-rest-api-access-guide'
---

# Demo JavaScript with NodeJS (Guide)

This demo shows a JavaScript NodeJS application that uses the AIsBreaker API. It's just to get an impresion how the API works in TypeScript/JavaScript.


## Quick Start
- open the AIsBreaker [Demo JavaScript with NodeJS (Live in StackBlitz Web-IDE)](https://stackblitz.com/github/aisbreaker/aisbreaker-example-simple-chat-node-js?title=AIsBreaker+Example+Simple+Chat-node-js&file=aisbreaker-simple-chat.js&startScript=install,start)
- run `npm run start`
- try different configurations/serviceProps/serviceIds


## Slow Start

### Preparation
Install the AIsBreaker NodeJS library:

::: code-group
```bash[bash]
npm install aisbreaker-api-js
```

```json[Or in package.json directly]
{
  ...
  "dependencies": {
    ...
    "aisbreaker-api-js": "^0.1.15"
  }
  ...
}
```
:::

and

```bash[bash]
npm install
```

### Example JavaScript Code
The full example can be found on GitHub: [aisbreaker/aisbreaker-example-simple-chat-node-js/](https://github.com/aisbreaker/aisbreaker-example-simple-chat-node-js/)

Initialization and configuration:
```JavaScript[aisbreaker-simple-chat.js (part)]
#!/usr/bin/env node

//
// Simple example for AIsBreaker with JavaScript and NodeJS: simple chat.
//
// Run it with:
//   npm install && npm run start
//

import { api } from "aisbreaker-api-js";

console.log("aisbreaker-example-simple-chat");
console.log("------------------------------");


// service configuration: select the service/serviceId you want to use
const servicePros = {
    serviceId: "chat:dummy",

    //serviceId: "chat:openai.com",

    //serviceId: "chat:huggingface.co/microsoft/DialoGPT-large",

    //serviceId: "chat:huggingface.co/<HF-ACCOUNT>/<HF-MODEL>",

    //serviceId: "aisbreaker:mirror",
    //forward2ServiceProps: {
    //  "serviceId": "chat:echo"
    //},
};

// service initialization
const aisbreakerServerURL = "https://api.demo.aisbreaker.org/";
const auth = {
    // optionally, set your OpenAI API key:
    //secret: "sk-...",

    // optionally, set your Huggingface API key:
    //secret: "hf_...",

    // optionally, set your AIsBreaker API key:
    //secret: "aisbreaker_...",
}
const aisService = api.AIsBreaker.getInstance().
    getAIsService(aisbreakerServerURL, servicePros, auth);
```

Conversation (part 1):
```JavaScript[aisbreaker-simple-chat.js (part)]
// 1st question/prompt
const question1 = "What is NodeJS?";
console.log(`***** Question1 *****\n${question1}\n`);

// 1st answer
const response1 = await aisService.process({
    inputs: [ {
        text: {
            role: "user",
            content: question1,
        },
    } ],
});
console.log(`***** Answer1 *****\n${response1.outputs[0].text.content}\n`);
```

Conversation (part 2):
```JavaScript[aisbreaker-simple-chat.js (part)]
// 2nd question/prompt
const question2 = "shorter please";
console.log(`***** Question2 *****\n${question2}\n`);

// 2nd answer
const response2 = await aisService.process({
    inputs: [ {
        text: {
            role: "user",
            content: question2,
        },
    } ],
    conversationState: response1.conversationState,
});
console.log(`***** Answer2 *****\n${response2.outputs[0].text.content}\n`);
```

### Run the Example

Run with
```bash
node aisbreaker-simple-chat.js
```

will show something like this:
```
info: Registering factory for serviceId 'aisbreaker:network'
info: Registering factory for serviceId 'chat:dummy'
info: Registering factory for serviceId 'chat:echo'
info: Registering factory for serviceId 'aisbreaker:logging'
info: Registering factory for serviceId 'aisbreaker:mirror'
info: Registering factory for serviceId 'aisbreaker:nop'
aisbreaker-example-simple-chat
------------------------------
debug: getFactory('aisbreaker:network') succeeded
***** Question1 *****
What is NodeJS?

debug: AIsNetworkClientService(aisbreaker:network->https://api.demo.aisbreaker.org/->chat:dummy).process() START
***** Answer1 *****
Hello, this is the reponse to 'What is NodeJS?' from DummyAssistantService ... To get a useful answer, choose a different service/serviceId ...

***** Question2 *****
shorter please

debug: AIsNetworkClientService(aisbreaker:network->https://api.demo.aisbreaker.org/->chat:dummy).process() START
***** Answer2 *****
Hello, this is the reponse to 'shorter please' from DummyAssistantService ... To get a useful answer, choose a different service/serviceId ...
```

Now you can change the configuration/serviceProps/serviceId to chat with an actual AI service instead of the `chat:dummy`.


### Try Online
Checkout the [Quick Start](#quick-start) section above.


## More Details
More details on how to access the AIsBreaker API can be found on the **Getting Started** tutorials.

But before, you should understand the basic concepts and read the [Introduction (AIsBreaker Docs)](/docs/) ...
