---
#prev:
#  text: 'Concepts'
#  link: './concepts'
#next:
#  text: 'Concepts'
#  link: './concepts'
---


Service Identification with `serviceId`
=======================================

Each service connected to or provided by AIsBreaker has one or more `serviceId`s to select the task, the service/vendor and the engine/AI model.

Format: ***task:*[*vendor*][/*engine*]**
- `task` - specify the [task](./tasks) provided by the service
  - MANDATORY
- `vendor` - domain name or another unique name used by the service connector or feature
  - OPTIONAL: if not provided a default for the specified task will be used
- `engine` - vendor specific name of the engine/model/model-family to use
  - OPTIONAL: if not provided a default for the specified task+vendor be used

A list of currently implemented service connectors and features is on page [Services](./services).

Examples:
- `chat:`
- `chat:openai.ai`
- `chat:openai.ai/gpt-4`
- `chat:openai.ai/gpt-3.5-turbo`
- `chat:gemini.vertexai.google.com`
- `chat:huggingface.co/microsoft/DialoGPT-large`
- `chat:huggingface.co/facebook/blenderbot-400M-distill`
- ...

Examples with special tasks:
- `aisbreaker:proxy` - to access a remote AIsBreaker proxy
- `aisbreaker:logging` - to enable the LoggingFilter
- ...

**A list of implemented service connectors/features: [Services](./services)**
