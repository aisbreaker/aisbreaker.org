[aisbreaker-api-js - v0.1.15](../README.md) / [services/features/EchoService](../modules/services_features_EchoService.md) / EchoService

# Class: EchoService

[services/features/EchoService](../modules/services_features_EchoService.md).EchoService

Every service API must implement this interface.

## Hierarchy

- [`BaseAIsService`](base_BaseAIsService.BaseAIsService.md)<[`AIsServiceProps`](../interfaces/api_AIsService.AIsServiceProps.md), [`AIsServiceDefaults`](../interfaces/base_AIsServiceDefaults.AIsServiceDefaults.md)\>

  ↳ **`EchoService`**

## Table of contents

### Constructors

- [constructor](services_features_EchoService.EchoService.md#constructor)

### Properties

- [auth](services_features_EchoService.EchoService.md#auth)
- [engine](services_features_EchoService.EchoService.md#engine)
- [engineOpt](services_features_EchoService.EchoService.md#engineopt)
- [serviceDefaults](services_features_EchoService.EchoService.md#servicedefaults)
- [serviceProps](services_features_EchoService.EchoService.md#serviceprops)
- [task](services_features_EchoService.EchoService.md#task)
- [url](services_features_EchoService.EchoService.md#url)
- [urlOpt](services_features_EchoService.EchoService.md#urlopt)
- [vendor](services_features_EchoService.EchoService.md#vendor)

### Methods

- [checkRequest](services_features_EchoService.EchoService.md#checkrequest)
- [getContext](services_features_EchoService.EchoService.md#getcontext)
- [getContextService](services_features_EchoService.EchoService.md#getcontextservice)
- [getConversationState](services_features_EchoService.EchoService.md#getconversationstate)
- [getService](services_features_EchoService.EchoService.md#getservice)
- [getServiceUrl](services_features_EchoService.EchoService.md#getserviceurl)
- [process](services_features_EchoService.EchoService.md#process)
- [processUnprotected](services_features_EchoService.EchoService.md#processunprotected)

## Constructors

### constructor

• **new EchoService**(`serviceProps`, `serviceDefaults`, `auth?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `serviceProps` | [`AIsServiceProps`](../interfaces/api_AIsService.AIsServiceProps.md) |
| `serviceDefaults` | [`AIsServiceDefaults`](../interfaces/base_AIsServiceDefaults.AIsServiceDefaults.md) |
| `auth?` | [`Auth`](../interfaces/api_models_Auth.Auth.md) |

#### Inherited from

[BaseAIsService](base_BaseAIsService.BaseAIsService.md).[constructor](base_BaseAIsService.BaseAIsService.md#constructor)

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/base/BaseAIsService.ts:47](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/base/BaseAIsService.ts#L47)

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

• **serviceDefaults**: [`AIsServiceDefaults`](../interfaces/base_AIsServiceDefaults.AIsServiceDefaults.md)

#### Inherited from

[BaseAIsService](base_BaseAIsService.BaseAIsService.md).[serviceDefaults](base_BaseAIsService.BaseAIsService.md#servicedefaults)

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/base/BaseAIsService.ts:36](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/base/BaseAIsService.ts#L36)

___

### serviceProps

• **serviceProps**: [`AIsServiceProps`](../interfaces/api_AIsService.AIsServiceProps.md)

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

#### Inherited from

[BaseAIsService](base_BaseAIsService.BaseAIsService.md).[getContextService](base_BaseAIsService.BaseAIsService.md#getcontextservice)

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/base/BaseAIsService.ts:230](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/base/BaseAIsService.ts#L230)

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

### processUnprotected

▸ **processUnprotected**(`request`): `Promise`<[`ResponseFinal`](../interfaces/api_models_ResponseFinal.ResponseFinal.md)\>

Do the work of process()
without the need to care about all error handling.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`Request`](../interfaces/api_models_Request.Request.md) |

#### Returns

`Promise`<[`ResponseFinal`](../interfaces/api_models_ResponseFinal.ResponseFinal.md)\>

#### Overrides

[BaseAIsService](base_BaseAIsService.BaseAIsService.md).[processUnprotected](base_BaseAIsService.BaseAIsService.md#processunprotected)

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/services/features/EchoService.ts:29](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/services/features/EchoService.ts#L29)
