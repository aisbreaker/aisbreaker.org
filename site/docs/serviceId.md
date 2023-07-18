---
prev:
  text: 'Guide'
  link: '/docs/'
next:
  text: '???'
  link: '/???'

---


Service Identification with `serviceId`
=======================================

Each service connected or provided by AIsBreaker has one or more `serviceId`s.

Format: **[*task*:]*vendor*[/*engine*]**
- `task` - specify the [task](./tasks.md) provided by the service
  - OPTIONAL: if not provided a best match will be used
- `vendor` - domain name or another unique name used by the service connector
- `engine` - vendor specific name of the engine/model/model family to use
  - OPTIONAL: if not provided a best guess will be used, which can also depend on the `task`

Examples:
- `chat:openai.ai/gpt-4`
- `chat:openai.ai/gpt-3.5-turbo`
- ...

