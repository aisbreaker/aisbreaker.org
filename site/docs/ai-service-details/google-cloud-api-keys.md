---
#prev:
#  text: 'Concepts'
#  link: './concepts'
#next:
#  text: 'AIsBreaker API Key (AIsBreaker Access Token)'
#  link: './aisbreaker-api-key.md'
---


API Keys (Access Tokens) to Google Cloud Services
=================================================

To access services hosted in the Google Cloud (like Vertex AI Gemini API), you need to create a Google Cloud project and enable the respective services (as described on page [Setup Google Cloud to Access AI Services](google-cloud-ai-setup.md)).

The next step is to get an [API key (access token)](../api-keys.md) as described below. 


Preface 
-------
There exists different types of API keys in the Google Cloud - below we describe the most relevant ones and how to get them.


We cannot use Google's [Application Default Credentials (ADC)](https://cloud.google.com/docs/authentication/application-default-credentials) for AIsBreaker, because usually neither the [AIsBreaker server](../aisbreaker-server.md) nor the AIsBreaker client run in the Google Cloud.


## Short-lived access token for Google Cloud Services
### Create a short-lived access token for Google Cloud Services
Login and create the access token with the gcloud CLI and save it in an environment variable:
```bash
gcloud auth login <your-google-account>
gcloud auth print-access-token`
  # ya29.a0...
```

A detailed description of these steps: [Generate the access token - with gcloud](https://cloud.google.com/iam/docs/create-short-lived-credentials-direct#gcloud_2)

### Use the short-lived access token with AIsBreaker
If you have such a short-lived access token, you can directly use it as secret in an AIsBreaker auth object:

::: code-group
```TypeScript[TypeScript]
const auth: api.Auth = {
  secret: "ya29.a0...",
}
```

```JavaScript[JavaScript]
const auth = {
  secret: "ya29.a0...",
};
```
:::

This is a simple way to get access, but the access token is short-lived (less than 60 minutes) before you need to login again at Google.


## Long-lived access token for Google Cloud Services
### Create a User Account long-lived JSON key file for Google Cloud Services
```bash
gcloud auth application-default login
cat ~/.config/gcloud/application_default_credentials.json 
  # will look like:
  {
    "type": "authorized_user"
    "quota_project_id": "my-project-123456",
    ...
  }
```

This is a simple way to a long-lived JSON key file, but it transfers all rights of the user to this key file. A more secure, because access limited way is to create a service account and get its JSON key file as described below.


### Create a Service Account long-lived JSON key file for Google Cloud Services
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

Then you can use it as secret in an AIsBreaker auth object, together with setting the project and location in the servicePros object:

::: code-group
```TypeScript[TypeScript]
const serviceProps: api.AIsServiceProps = {
    serviceId: "chat:gemini.vertexai.google.com",
    project: "<YOUR-GOOGLE-CLOUD-PROJECT>",   // the project name you set in the Google Cloud Console
    location: "<YOUR-GOOGLE-CLOUD-LOCATION>", // e.g. 'us-central1'
}
...
const auth: api.Auth = {
  secret: "googlecloud-account-json-base64_ey...",
}
```

```JavaScript[JavaScript]
const serviceProps = {
    serviceId: "chat:gemini.vertexai.google.com",
    project: "<YOUR-GOOGLE-CLOUD-PROJECT>",   // the project name you set in the Google Cloud Console
    location: "<YOUR-GOOGLE-CLOUD-LOCATION>", // e.g. 'us-central1'
};
...
const auth = {
  secret: "googlecloud-account-json-base64_ey...",
};
```
:::




