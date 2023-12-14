[aisbreaker-api-js - v0.1.15](../README.md) / [services/connectors/AIsNetworkClient](../modules/services_connectors_AIsNetworkClient.md) / AIsNetworkClientService

# Class: AIsNetworkClientService

[services/connectors/AIsNetworkClient](../modules/services_connectors_AIsNetworkClient.md).AIsNetworkClientService

Every service API must implement this interface.

## Hierarchy

- [`BaseAIsService`](base_BaseAIsService.BaseAIsService.md)<[`AIsNetworkClientProps`](../interfaces/services_connectors_AIsNetworkClient.AIsNetworkClientProps.md), [`AIsNetworkClientDefaults`](../interfaces/services_connectors_AIsNetworkClient.AIsNetworkClientDefaults.md)\>

  ↳ **`AIsNetworkClientService`**

## Table of contents

### Constructors

- [constructor](services_connectors_AIsNetworkClient.AIsNetworkClientService.md#constructor)

### Properties

- [auth](services_connectors_AIsNetworkClient.AIsNetworkClientService.md#auth)
- [engine](services_connectors_AIsNetworkClient.AIsNetworkClientService.md#engine)
- [engineOpt](services_connectors_AIsNetworkClient.AIsNetworkClientService.md#engineopt)
- [serviceDefaults](services_connectors_AIsNetworkClient.AIsNetworkClientService.md#servicedefaults)
- [serviceProps](services_connectors_AIsNetworkClient.AIsNetworkClientService.md#serviceprops)
- [task](services_connectors_AIsNetworkClient.AIsNetworkClientService.md#task)
- [url](services_connectors_AIsNetworkClient.AIsNetworkClientService.md#url)
- [urlOpt](services_connectors_AIsNetworkClient.AIsNetworkClientService.md#urlopt)
- [vendor](services_connectors_AIsNetworkClient.AIsNetworkClientService.md#vendor)

### Methods

- [checkRequest](services_connectors_AIsNetworkClient.AIsNetworkClientService.md#checkrequest)
- [getContext](services_connectors_AIsNetworkClient.AIsNetworkClientService.md#getcontext)
- [getContextService](services_connectors_AIsNetworkClient.AIsNetworkClientService.md#getcontextservice)
- [getConversationState](services_connectors_AIsNetworkClient.AIsNetworkClientService.md#getconversationstate)
- [getHttpRequestHeaders](services_connectors_AIsNetworkClient.AIsNetworkClientService.md#gethttprequestheaders)
- [getService](services_connectors_AIsNetworkClient.AIsNetworkClientService.md#getservice)
- [getServiceUrl](services_connectors_AIsNetworkClient.AIsNetworkClientService.md#getserviceurl)
- [process](services_connectors_AIsNetworkClient.AIsNetworkClientService.md#process)
- [processNonStreamingRequest](services_connectors_AIsNetworkClient.AIsNetworkClientService.md#processnonstreamingrequest)
- [processStreamingRequest](services_connectors_AIsNetworkClient.AIsNetworkClientService.md#processstreamingrequest)
- [processUnprotected](services_connectors_AIsNetworkClient.AIsNetworkClientService.md#processunprotected)

## Constructors

### constructor

• **new AIsNetworkClientService**(`serviceProps`, `serviceDefaults`, `auth?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `serviceProps` | [`AIsNetworkClientProps`](../interfaces/services_connectors_AIsNetworkClient.AIsNetworkClientProps.md) |
| `serviceDefaults` | [`AIsNetworkClientDefaults`](../interfaces/services_connectors_AIsNetworkClient.AIsNetworkClientDefaults.md) |
| `auth?` | [`Auth`](../interfaces/api_models_Auth.Auth.md) |

#### Overrides

[BaseAIsService](base_BaseAIsService.BaseAIsService.md).[constructor](base_BaseAIsService.BaseAIsService.md#constructor)

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/services/connectors/AIsNetworkClient.ts:43](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/services/connectors/AIsNetworkClient.ts#L43)

## Properties

### auth

• `Optional` **auth**: [`Auth`](../interfaces/api_models_Auth.Auth.md)

#### Inherited from

[BaseAIsService](base_BaseAIsService.BaseAIsService.md).[auth](base_BaseAIsService.BaseAIsService.md#auth)

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/base/BaseAIsService.ts:37](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/base/BaseAIsService.ts#L37)

___

### engine

• **engine**: `string`

#### Inherited from

[BaseAIsService](base_BaseAIsService.BaseAIsService.md).[engine](base_BaseAIsService.BaseAIsService.md#engine)

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/base/BaseAIsService.ts:43](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/base/BaseAIsService.ts#L43)

___

### engineOpt

• `Optional` **engineOpt**: `string`

#### Inherited from

[BaseAIsService](base_BaseAIsService.BaseAIsService.md).[engineOpt](base_BaseAIsService.BaseAIsService.md#engineopt)

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/base/BaseAIsService.ts:42](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/base/BaseAIsService.ts#L42)

___

### serviceDefaults

• **serviceDefaults**: [`AIsNetworkClientDefaults`](../interfaces/services_connectors_AIsNetworkClient.AIsNetworkClientDefaults.md)

#### Inherited from

[BaseAIsService](base_BaseAIsService.BaseAIsService.md).[serviceDefaults](base_BaseAIsService.BaseAIsService.md#servicedefaults)

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/base/BaseAIsService.ts:36](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/base/BaseAIsService.ts#L36)

___

### serviceProps

• **serviceProps**: [`AIsNetworkClientProps`](../interfaces/services_connectors_AIsNetworkClient.AIsNetworkClientProps.md)

set in constructor

#### Inherited from

[BaseAIsService](base_BaseAIsService.BaseAIsService.md).[serviceProps](base_BaseAIsService.BaseAIsService.md#serviceprops)

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/base/BaseAIsService.ts:35](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/base/BaseAIsService.ts#L35)

___

### task

• **task**: `string`

#### Inherited from

[BaseAIsService](base_BaseAIsService.BaseAIsService.md).[task](base_BaseAIsService.BaseAIsService.md#task)

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/base/BaseAIsService.ts:40](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/base/BaseAIsService.ts#L40)

___

### url

• **url**: `string`

#### Inherited from

[BaseAIsService](base_BaseAIsService.BaseAIsService.md).[url](base_BaseAIsService.BaseAIsService.md#url)

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/base/BaseAIsService.ts:45](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/base/BaseAIsService.ts#L45)

___

### urlOpt

• `Optional` **urlOpt**: `string`

#### Inherited from

[BaseAIsService](base_BaseAIsService.BaseAIsService.md).[urlOpt](base_BaseAIsService.BaseAIsService.md#urlopt)

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/base/BaseAIsService.ts:44](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/base/BaseAIsService.ts#L44)

___

### vendor

• **vendor**: `string`

#### Inherited from

[BaseAIsService](base_BaseAIsService.BaseAIsService.md).[vendor](base_BaseAIsService.BaseAIsService.md#vendor)

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/base/BaseAIsService.ts:41](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/base/BaseAIsService.ts#L41)

## Methods

### checkRequest

▸ **checkRequest**(`request`, `context`): `void`

Check that all required fields are present

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

[aisbreaker-js/packages/aisbreaker-api-js/src/base/BaseAIsService.ts:264](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/base/BaseAIsService.ts#L264)

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

[aisbreaker-js/packages/aisbreaker-api-js/src/base/BaseAIsService.ts:217](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/base/BaseAIsService.ts#L217)

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

[aisbreaker-js/packages/aisbreaker-api-js/src/services/connectors/AIsNetworkClient.ts:181](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/services/connectors/AIsNetworkClient.ts#L181)

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

[aisbreaker-js/packages/aisbreaker-api-js/src/base/BaseAIsService.ts:277](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/base/BaseAIsService.ts#L277)

___

### getHttpRequestHeaders

▸ **getHttpRequestHeaders**(`secret`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `secret` | `undefined` \| `string` |

#### Returns

`any`

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/services/connectors/AIsNetworkClient.ts:187](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/services/connectors/AIsNetworkClient.ts#L187)

___

### getService

▸ **getService**(`actualEngine?`): [`Service`](../interfaces/api_models_Service.Service.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `actualEngine?` | `string` |

#### Returns

[`Service`](../interfaces/api_models_Service.Service.md)

ResponseFinal.usage.service

#### Inherited from

[BaseAIsService](base_BaseAIsService.BaseAIsService.md).[getService](base_BaseAIsService.BaseAIsService.md#getservice)

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/base/BaseAIsService.ts:200](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/base/BaseAIsService.ts#L200)

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
| `serviceDefaults` | [`AIsServiceDefaults`](../interfaces/base_AIsServiceDefaults.AIsServiceDefaults.md) |  |

#### Returns

`undefined` \| `string`

The URL to access the actual AI service.

#### Inherited from

[BaseAIsService](base_BaseAIsService.BaseAIsService.md).[getServiceUrl](base_BaseAIsService.BaseAIsService.md#getserviceurl)

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/base/BaseAIsService.ts:249](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/base/BaseAIsService.ts#L249)

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

[aisbreaker-js/packages/aisbreaker-api-js/src/base/BaseAIsService.ts:70](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/base/BaseAIsService.ts#L70)

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

[aisbreaker-js/packages/aisbreaker-api-js/src/services/connectors/AIsNetworkClient.ts:79](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/services/connectors/AIsNetworkClient.ts#L79)

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

[aisbreaker-js/packages/aisbreaker-api-js/src/services/connectors/AIsNetworkClient.ts:102](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/services/connectors/AIsNetworkClient.ts#L102)

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

[aisbreaker-js/packages/aisbreaker-api-js/src/services/connectors/AIsNetworkClient.ts:57](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/services/connectors/AIsNetworkClient.ts#L57)
