---
prev:
  text: 'Demo (Guide)'
  link: '/docs/demo-guide'
next:
  text: 'Introduction (AIsBreaker Docs)'
  link: '/docs/'
---

Demo AIsBreaker API Access (Guide)
==================================

The AIsBreaker API is a normal REST API with JSON data.


First Request
-------------
Here is an example of a request to the AIsBreaker API with the `curl` command:

```bash
export URL="https://api.demo.aisbreaker.org"
curl "${URL}/api/v1/process" \
        -X POST \
        -H "Content-Type: application/json" \
        -d '{
  "service": {
    "serviceId": "chat:dummy"
  },
  "request": {
    "inputs": [ {
      "text": {
        "role": "user",
        "content": "What is an AI? Please explain it to me."
      }
    } ]
  }
}'
```

The response will look like this:

```json
{
  "outputs": [
    {
      "text": {
        "index": 0,
        "role": "assistant",
        "content": "Hello, this is the reponse to 'What is an AI? Please explain it to me.' from DummyAssistantService ... To get a useful answer, choose a different service/serviceId ..."
      }
    }
  ],
  "conversationState": "eyJtZXNz...",
  "usage": {
    "service": {
      "serviceId": "chat:dummy"
    },
    "totalMilliseconds": 1
  }
}
```

Second Request
--------------
To get a more useful response, replace

  `"serviceId": "chat:dummy"`
  
with

   `"serviceId": "chat:openai.com"`
   
in the request.


More
----
More details on how to access the AIsBreaker API, with and without `curl`, can be found on the **Getting Started** tutorials.

But before, you should understand the basic concepts and read the [Introduction (AIsBreaker Docs)](/docs/) ...
