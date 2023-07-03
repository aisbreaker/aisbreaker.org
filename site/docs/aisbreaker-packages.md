---
prev:
  text: 'Guide'
  link: '/docs/'
next:
  text: '???'
  link: '/???'

---


AIsBreaker Packages for JavaScript and TypeScript
=================================================

npm packages ([ES modules](https://nodejs.org/api/esm.html#esm_introduction)):
- `aisbreaker-api`
  - basic API (interfaces)
  - base classes and functions for client use of the API
  - base utils for service (adapters, filters, combinators) implementations
  - inclusive `aisbreaker/dummy` and `aisbreaker/remote` adapters
  - everything running in NodeJS and in modern browsers
  
- **`aisbreaker-core-browser` (default module import for browsers)**
  - `aisbreaker-api` and maybe more
  - for modern browsers
  
- `aisbreaker-core-services-nodejs`
  - very common adapters: `openai/*`, `stabilityai/*`, `open-assistant/*`, `huggingface/*`, ...
  - for NodeJS

- **`aisbreaker-code-nodejs` (default module import for NodeJS)**
  - `aisbreaker-api` and `aisbreaker-core-services-nodejs`
  - for NodeJS

- (maybe later) `aisbreaker-extended-services-nodejs`
  - rarely used and experimental adapters

- `aisbreaker-server-nodejs`
  - code to run an NodeJS+ExpressJS server, to serve the AIsBreaker API via REST
  - inclusive proxy server default setup

