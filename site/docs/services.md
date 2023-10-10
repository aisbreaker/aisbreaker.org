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

| serviceId                       | Client API (TS/JS)  | REST API            | Description |
| ------------------              | ------------------- |-------------------  | ----------- |
| **chat** |
| `chat:dummy`                    | OK                  | OK                  | cost-free dummy chat - for testing only |
| `chat:openai.com`               | OK                  | OK                  | ChatGPT from OpenAI (default engine) |
| `chat:openai.com/gpt-3.5-turbo` | OK                  | OK                  | ChatGPT from OpenAI (GPT 3.5) |
| `chat:openai.com/gpt-4`         | _NOT TESTED YET_    | _NOT TESTED YET_    | ChatGPT from OpenAI (GPT 4) |
| `chat:huggingface.co/SERVICE`   | _in planning_       | _in planning_       | access [Hugging Face](https://huggingface.co/) `SERVICE` |
| `chat:open-assistant.io`        | _in planning_       | _in planning_       | [Open Assistant](https://open-assistant.io) chat |
| **text-to-image** |
| `text-to-image:dummy`           | OK                  | OK                  | cost-free dummy image generation - for testing only |
| `text-to-image:openai.com`      | OK                  | OK                  | [OpenAI DALL-E](https://openai.com/dall-e-3) image generation |
| `text-to-image:stability.ai`    | OK                  | OK                  | [Stable Diffusion](https://stability.ai/stable-diffusion) image generation |
| **misc** |
| `aisbreaker:proxy`              | OK                  | OK                  | forward to another AIsBreaker server |
