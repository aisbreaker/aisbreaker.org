[aisbreaker-core-nodejs - v0.0.42](../README.md) / [services/connectors/OpenaiComImage](../modules/services_connectors_OpenaiComImage.md) / OpenaiComImageService

# Class: OpenaiComImageService

[services/connectors/OpenaiComImage](../modules/services_connectors_OpenaiComImage.md).OpenaiComImageService

## Hierarchy

- `BaseAIsService`<`api.AIsServiceProps`\>

  ↳ **`OpenaiComImageService`**

## Table of contents

### Constructors

- [constructor](services_connectors_OpenaiComImage.OpenaiComImageService.md#constructor)

### Properties

- [auth](services_connectors_OpenaiComImage.OpenaiComImageService.md#auth)
- [serviceProps](services_connectors_OpenaiComImage.OpenaiComImageService.md#serviceprops)
- [url](services_connectors_OpenaiComImage.OpenaiComImageService.md#url)

### Methods

- [checkRequest](services_connectors_OpenaiComImage.OpenaiComImageService.md#checkrequest)
- [getContext](services_connectors_OpenaiComImage.OpenaiComImageService.md#getcontext)
- [getContextService](services_connectors_OpenaiComImage.OpenaiComImageService.md#getcontextservice)
- [getConversationState](services_connectors_OpenaiComImage.OpenaiComImageService.md#getconversationstate)
- [getEngine](services_connectors_OpenaiComImage.OpenaiComImageService.md#getengine)
- [getModelFromServiceId](services_connectors_OpenaiComImage.OpenaiComImageService.md#getmodelfromserviceid)
- [process](services_connectors_OpenaiComImage.OpenaiComImageService.md#process)
- [processUnprotected](services_connectors_OpenaiComImage.OpenaiComImageService.md#processunprotected)

## Constructors

### constructor

• **new OpenaiComImageService**(`props`, `auth?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `AIsServiceProps` |
| `auth?` | `Auth` |

#### Overrides

base.BaseAIsService&lt;api.AIsServiceProps\&gt;.constructor

#### Defined in

[aisbreaker-core-nodejs/src/services/connectors/OpenaiComImage.ts:21](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-core-nodejs/src/services/connectors/OpenaiComImage.ts#L21)

## Properties

### auth

• `Optional` **auth**: `Auth`

#### Inherited from

base.BaseAIsService.auth

#### Defined in

aisbreaker-api-js/build/base/BaseAIsService.d.ts:5

___

### serviceProps

• **serviceProps**: `AIsServiceProps`

#### Inherited from

base.BaseAIsService.serviceProps

#### Defined in

aisbreaker-api-js/build/base/BaseAIsService.d.ts:4

___

### url

• **url**: `string`

#### Defined in

[aisbreaker-core-nodejs/src/services/connectors/OpenaiComImage.ts:19](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-core-nodejs/src/services/connectors/OpenaiComImage.ts#L19)

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

▸ **getEngine**(): `Engine`

#### Returns

`Engine`

#### Defined in

[aisbreaker-core-nodejs/src/services/connectors/OpenaiComImage.ts:33](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-core-nodejs/src/services/connectors/OpenaiComImage.ts#L33)

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

[aisbreaker-core-nodejs/src/services/connectors/OpenaiComImage.ts:50](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-core-nodejs/src/services/connectors/OpenaiComImage.ts#L50)
