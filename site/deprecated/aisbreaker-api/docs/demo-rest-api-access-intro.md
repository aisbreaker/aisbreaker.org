---
prev:
  text: 'Demo: JavaScript Code (Intro)'
  link: '/docs/demo-javascript-intro'
next:
  text: 'Demo: Chat WebApp (Intro)'
  link: '/docs/demo-chat-webapp-intro'
---

Demo: REST API Access (Intro)
=============================
The AIsBreaker REST API is a normal REST API with JSON data, to access AI services. Here we show the basics with the `curl` command.

Other demos: [JavaScript Code (Intro)](./demo-javascript-intro), [Chat WebApp (Intro)](./demo-chat-webapp-intro)


## First Request
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
Explanation:
- We use the free `api.demo.aisbreaker.org` server for convenience here. The server doesn't save any data or credentials. Feel free to install your own [AIsBreaker server](aisbreaker-server).
- Optionally, provide your own [API key](./api-keys) for the AI service as HTTP Bearer token. If you don't provide a key, a default AIsBreaker API key is used with strict quotas.
- The `serviceId` is the relevant to select the acutual AI service to use. See [service/Service Properties](./service-properties) and [serviceId](./serviceId) for more details.
- The `content` is the actual prompt/question for the AI service.


## First Response
... will look like:

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

## Try Variations
- try different `serviceId` instead of the `chat:dummy`

## Try with Web-Curl
- open [Demo: REST API Access (Live with Web-Curl)](https://reqbin.com/c-m2n6cdnu) in your browser
  - it will automatically run the first curl
- try different `serviceId` instead of the `chat:dummy`
- click **Run** button to re-run and wait (few seconds) for the response


## More Details
More details on how to access the AIsBreaker API can be found on the **Getting Started** tutorials in the docs.

But before, you should understand the basic concepts and read the [Introduction (AIsBreaker Docs)](/docs/) ...
