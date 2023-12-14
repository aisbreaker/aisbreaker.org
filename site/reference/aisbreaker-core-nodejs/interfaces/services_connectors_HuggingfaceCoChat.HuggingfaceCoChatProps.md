[aisbreaker-core-nodejs - v0.1.15](../README.md) / [services/connectors/HuggingfaceCoChat](../modules/services_connectors_HuggingfaceCoChat.md) / HuggingfaceCoChatProps

# Interface: HuggingfaceCoChatProps

[services/connectors/HuggingfaceCoChat](../modules/services_connectors_HuggingfaceCoChat.md).HuggingfaceCoChatProps

## Hierarchy

- `AIsServiceProps`

  ↳ **`HuggingfaceCoChatProps`**

## Table of contents

### Properties

- [internServiceOptions](services_connectors_HuggingfaceCoChat.HuggingfaceCoChatProps.md#internserviceoptions)
- [serviceId](services_connectors_HuggingfaceCoChat.HuggingfaceCoChatProps.md#serviceid)
- [url](services_connectors_HuggingfaceCoChat.HuggingfaceCoChatProps.md#url)

## Properties

### internServiceOptions

• `Optional` **internServiceOptions**: `any`

Service implementation specific opts.
Try to avoid using them because they are NOT portable!!!

#### Inherited from

api.AIsServiceProps.internServiceOptions

#### Defined in

aisbreaker-api-js/build/api/AIsService.d.ts:36

___

### serviceId

• **serviceId**: `string`

Unique identified of the AIsBreaker service,
see: https://aisbreaker.org/docs/serviceId

#### Inherited from

api.AIsServiceProps.serviceId

#### Defined in

aisbreaker-api-js/build/api/AIsService.d.ts:27

___

### url

• `Optional` **url**: `string`

URL of the AI service (optional).

#### Inherited from

api.AIsServiceProps.url

#### Defined in

aisbreaker-api-js/build/api/AIsService.d.ts:31
