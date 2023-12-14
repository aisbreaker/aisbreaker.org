[aisbreaker-core-nodejs - v0.1.15](../README.md) / [services/connectors/HuggingfaceCoChat](../modules/services_connectors_HuggingfaceCoChat.md) / HuggingfaceCoChatFactory

# Class: HuggingfaceCoChatFactory

[services/connectors/HuggingfaceCoChat](../modules/services_connectors_HuggingfaceCoChat.md).HuggingfaceCoChatFactory

## Implements

- `AIsAPIFactory`<[`HuggingfaceCoChatProps`](../interfaces/services_connectors_HuggingfaceCoChat.HuggingfaceCoChatProps.md), [`HuggingfaceCoChatService`](services_connectors_HuggingfaceCoChat.HuggingfaceCoChatService.md)\>

## Table of contents

### Constructors

- [constructor](services_connectors_HuggingfaceCoChat.HuggingfaceCoChatFactory.md#constructor)

### Methods

- [createAIsService](services_connectors_HuggingfaceCoChat.HuggingfaceCoChatFactory.md#createaisservice)

## Constructors

### constructor

• **new HuggingfaceCoChatFactory**()

## Methods

### createAIsService

▸ **createAIsService**(`props`, `auth?`): [`HuggingfaceCoChatService`](services_connectors_HuggingfaceCoChat.HuggingfaceCoChatService.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `AIsServiceProps` |
| `auth?` | `Auth` |

#### Returns

[`HuggingfaceCoChatService`](services_connectors_HuggingfaceCoChat.HuggingfaceCoChatService.md)

#### Implementation of

api.AIsAPIFactory.createAIsService

#### Defined in

[aisbreaker-core-nodejs/src/services/connectors/HuggingfaceCoChat.ts:337](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-core-nodejs/src/services/connectors/HuggingfaceCoChat.ts#L337)
