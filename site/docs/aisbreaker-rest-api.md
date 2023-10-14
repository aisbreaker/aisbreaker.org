---
#prev:
#  text: 'Home'
#  link: '/'
#next:
#  text: 'Reference'
#  link: '/reference/'
---

AIsBreaker REST API
===================

Introduction
------------
The AIsBreaker REST API is the service provided by the [AIsBreaker Server](./aisbreaker-server). A link to the specification is provided at the end of this page.


Before we start
---------------
We will use `curl` for the examples below.

::: tip
**If you don't have `curl`** installed on your local machine, you can use e.g. the online service [Run Curl Commands Online](https://reqbin.com/curl) - but **never include sensitive data** like [API Keys](./api-keys.md).
:::


Getting Started
---------------

### Preparation
Set an [API Key](./api-keys) in your environment, if required by your desired [service](./services):

```bash
# set AIsBreaker API Key:
export AISBREAKER_API_KEY="aisbreaker_123abc..."
# or set OpenAI API Key:
export AISBREAKER_API_KEY="sk-123abc..."
```

Select the [AIsBreaker server](aisbreaker-server) to use:
```bash
# set AIsBreaker Server URL:
export URL="https://api.demo.aisbreaker.org"
```

Think about your desired `service` and define respective [Service Properties](./service-properties) - it follows a JSON snippet without command - we will put it together later:
```json
"service": {
  "serviceId": "chat:openai.com"
}
```

### Use the REST API
And think about the `request` ([Request/question/prompt](./request)) you want to send - it follows a JSON snippet without command - we will put it together in the next step:
```json
"request": {
  "inputs": [ {
    "text": {
      "role": "user",
      "content": "What is an AI? Please explain it to me."
    }
  } ]
}
```

Now we put `service` and `request` and the rest together and send it to the AIsBreaker server:
```bash
curl "${URL}/api/v1/process" \
        -X POST \
        -H "Content-Type: application/json" \
        -H "Authorization: Bearer ${AISBREAKER_API_KEY}" \
        -d '{
  "service": {
    "serviceId": "chat:openai.com"
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

Then you need to wait few seconds for the response be generated. If you get an error, then maybe the [API Key](./api-keys) is not set correctly for the [service](./services) you selected. 

If you get a response, then it should look like this:
```json
{
  "outputs": [
    {
      "text": {
        "index": 0,
        "role": "assistant",
        "content": "AI, or Artificial Intelligence, refers to the simulation of human intelligence in machines that are programmed to think and learn like humans...",
        "isDelta": false,
        "isProcessing": false
      }
    }
  ],
  "conversationState": "eyJtZX...",
  "usage": {
    "engine": {
      "serviceId": "chat:openai.com/gpt-3.5-turbo-0613"
    },
    "totalMilliseconds": 7869
  }
}
```


Specification
-------------
See: [AIsBreaker REST API - Spec](https://app.swaggerhub.com/apis/aisbreaker/ais1/)
