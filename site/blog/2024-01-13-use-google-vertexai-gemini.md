---
title: Access new Google AI Gemini API with AIsBreaker
---

# Access new Google AI Gemini API with AIsBreaker
_Written by Chris, 2024-01-13_

In December 2023 Google presented it's new AI model and API called "Gemini". In this article I explain how to use this API in a simple JavaScript program by using AIsBreaker client library.

[AIsBreaker](https://aisbreaker.org/) offers a developer-friendly API to a variety of generative AI services, including OpenAI/ChatGPT, Google Gemini AI, and more ... to provide simplicity and to avoid vendor lock-in. It hides the complexity of vendor-specific APIs, in our case the complexity of accessing the Google Gemini AI API via the Google Cloud Vertex AI environment.

The example is based on [aisbreaker/aisbreaker-example-simple-chat-node-js/ (GitHub)](https://github.com/aisbreaker/aisbreaker-example-simple-chat-node-js/) which can be live-edited in the [StackBlitz Web-IDE](https://stackblitz.com/github/aisbreaker/aisbreaker-example-simple-chat-node-js?title=AIsBreaker+Example+Simple+Chat-node-js&file=aisbreaker-simple-chat.js&startScript=install,start) in your browser.

If you just want to manually play with the Gemini model, you can use the [AIsBreaker Chat WebApp (Live Demo in Web)](https://demo.aisbreaker.org/) with is described on [Chat WebApp (Intro)](/docs/demo-chat-webapp-intro).




## Start your JavaScript Project
Install the AIsBreaker JavaScript/TypeScript library:
```bash
npm install aisbreaker-api-js
```
and import it in your code:
```JavaScript
import { api } from "aisbreaker-api-js";

console.log("aisbreaker-example-simple-chat");
console.log("------------------------------");
```

## Configure your Service
Define the [serviceProps](/docs/service-properties) and select the [service/serviceId](/docs/serviceId) you want to use:
```JavaScript
const serviceProps = {
    serviceId: "chat:gemini.vertexai.google.com",
};
```

Later, we use an own Google Cloud API key, but for now we keep it empty and use the a default AIsBreaker API key with strict quotas:
```JavaScript
const auth = {
};
```

## Initialize your Service
Get the API access via the `aisService` object:
```JavaScript
const aisbreakerServerURL = "https://api.demo.aisbreaker.org/";
const aisService = api.AIsBreaker.getInstance().
    getAIsService(aisbreakerServerURL, servicePros, auth);
```
We use the free `api.demo.aisbreaker.org` server for convenience here. The server doesn't save any data or credentials. Feel free to install your own [AIsBreaker server](/docs/aisbreaker-server).

## Define your Prompt/your Question
```JavaScript
const question1 = "What is NodeJS?";
console.log(`***** Question1 ***** ${question1}`);
```

## Get the Response/Answer from the AI Service
```JavaScript[aisbreaker-simple-chat.js (part)]
const response1 = await aisService.process({
    inputs: [ {
        text: {
            role: "user",
            content: question1,
        },
    } ],
});
console.log(`***** Answer1 ***** ${response1.outputs[0].text.content}`);
```

## Putting it all together
```bash
npm install && npm run start
```

will show output like:
```
aisbreaker-example-simple-chat
------------------------------
***** Question1 *****
What is NodeJS?
***** Answer1 *****
Node.js is a single-threaded, event-driven, non-blocking, asynchronous, cross-platform JavaScript runtime environment  ...
```

## Use your own Google Cloud Account
So far we used the default AIsBreaker API key with strict quotas. 

For productive use you need to use an own Google Cloud account with your own API key.

### Create Google Cloud Project
Follow the instructions at [Setup Google Cloud to Access AI Services](/docs/ai-service-details/google-cloud-ai-setup):
- sign in to your Google Cloud account; if you're new to Google Cloud, [create an account](https://console.cloud.google.com/freetrial) and startwith some free credits
- in the Google Cloud console, on the project selector page, select or [create a Google Cloud project](https://cloud.google.com/resource-manager/docs/creating-managing-projects)
  - note the project ID, you need it later when you access the AI service
- [Enable the Vertex AI API](https://console.cloud.google.com/flows/enableapi?apiid=aiplatform.googleapis.com)
  - Google Cloud Console > Vertex AI > Enable all recommended APIs
    - most important: [Enable Vertex AI API](https://console.cloud.google.com/marketplace/product/google/aiplatform.googleapis.com) for your Google Cloud project
      - servicename is: aiplatform.googleapis.com 

### Get an API Key to Access the AI Services in the Google Cloud Project
The Google AI and the integration with AIsBreaker support different types of [Google Cloud API keys](/docs/ai-service-details/google-cloud-api-keys). Here I describe the on the most relevant case: a Service Account with long-lived JSON key file.

Create a service account and get its JSON key file:
- create a service account: [Google Cloud > IAM & Admin > Service Accounts > Create](
  https://console.cloud.google.com/projectselector2/iam-admin/serviceaccounts/create?walkthrough_id=iam--create-service-account)
  - if requested: enable [Identity and Access Management (IAM) API](https://console.cloud.google.com/apis/enableflow?apiid=iam.googleapis.com)
  - enter or select the following values:
    - PROJECT_ID is the ID of your Google Cloud project.
      - select you project or create a new one, e.g. "my-project-123456"
    - Service Account Name (SA_DISPLAY_NAME) of the service account:
      - e.g. "aisbreaker1"
    - Service Account ID of the service account:
        - e.g. "aisbreaker1"
          - leads to email address: aisbreaker1@my-project-123456.iam.gserviceaccount.com
    - Description (SA_DESCRIPTION):
      - e.g. "Service Account for ais development"
  - alternative description: [Create service account keys](https://cloud.google.com/iam/docs/keys-create-delete#creating)
- assign role to service account:
  - Role: AI Platform - Developer
- create key (JSON file) for service account:
  Google Cloud > IAM & Admin > Service Accounts > YOUR SERVICE ACCOUNT > Keys > Add key > Create new key > JSON > Create
  - creates a new key (JSON) file that you need to download immediately and save in a secure place
  - it will look like:
  ```JSON
  {
    "type": "service_account",
    "project_id": "my-project-123456",
    ...
  }
  ```

### Use a User Account JSON key file with AIsBreaker
If you have such a JSON file then you need to base64-encode it and add a prefix `googlecloud-account-json-base64_`.

E.g.
```bash
KEYFILE_BASE64= `cat keyfile.json | base64 -w 0`
export GOOGLE_CLOUD_API_KEY="googlecloud-account-json-base64_${KEYFILE_BASE64}"
  # something like:
  #   googlecloud-account-json-base64_ey...
```

Now adapt your code to use your own Google Cloud project and API key:
```JavaScript
const serviceProps = {
    serviceId: "chat:gemini.vertexai.google.com",
    project: "<YOUR-GOOGLE-CLOUD-PROJECT>",   // the project name you set in the Google Cloud Console
    location: "<YOUR-GOOGLE-CLOUD-LOCATION>", // e.g. 'us-central1'
};
```
and
```JavaScript
const auth = {
    secret: "googlecloud-account-json-base64_...",,
}
```


That's it! Now you can run your code again:
```bash
npm run start
```


## Final Words
I suggest to play with the example code in the [StackBlitz Web-IDE](https://stackblitz.com/github/aisbreaker/aisbreaker-example-simple-chat-node-js?title=AIsBreaker+Example+Simple+Chat-node-js&file=aisbreaker-simple-chat.js&startScript=install,start). If you want to deep dive into the topic, you can read the [AIsBreaker Docs](/docs/) and starting with the basic concepts.

Good luck and have fun!

Any feedback and suggestions are welcome, just leave me message ...

Your Chris (at) aisbreaker.org 
