---
prev:
  text: 'Home'
  link: '/'
next:
  text: 'Reference'
  link: '/reference/'
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
export AISBREAKER_API_KEY="aisbreaker_123abc..."
# or
export OPENAI_API_KEY="sk-123abc..."
```
:::
In a browser webapps read the API Key from an authentication flow or from configuration instead. But only use [AIsBreaker API Keys](aisbreaker-api-key) to never expose your AI service API key to webapp user.


Initialize the AIsBreaker Client API
------------------------------------
Import required libraries:

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

Select your desired service and define respective [Service Properties](./service-properties) - mainly the [serviceId](./serviceId):

::: code-group
```TypeScript[main.ts]
const serviceProps: api.AIsServiceProps = {
  serviceId: 'chat:openai.com',
}
```

```JavaScript[main.js]
const serviceProps = {
  serviceId: 'chat:openai.com',
};
```
:::

Read the API Key from your environment, if required by your desired [service]
Select your desired service:

::: code-group
```TypeScript[main.ts (NodeJS app)]
const auth: api.Auth = {
  secret: process.env.AISBREAKER_API_KEY || process.env.OPENAI_API_KEY || "",
}
// or
const auth = undefined
```

```JavaScript[main.js (NodeJS app)]
const auth = {
  secret: process.env.AISBREAKER_API_KEY || process.env.OPENAI_API_KEY || "",
};
// or
const auth = undefined;
```

```TypeScript[main.ts (NodeJS app)]
// In a browser webapps read the API Key
// from an authentication flow or from configuration instead.
//
// But only use AIsBreaker API Keys
// to never expose your AI service API key to webapp users!!!
const auth: api.Auth = {
  secret: "...",
}
// or
const auth = undefined
```

```JavaScript[main.js (NodeJS app)]
// In a browser webapps read the API Key
// from an authentication flow or from configuration instead.
//
// But only use AIsBreaker API Keys
// to never expose your AI service API key to webapp users!!!
const auth = {
  secret: "...",
};
// or
const auth = undefined;
```
:::

Get access to the API:
::: code-group
```TypeScript[main.ts]
// set AIsBreaker Server URL:
const url = "https://api.demo.aisbreaker.org"
// get API access:
const aisService: api.AIsService = api.AIsBreaker.getRemoteAIsService(url, serviceProps, auth)
```

```JavaScript[main.js]
// set AIsBreaker Server URL:
const url = "https://api.demo.aisbreaker.org";
// get API access:
const aisService = api.AIsBreaker.getRemoteAIsService(url, serviceProps, auth);
```
:::


Use the AIsBreaker Client API
-----------------------------
Most API functions work asynchronously. It's a good idea to use [async + await](https://javascript.info/async-await) to make your code easier to read and write.

Here we implement a simple conversation example in an `async` function: 1st request + 1st response + 2nd request + 2nd response: 

::: code-group
```TypeScript[main.ts]
// TODO
```

```JavaScript[main.js]
// TODO
```




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

- **simple command line 'chat'** - JavaScriptScript + NodeJS
  - source code: [aisbreaker-js/packages/aisbreaker-chat-cli/simple-chat-cli.js](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-chat-cli/simple-chat-cli.js)

- **simple command line 'chat'** - TypeScript + NodeJS:
  - source code (alternative 1): [aisbreaker-js/packages/aisbreaker-api-js/src/startChat.ts](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/startChat.ts)
  - source code (alternative 2): [aisbreaker-js/packages/aisbreaker-core-nodejs/src/startChat.ts](
https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-core-nodejs/src/startChat.ts)

- **simple command line to to generate an image** - TypeScript + NodeJS:
  - source code: [aisbreaker-js/packages/aisbreaker-core-nodejs/src/startImage.ts](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-core-nodejs/src/startImage.ts)

- **interactive command line chat** - JavaScript + NodeJS:
  - source code: [aisbreaker-js/packages/aisbreaker-chat-cli/chat-cli.js](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-chat-cli/chat-cli.js)

- **AIsBreaker Chat WebApp** - browser webapp in TypeScript with Vue3 using the AIsBreaker Client API:
  - live demo: [demo.aisbreaker.org](https://demo.aisbreaker.org/) ([Demo Guide](./demo-guide))
  - source code: [aisbreaker-js/packages/aisbreaker-chat-webapp/](https://github.com/aisbreaker/aisbreaker-js/tree/develop/packages/aisbreaker-chat-webapp/)
