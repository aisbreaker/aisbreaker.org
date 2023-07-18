---
prev:
  text: 'Guide'
  link: '/docs/'
next:
  text: '???'
  link: '/???'

---


AIsBreaker Packages/ES Modules for JavaScript and TypeScript
============================================================


Git repo: aisbreaker-api -> aisbreaker-js / aisbreaker-core-js / aisbreaker-core-js-monorepo / ...?

npm packages ([ES modules](https://nodejs.org/api/esm.html#esm_introduction)):
- `aisbreaker-api-js` (ehemals `aisbreaker-api`)
  - basic API (interfaces)
  - base classes and functions for client use of the API
  - base utils for service (adapters, filters, combinators) implementations
  - inclusive `aisbreaker/dummy` and `aisbreaker/remote` adapters
  - everything running in NodeJS and in modern browsers
  
- **`aisbreaker-core-browserjs` (default module import for browsers)**
  - `aisbreaker-core-js` (`aisbreaker-api`) and maybe more
  - for modern browsers
  
- **`aisbreaker-core-nodejs` (default module import for NodeJS)**
  - `aisbreaker-core-js` (`aisbreaker-api`)
  - very common adapters: `openai/*`, `stabilityai/*`, `open-assistant/*`, `huggingface/*`, ...
  - for NodeJS

- `aisbreaker-chat-cli`
  - command line chat UI
  - NodeJS
  
- `aisbreaker-chat-webapp`
  - web-based chat UI
  - browser
  - Vue3-based

- (maybe later) `aisbreaker-extended(-services)-nodejs`
  - rarely used and experimental adapters

- (maybe later) `aisbreaker-community(-services)-nodejs`
  - adapters developed by the community

- `aisbreaker-server-nodejs`
  - code to run an NodeJS + [Express](https://expressjs.com/) HTTP server, to serve the AIsBreaker API via REST
  - inclusive proxy server default setup

