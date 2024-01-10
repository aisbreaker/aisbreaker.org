---
#prev:
#  text: 'Concepts'
#  link: './concepts'
#next:
#  text: 'Concepts'
#  link: './concepts'
---


Services (List)
===============

Each generative AI service connected to or provided by AIsBreaker has one or more [serviceIds](./serviceId) to select the [task](./tasks), the service/vendor and the engine/AI model.

The following table shows the service connectors/features availability:

| serviceId + examples            | Client API (TS/JS)  | REST API            | Description | (Default) AI Service  URL - if applicable |
| --------------------            | ------------------- |-------------------  | ----------- | ----------------------------- |
| **chat** |
| `chat:dummy`                    | OK                  | OK                  | cost-free dummy chat - for testing only | -
| `chat:openai.com`               | OK                  | OK                  | ChatGPT from OpenAI (default engine) | https://api.openai.com/v1/chat/completions
| `chat:openai.com/<ENGINE>`      | OK                  | OK                  | ChatGPT from OpenAI                  | https://api.openai.com/v1/chat/completions
| `chat:openai.com/gpt-3.5-turbo` | OK                  | OK                  | ChatGPT from OpenAI: GPT 3.5         | https://api.openai.com/v1/chat/completions
| `chat:openai.com/gpt-4`         | _NOT TESTED YET_    | _NOT TESTED YET_    | ChatGPT from OpenAI: GPT 4           | https://api.openai.com/v1/chat/completions
| `chat:gemini.vertexai.google.com`               | OK                  | OK                  | Google Cloud Vertext AI gemini-pro | -
| `chat:huggingface.co/<ENGINE>`  | OK                  | OK                  | access [Hugging Face](https://huggingface.co/) model with name `<ENGINE>` | https://api-inference.huggingface.co/models/${engine}
| `chat:huggingface.co/microsoft/DialoGPT-large` | OK   | OK                  | access [Hugging Face](https://huggingface.co/) model `microsoft/DialoGPT-large` | https://api-inference.huggingface.co/models/microsoft/DialoGPT-large
| **text-to-image** |
| `text-to-image:dummy`           | OK                  | OK                  | cost-free dummy image generation - for testing only | -
| `text-to-image:openai.com`      | OK                  | OK                  | [OpenAI DALL-E](https://openai.com/dall-e-3) image generation | https://api.openai.com/v1/images/generations
| `text-to-image:stability.ai`    | OK                  | OK                  | [Stable Diffusion](https://stability.ai/stable-diffusion) image generation | https://api.stability.ai/v1/generation/${engine}/text-to-image,<br>https://api.stability.ai/v1/generation/stable-diffusion-v1-5/text-to-image
| **misc** |
| `aisbreaker:proxy`              | OK                  | OK                  | forward to another AIsBreaker server | https://api.demo.aisbreaker.com/

Currently not implemented for reasons:
- `chat:open-assistant.io` - currenlty no public-hosted API available ([Open Assistant FAQs: Is there an API available?](https://projects.laion.ai/Open-Assistant/docs/faq#is-there-an-api-available))
