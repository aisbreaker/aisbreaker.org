---
prev:
  text: 'Concepts'
  link: './'
next:
  text: 'Concepts'
  link: './'
---


Service Properties / ServiceProps / AIsServiceProps
===================================================

... are the properties of a service, which are needed to connect to the service. Usually a JSON or YAML.

At a minimum, as [serviceId](serviceId.md) is needed to select the service and the task.


Examples
--------

- OpenAI/ChatGPT:
  ```yaml
  {
    "serviceId": "chat:openai.com"
  }
  ```
- OpenAI compatible service:
  ```yaml
  {
    "serviceId": "chat:openai.com",
    # set the correct URL:
    "url": "https://api.openai.compatible.example.com/v1/chat/completions"
  }
  ```
- Dummy chat (useful for cost-free testing only):
  ```yaml
  {
    "serviceId": "chat:dummy"
  }
  ```
- Dummy chat again (useful for cost-free testing only):
  ```yaml
  {
    "serviceId": "chat:dummy"
  }
  ```

More example can be found in
- the [Demo AIsBreaker Chat](https://demo.aisbreaker.org/)
  - under: Settings (Gear left buttom) > Service > Service Properties


Specification/Declaration
-------------------------
- for TypeScript/JavaScript:
  - AIsServiceProps: [aisbreaker-js/.../api/AIsService.ts#AIsServiceProps](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/api/AIsService.ts#L26C18-L26C33)
- more programming languages to come ...