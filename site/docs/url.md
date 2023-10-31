---
#prev:
#  text: 'Concepts'
#  link: './concepts'
#next:
#  text: 'Concepts'
#  link: './concepts'
---


Service URL
===========

... is the URL of the actual AI service API.

The service URL can be specified as part of the [Service Properties](./service-properties). If it's not specified then the service-specific default URL is used.

The final URL will then be caculated by:
- adding the path of the service-specific default URL to the service URL
  - to skip adding the default path, add the anker `#no-default-path` to the service URL
- replacing the `${engine}` placeholder (if used in the URL) with the actual engine name.

The default URLs (and more) can be found in the [Services](./services) list.

Examples
--------

| Service URL (optional)            | Engine  | Default URL  | Final URL used |
| --------------------   | ------- |-------------------             | ----------- | 
| - | gpt-3.5 | https://api.openai.com/v1/chat/completions |https://api.openai.com/v1/chat/completions |
| https://openai-compatible-api.example.com/ | gpt-3.5 | https://api.openai.com/v1/chat/completions | https://openai-compatible-api.example.com/v1/chat/completions
| https://openai-compatible-api.example.com/api/chat-completions#no-default-path | gpt-3.5 | https://api.openai.com/v1/chat/completions | https://openai-compatible-api.example.com/api/chat-completions
| &nbsp; |
| - | microsoft/DialoGPT-large | https://api-inference.huggingface.co/models/${engine} | https://api-inference.huggingface.co/models/microsoft/DialoGPT-large 
| https://my-hf-inference.example.com/ | microsoft/DialoGPT-large | https://api-inference.huggingface.co/models/${engine} | https://my-hf-inference.example.com/models/microsoft/DialoGPT-large 
| https://my-hf-inference.example.com/api-start/v1/ | microsoft/DialoGPT-large | https://api-inference.huggingface.co/models/${engine} | https://my-hf-inference.example.com/api-start/v1/models/microsoft/DialoGPT-large
| https://my-hf-inference.example.com/api-m/${engine}#no-default-path | microsoft/DialoGPT-large | https://api-inference.huggingface.co/models/${engine} | https://my-hf-inference.example.com/api-m/microsoft/DialoGPT-large
| https://my-hf-inference.example.com/api-models/foo#no-default-path | microsoft/DialoGPT-large | https://api-inference.huggingface.co/models/${engine} | https://my-hf-inference.example.com/api-models/foo




More Examples
-------------
See [Service Properties (Examples)](service-properties#examples)
