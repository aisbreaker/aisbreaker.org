---
#prev:
#  text: 'Home'
#  link: '/'
#next:
#  text: 'Reference'
#  link: '/reference/'
---

Basic Concepts
==============

Here we explain some basic concepts generative AI services and of AIsBreaker ... in addtion to the [Architecture (Overview)](architecture.md).


Service
-------
... is an AI service provided by AIsBreaker or by a 3rd party service provider.

Examples are: OpenAI (ChatGPT) service, any Huggingface AI service, OpenAssistant AI service, Stability.io image generation service, ...

Each service connected to or provided by AIsBreaker solves a specific `task` and is addressed by one or more `serviceId`s.

A list of implemented service connectors/features: [Services](./services)

Task
----

AI services can solve diferent tasks. The `task` is usually part of the `serviceId` to classify the expected result of the service.

Details and a list of all possible tasks on page: [Tasks](tasks.md)


ServiceId
---------
Each service connected to or provided by AIsBreaker has one or more `serviceId`s to select the task, the service/vendor and the engine/AI model. Details on page: [serviceId](serviceId.md)


Engine / Model
--------------
Each service supports one or mode `engines`. An engine is a vendor specific name of the engine/model/model family to use. More on page: [serviceId](serviceId.md)


Service Properties / ServiceProps / AIsServiceProps
---------------------------------------------------
... are the properties of a service, which are needed to connect to the service. Usually a JSON or YAML. Details on page: [Service Properties / ServiceProps / AIsServiceProps](service-properties.md)


Service URL
-----------
... is the URL of the actual AI service API. Details on page: [Service URL](url.md)


API Keys (Access Tokens)
------------------------
... keys are often needed to access API services. Details on pages: [API Keys (Access Tokens)](api-keys.md) and [AIsBreaker API Key (AIsBreaker Access Token)](aisbreaker-api-key.md)


Request
-------
... is the (service-independent) input to an AI service. Details on page: [Request](request.md)

Service-independent means that the format of the request is the same for all service implementations/vendors of the same `task`.


Response (FinalResponse and ResponseEvent)
------------------------------------------
... is the (service independent) output of/result from an AI service. Details on page: [Response](response.md)

Service-independent means that the format of the response is the same for all service implementations/vendors of the same `task`.
