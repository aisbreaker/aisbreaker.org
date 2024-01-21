---
description: "Getting started with AIsBreaker using TypeScript/JavaScript"
keywords:
  - AIsBreaker
  - TypeScript
  - JavaScript
  - guide
  - tutorial
  - REST API
  - OpenAI/ChatGPT
  - Hugging Face
  - Google Gemini AI
#prev:
#  text: 'Home'
#  link: '/'
#next:
#  text: 'Reference'
#  link: '/reference/'
---

Getting Started - with TypeScript/JavaScript
============================================

Setup
-----
Install required dependencies:

::: code-group
```bash[NodeJS app]
npm install aisbreaker-api-js aisbreaker-core-nodejs
```

```bash[Browser webapp]
npm install aisbreaker-api-js aisbreaker-core-browserjs
```
:::

Set an [API Key](./api-keys) in your environment, if required by your desired [service](./services), and only for NodeJS apps:
::: code-group
```bash[NodeJS app]
# set AIsBreaker API Key:
export AISBREAKER_API_KEY="aisbreaker_123abc..."
# or set OpenAI API Key:
export AISBREAKER_API_KEY="sk-123abc..."
```
:::
In a browser webapps read the API Key from an authentication flow or from configuration instead. But only use [AIsBreaker API Keys](aisbreaker-api-key) to never expose your AI service API key to webapp users.


Initialize the AIsBreaker Client API
------------------------------------
Import required libraries:

<!--
::: code-group
```TypeScript[main.ts (NodeJS app)]
import { api, services } from 'aisbreaker-api-js'
import * as core from 'aisbreaker-core-nodejs'
```

```JavaScript[main.js (NodeJS app)]
import { api, services } from 'aisbreaker-api-js';
import * as core from 'aisbreaker-core-nodejs';
```

```TypeScript[main.ts (Browser webapp)]
import { api, services } from 'aisbreaker-api-js'
import * as core from 'aisbreaker-core-browser'
```

```JavaScript[main.js (Browser webapp)]
import { api, services } from 'aisbreaker-api-js';
import * as core from 'aisbreaker-core-browser';

```
:::
-->
::: code-group
```TypeScript[main.ts (NodeJS or Browser)]
import { api } from 'aisbreaker-api-js'
```

```JavaScript[main.js (NodeJS or Browser)]
import { api } from 'aisbreaker-api-js';
```
:::

Select your desired service and define respective [Service Properties](./service-properties) - mainly the [serviceId](./serviceId):

::: code-group
```TypeScript[main.ts]
const serviceProps: api.AIsServiceProps = {
  //serviceId: 'chat:dummy',

  serviceId: "chat:openai.com",

  //serviceId: "chat:huggingface.co/microsoft/DialoGPT-large",

  //serviceId: "chat:huggingface.co/<HF-ACCOUNT>/<HF-MODEL>",

  //serviceId: "aisbreaker:mirror",
  //forward2ServiceProps: {
  //  "serviceId": "chat:echo"
  //},
}
```

```JavaScript[main.js]
const serviceProps = {
  //serviceId: 'chat:dummy',

  serviceId: "chat:openai.com",

  //serviceId: "chat:huggingface.co/microsoft/DialoGPT-large",

  //serviceId: "chat:huggingface.co/<HF-ACCOUNT>/<HF-MODEL>",

  //serviceId: "aisbreaker:mirror",
  //forward2ServiceProps: {
  //  "serviceId": "chat:echo"
  //},
};
```
:::

Read the API Key from your environment, if required by your desired service:

::: code-group
```TypeScript[main.ts (NodeJS app)]
const auth: api.Auth = {
  secret: process.env.AISBREAKER_API_KEY || process.env.OPENAI_API_KEY || "",
}
// or (if no API is required by your desired service):
const auth = undefined
```

```JavaScript[main.js (NodeJS app)]
const auth = {
  secret: process.env.AISBREAKER_API_KEY || process.env.OPENAI_API_KEY || "",
};
// or (if no API is required by your desired service):
const auth = undefined;
```

```TypeScript[main.ts (Browser webapp)]
// In a browser webapps read the API Key
// from an authentication flow or from configuration instead.
//
// But only use AIsBreaker API Keys
// to never expose your AI service API key to webapp users!!!
const auth: api.Auth = {
  secret: "...",
}
// or (if no API is required by your desired service):
const auth = undefined
```

```JavaScript[main.js (Browser webapp)]
// In a browser webapps read the API Key
// from an authentication flow or from configuration instead.
//
// But only use AIsBreaker API Keys
// to never expose your AI service API key to webapp users!!!
const auth = {
  secret: "...",
};
// or (if no API is required by your desired service):
const auth = undefined;
```
:::

Select the [AIsBreaker server](aisbreaker-server) to use and get access to the API:
::: code-group
```TypeScript[main.ts]
// set AIsBreaker Server URL:
const url = "https://api.demo.aisbreaker.org"
// get API access:
const aisService: api.AIsService = api.AIsBreaker.getAIsService(url, serviceProps, auth)
```

