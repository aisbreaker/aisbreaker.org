[aisbreaker-api-js - v0.1.15](../README.md) / [base/BaseAIsService](../modules/base_BaseAIsService.md) / BaseAIsService

# Class: BaseAIsService<PROPS_T, DEFAULTS_T\>

[base/BaseAIsService](../modules/base_BaseAIsService.md).BaseAIsService

Every service API must implement this interface.

## Type parameters

| Name | Type |
| :------ | :------ |
| `PROPS_T` | extends [`AIsServiceProps`](../interfaces/api_AIsService.AIsServiceProps.md) |
| `DEFAULTS_T` | extends [`AIsServiceDefaults`](../interfaces/base_AIsServiceDefaults.AIsServiceDefaults.md) |

## Hierarchy

- **`BaseAIsService`**

  ↳ [`AIsNetworkClientService`](services_connectors_AIsNetworkClient.AIsNetworkClientService.md)

  ↳ [`DummyAssistantService`](services_connectors_DummyAssistant.DummyAssistantService.md)

  ↳ [`EchoService`](services_features_EchoService.EchoService.md)

## Implements

- [`AIsService`](../interfaces/api_AIsService.AIsService.md)

## Table of contents

### Constructors

- [constructor](base_BaseAIsService.BaseAIsService.md#constructor)

### Properties

- [auth](base_BaseAIsService.BaseAIsService.md#auth)
- [engine](base_BaseAIsService.BaseAIsService.md#engine)
- [engineOpt](base_BaseAIsService.BaseAIsService.md#engineopt)
- [serviceDefaults](base_BaseAIsService.BaseAIsService.md#servicedefaults)
- [serviceProps](base_BaseAIsService.BaseAIsService.md#serviceprops)
- [task](base_BaseAIsService.BaseAIsService.md#task)
- [url](base_BaseAIsService.BaseAIsService.md#url)
- [urlOpt](base_BaseAIsService.BaseAIsService.md#urlopt)
- [vendor](base_BaseAIsService.BaseAIsService.md#vendor)

### Methods

- [checkRequest](base_BaseAIsService.BaseAIsService.md#checkrequest)
- [getContext](base_BaseAIsService.BaseAIsService.md#getcontext)
- [getContextService](base_BaseAIsService.BaseAIsService.md#getcontextservice)
- [getConversationState](base_BaseAIsService.BaseAIsService.md#getconversationstate)
- [getService](base_BaseAIsService.BaseAIsService.md#getservice)
- [getServiceUrl](base_BaseAIsService.BaseAIsService.md#getserviceurl)
- [process](base_BaseAIsService.BaseAIsService.md#process)
- [processUnprotected](base_BaseAIsService.BaseAIsService.md#processunprotected)

## Constructors

### constructor

• **new BaseAIsService**<`PROPS_T`, `DEFAULTS_T`\>(`serviceProps`, `serviceDefaults`, `auth?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `PROPS_T` | extends [`AIsServiceProps`](../interfaces/api_AIsService.AIsServiceProps.md) |
| `DEFAULTS_T` | extends [`AIsServiceDefaults`](../interfaces/base_AIsServiceDefaults.AIsServiceDefaults.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `serviceProps` | `PROPS_T` |
| `serviceDefaults` | `DEFAULTS_T` |
| `auth?` | [`Auth`](../interfaces/api_models_Auth.Auth.md) |

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/base/BaseAIsService.ts:47](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/base/BaseAIsService.ts#L47)

## Properties

### auth

• `Optional` **auth**: [`Auth`](../interfaces/api_models_Auth.Auth.md)

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/base/BaseAIsService.ts:37](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/base/BaseAIsService.ts#L37)

___

### engine

• **engine**: `string`

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/base/BaseAIsService.ts:43](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/base/BaseAIsService.ts#L43)

___

### engineOpt

• `Optional` **engineOpt**: `string`

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/base/BaseAIsService.ts:42](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/base/BaseAIsService.ts#L42)

___

### serviceDefaults

• **serviceDefaults**: `DEFAULTS_T`

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/base/BaseAIsService.ts:36](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/base/BaseAIsService.ts#L36)

___

### serviceProps

• **serviceProps**: `PROPS_T`

set in constructor

#### Implementation of

[AIsService](../interfaces/api_AIsService.AIsService.md).[serviceProps](../interfaces/api_AIsService.AIsService.md#serviceprops)

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/base/BaseAIsService.ts:35](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/base/BaseAIsService.ts#L35)

___

### task

• **task**: `string`

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/base/BaseAIsService.ts:40](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/base/BaseAIsService.ts#L40)

___

### url

• **url**: `string`

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/base/BaseAIsService.ts:45](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/base/BaseAIsService.ts#L45)

___

### urlOpt

• `Optional` **urlOpt**: `string`

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/base/BaseAIsService.ts:44](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/base/BaseAIsService.ts#L44)

___

### vendor

• **vendor**: `string`

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

#### Implementation of

[AIsService](../interfaces/api_AIsService.AIsService.md).[process](../interfaces/api_AIsService.AIsService.md#process)

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/base/BaseAIsService.ts:70](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/base/BaseAIsService.ts#L70)

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

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/base/BaseAIsService.ts:188](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/base/BaseAIsService.ts#L188)
