[aisbreaker-core-nodejs - v0.0.42](../README.md) / [services/connectors/OpenaiComChat](../modules/services_connectors_OpenaiComChat.md) / OpenaiComChatProps

# Interface: OpenaiComChatProps

[services/connectors/OpenaiComChat](../modules/services_connectors_OpenaiComChat.md).OpenaiComChatProps

## Hierarchy

- `AIsServiceProps`

  ↳ **`OpenaiComChatProps`**

## Table of contents

### Properties

- [internServiceOptions](services_connectors_OpenaiComChat.OpenaiComChatProps.md#internserviceoptions)
- [serviceId](services_connectors_OpenaiComChat.OpenaiComChatProps.md#serviceid)
- [url](services_connectors_OpenaiComChat.OpenaiComChatProps.md#url)

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

access this OpenAI API server

#### Overrides

api.AIsServiceProps.url

#### Defined in

[aisbreaker-core-nodejs/src/services/connectors/OpenaiComChat.ts:24](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-core-nodejs/src/services/connectors/OpenaiComChat.ts#L24)
