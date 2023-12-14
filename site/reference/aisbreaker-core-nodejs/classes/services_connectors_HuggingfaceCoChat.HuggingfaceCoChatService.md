[aisbreaker-core-nodejs - v0.1.15](../README.md) / [services/connectors/HuggingfaceCoChat](../modules/services_connectors_HuggingfaceCoChat.md) / HuggingfaceCoChatService

# Class: HuggingfaceCoChatService

[services/connectors/HuggingfaceCoChat](../modules/services_connectors_HuggingfaceCoChat.md).HuggingfaceCoChatService

## Hierarchy

- `BaseAIsService`<[`HuggingfaceCoChatProps`](../interfaces/services_connectors_HuggingfaceCoChat.HuggingfaceCoChatProps.md), [`HuggingfaceCoChatDefaults`](../interfaces/services_connectors_HuggingfaceCoChat.HuggingfaceCoChatDefaults.md)\>

  ↳ **`HuggingfaceCoChatService`**

## Table of contents

### Constructors

- [constructor](services_connectors_HuggingfaceCoChat.HuggingfaceCoChatService.md#constructor)

### Properties

- [auth](services_connectors_HuggingfaceCoChat.HuggingfaceCoChatService.md#auth)
- [enableDebug](services_connectors_HuggingfaceCoChat.HuggingfaceCoChatService.md#enabledebug)
- [enableTraceHttp](services_connectors_HuggingfaceCoChat.HuggingfaceCoChatService.md#enabletracehttp)
- [engine](services_connectors_HuggingfaceCoChat.HuggingfaceCoChatService.md#engine)
- [engineOpt](services_connectors_HuggingfaceCoChat.HuggingfaceCoChatService.md#engineopt)
- [serviceDefaults](services_connectors_HuggingfaceCoChat.HuggingfaceCoChatService.md#servicedefaults)
- [serviceProps](services_connectors_HuggingfaceCoChat.HuggingfaceCoChatService.md#serviceprops)
- [task](services_connectors_HuggingfaceCoChat.HuggingfaceCoChatService.md#task)
- [timeoutMillis](services_connectors_HuggingfaceCoChat.HuggingfaceCoChatService.md#timeoutmillis)
- [url](services_connectors_HuggingfaceCoChat.HuggingfaceCoChatService.md#url)
- [urlOpt](services_connectors_HuggingfaceCoChat.HuggingfaceCoChatService.md#urlopt)
- [vendor](services_connectors_HuggingfaceCoChat.HuggingfaceCoChatService.md#vendor)

### Methods

- [checkRequest](services_connectors_HuggingfaceCoChat.HuggingfaceCoChatService.md#checkrequest)
- [getContext](services_connectors_HuggingfaceCoChat.HuggingfaceCoChatService.md#getcontext)
- [getContextService](services_connectors_HuggingfaceCoChat.HuggingfaceCoChatService.md#getcontextservice)
- [getConversationState](services_connectors_HuggingfaceCoChat.HuggingfaceCoChatService.md#getconversationstate)
- [getService](services_connectors_HuggingfaceCoChat.HuggingfaceCoChatService.md#getservice)
- [getServiceUrl](services_connectors_HuggingfaceCoChat.HuggingfaceCoChatService.md#getserviceurl)
- [process](services_connectors_HuggingfaceCoChat.HuggingfaceCoChatService.md#process)
- [processNonStreamingRequest](services_connectors_HuggingfaceCoChat.HuggingfaceCoChatService.md#processnonstreamingrequest)
- [processUnprotected](services_connectors_HuggingfaceCoChat.HuggingfaceCoChatService.md#processunprotected)

## Constructors

### constructor

• **new HuggingfaceCoChatService**(`props`, `serviceDefaults`, `auth?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`HuggingfaceCoChatProps`](../interfaces/services_connectors_HuggingfaceCoChat.HuggingfaceCoChatProps.md) |
| `serviceDefaults` | [`HuggingfaceCoChatDefaults`](../interfaces/services_connectors_HuggingfaceCoChat.HuggingfaceCoChatDefaults.md) |
| `auth?` | `Auth` |

#### Overrides

base.BaseAIsService&lt;HuggingfaceCoChatProps, HuggingfaceCoChatDefaults\&gt;.constructor

#### Defined in

[aisbreaker-core-nodejs/src/services/connectors/HuggingfaceCoChat.ts:49](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-core-nodejs/src/services/connectors/HuggingfaceCoChat.ts#L49)

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

[aisbreaker-core-nodejs/src/services/connectors/HuggingfaceCoChat.ts:46](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-core-nodejs/src/services/connectors/HuggingfaceCoChat.ts#L46)

___

### enableTraceHttp

• **enableTraceHttp**: `boolean` = `false`

#### Defined in

[aisbreaker-core-nodejs/src/services/connectors/HuggingfaceCoChat.ts:47](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-core-nodejs/src/services/connectors/HuggingfaceCoChat.ts#L47)

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

• **serviceDefaults**: [`HuggingfaceCoChatDefaults`](../interfaces/services_connectors_HuggingfaceCoChat.HuggingfaceCoChatDefaults.md)

#### Inherited from

base.BaseAIsService.serviceDefaults

#### Defined in

aisbreaker-api-js/build/base/BaseAIsService.d.ts:6

___

### serviceProps

• **serviceProps**: [`HuggingfaceCoChatProps`](../interfaces/services_connectors_HuggingfaceCoChat.HuggingfaceCoChatProps.md)

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

[aisbreaker-core-nodejs/src/services/connectors/HuggingfaceCoChat.ts:45](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-core-nodejs/src/services/connectors/HuggingfaceCoChat.ts#L45)

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

[aisbreaker-core-nodejs/src/services/connectors/HuggingfaceCoChat.ts:204](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-core-nodejs/src/services/connectors/HuggingfaceCoChat.ts#L204)

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

▸ **processNonStreamingRequest**(`url`, `request`, `huggingfaceChatRequest`, `abortController`, `responseCollector`, `conversationState`, `context`): `Promise`<`ResponseFinal` \| `AIsError`\>

process non-streaming

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `request` | `Request` |
| `huggingfaceChatRequest` | `HuggingfaceChatRequest` |
| `abortController` | `AbortController` |
| `responseCollector` | `ResponseCollector` |
| `conversationState` | `DefaultConversationState` |
| `context` | `string` |

#### Returns

`Promise`<`ResponseFinal` \| `AIsError`\>

#### Defined in

[aisbreaker-core-nodejs/src/services/connectors/HuggingfaceCoChat.ts:145](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-core-nodejs/src/services/connectors/HuggingfaceCoChat.ts#L145)

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

[aisbreaker-core-nodejs/src/services/connectors/HuggingfaceCoChat.ts:71](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-core-nodejs/src/services/connectors/HuggingfaceCoChat.ts#L71)
