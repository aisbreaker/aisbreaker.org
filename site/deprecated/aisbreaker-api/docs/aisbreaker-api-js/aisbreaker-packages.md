---
#prev:
#  text: 'AIsBreaker Server'
#  link: '/docs/aisbreaker-server'
#next:
#  text: 'Monorepo'
#  link: '/docs/aisbreaker-api-js/monorepo'
---


AIsBreaker Packages for TypeScript and JavaScript
=================================================

The main TypeScript/JavaScript code is organized in a single [`aisbreaker-js` git repo](https://github.com/aisbreaker/aisbreaker-js/). This [Monorepo](monorepo) is splitted up in a couple of npm packages ([ES modules](https://nodejs.org/api/esm.html#esm_introduction)).

AIsBreaker consists of the packages listed below. Details about recent changes and the latest versions of the packages can be found in the [CHANGELOG](https://github.com/aisbreaker/aisbreaker-js/blob/main/CHANGELOG.md).
- **`aisbreaker-api-js`** (old name: `aisbreaker-api`) **(needed for browser and for NodeJS apps)**
  - basic API (interfaces)
  - base classes and functions for client use of the API
  - base utils for service (adapters, filters, combinators) implementations
  - inclusive `aisbreaker/dummy` and `aisbreaker/remote` adapters
  - everything running in NodeJS and in modern browsers
  - [source code](https://github.com/aisbreaker/aisbreaker-js/tree/develop/packages/aisbreaker-api-js/), [reference docs (generated)](/reference/aisbreaker-api-js/README)
  
- **`aisbreaker-core-browserjs` (needed for browsers apps)**
  - `aisbreaker-core-js` (`aisbreaker-api`) and maybe more
  - for modern browsers
  - [source code](https://github.com/aisbreaker/aisbreaker-js/tree/develop/packages/aisbreaker-core-browserjs/), [reference docs (generated)](/reference/aisbreaker-core-browserjs/README)
  
- **`aisbreaker-core-nodejs` (needed for NodeJS apps)**
  - `aisbreaker-core-js` (`aisbreaker-api`)
  - very common adapters: `openai/*`, `stabilityai/*`, `open-assistant/*`, `huggingface/*`, ...
  - for NodeJS
  - [source code](https://github.com/aisbreaker/aisbreaker-js/tree/develop/packages/aisbreaker-core-nodejs/), [reference docs (generated)](/reference/aisbreaker-core-nodejs/README)

- `aisbreaker-chat-cli`
  - command line chat UI
  - NodeJS
  - [source code](https://github.com/aisbreaker/aisbreaker-js/tree/develop/packages/aisbreaker-chat-cli/)
  
- `aisbreaker-chat-webapp`
  - web-based chat UI
  - browser
  - Vue3-based
  - [source code](https://github.com/aisbreaker/aisbreaker-js/tree/develop/packages/aisbreaker-chat-webapp/)

- (maybe later) `aisbreaker-extended(-services)-nodejs`
  - rarely used and experimental adapters

- (maybe later) `aisbreaker-community(-services)-nodejs`
  - adapters developed by the community

- `aisbreaker-server`
  - code to run an NodeJS + [Express](https://expressjs.com/) HTTP server, to serve the AIsBreaker API via REST
  - inclusive server default setup
  - [source code](https://github.com/aisbreaker/aisbreaker-js/tree/develop/packages/aisbreaker-server/)
