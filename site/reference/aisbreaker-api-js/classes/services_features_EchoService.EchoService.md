[aisbreaker-api-js - v0.0.42](../README.md) / [services/features/EchoService](../modules/services_features_EchoService.md) / EchoService

# Class: EchoService

[services/features/EchoService](../modules/services_features_EchoService.md).EchoService

Every service API must implement this interface.

## Hierarchy

- [`BaseAIsService`](base_BaseAIsService.BaseAIsService.md)<[`AIsServiceProps`](../interfaces/api_AIsService.AIsServiceProps.md)\>

  ↳ **`EchoService`**

## Table of contents

### Constructors

- [constructor](services_features_EchoService.EchoService.md#constructor)

### Properties

- [auth](services_features_EchoService.EchoService.md#auth)
- [serviceProps](services_features_EchoService.EchoService.md#serviceprops)

### Methods

- [checkRequest](services_features_EchoService.EchoService.md#checkrequest)
- [getContext](services_features_EchoService.EchoService.md#getcontext)
- [getContextService](services_features_EchoService.EchoService.md#getcontextservice)
- [getConversationState](services_features_EchoService.EchoService.md#getconversationstate)
- [getModelFromServiceId](services_features_EchoService.EchoService.md#getmodelfromserviceid)
- [process](services_features_EchoService.EchoService.md#process)
- [processUnprotected](services_features_EchoService.EchoService.md#processunprotected)

## Constructors

### constructor

• **new EchoService**(`serviceProps`, `auth?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `serviceProps` | [`AIsServiceProps`](../interfaces/api_AIsService.AIsServiceProps.md) |
| `auth?` | [`Auth`](../interfaces/api_models_Auth.Auth.md) |

#### Overrides

[BaseAIsService](base_BaseAIsService.BaseAIsService.md).[constructor](base_BaseAIsService.BaseAIsService.md#constructor)

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/services/features/EchoService.ts:23](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/services/features/EchoService.ts#L23)

## Properties

### auth

• `Optional` **auth**: [`Auth`](../interfaces/api_models_Auth.Auth.md)

#### Inherited from

[BaseAIsService](base_BaseAIsService.BaseAIsService.md).[auth](base_BaseAIsService.BaseAIsService.md#auth)

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/base/BaseAIsService.ts:28](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/base/BaseAIsService.ts#L28)

___

### serviceProps

• **serviceProps**: [`AIsServiceProps`](../interfaces/api_AIsService.AIsServiceProps.md)

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

#### Inherited from

[BaseAIsService](base_BaseAIsService.BaseAIsService.md).[getContextService](base_BaseAIsService.BaseAIsService.md#getcontextservice)

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/base/BaseAIsService.ts:178](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/base/BaseAIsService.ts#L178)

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

[aisbreaker-js/packages/aisbreaker-api-js/src/services/features/EchoService.ts:31](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/services/features/EchoService.ts#L31)
