[aisbreaker-api-js - v0.0.42](../README.md) / [services/connectors/DummyAssistant](../modules/services_connectors_DummyAssistant.md) / DummyAssistantService

# Class: DummyAssistantService

[services/connectors/DummyAssistant](../modules/services_connectors_DummyAssistant.md).DummyAssistantService

Every service API must implement this interface.

## Hierarchy

- [`BaseAIsService`](base_BaseAIsService.BaseAIsService.md)<[`DummyAssistantServiceProps`](../interfaces/services_connectors_DummyAssistant.DummyAssistantServiceProps.md)\>

  ↳ **`DummyAssistantService`**

## Table of contents

### Constructors

- [constructor](services_connectors_DummyAssistant.DummyAssistantService.md#constructor)

### Properties

- [auth](services_connectors_DummyAssistant.DummyAssistantService.md#auth)
- [greeting](services_connectors_DummyAssistant.DummyAssistantService.md#greeting)
- [serviceProps](services_connectors_DummyAssistant.DummyAssistantService.md#serviceprops)

### Methods

- [checkRequest](services_connectors_DummyAssistant.DummyAssistantService.md#checkrequest)
- [getContext](services_connectors_DummyAssistant.DummyAssistantService.md#getcontext)
- [getContextService](services_connectors_DummyAssistant.DummyAssistantService.md#getcontextservice)
- [getConversationState](services_connectors_DummyAssistant.DummyAssistantService.md#getconversationstate)
- [getModelFromServiceId](services_connectors_DummyAssistant.DummyAssistantService.md#getmodelfromserviceid)
- [process](services_connectors_DummyAssistant.DummyAssistantService.md#process)
- [processUnprotected](services_connectors_DummyAssistant.DummyAssistantService.md#processunprotected)
- [splitTextIntoParts](services_connectors_DummyAssistant.DummyAssistantService.md#splittextintoparts)

## Constructors

### constructor

• **new DummyAssistantService**(`serviceProps`, `auth?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `serviceProps` | [`DummyAssistantServiceProps`](../interfaces/services_connectors_DummyAssistant.DummyAssistantServiceProps.md) |
| `auth?` | [`Auth`](../interfaces/api_models_Auth.Auth.md) |

#### Overrides

[BaseAIsService](base_BaseAIsService.BaseAIsService.md).[constructor](base_BaseAIsService.BaseAIsService.md#constructor)

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/services/connectors/DummyAssistant.ts:30](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/services/connectors/DummyAssistant.ts#L30)

## Properties

### auth

• `Optional` **auth**: [`Auth`](../interfaces/api_models_Auth.Auth.md)

#### Inherited from

[BaseAIsService](base_BaseAIsService.BaseAIsService.md).[auth](base_BaseAIsService.BaseAIsService.md#auth)

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/base/BaseAIsService.ts:28](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/base/BaseAIsService.ts#L28)

___

### greeting

• **greeting**: `string`

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/services/connectors/DummyAssistant.ts:28](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/services/connectors/DummyAssistant.ts#L28)

___

### serviceProps

• **serviceProps**: [`DummyAssistantServiceProps`](../interfaces/services_connectors_DummyAssistant.DummyAssistantServiceProps.md)

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

▸ **processUnprotected**(`request`, `context`): `Promise`<[`ResponseFinal`](../interfaces/api_models_ResponseFinal.ResponseFinal.md)\>

Do the work of process()
without the need to care about all error handling.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`Request`](../interfaces/api_models_Request.Request.md) |
| `context` | `string` |

#### Returns

`Promise`<[`ResponseFinal`](../interfaces/api_models_ResponseFinal.ResponseFinal.md)\>

#### Overrides

[BaseAIsService](base_BaseAIsService.BaseAIsService.md).[processUnprotected](base_BaseAIsService.BaseAIsService.md#processunprotected)

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/services/connectors/DummyAssistant.ts:39](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/services/connectors/DummyAssistant.ts#L39)

___

### splitTextIntoParts

▸ **splitTextIntoParts**(`text`): `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |

#### Returns

`string`[]

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/services/connectors/DummyAssistant.ts:109](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/services/connectors/DummyAssistant.ts#L109)
