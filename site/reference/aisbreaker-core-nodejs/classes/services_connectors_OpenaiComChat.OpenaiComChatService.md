[aisbreaker-core-nodejs - v0.1.15](../README.md) / [services/connectors/OpenaiComChat](../modules/services_connectors_OpenaiComChat.md) / OpenaiComChatService

# Class: OpenaiComChatService

[services/connectors/OpenaiComChat](../modules/services_connectors_OpenaiComChat.md).OpenaiComChatService

## Hierarchy

- `BaseAIsService`<[`OpenaiComChatProps`](../interfaces/services_connectors_OpenaiComChat.OpenaiComChatProps.md), [`OpenaiComChatDefaults`](../interfaces/services_connectors_OpenaiComChat.OpenaiComChatDefaults.md)\>

  ↳ **`OpenaiComChatService`**

## Table of contents

### Constructors

- [constructor](services_connectors_OpenaiComChat.OpenaiComChatService.md#constructor)

### Properties

- [auth](services_connectors_OpenaiComChat.OpenaiComChatService.md#auth)
- [enableDebug](services_connectors_OpenaiComChat.OpenaiComChatService.md#enabledebug)
- [enableTraceHttp](services_connectors_OpenaiComChat.OpenaiComChatService.md#enabletracehttp)
- [engine](services_connectors_OpenaiComChat.OpenaiComChatService.md#engine)
- [engineOpt](services_connectors_OpenaiComChat.OpenaiComChatService.md#engineopt)
- [serviceDefaults](services_connectors_OpenaiComChat.OpenaiComChatService.md#servicedefaults)
- [serviceProps](services_connectors_OpenaiComChat.OpenaiComChatService.md#serviceprops)
- [task](services_connectors_OpenaiComChat.OpenaiComChatService.md#task)
- [timeoutMillis](services_connectors_OpenaiComChat.OpenaiComChatService.md#timeoutmillis)
- [url](services_connectors_OpenaiComChat.OpenaiComChatService.md#url)
- [urlOpt](services_connectors_OpenaiComChat.OpenaiComChatService.md#urlopt)
- [vendor](services_connectors_OpenaiComChat.OpenaiComChatService.md#vendor)

### Methods

- [checkRequest](services_connectors_OpenaiComChat.OpenaiComChatService.md#checkrequest)
- [getContext](services_connectors_OpenaiComChat.OpenaiComChatService.md#getcontext)
- [getContextService](services_connectors_OpenaiComChat.OpenaiComChatService.md#getcontextservice)
- [getConversationState](services_connectors_OpenaiComChat.OpenaiComChatService.md#getconversationstate)
- [getService](services_connectors_OpenaiComChat.OpenaiComChatService.md#getservice)
- [getServiceUrl](services_connectors_OpenaiComChat.OpenaiComChatService.md#getserviceurl)
- [process](services_connectors_OpenaiComChat.OpenaiComChatService.md#process)
- [processNonStreamingRequest](services_connectors_OpenaiComChat.OpenaiComChatService.md#processnonstreamingrequest)
- [processStreamingRequest](services_connectors_OpenaiComChat.OpenaiComChatService.md#processstreamingrequest)
- [processUnprotected](services_connectors_OpenaiComChat.OpenaiComChatService.md#processunprotected)

## Constructors

### constructor

• **new OpenaiComChatService**(`props`, `serviceDefaults`, `auth?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`OpenaiComChatProps`](../interfaces/services_connectors_OpenaiComChat.OpenaiComChatProps.md) |
| `serviceDefaults` | [`OpenaiComChatDefaults`](../interfaces/services_connectors_OpenaiComChat.OpenaiComChatDefaults.md) |
| `auth?` | `Auth` |

#### Overrides

base.BaseAIsService&lt;OpenaiComChatProps, OpenaiComChatDefaults\&gt;.constructor

#### Defined in

[aisbreaker-core-nodejs/src/services/connectors/OpenaiComChat.ts:37](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-core-nodejs/src/services/connectors/OpenaiComChat.ts#L37)

## Properties

### auth

• `Optional` **auth**: `Auth`

#### Inherited from

base.BaseAIsService.auth

#### Defined in

aisbreaker-api-js/build/base/BaseAIsService.d.ts:7

___

### enableDebug

• **enableDebug**: `boolean` = `false`

#### Defined in

[aisbreaker-core-nodejs/src/services/connectors/OpenaiComChat.ts:34](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-core-nodejs/src/services/connectors/OpenaiComChat.ts#L34)

___

### enableTraceHttp

• **enableTraceHttp**: `boolean` = `false`

#### Defined in

[aisbreaker-core-nodejs/src/services/connectors/OpenaiComChat.ts:35](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-core-nodejs/src/services/connectors/OpenaiComChat.ts#L35)

___

### engine

• **engine**: `string`

#### Inherited from

base.BaseAIsService.engine

#### Defined in

aisbreaker-api-js/build/base/BaseAIsService.d.ts:11

___

### engineOpt

• `Optional` **engineOpt**: `string`

#### Inherited from

base.BaseAIsService.engineOpt

#### Defined in

aisbreaker-api-js/build/base/BaseAIsService.d.ts:10

___

### serviceDefaults

• **serviceDefaults**: [`OpenaiComChatDefaults`](../interfaces/services_connectors_OpenaiComChat.OpenaiComChatDefaults.md)

#### Inherited from

base.BaseAIsService.serviceDefaults

#### Defined in

aisbreaker-api-js/build/base/BaseAIsService.d.ts:6

___

### serviceProps

• **serviceProps**: [`OpenaiComChatProps`](../interfaces/services_connectors_OpenaiComChat.OpenaiComChatProps.md)

#### Inherited from

base.BaseAIsService.serviceProps

#### Defined in

aisbreaker-api-js/build/base/BaseAIsService.d.ts:5

___

### task

• **task**: `string`

#### Inherited from

base.BaseAIsService.task

#### Defined in

aisbreaker-api-js/build/base/BaseAIsService.d.ts:8

___

### timeoutMillis

• **timeoutMillis**: `number`

#### Defined in

[aisbreaker-core-nodejs/src/services/connectors/OpenaiComChat.ts:33](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-core-nodejs/src/services/connectors/OpenaiComChat.ts#L33)

___

### url

• **url**: `string`

#### Inherited from

base.BaseAIsService.url

#### Defined in

aisbreaker-api-js/build/base/BaseAIsService.d.ts:13

___

### urlOpt

• `Optional` **urlOpt**: `string`

#### Inherited from

base.BaseAIsService.urlOpt

#### Defined in

aisbreaker-api-js/build/base/BaseAIsService.d.ts:12

___

### vendor

• **vendor**: `string`

#### Inherited from

base.BaseAIsService.vendor

#### Defined in

aisbreaker-api-js/build/base/BaseAIsService.d.ts:9

## Methods

### checkRequest

▸ **checkRequest**(`request`, `context`): `void`

Check that all required fields are present

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

aisbreaker-api-js/build/base/BaseAIsService.d.ts:62

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

aisbreaker-api-js/build/base/BaseAIsService.d.ts:38

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

[aisbreaker-core-nodejs/src/services/connectors/OpenaiComChat.ts:308](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-core-nodejs/src/services/connectors/OpenaiComChat.ts#L308)

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

aisbreaker-api-js/build/base/BaseAIsService.d.ts:63

___

### getService

▸ **getService**(`actualEngine?`): `Service`

#### Parameters

| Name | Type |
| :------ | :------ |
| `actualEngine?` | `string` |

#### Returns

`Service`

ResponseFinal.usage.service

#### Inherited from

base.BaseAIsService.getService

#### Defined in

aisbreaker-api-js/build/base/BaseAIsService.d.ts:33

___

### getServiceUrl

▸ **getServiceUrl**(`url`, `engine`, `serviceDefaults`): `undefined` \| `string`

Derive the service URL.

Implemented as method here to allow overriding.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `undefined` \| `string` | The (base) URL specified in AIsServiceProps. |
| `engine` | `undefined` \| `string` | The engine derived form serviceId |
| `serviceDefaults` | `AIsServiceDefaults` |  |

#### Returns

`undefined` \| `string`

The URL to access the actual AI service.

#### Inherited from

base.BaseAIsService.getServiceUrl

#### Defined in

aisbreaker-api-js/build/base/BaseAIsService.d.ts:54

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

aisbreaker-api-js/build/base/BaseAIsService.d.ts:18

___

### processNonStreamingRequest

▸ **processNonStreamingRequest**(`url`, `request`, `openaiChatRequest`, `abortController`, `responseCollector`, `conversationState`, `context`): `Promise`<`ResponseFinal` \| `AIsError`\>

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

`Promise`<`ResponseFinal` \| `AIsError`\>

#### Defined in

[aisbreaker-core-nodejs/src/services/connectors/OpenaiComChat.ts:130](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-core-nodejs/src/services/connectors/OpenaiComChat.ts#L130)

___

### processStreamingRequest

▸ **processStreamingRequest**(`url`, `request`, `openaiChatRequest`, `abortController`, `responseCollector`, `conversationState`, `context`): `Promise`<`undefined` \| `ResponseFinal` \| `AIsError`\>

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

`Promise`<`undefined` \| `ResponseFinal` \| `AIsError`\>

#### Defined in

[aisbreaker-core-nodejs/src/services/connectors/OpenaiComChat.ts:189](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-core-nodejs/src/services/connectors/OpenaiComChat.ts#L189)

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

[aisbreaker-core-nodejs/src/services/connectors/OpenaiComChat.ts:56](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-core-nodejs/src/services/connectors/OpenaiComChat.ts#L56)
