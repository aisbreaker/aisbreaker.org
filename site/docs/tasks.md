---
prev:
  text: 'Guide'
  link: '/docs/'
next:
  text: '???'
  link: '/???'

---


Tasks of AI Services
====================

AI services can solve diferent tasks. The `task` is usually part of the [serviceId](serviceId.md) to classify the expected result of the service.

The following tasks are currently supported ...


chat
----
A `chat` task generates conversational text that is relevant, coherent and knowledgable given a prompt. [ChatGPT](https://en.wikipedia.org/wiki/ChatGPT) is the probably the most famous chat AI service that provides a `chat` task.

In the near future, such services can also input and output images, audios and videos beside plain text.

Example use cases:
- **chatbot**: to have conversations; e.g. used to provide customer service or sales
- **assistants**: help the user with personal or business tasks
- **text generation**: create properly worded text snippets for conversions (e.g. emails) or digital content platforms (e.g. social media posts, online shops)

More information and inspiration for `chat` tasks:
- [Example *Text summarization*, *Code completion*, and *Few-shot learning* with `chat` task of OpenAI](https://openai.com/blog/gpt-4-api-general-availability#moving-from-text-completions-to-chat-completions)
- [Example *Code Edit* with `chat` task of OpenAI](https://openai.com/blog/gpt-4-api-general-availability#deprecation-of-the-edits-api)
- [The chat equivalent at HuggingFace: `conversational`](https://huggingface.co/tasks/conversational)
- [A chat subset at HuggingFace: `question-answering`](https://huggingface.co/tasks/question-answering)
- [Another `chat` subset at HuggingFace (text-generation)](https://huggingface.co/tasks/text-generation)


text-chat
---------
A `text-chat` task is the same as a [`chat`](#chat) task, but limited to text inputs and text outputs only.


text-to-image
-------------
A `text-to-image` task generates images from input text. These services can be used to generate and modify images based on text prompts.

Example use cases:
- **data visualization**: convert data (text) and get image outputs
- **concept visualization**: conversations can be made more immersive if they provide contextual images based on user text input or based on generated text output
- **generation of creative visuals**: Different patterns can be generated to obtain unique pieces of visual output, e.g. to make creations easier for designers to conceptualize their design before actually implementing it; useful e.g. in design, fashion, or architecture industry

More information and inspiration for `text-to-image` tasks:
- [`text-to-image` at HuggingFace](https://huggingface.co/tasks/text-to-image)


image-to-image
--------------
An `image-to-image` tasks transforms a source image to match the characteristics of a target image, usually controlled by a user text prompt.

Example use cases:
- **extend images**: fill or replace parts of an image with content in the style of the rest of the image, e.g. to remove unwanted objects or sensor dust
- **increase resolution**: increase the resolution of an image, allowing for higher quality viewing and printing
- **image colorization**: black and white images can be brought up to life using an image colorization
- **style transfer**: Style transfer services can convert a regular photography into a painting in the style of a famous painter.

More information and inspiration for `text-to-image` tasks:
- [`image-to-image` at HuggingFace](https://huggingface.co/tasks/image-to-image)


Special Task Identifiers
------------------------

### aisbreaker
An `aisbreaker` tasks is not a normal AI tasks, instead it's used to address special AIsBreaker services like *logging* or *remote proxy access* ...

### private Prefix
A task with prefix `private` (e.g. `private`, `private-chat`, `private-monster-tool`, ...) is application or client specific task with application or client specififc semantics.


Reserved Task Identifiers
-------------------------
All task identifiers not mentioned above are reserved for future use and may not be used at the moment.




