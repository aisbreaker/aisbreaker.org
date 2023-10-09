---
prev:
  text: 'Concepts'
  link: './concepts'
next:
  text: 'Concepts'
  link: './concepts'
---


Service Identification with `serviceId`
=======================================

Each service connected to or provided by AIsBreaker has one or more `serviceId`s to select the task, the service/vendor and the engine/AI model.

Format: **[*task*:]*vendor*[/*engine*]**
- `task` - specify the [task](./tasks) provided by the service
  - OPTIONAL: if not provided a best match will be used
- `vendor` - domain name or another unique name used by the service connector
- `engine` - vendor specific name of the engine/model/model family to use
  - OPTIONAL: if not provided a best guess will be used, which can also depend on the `task`

Examples:
- `chat:openai.ai`
- `chat:openai.ai/gpt-4`
- `chat:openai.ai/gpt-3.5-turbo`
- ...

Examples with special tasks:
- `aisbreaker:proxy` - to access a remote AIsBreaker proxy
- `aisbreaker:logging` - to enable the LoggingFilter
- ...

**A list of implemented service connectors/features: [Services](./services)**
