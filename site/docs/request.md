---
#prev:
#  text: 'Concepts'
#  link: './concepts'
#next:
#  text: 'Concepts'
#  link: './concepts'
---


Request
=======
... is the (service-independent) input to an AI service. 

Service-independent means that the format of the request is the same for all service implementations/vendors of the same `task`.

If a conversation consists of multiple requests, then the `conversationState` of the previous response is used as input for the next request.

The result of a request is a [Response](response.md)

Examples
--------

- chat request (example 1):
  ```json
  {
    "inputs": [{
      "text": {
        "role": "user",
        "content": "What is JavaScript?"
      }
    }]
  }
  ```
- chat request (example 2 - with streaming of the result):
  ```json
  {
    "inputs": [{
      "text": {
        "role": "user",
        "content": "What is TypeScript?"
      }
    }],
    "stream": true
  }
  ```
- chat request (example 3 - continue a chat conversation, i.e. with conversationState returned from previous chat response):
  ```json
  {
    "inputs": [{
      "text": {
        "role": "user",
        "content": "What is TypeScript?"
      }
    }],
    "conversationState":"eyJtZXNzYW...19XX0="
  }
  ```


Specification/Declaration
-------------------------
- for TypeScript/JavaScript:
  - Request: [aisbreaker-js/.../api/models/Request.ts](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/api/models/Request.ts)
- more programming languages to come ...
