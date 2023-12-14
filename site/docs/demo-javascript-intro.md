---
prev:
  text: 'Home'
  link: '/'
next:
  text: 'Demo: REST API Access (Intro)'
  link: '/docs/demo-rest-api-access-intro'
---

# Demo: JavaScript Code
This demo shows a JavaScript NodeJS application that uses the AIsBreaker API to access AI services.

Other demos: [REST API Access (Intro)](./demo-rest-api-access-intro), [Chat WebApp (Intro)](./demo-chat-webapp-intro)


## Preparation
Install the AIsBreaker JavaScript/TypeScript library:
```bash
npm install aisbreaker-api-js
```
and import it in your code:
```JavaScript
import { api } from "aisbreaker-api-js";

console.log("aisbreaker-example-simple-chat");
console.log("------------------------------");
```

## Service Configuration
Define the [serviceProps](./service-properties) and select the [service/serviceId](./serviceId) you want to use:
```JavaScript
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
```

Optionally, provide your own [API key](./api-keys) for the AI service. If you don't provide a key, a default AIsBreaker API key is used with strict quotas:
```JavaScript
const auth = {
    // optionally, set your OpenAI API key:
    //secret: "sk-...",

    // optionally, set your Huggingface API key:
    //secret: "hf_...",

    // optionally, set your AIsBreaker API key:
    //secret: "aisbreaker_...",
}
```

## Service Initialization
Get the API access via the `aisService` object:
```JavaScript
const aisbreakerServerURL = "https://api.demo.aisbreaker.org/";
const aisService = api.AIsBreaker.getInstance().
    getAIsService(aisbreakerServerURL, servicePros, auth);
```
We use the free `api.demo.aisbreaker.org` server for convenience here. The server doesn't save any data or credentials. Feel free to install your own [AIsBreaker server](aisbreaker-server).

## Define your Prompt/your Question
```JavaScript
const question1 = "What is NodeJS?";
console.log(`***** Question1 ***** ${question1}`);
```

## Get the Response/Answer from the AI Service
```JavaScript[aisbreaker-simple-chat.js (part)]
const response1 = await aisService.process({
    inputs: [ {
        text: {
            role: "user",
            content: question1,
        },
    } ],
});
console.log(`***** Answer1 ***** ${response1.outputs[0].text.content}`);
```

## Putting it all together
```bash
npm install && npm run start
```

will show output like:
```
aisbreaker-example-simple-chat
------------------------------
***** Question1 *****
What is NodeJS?
***** Answer1 *****
Hello, this is the reponse to 'What is NodeJS?' from DummyAssistantService ... To get a useful answer, choose a different service/serviceId ...
```

## Try Variations
- try different configurations/serviceProps/serviceIds instead of the `chat:dummy`
- re-run the example with `npm run start`

## Full Source Code of the Example
... including a longer conversation with 2nd question and 2nd answer ... on GitHub: [aisbreaker/aisbreaker-example-simple-chat-node-js/](https://github.com/aisbreaker/aisbreaker-example-simple-chat-node-js/)

## Open in StackBlitz Web-IDE
- open [Demo: JavaScript Code (Live Demo in StackBlitz Web-IDE)](https://stackblitz.com/github/aisbreaker/aisbreaker-example-simple-chat-node-js?title=AIsBreaker+Example+Simple+Chat-node-js&file=aisbreaker-simple-chat.js&startScript=install,start) in your browser
    - it will automatically execute `npm install && npm run start`
- try different configurations/serviceProps/serviceIds instead of the `chat:dummy`
- re-run the example with `npm run start`

## More Details
More details on how to access the AIsBreaker API can be found on the **Getting Started** tutorials in the docs.

But before, you should understand the basic concepts and read the [Introduction (AIsBreaker Docs)](/docs/) ...
