[aisbreaker-api-js - v0.0.42](../README.md) / [base/BaseAIsService](../modules/base_BaseAIsService.md) / BaseAIsService

# Class: BaseAIsService<PROPS_T\>

[base/BaseAIsService](../modules/base_BaseAIsService.md).BaseAIsService

Every service API must implement this interface.

## Type parameters

| Name | Type |
| :------ | :------ |
| `PROPS_T` | extends [`AIsServiceProps`](../interfaces/api_AIsService.AIsServiceProps.md) |

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
- [serviceProps](base_BaseAIsService.BaseAIsService.md#serviceprops)

### Methods

- [checkRequest](base_BaseAIsService.BaseAIsService.md#checkrequest)
- [getContext](base_BaseAIsService.BaseAIsService.md#getcontext)
- [getContextService](base_BaseAIsService.BaseAIsService.md#getcontextservice)
- [getConversationState](base_BaseAIsService.BaseAIsService.md#getconversationstate)
- [getModelFromServiceId](base_BaseAIsService.BaseAIsService.md#getmodelfromserviceid)
- [process](base_BaseAIsService.BaseAIsService.md#process)
- [processUnprotected](base_BaseAIsService.BaseAIsService.md#processunprotected)

## Constructors

### constructor

• **new BaseAIsService**<`PROPS_T`\>(`serviceProps`, `auth?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `PROPS_T` | extends [`AIsServiceProps`](../interfaces/api_AIsService.AIsServiceProps.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `serviceProps` | `PROPS_T` |
| `auth?` | [`Auth`](../interfaces/api_models_Auth.Auth.md) |

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/base/BaseAIsService.ts:30](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/base/BaseAIsService.ts#L30)

## Properties

### auth

• `Optional` **auth**: [`Auth`](../interfaces/api_models_Auth.Auth.md)

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/base/BaseAIsService.ts:28](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/base/BaseAIsService.ts#L28)

___

### serviceProps

• **serviceProps**: `PROPS_T`

set in constructor

#### Implementation of

[AIsService](../interfaces/api_AIsService.AIsService.md).[serviceProps](../interfaces/api_AIsService.AIsService.md#serviceprops)

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

#### Implementation of

[AIsService](../interfaces/api_AIsService.AIsService.md).[process](../interfaces/api_AIsService.AIsService.md#process)

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/base/BaseAIsService.ts:38](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/base/BaseAIsService.ts#L38)

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

[aisbreaker-js/packages/aisbreaker-api-js/src/base/BaseAIsService.ts:156](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/base/BaseAIsService.ts#L156)
