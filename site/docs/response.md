---
#prev:
#  text: 'Concepts'
#  link: './concepts'
#next:
#  text: 'Concepts'
#  link: './concepts'
---


Response (ResponseFinal and ResponseEvent)
==========================================
... is the (service independent) output of/result to a [Request](./request) from an AI service.

Service-independent means that the format of the request is the same for all service implementations/vendors of the same `task`.

The `ResponseFinal` is the final result of a request. Below we see examples.

The `ResponseEvent` is a partial result of a request, which is sent while the request is still being process and the response is streamed. This is only relevant for requests with `stream: true`. If a response is streamed, then an additional `ResponseFinal` is sent after the last `ResponseEvent`.

Examples
--------
... of `ResponseFinal`:

- chat response *(example 1 - response from OpenAI chat to the question "What is JavaScript?")*:
  ```json
  {
    "outputs":[
      {
         "text":{
            "index":0,
            "role":"assistant",
            "content":"JavaScript is a high-level, interpreted programming language that is primarily used to add interactivity and dynamic features to websites. It allows developers to create scripts that can be embedded in HTML and executed by web browsers. JavaScript is known for its versatility and is commonly used for tasks such as validating user input, modifying webpage content on-the-fly, creating animations, handling events, and making asynchronous requests to servers.",
            "isDelta":false,
            "isProcessing":false
         }
      }
    ],
    "conversationState":"eyJtZXNzYW...19XX0=",
    "usage":{
      "engine":{
         "serviceId":"chat:openai.com/gpt-3.5-turbo-0613"
      },
      "totalMilliseconds":3104
    }
  }
  ```


Specification/Declaration
-------------------------
- for TypeScript/JavaScript:
  - ResponseFinal: [aisbreaker-js/.../api/models/ResponseFinal.ts](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/api/models/ResponseFinal.ts)
  - ResponseEvent: [aisbreaker-js/.../api/models/ResponseEvent.ts](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/api/models/ResponseEvent.ts)
- more programming languages to come ...
