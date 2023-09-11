[aisbreaker-core-nodejs - v0.0.42](../README.md) / [services/connectors/OpenaiChat](../modules/services_connectors_OpenaiChat.md) / OpenaiChatFactory

# Class: OpenaiChatFactory

[services/connectors/OpenaiChat](../modules/services_connectors_OpenaiChat.md).OpenaiChatFactory

## Implements

- `AIsAPIFactory`<`api.AIsServiceProps`, [`OpenaiChatService`](services_connectors_OpenaiChat.OpenaiChatService.md)\>

## Table of contents

### Constructors

- [constructor](services_connectors_OpenaiChat.OpenaiChatFactory.md#constructor)

### Methods

- [createAIsService](services_connectors_OpenaiChat.OpenaiChatFactory.md#createaisservice)

## Constructors

### constructor

• **new OpenaiChatFactory**()

## Methods

### createAIsService

▸ **createAIsService**(`props`, `auth?`): [`OpenaiChatService`](services_connectors_OpenaiChat.OpenaiChatService.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `AIsServiceProps` |
| `auth?` | `Auth` |

#### Returns

[`OpenaiChatService`](services_connectors_OpenaiChat.OpenaiChatService.md)

#### Implementation of

api.AIsAPIFactory.createAIsService

#### Defined in

[aisbreaker-core-nodejs/src/services/connectors/OpenaiChat.ts:541](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-core-nodejs/src/services/connectors/OpenaiChat.ts#L541)