```JavaScript[main.js]
// set AIsBreaker Server URL:
const url = "https://api.demo.aisbreaker.org";
// get API access:
const aisService = api.AIsBreaker.getAIsService(url, serviceProps, auth);
```
:::


Use the AIsBreaker Client API
-----------------------------
Most API functions work asynchronously. It's a good idea to use [async + await](https://javascript.info/async-await) to make your code easier to read and to write.

Below we implement a simple conversation example in an `async` function: 1st request/question/prompt + 1st response/answer + 2nd request/question/prompt + 2nd response/answer.

::: code-group
```TypeScript[main.ts]
// 1st request/question/prompt
const request1 = "What is an AI?"
// process
const response1 = await aisService.process({
    inputs: [ {
        text: {
            role: 'user',
            content: request1,
        },
    } ],
})
// 1st response/answer
console.log(`response1: ${response1.outputs[0].text.content}`)

// 2nd request/question/prompt
const prompt2 = `
    If your previous answer in English, then translate your answser to German.
    If your previous answer was not English, then translate your answser to English.
    Only provide the translated text.
    `
// process, include conversation state from previous request
const response2 = await aisService.process({
    inputs: [ {
        text: {
            role: 'system',
            content: prompt2,
        },
    } ],
    conversationState: response1.conversationState,
})
// 2nd response/answer
console.log(`response2: ${response2.outputs[0].text.content}`)
```

```JavaScript[main.js]
// 1st request/question/prompt
const request1 = "What is an AI?";
// process
const response1 = await aisService.process({
    inputs: [ {
        text: {
            role: 'user',
            content: request1,
        },
    } ],
});
// 1st response/answer
console.log(`response1: ${response1.outputs[0].text.content}`);

// 2nd request/question/prompt
const prompt2 = `
    If your previous answer in English, then translate your answser to German.
    If your previous answer was not English, then translate your answser to English.
    Only provide the translated text.
    `;
// process, include conversation state from previous request
const response2 = await aisService.process({
    inputs: [ {
        text: {
            role: 'system',
            content: prompt2,
        },
    } ],
    conversationState: response1.conversationState,
});
// 2nd response/answer
console.log(`response2: ${response2.outputs[0].text.content}`);
```
:::
Details:
- request/question/prompt: [Request](./request)
- response/answer: [(ResponseFinal and ResponseEvent)](./response)




Finally, we need to call the `action` function:

::: code-group
```TypeScript[main.ts (NodeJS app)]
# at buttom of the file:
action()
```

```JavaScript[main.js (NodeJS app)]
# at buttom of the file:
action();
```

```TypeScript[xxx.ts (Browser webapp)]
# usually called by an event handler
# (details depend on your webapp framework):
action()
```

```JavaScript[xxx.js (Browser webapp)]
# usually called by an event handler
# (details depend on your webapp framework):
action();
```
:::


Examples
--------
Some example apps are available:

- **example simple 'chat'** - JavaScript + NodeJS
  - source code: [aisbreaker/aisbreaker-example-simple-chat-node-js/](https://github.com/aisbreaker/aisbreaker-example-simple-chat-node-js/)
  - explained on: [Demo: JavaScript Code (Intro)](./demo-javascript-intro)
  - open in your browser: [Demo: JavaScript Code (Live Demo in StackBlitz Web-IDE)](https://stackblitz.com/github/aisbreaker/aisbreaker-example-simple-chat-node-js?title=AIsBreaker+Example+Simple+Chat-node-js&file=aisbreaker-simple-chat.js&startScript=install,start)

- **simple command line 'chat'** - TypeScript + NodeJS:
  - source code (alternative 1): [aisbreaker-js/packages/aisbreaker-api-js/src/startChat.ts](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/startChat.ts)
  - source code (alternative 2): [aisbreaker-js/packages/aisbreaker-core-nodejs/src/startChat.ts](
https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-core-nodejs/src/startChat.ts)

- **simple command line to to generate an image** - TypeScript + NodeJS:
  - source code: [aisbreaker-js/packages/aisbreaker-core-nodejs/src/startImage.ts](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-core-nodejs/src/startImage.ts)

- **interactive command line chat** - JavaScript + NodeJS:
  - source code: [aisbreaker-js/packages/aisbreaker-chat-cli/chat-cli.js](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-chat-cli/chat-cli.js)

- **AIsBreaker Chat WebApp** - browser webapp in TypeScript with Vue3 using the AIsBreaker Client API:
  - live demo: [demo.aisbreaker.org](https://demo.aisbreaker.org/) ([Chat WebApp (Intro)](./demo-chat-webapp-intro))
  - source code: [aisbreaker-js/packages/aisbreaker-chat-webapp/](https://github.com/aisbreaker/aisbreaker-js/tree/develop/packages/aisbreaker-chat-webapp/)
