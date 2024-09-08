---
#prev:
#  text: 'Concepts'
#  link: './concepts'
#next:
#  text: 'Concepts'
#  link: './concepts'
---


Service Properties / ServiceProps / AIsServiceProps
===================================================

... are the properties of a service, which are needed to connect to the service. Usually a JSON or YAML.

The [serviceId](./serviceId) is a mandatory field - it selects the service and the task.

Optionally, a [Service URL](./url) can be specified to override the default service URL.


Examples
--------

- OpenAI/ChatGPT:
  ```yaml
  {
    "serviceId": "chat:openai.com"
  }
  ```
  - will use `chat:openai.com` with (default) URL `https://api.openai.com/v1/chat/completions`
- OpenAI compatible service with a different URL:
  ```yaml
  {
    "serviceId": "chat:openai.com",
    "url": "https://api.openai.compatible.example.com/"
  }
  ```
  - will use the URL `https://api.openai.compatible.example.com/api/chat-completions`
- OpenAI compatible service with a different URL inclusive different path:
  ```yaml
  {
    "serviceId": "chat:openai.com",
    "url": "https://api.openai.compatible.example.com/my-api-chat-completions#no-default-path"
  }
  ```
  - will use the URL `https://api.openai.compatible.example.com/my-api-chat-completions`
- Huggingface model with [Hosted Inference API](https://huggingface.co/docs/api-inference/index#hosted-inference-api) on Huggingfaces public shared infrastructure:
  ```yaml
  {
    "serviceId": "chat:huggingface.co/microsoft/DialoGPT-large"
  }
  ```
  - will use the default URL `https://api-inference.huggingface.co/models/${engine}` which leads to final service URL `https://api-inference.huggingface.co/models/microsoft/DialoGPT-large` for this example
- Huggingface model with a privatly hosted [Inference Endpoint](https://huggingface.co/docs/inference-endpoints/index#inference-endpoints):
  ```yaml
  {
    "serviceId": "chat:huggingface.co/microsoft/DialoGPT-large",
    "url": "https://my-huggingface-inference-endpoint.example.com/api/v1/"
  }
  ```
  - will lead to final service URL `https://my-huggingface-inference-endpoint.example.com/api/v1/models/microsoft/DialoGPT-large` for this example
- Dummy chat (useful for cost-free testing only):
  ```yaml
  {
    "serviceId": "chat:dummy"
  }
  ```
- Echo chat (useful for cost-free testing only):
  ```yaml
  {
    "serviceId": "chat:echo"
  }
  ```
- Echo chat, modified my Mirror filter (useful for cost-free testing only):
  ```yaml
  {
    "serviceId": "aisbreaker:mirror",
    "forward2ServiceProps": {
      "serviceId": "chat:echo"
    }
  }
  ```


More example can be found in
- the [Services](./services) list
- the [Demo AIsBreaker Chat](https://demo.aisbreaker.org/)
  - under: Settings (Gear left buttom) > Service > Service Properties


Specification/Declaration
-------------------------
- for TypeScript/JavaScript:
  - AIsServiceProps: [aisbreaker-js/.../api/AIsService.ts#AIsServiceProps](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/api/AIsService.ts#L26C18-L26C33)
- more programming languages to come ...