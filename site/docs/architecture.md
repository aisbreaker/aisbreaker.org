---
prev:
  text: 'Home'
  link: '/'
next:
  text: 'Concepts'
  link: './concepts'
---

Architecture (Overview)
=======================

AIsBreaker Client API Architecture
----------------------------------
When you implement your own app, you will usually use this API, implemented by the respective library. Here, the third-party AI services are called indirectly - via the intermediate AIsBreaker server.

```mermaid
graph TD
  subgraph client[Your App]
    App["<b>Your Code</b>"]
    Lib["AIsBreaker Client API Lib
         <sub><sup>free open source</sup></sub>"]
    App ==API Key + Service Properties + <b>Request</b>==> Lib
    Lib ==<b>Response</b>==> App
  end
  Lib --> Server
  subgraph internet["Internet&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"]
    Server["AIsBreaker Server
            <sub><sup><b>self-hosted</b> or <b>api.demo.aisbreaker.org</b></sup></sub>
            <sub><sup>free open source</sup></sub>"]
    Server --> AI1["OpenAI (ChatGPT)"]
    Server --> AI2["Huggingface AI"]
    Server --> AI3["OpenAssistant AI"]
    Server --> AI4["..."]
  end
```
The AIsBreaker Client API library is currently available for TypeScript/JavaScript, but implementations for Python and Java/Kotlin/JVM are planned.

Read more:
- [Concepts](./concepts) of service properties, API keys, request and responses
- [AIsBreaker Client API](./aisbreaker-client-api) details

Instead of using the library, you can also call the REST API of the AIsBreaker server directly, but this is less convenient and not recommended.


AIsBreaker Local API Architecture
---------------------------------
_**Beginners should skip this section.**_

An AIsBreaker Local API library is also available, but only recommend for the internal AIsBreaker Server implementation itself and **not recommended for general use**.

With the AIsBreaker Local API, the 3rd-party AI services are called directly from within your app. This can cause additional problems, e.g. in dandling the API keys correctly and should only be used if really needed. 

The AIsBreaker Local API library is only available for TypeScript/JavaScript.

```mermaid
graph TD
  subgraph client[Your App]
    App[<b>Your Code</b>] ==> Lib["AIsBreaker Local API Lib
                                   <sub><sup>free open source</sup></sub>"]
  end
  subgraph internet["Internet"]
    Lib --> AI1["OpenAI (ChatGPT)"]
    Lib --> AI2["Huggingface AI"]
    Lib --> AI3["OpenAssistant AI"]
    Lib --> AI4["..."]
  end
```
