[aisbreaker-api-js - v0.0.42](../README.md) / [services/connectors/AIsNetworkClient](../modules/services_connectors_AIsNetworkClient.md) / AIsNetworkClientService

# Class: AIsNetworkClientService

[services/connectors/AIsNetworkClient](../modules/services_connectors_AIsNetworkClient.md).AIsNetworkClientService

Every service API must implement this interface.

## Hierarchy

- [`BaseAIsService`](base_BaseAIsService.BaseAIsService.md)<[`AIsNetworkClientProps`](../interfaces/services_connectors_AIsNetworkClient.AIsNetworkClientProps.md)\>

  ↳ **`AIsNetworkClientService`**

## Table of contents

### Constructors

- [constructor](services_connectors_AIsNetworkClient.AIsNetworkClientService.md#constructor)

### Properties

- [auth](services_connectors_AIsNetworkClient.AIsNetworkClientService.md#auth)
- [serviceProps](services_connectors_AIsNetworkClient.AIsNetworkClientService.md#serviceprops)

### Methods

- [checkRequest](services_connectors_AIsNetworkClient.AIsNetworkClientService.md#checkrequest)
- [getContext](services_connectors_AIsNetworkClient.AIsNetworkClientService.md#getcontext)
- [getContextService](services_connectors_AIsNetworkClient.AIsNetworkClientService.md#getcontextservice)
- [getConversationState](services_connectors_AIsNetworkClient.AIsNetworkClientService.md#getconversationstate)
- [getModelFromServiceId](services_connectors_AIsNetworkClient.AIsNetworkClientService.md#getmodelfromserviceid)
- [process](services_connectors_AIsNetworkClient.AIsNetworkClientService.md#process)
- [processNonStreamingRequest](services_connectors_AIsNetworkClient.AIsNetworkClientService.md#processnonstreamingrequest)
- [processStreamingRequest](services_connectors_AIsNetworkClient.AIsNetworkClientService.md#processstreamingrequest)
- [processUnprotected](services_connectors_AIsNetworkClient.AIsNetworkClientService.md#processunprotected)

## Constructors

### constructor

• **new AIsNetworkClientService**(`serviceProps`, `auth?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `serviceProps` | [`AIsNetworkClientProps`](../interfaces/services_connectors_AIsNetworkClient.AIsNetworkClientProps.md) |
| `auth?` | [`Auth`](../interfaces/api_models_Auth.Auth.md) |

#### Inherited from

[BaseAIsService](base_BaseAIsService.BaseAIsService.md).[constructor](base_BaseAIsService.BaseAIsService.md#constructor)

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/base/BaseAIsService.ts:30](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/base/BaseAIsService.ts#L30)

## Properties

### auth

• `Optional` **auth**: [`Auth`](../interfaces/api_models_Auth.Auth.md)

#### Inherited from

[BaseAIsService](base_BaseAIsService.BaseAIsService.md).[auth](base_BaseAIsService.BaseAIsService.md#auth)

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/base/BaseAIsService.ts:28](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/base/BaseAIsService.ts#L28)

___

### serviceProps

• **serviceProps**: [`AIsNetworkClientProps`](../interfaces/services_connectors_AIsNetworkClient.AIsNetworkClientProps.md)

set in constructor

#### Inherited from

[BaseAIsService](base_BaseAIsService.BaseAIsService.md).[serviceProps](base_BaseAIsService.BaseAIsService.md#serviceprops)

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/base/BaseAIsService.ts:27](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/base/BaseAIsService.ts#L27)

## Methods

### checkRequest

▸ **checkRequest**(`request`, `context`): `void`

check that all required fields are present

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `request` | [`Request`](../interfaces/api_models_Request.Request.md) |  |
| `context` | `string` | optional context information/description/message prefix for logging and for error messages |

#### Returns

`void`

#### Inherited from

[BaseAIsService](base_BaseAIsService.BaseAIsService.md).[checkRequest](base_BaseAIsService.BaseAIsService.md#checkrequest)

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/base/BaseAIsService.ts:193](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/base/BaseAIsService.ts#L193)

___

### getContext

▸ **getContext**(`request?`): `string`

Optionally, provide additional context information/description
for logging and error messages.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request?` | [`Request`](../interfaces/api_models_Request.Request.md) |

#### Returns

`string`

#### Inherited from

[BaseAIsService](base_BaseAIsService.BaseAIsService.md).[getContext](base_BaseAIsService.BaseAIsService.md#getcontext)

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/base/BaseAIsService.ts:165](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/base/BaseAIsService.ts#L165)

___

### getContextService

▸ **getContextService**(`request?`): `undefined` \| `string`

Optionally, provide additional context information/description
for logging and error messages.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request?` | [`Request`](../interfaces/api_models_Request.Request.md) |

#### Returns

`undefined` \| `string`

#### Overrides

[BaseAIsService](base_BaseAIsService.BaseAIsService.md).[getContextService](base_BaseAIsService.BaseAIsService.md#getcontextservice)

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/services/connectors/AIsNetworkClient.ts:185](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/services/connectors/AIsNetworkClient.ts#L185)

___

### getConversationState

▸ **getConversationState**(`request`): [`DefaultConversationState`](utils_ConversationStateUtils.DefaultConversationState.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`Request`](../interfaces/api_models_Request.Request.md) |

#### Returns

[`DefaultConversationState`](utils_ConversationStateUtils.DefaultConversationState.md)

#### Inherited from

[BaseAIsService](base_BaseAIsService.BaseAIsService.md).[getConversationState](base_BaseAIsService.BaseAIsService.md#getconversationstate)

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/base/BaseAIsService.ts:206](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/base/BaseAIsService.ts#L206)

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

[BaseAIsService](base_BaseAIsService.BaseAIsService.md).[getModelFromServiceId](base_BaseAIsService.BaseAIsService.md#getmodelfromserviceid)

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/base/BaseAIsService.ts:218](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/base/BaseAIsService.ts#L218)

___

### process

▸ **process**(`request`): `Promise`<[`ResponseFinal`](../interfaces/api_models_ResponseFinal.ResponseFinal.md)\>

Let the service do its work.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`Request`](../interfaces/api_models_Request.Request.md) |

#### Returns

`Promise`<[`ResponseFinal`](../interfaces/api_models_ResponseFinal.ResponseFinal.md)\>

#### Inherited from

[BaseAIsService](base_BaseAIsService.BaseAIsService.md).[process](base_BaseAIsService.BaseAIsService.md#process)

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/base/BaseAIsService.ts:38](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/base/BaseAIsService.ts#L38)

___

### processNonStreamingRequest

▸ **processNonStreamingRequest**(`url`, `request`, `aisNetworkRequest`, `abortController`, `context`): `Promise`<[`AIsError`](api_AIsError.AIsError.md) \| [`ResponseFinal`](../interfaces/api_models_ResponseFinal.ResponseFinal.md)\>

process non-streaming

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `request` | [`Request`](../interfaces/api_models_Request.Request.md) |
| `aisNetworkRequest` | [`AIsNetworkRequest`](../interfaces/services_connectors_AIsNetworkRequest.AIsNetworkRequest.md) |
| `abortController` | `AbortController` |
| `context` | `string` |

#### Returns

`Promise`<[`AIsError`](api_AIsError.AIsError.md) \| [`ResponseFinal`](../interfaces/api_models_ResponseFinal.ResponseFinal.md)\>

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/services/connectors/AIsNetworkClient.ts:77](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/services/connectors/AIsNetworkClient.ts#L77)

___

### processStreamingRequest

▸ **processStreamingRequest**(`url`, `request`, `aisNetworkRequest`, `abortController`, `context`): `Promise`<`undefined` \| [`AIsError`](api_AIsError.AIsError.md) \| [`ResponseFinal`](../interfaces/api_models_ResponseFinal.ResponseFinal.md)\>

process streaming

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `request` | [`Request`](../interfaces/api_models_Request.Request.md) |
| `aisNetworkRequest` | [`AIsNetworkRequest`](../interfaces/services_connectors_AIsNetworkRequest.AIsNetworkRequest.md) |
| `abortController` | `AbortController` |
| `context` | `string` |

#### Returns

`Promise`<`undefined` \| [`AIsError`](api_AIsError.AIsError.md) \| [`ResponseFinal`](../interfaces/api_models_ResponseFinal.ResponseFinal.md)\>

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/services/connectors/AIsNetworkClient.ts:103](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/services/connectors/AIsNetworkClient.ts#L103)

___

### processUnprotected

▸ **processUnprotected**(`request`, `context`): `Promise`<`undefined` \| [`AIsError`](api_AIsError.AIsError.md) \| [`ResponseFinal`](../interfaces/api_models_ResponseFinal.ResponseFinal.md)\>

Do the work of process()
without the need to care about all error handling.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `request` | [`Request`](../interfaces/api_models_Request.Request.md) | the request to process |
| `context` | `string` | optional context information/description/message prefix for logging and for error messages |

#### Returns

`Promise`<`undefined` \| [`AIsError`](api_AIsError.AIsError.md) \| [`ResponseFinal`](../interfaces/api_models_ResponseFinal.ResponseFinal.md)\>

The final result.
         In the case of an error it returns an AIsError OR throws an AIError or general Error.

#### Overrides

[BaseAIsService](base_BaseAIsService.BaseAIsService.md).[processUnprotected](base_BaseAIsService.BaseAIsService.md#processunprotected)

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/services/connectors/AIsNetworkClient.ts:50](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/services/connectors/AIsNetworkClient.ts#L50)
