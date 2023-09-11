[aisbreaker-core-nodejs - v0.0.42](../README.md) / [services/connectors/OpenaiComChat](../modules/services_connectors_OpenaiComChat.md) / OpenaiComChatService

# Class: OpenaiComChatService

[services/connectors/OpenaiComChat](../modules/services_connectors_OpenaiComChat.md).OpenaiComChatService

## Hierarchy

- `BaseAIsService`<[`OpenaiComChatProps`](../interfaces/services_connectors_OpenaiComChat.OpenaiComChatProps.md)\>

  ↳ **`OpenaiComChatService`**

## Table of contents

### Constructors

- [constructor](services_connectors_OpenaiComChat.OpenaiComChatService.md#constructor)

### Properties

- [auth](services_connectors_OpenaiComChat.OpenaiComChatService.md#auth)
- [model](services_connectors_OpenaiComChat.OpenaiComChatService.md#model)
- [serviceProps](services_connectors_OpenaiComChat.OpenaiComChatService.md#serviceprops)
- [url](services_connectors_OpenaiComChat.OpenaiComChatService.md#url)

### Methods

- [checkRequest](services_connectors_OpenaiComChat.OpenaiComChatService.md#checkrequest)
- [getContext](services_connectors_OpenaiComChat.OpenaiComChatService.md#getcontext)
- [getContextService](services_connectors_OpenaiComChat.OpenaiComChatService.md#getcontextservice)
- [getConversationState](services_connectors_OpenaiComChat.OpenaiComChatService.md#getconversationstate)
- [getEngine](services_connectors_OpenaiComChat.OpenaiComChatService.md#getengine)
- [getModelFromServiceId](services_connectors_OpenaiComChat.OpenaiComChatService.md#getmodelfromserviceid)
- [process](services_connectors_OpenaiComChat.OpenaiComChatService.md#process)
- [processNonStreamingRequest](services_connectors_OpenaiComChat.OpenaiComChatService.md#processnonstreamingrequest)
- [processStreamingRequest](services_connectors_OpenaiComChat.OpenaiComChatService.md#processstreamingrequest)
- [processUnprotected](services_connectors_OpenaiComChat.OpenaiComChatService.md#processunprotected)

## Constructors

### constructor

• **new OpenaiComChatService**(`props`, `auth?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`OpenaiComChatProps`](../interfaces/services_connectors_OpenaiComChat.OpenaiComChatProps.md) |
| `auth?` | `Auth` |

#### Overrides

base.BaseAIsService&lt;OpenaiComChatProps\&gt;.constructor

#### Defined in

[aisbreaker-core-nodejs/src/services/connectors/OpenaiComChat.ts:31](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-core-nodejs/src/services/connectors/OpenaiComChat.ts#L31)

## Properties

### auth

• `Optional` **auth**: `Auth`

#### Inherited from

base.BaseAIsService.auth

#### Defined in

aisbreaker-api-js/build/base/BaseAIsService.d.ts:5

___

### model

• **model**: `string`

#### Defined in

[aisbreaker-core-nodejs/src/services/connectors/OpenaiComChat.ts:28](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-core-nodejs/src/services/connectors/OpenaiComChat.ts#L28)

___

### serviceProps

• **serviceProps**: [`OpenaiComChatProps`](../interfaces/services_connectors_OpenaiComChat.OpenaiComChatProps.md)

#### Inherited from

base.BaseAIsService.serviceProps

#### Defined in

aisbreaker-api-js/build/base/BaseAIsService.d.ts:4

___

### url

• **url**: `string`

#### Defined in

[aisbreaker-core-nodejs/src/services/connectors/OpenaiComChat.ts:29](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-core-nodejs/src/services/connectors/OpenaiComChat.ts#L29)

## Methods

### checkRequest

▸ **checkRequest**(`request`, `context`): `void`

check that all required fields are present

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `request` | `Request` |  |
| `context` | `string` | optional context information/description/message prefix for logging and for error messages |

#### Returns

`void`

#### Inherited from

base.BaseAIsService.checkRequest

#### Defined in

aisbreaker-api-js/build/base/BaseAIsService.d.ts:38

___

### getContext

▸ **getContext**(`request?`): `string`

Optionally, provide additional context information/description
for logging and error messages.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request?` | `Request` |

#### Returns

`string`

#### Inherited from

base.BaseAIsService.getContext

#### Defined in

aisbreaker-api-js/build/base/BaseAIsService.d.ts:26

___

### getContextService

▸ **getContextService**(`request?`): `undefined` \| `string`

Optionally, provide additional context information/description
for logging and error messages.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request?` | `Request` |

#### Returns

`undefined` \| `string`

#### Overrides

base.BaseAIsService.getContextService

#### Defined in

[aisbreaker-core-nodejs/src/services/connectors/OpenaiComChat.ts:316](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-core-nodejs/src/services/connectors/OpenaiComChat.ts#L316)

___

### getConversationState

▸ **getConversationState**(`request`): `DefaultConversationState`

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | `Request` |

#### Returns

`DefaultConversationState`

#### Inherited from

base.BaseAIsService.getConversationState

#### Defined in

aisbreaker-api-js/build/base/BaseAIsService.d.ts:39

___

### getEngine

▸ **getEngine**(`model?`): `Engine`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `model` | `string` | `DEFAULT_CHATGPT_MODEL` |

#### Returns

`Engine`

#### Defined in

[aisbreaker-core-nodejs/src/services/connectors/OpenaiComChat.ts:44](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-core-nodejs/src/services/connectors/OpenaiComChat.ts#L44)

___

### getModelFromServiceId

▸ **getModelFromServiceId**(`serviceId`): `undefined` \| `string`

`task:service/model` -> `model`
Examples:
  `chat:foo.com/gpt-next` -> `gpt-next`
  `text-to-image:bar-ai/my-model` -> `my-model`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `serviceId` | `string` | ` |

#### Returns

`undefined` \| `string`

#### Inherited from

base.BaseAIsService.getModelFromServiceId

#### Defined in

aisbreaker-api-js/build/base/BaseAIsService.d.ts:48

___

### process

▸ **process**(`request`): `Promise`<`ResponseFinal`\>

Let the service do its work.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | `Request` |

#### Returns

`Promise`<`ResponseFinal`\>

#### Inherited from

base.BaseAIsService.process

#### Defined in

aisbreaker-api-js/build/base/BaseAIsService.d.ts:10

___

### processNonStreamingRequest

▸ **processNonStreamingRequest**(`url`, `request`, `openaiChatRequest`, `abortController`, `responseCollector`, `conversationState`, `context`): `Promise`<`AIsError` \| `IncompleteFinalResponse`\>

process non-streaming

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `request` | `Request` |
| `openaiChatRequest` | `OpenaiChatRequest` |
| `abortController` | `AbortController` |
| `responseCollector` | `ResponseCollector` |
| `conversationState` | `DefaultConversationState` |
| `context` | `string` |

#### Returns

`Promise`<`AIsError` \| `IncompleteFinalResponse`\>

#### Defined in

[aisbreaker-core-nodejs/src/services/connectors/OpenaiComChat.ts:136](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-core-nodejs/src/services/connectors/OpenaiComChat.ts#L136)

___

### processStreamingRequest

▸ **processStreamingRequest**(`url`, `request`, `openaiChatRequest`, `abortController`, `responseCollector`, `conversationState`, `context`): `Promise`<`undefined` \| `AIsError` \| `IncompleteFinalResponse`\>

process streaming

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `request` | `Request` |
| `openaiChatRequest` | `OpenaiChatRequest` |
| `abortController` | `AbortController` |
| `responseCollector` | `ResponseCollector` |
| `conversationState` | `DefaultConversationState` |
| `context` | `string` |

#### Returns

`Promise`<`undefined` \| `AIsError` \| `IncompleteFinalResponse`\>

#### Defined in

[aisbreaker-core-nodejs/src/services/connectors/OpenaiComChat.ts:196](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-core-nodejs/src/services/connectors/OpenaiComChat.ts#L196)

___

### processUnprotected

▸ **processUnprotected**(`request`, `context`): `Promise`<`undefined` \| `ResponseFinal` \| `AIsError`\>

Do the work of process()
without the need to care about all error handling.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `request` | `Request` | the request to process |
| `context` | `string` | optional context information/description/message prefix for logging and for error messages |

#### Returns

`Promise`<`undefined` \| `ResponseFinal` \| `AIsError`\>

The final result.
         In the case of an error it returns an AIsError OR throws an AIError or general Error.

#### Overrides

base.BaseAIsService.processUnprotected

#### Defined in

[aisbreaker-core-nodejs/src/services/connectors/OpenaiComChat.ts:62](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-core-nodejs/src/services/connectors/OpenaiComChat.ts#L62)
