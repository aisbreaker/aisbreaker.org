---
prev:
  text: 'Concepts'
  link: './'
next:
  text: 'Concepts'
  link: './'
---


Request
=======
... is the (service-independent) input to an AI service. 

Service-independent means that the format of the request is the same for all service implementations/vendors of the same `task`.


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


Specification/Declaration
-------------------------
- for TypeScript/JavaScript:
  - Request: [aisbreaker-js/.../api/models/Request.ts](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/api/models/Request.ts)
- more programming languages to come ...
