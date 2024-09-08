---
#prev:
#  text: 'Concepts'
#  link: './concepts'
#next:
#  text: 'AIsBreaker API Key (AIsBreaker Access Token)'
#  link: './aisbreaker-api-key.md'
---


Setup Google Cloud to Access AI Services
========================================

Getting an API key for Google Cloud to access AI services (like Vertex AI Gemini API) is a much more complicated than for other AI services. This is due to the fact that Google Cloud is not a pure AI service provider, but a full cloud provider with many different services and complex access management. Therefore, need to follow the steps below to create a Google Cloud project, enable the respective services, and get an API key.


Create Google Cloud Project
---------------------------
Follow the instructions at [Get set up on Google Cloud](https://cloud.google.com/vertex-ai/docs/start/cloud-environment):
- sign in to your Google Cloud account; if you're new to Google Cloud, [create an account](https://console.cloud.google.com/freetrial)
  - as of this writing (2024-01-10), new customers also get free credits to run, test, and deploy workloads
- in the Google Cloud console, on the project selector page, select or [create a Google Cloud project](https://cloud.google.com/resource-manager/docs/creating-managing-projects)
  - note the project ID, you need it later when you access the AI service
- optionally with [gcloud CLI](https://cloud.google.com/sdk/gcloud):
  - [install the gcloud CLI](https://cloud.google.com/sdk/docs/install)
    ```bash
    # Ubuntu with snap:
    sudo snap install google-cloud-cli --classic
    ```
  - [initialize the gcloud CLI](https://cloud.google.com/sdk/docs/initializing) with:
    ```bash
    gcloud init
      # inclusive login at Google with Browser
    ```


Enable AI Services in the Google Cloud Project
----------------------------------------------
Then:
- [Enable the Vertex AI API](https://console.cloud.google.com/flows/enableapi?apiid=aiplatform.googleapis.com)
  - Google Cloud Console > Vertex AI > Enable all recommended APIs
    - most important: [Enable Vertex AI API](https://console.cloud.google.com/marketplace/product/google/aiplatform.googleapis.com) for your Google Cloud project
      - servicename is: aiplatform.googleapis.com 


Get API Key to Access the AI Services in the Google Cloud Project
-----------------------------------------------------------------
Then follow the instructions on page [API Keys (Access Tokens) to Google Cloud Services](google-cloud-api-keys.md).
