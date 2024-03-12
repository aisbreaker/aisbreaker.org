---
title: Accessing AI Services from Shell Script (OpenAI/ChatGPT, Hugging Face, Google Gemini AI and more)
description: This article describes a bash shell script to provide a simple commandline interface to various generative AI services OpenAI/ChatGPT, Hugging Face, Google Gemini AI and more via AIsBreaker.org.
keywords: 
  - AIsBreaker
  - OpenAI/ChatGPT
  - Hugging Face
  - Google Gemini AI
  - API
  - bash
---

# Accessing AI Services from Shell Script (OpenAI/ChatGPT, Hugging Face, Google Gemini AI and more)
_By Chris, March 12, 2024_

`aisbreaker.sh` is a tool to provide a simple commandline
interface to generative AI services of [AIsBreaker.org](https://aisbreaker.org/)
on all UNIX-based systems with `bash`.

[AIsBreaker.org](https://aisbreaker.org/), a developer-friendly platform, simplifies access to a variety of generative AI services including OpenAI/ChatGPT, Hugging Face, Google Gemini AI, and more. It effectively conceals the complexity of vendor-specific APIs.


## Installation
First make sure, that the tools `bash`, `curl` and `jq` are installed and in the PATH of your system.

Then download `aisbreaker.sh` shell script:
```bash
curl -o ./aisbreaker.sh https://raw.githubusercontent.com/aisbreaker/aisbreaker-api-bash/main/aisbreaker.sh
chmod a+x ./aisbreaker.sh
```

Finally check the script:
```bash
./aisbreaker.sh --version
```

## Usage
Before start using the tool, you need to decide which generative AI service you want to use. On the [Services](https://aisbreaker.org/docs/services) page you find a list of available services and of their serviceIds. The following examples all use the serviceId `chat:openai.com`. By using a different serviceId you access a different AI service.

In all examples below, we'll conveniently use the free `api.demo.aisbreaker.org` server. The server doesn't store any data or credentials. Feel free to install your own [AIsBreaker server](https://aisbreaker.org/docs/aisbreaker-server).

To get a tool description run:
```bash
./aisbreaker.sh --help
```

### Minimal Usage
The following example command just sends a simple text prompt (from stdin) to the AI service and shows the text response (to stdout):
```bash
echo "What is Nodejs?" | ./aisbreaker.sh --service=chat:openai.com
```
will show output like:
```
Node.js is an open-source, server-side platform built on Chrome's V8 JavaScript engine. It allows developers to build scalable network applications using JavaScript. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, making it ideal for data-intensive real-time applications. It is commonly used for building web servers, APIs, and other networking applications.
```

### A typical Chat Conversation
In a chat conversation you need to keep the state of the conversation. This can be done by using the `--state` option. The following example shows a conversation with two prompts in the same session:
```bash
# preparation
STATEFILE=`mktemp ./aisbreaker-state-XXXXXXXX`; echo ${STATEFILE}

# first prompt
echo "What is Nodejs?" | ./aisbreaker.sh \
  --input=text \
  --output=text \
  --service=chat:openai.com \
  --state=${STATEFILE} \
  --url=https://api.demo.aisbreaker.org

# second prompt in the same session
echo "Shorter please" | ./aisbreaker.sh \
  --input=text \
  --output=text \
  --service=chat:openai.com \
  --state=${STATEFILE} \
  --url=https://api.demo.aisbreaker.org

# cleanup
rm ${STATEFILE}
```
The output will be like:
```
./aisbreaker-state-vFZKys3z

Node.js is an open-source, server-side platform built on Chrome's V8 JavaScript engine. It allows developers to build scalable network applications using JavaScript. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, making it ideal for data-intensive real-time applications. It is commonly used for building web servers, APIs, and other networking applications.

Node.js is a JavaScript runtime environment that allows developers to run server-side applications. It is known for its efficiency and scalability in building network applications.
```


## Wrapping Up
We saw how to use the `aisbreaker.sh` shell script to convert a promt from stdin to an AI result on stdout. To delve deeper into the subject, review the comprehensive [AIsBreaker Docs](/docs/), starting with the basic concepts and then continue with [Getting Started - with Bash Shellscript](/docs/getting-started-with-bash).

Enjoy using the AIsBreaker.org tools, and feel free to share your feedback or suggestions. Happy coding!

Best,  
Chris (at) aisbreaker.org
