---
prev:
  text: 'Demo REST API Access (Guide)'
  link: '/docs/demo-javascript-guide'
next:
  text: 'Demo REST API Access (Guide)'
  link: '/docs/demo-webapp-guide'
---

Demo REST API Access (Guide)
============================

The AIsBreaker REST API is a normal REST API with JSON data.


## Quick Start
- open the AIsBreaker [Demo REST API Access (Live with Web-Curl)](https://reqbin.com/c-m2n6cdnu)
- run the `curl`
- try different configurations/serviceProps/serviceIds


## Slow Start

### First Request
Here is an example of a request to the AIsBreaker API with the `curl` command:

```bash
export URL="https://api.demo.aisbreaker.org"
curl "${URL}/api/v1/process" \
        -X POST \
        -H "Content-Type: application/json" \
        -H "//Authorization: Bearer [YOUR_API_KEY]" \
        -d '{
  "service": {
    "serviceId": "chat:dummy",
    "//serviceId": "chat:openai.com",
    "///serviceId": "chat:huggingface.co/microsoft/DialoGPT-large",
    "////serviceId": "chat:huggingface.co/YOUR-HF-ACCOUNT/YOUR-HF-MODEL"
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

### Second Request
To get a more useful response, replace

  `"serviceId": "chat:dummy"`
  
with

   `"serviceId": "chat:openai.com"`
   
in the request.


### Try Online
Checkout the [Quick Start](#quick-start) section above.


## More Details
More details on how to access the AIsBreaker API, with and without `curl`, can be found on the **Getting Started** tutorials.

But before, you should understand the basic concepts and read the [Introduction (AIsBreaker Docs)](/docs/) ...
