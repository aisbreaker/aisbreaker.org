---
#prev:
#  text: 'Home'
#  link: '/'
#next:
#  text: 'Reference'
#  link: '/reference/'
---

AIsBreaker Client API
=====================

Introduction
------------
The AIsBreaker Client API is the default way to access different AI services, using the [AIsBreaker Server](./aisbreaker-server). The architecture is illustrated on the [Architecture](architecture#aisbreaker-client-api-architecture) page.

To access the client API you need the following three things: Service Properties, AIsBreaker API Key and the message you want to send.



AIsBreaker Client API - with TypeScript/JavaScript
--------------------------------------------------

Most API functions work asynchronously. It's importand to understand [async + await](https://javascript.info/async-await) and to used it to make your code easier to read and to write.

### Using the AIsBreaker Client API
- [Getting Started - with TypeScript/JavaScript](./getting-started-with-typescript-javascript)


### Relevant Data Types
Important data types:
- [Service Properties / ServiceProps / AIsServiceProps](./service-properties)
- [AIsBreaker API Key (AIsBreaker Access Token)](./aisbreaker-api-key)
- messages:
  - request/question/prompt: [Request](./request)
  - response/answer: [Response (ResponseFinal and ResponseEvent)](./response)

All details and source code:
- [AIsBreaker Packages for TypeScript and JavaScript ](aisbreaker-api-js/aisbreaker-packages)
