[aisbreaker-core-nodejs - v0.0.42](../README.md) / [services/connectors/OpenaiChat](../modules/services_connectors_OpenaiChat.md) / OpenaiChatService

# Class: OpenaiChatService

[services/connectors/OpenaiChat](../modules/services_connectors_OpenaiChat.md).OpenaiChatService

## Hierarchy

- `BaseAIsService`<`api.AIsServiceProps`\>

  ↳ **`OpenaiChatService`**

## Table of contents

### Constructors

- [constructor](services_connectors_OpenaiChat.OpenaiChatService.md#constructor)

### Properties

- [auth](services_connectors_OpenaiChat.OpenaiChatService.md#auth)
- [openaiChatClient](services_connectors_OpenaiChat.OpenaiChatService.md#openaichatclient)
- [serviceProps](services_connectors_OpenaiChat.OpenaiChatService.md#serviceprops)

### Methods

- [checkRequest](services_connectors_OpenaiChat.OpenaiChatService.md#checkrequest)
- [getContext](services_connectors_OpenaiChat.OpenaiChatService.md#getcontext)
- [getContextService](services_connectors_OpenaiChat.OpenaiChatService.md#getcontextservice)
- [getConversationState](services_connectors_OpenaiChat.OpenaiChatService.md#getconversationstate)
- [getEngine](services_connectors_OpenaiChat.OpenaiChatService.md#getengine)
- [getModelFromServiceId](services_connectors_OpenaiChat.OpenaiChatService.md#getmodelfromserviceid)
- [process](services_connectors_OpenaiChat.OpenaiChatService.md#process)
- [processUnprotected](services_connectors_OpenaiChat.OpenaiChatService.md#processunprotected)

## Constructors

### constructor

• **new OpenaiChatService**(`props`, `auth?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `AIsServiceProps` |
| `auth?` | `Auth` |

#### Overrides

base.BaseAIsService&lt;api.AIsServiceProps\&gt;.constructor

#### Defined in

[aisbreaker-core-nodejs/src/services/connectors/OpenaiChat.ts:22](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-core-nodejs/src/services/connectors/OpenaiChat.ts#L22)

## Properties

### auth

• `Optional` **auth**: `Auth`

#### Inherited from

base.BaseAIsService.auth

#### Defined in

aisbreaker-api-js/build/base/BaseAIsService.d.ts:5

___

### openaiChatClient

• `Protected` **openaiChatClient**: [`default`](services_connectors_OpenaiChat.default.md)

#### Defined in

[aisbreaker-core-nodejs/src/services/connectors/OpenaiChat.ts:20](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-core-nodejs/src/services/connectors/OpenaiChat.ts#L20)

___

### serviceProps

• **serviceProps**: `AIsServiceProps`

#### Inherited from

base.BaseAIsService.serviceProps

#### Defined in

aisbreaker-api-js/build/base/BaseAIsService.d.ts:4

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

#### Inherited from

base.BaseAIsService.getContextService

#### Defined in

aisbreaker-api-js/build/base/BaseAIsService.d.ts:31

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

[aisbreaker-core-nodejs/src/services/connectors/OpenaiChat.ts:36](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-core-nodejs/src/services/connectors/OpenaiChat.ts#L36)

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

### processUnprotected

▸ **processUnprotected**(`request`): `Promise`<`ResponseFinal`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | `Request` |

#### Returns

`Promise`<`ResponseFinal`\>

#### Overrides

base.BaseAIsService.processUnprotected

#### Defined in

[aisbreaker-core-nodejs/src/services/connectors/OpenaiChat.ts:43](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-core-nodejs/src/services/connectors/OpenaiChat.ts#L43)
