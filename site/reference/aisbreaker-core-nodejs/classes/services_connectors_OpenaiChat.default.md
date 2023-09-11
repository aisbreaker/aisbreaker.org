[aisbreaker-core-nodejs - v0.0.42](../README.md) / [services/connectors/OpenaiChat](../modules/services_connectors_OpenaiChat.md) / default

# Class: default

[services/connectors/OpenaiChat](../modules/services_connectors_OpenaiChat.md).default

## Table of contents

### Constructors

- [constructor](services_connectors_OpenaiChat.default.md#constructor)

### Properties

- [apiKey](services_connectors_OpenaiChat.default.md#apikey)
- [completionsUrl](services_connectors_OpenaiChat.default.md#completionsurl)
- [options](services_connectors_OpenaiChat.default.md#options)

### Methods

- [getCompletion](services_connectors_OpenaiChat.default.md#getcompletion)
- [setOptions](services_connectors_OpenaiChat.default.md#setoptions)

## Constructors

### constructor

• **new default**(`apiKey`, `options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `apiKey` | `string` |
| `options` | `any` |

#### Defined in

[aisbreaker-core-nodejs/src/services/connectors/OpenaiChat.ts:350](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-core-nodejs/src/services/connectors/OpenaiChat.ts#L350)

## Properties

### apiKey

• **apiKey**: `string`

#### Defined in

[aisbreaker-core-nodejs/src/services/connectors/OpenaiChat.ts:346](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-core-nodejs/src/services/connectors/OpenaiChat.ts#L346)

___

### completionsUrl

• **completionsUrl**: `undefined` \| `string`

#### Defined in

[aisbreaker-core-nodejs/src/services/connectors/OpenaiChat.ts:348](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-core-nodejs/src/services/connectors/OpenaiChat.ts#L348)

___

### options

• **options**: `any`

#### Defined in

[aisbreaker-core-nodejs/src/services/connectors/OpenaiChat.ts:347](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-core-nodejs/src/services/connectors/OpenaiChat.ts#L347)

## Methods

### getCompletion

▸ **getCompletion**(`messages`, `internOptions?`, `streamProgressFunc`, `abortController?`): `Promise`<`undefined` \| `object`\>

This function needed by sendMessageWithoutStream() + sendMessageWithStream()

#### Parameters

| Name | Type |
| :------ | :------ |
| `messages` | `OpenaiChatMessage`[] |
| `internOptions` | `any` |
| `streamProgressFunc` | `undefined` \| `OpenaiChatSSEFunc` |
| `abortController` | `AbortController` |

#### Returns

`Promise`<`undefined` \| `object`\>

the OpenAI reponse object for non-streaming; undefined for streaming

#### Defined in

[aisbreaker-core-nodejs/src/services/connectors/OpenaiChat.ts:424](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-core-nodejs/src/services/connectors/OpenaiChat.ts#L424)

___

### setOptions

▸ **setOptions**(`options`): [`default`](services_connectors_OpenaiChat.default.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `any` |

#### Returns

[`default`](services_connectors_OpenaiChat.default.md)

#### Defined in

[aisbreaker-core-nodejs/src/services/connectors/OpenaiChat.ts:362](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-core-nodejs/src/services/connectors/OpenaiChat.ts#L362)
