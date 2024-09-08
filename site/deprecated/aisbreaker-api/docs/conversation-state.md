---
#prev:
#  text: 'Concepts'
#  link: './concepts'
#next:
#  text: 'Concepts'
#  link: './concepts'
---


Conversation State
==================
... stores the state of a conversation, which usually includes the history of the conversation between the user and the AI service. 

A `conversationState` is an opaque string (TypeScript type `string`) that is returned by the AI service in the [response](response) and can be used in the next [request](request) to continue the conversation. The specific content of this string is service-specific and not standardized - and irrelevant for AIsBreaker API users.


Example
--------
- chat response with `conversationState`:
  ```json
  {
    "outputs":[
      {
         "text":{
            "index":0,
            "role":"assistant",
            "content":"JavaScript is a high-level, interpreted programming language that ...",
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
- chat request that continues a conversation, i.e. with `conversationState` returned from previous chat response:
  ```json
  {
    "inputs": [{
      "text": {
        "role": "user",
        "content": "Please translate into German"
      }
    }],
    "conversationState":"eyJtZXNzYW...19XX0="
  }
  ```
