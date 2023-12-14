[aisbreaker-core-nodejs - v0.1.15](../README.md) / [services/connectors/OpenaiComChat](../modules/services_connectors_OpenaiComChat.md) / OpenaiComChatFactory

# Class: OpenaiComChatFactory

[services/connectors/OpenaiComChat](../modules/services_connectors_OpenaiComChat.md).OpenaiComChatFactory

## Implements

- `AIsAPIFactory`<[`OpenaiComChatProps`](../interfaces/services_connectors_OpenaiComChat.OpenaiComChatProps.md), [`OpenaiComChatService`](services_connectors_OpenaiComChat.OpenaiComChatService.md)\>

## Table of contents

### Constructors

- [constructor](services_connectors_OpenaiComChat.OpenaiComChatFactory.md#constructor)

### Methods

- [createAIsService](services_connectors_OpenaiComChat.OpenaiComChatFactory.md#createaisservice)

## Constructors

### constructor

• **new OpenaiComChatFactory**()

## Methods

### createAIsService

▸ **createAIsService**(`props`, `auth?`): [`OpenaiComChatService`](services_connectors_OpenaiComChat.OpenaiComChatService.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `AIsServiceProps` |
| `auth?` | `Auth` |

#### Returns

[`OpenaiComChatService`](services_connectors_OpenaiComChat.OpenaiComChatService.md)

#### Implementation of

api.AIsAPIFactory.createAIsService

#### Defined in

[aisbreaker-core-nodejs/src/services/connectors/OpenaiComChat.ts:527](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-core-nodejs/src/services/connectors/OpenaiComChat.ts#L527)
