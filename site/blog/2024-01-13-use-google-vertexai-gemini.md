---
title: A Comprehensive Guide to Access Google's New Gemini AI API with AIsBreaker
---

# A Comprehensive Guide to Access Google's New Gemini AI API with AIsBreaker
_By Chris, January 13, 2024_

In December 2023, Google introduced its new AI model and API, "Gemini". This article offers a comprehensive guide on accessing API through a simple JavaScript program using the AIsBreaker client library.

[AIsBreaker](https://aisbreaker.org/), a developer-friendly platform, simplifies access to a variety of generative AI services including OpenAI/ChatGPT, Google Gemini AI, and more. It effectively conceals the complexity of vendor-specific APIs, in this case, allowing seamless access to Google Gemini AI API via the Google Cloud Vertex AI environment.

This tutorial is centered around [aisbreaker/aisbreaker-example-simple-chat-node-js/ (GitHub)](https://github.com/aisbreaker/aisbreaker-example-simple-chat-node-js/). The example can also be live-edited and executed directly in your browser through the [StackBlitz Web-IDE](https://stackblitz.com/github/aisbreaker/aisbreaker-example-simple-chat-node-js?title=AIsBreaker+Example+Simple+Chat-node-js&file=aisbreaker-simple-chat.js&startScript=install,start).

To manually interact with the Gemini AI model, you can utilize the [AIsBreaker Chat WebApp (Live Demo in Web)](https://demo.aisbreaker.org/), further detailed in [Chat WebApp (Intro)](/docs/demo-chat-webapp-intro).


## Initiating your JavaScript Project
Begin by installing the AIsBreaker JavaScript/TypeScript library:
```bash
npm install aisbreaker-api-js
```

Next, import the library into your code:
```JavaScript
import { api } from "aisbreaker-api-js";

console.log("aisbreaker-example-simple-chat");
console.log("------------------------------");
```

## Service Configuration
Define the [serviceProps](/docs/service-properties) and choose the [service/serviceId](/docs/serviceId):
```JavaScript
const serviceProps = {
    serviceId: "chat:gemini.vertexai.google.com",
};
```

Although you will eventually use an own Google Cloud API key, for now, we'll utilize the default AIsBreaker API key with strict quotas:
```JavaScript
const auth = {
};
```

## Service Initialization
The `aisService` object provides API access:
```JavaScript
const aisbreakerServerURL = "https://api.demo.aisbreaker.org/";
const aisService = api.AIsBreaker.getInstance().
    getAIsService(aisbreakerServerURL, servicePros, auth);
```

In this example, we'll conveniently use the free `api.demo.aisbreaker.org` server. The server doesn't store any data or credentials. Feel free to install your own [AIsBreaker server](/docs/aisbreaker-server).

## Formulating your Prompt/Question
```JavaScript
const question1 = "What is NodeJS?";
console.log(`***** Question1 ***** ${question1}`);
```

## Obtaining the AI Service's Response/Answer
```JavaScript
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

Upon execution, the following output appears:
```
aisbreaker-example-simple-chat
------------------------------
***** Question1 *****
What is NodeJS?
***** Answer1 *****
Node.js is a single-threaded, event-driven, non-blocking, asynchronous, cross-platform JavaScript runtime environment  ...
```

## Incorporating your own Google Cloud Account
The previous steps employed the default AIsBreaker API key with strict quotas. For productive use, you need to link your own Google Cloud account with a private API key.

Unfortunately, getting an API key for Google Cloud is a much more complicated than for other AI services. This is due to the fact that Google Cloud is not a pure AI service provider, but a full cloud provider with many different services and complex access management. Therefore, need to follow the steps below to finally get an API key.

### Creating a Google Cloud Project
Follow the instructions of [Setup Google Cloud to Access AI Services](/docs/ai-service-details/google-cloud-ai-setup) to create and configure your project:
- sign in to your Google Cloud account; if you're new to Google Cloud, [create an account](https://console.cloud.google.com/freetrial) and startwith some free credits
- in the Google Cloud console, on the project selector page, select or [create a Google Cloud project](https://cloud.google.com/resource-manager/docs/creating-managing-projects)
  - note the project ID, you need it later when you access the AI service
- [Enable the Vertex AI API](https://console.cloud.google.com/flows/enableapi?apiid=aiplatform.googleapis.com)
  - Google Cloud Console > Vertex AI > Enable all recommended APIs
    - most important: [Enable Vertex AI API](https://console.cloud.google.com/marketplace/product/google/aiplatform.googleapis.com) for your Google Cloud project
      - servicename is: aiplatform.googleapis.com 

### Generating an API Key to Access the Google Cloud Project's AI Services
Here, we'll focus on creating a Service Account with a long-lived JSON key file for accessing Google Cloud's AI services. Detailed instructions this and alternative API key can be found at [Google Cloud API keys](/docs/ai-service-details/google-cloud-api-keys).

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

### Using a User Account JSON Key File with AIsBreaker
Once you have your JSON key file, base64-encode it and add the prefix googlecloud-account-json-base64_. HEre is an example on how you can do this in bash:
```bash
KEYFILE_BASE64= `cat keyfile.json | base64 -w 0`
export GOOGLE_CLOUD_API_KEY="googlecloud-account-json-base64_${KEYFILE_BASE64}"
  # something like:
  #   googlecloud-account-json-base64_ey...
```

Now adapt your code using your own Google Cloud project and API key:
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


That's it! Now you can execute your code:
```bash
npm run start
```

## Wrapping Up
Experiment with the example code in the [StackBlitz Web-IDE](https://stackblitz.com/github/aisbreaker/aisbreaker-example-simple-chat-node-js?title=AIsBreaker+Example+Simple+Chat-node-js&file=aisbreaker-simple-chat.js&startScript=install,start). To delve deeper into the subject, review the comprehensive [AIsBreaker Docs](/docs/), starting with the basic concepts.

Enjoy using Google's AI Gemini API, and feel free to share your feedback or suggestions. Happy coding!

Best,
Chris (at) aisbreaker.org
