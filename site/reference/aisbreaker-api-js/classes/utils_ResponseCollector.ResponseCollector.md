[aisbreaker-api-js - v0.1.15](../README.md) / [utils/ResponseCollector](../modules/utils_ResponseCollector.md) / ResponseCollector

# Class: ResponseCollector

[utils/ResponseCollector](../modules/utils_ResponseCollector.md).ResponseCollector

Collect all streamed ReponseEvents to create a FinalResponse at the end

## Table of contents

### Constructors

- [constructor](utils_ResponseCollector.ResponseCollector.md#constructor)

### Properties

- [lastObservedEngineId](utils_ResponseCollector.ResponseCollector.md#lastobservedengineid)
- [request](utils_ResponseCollector.ResponseCollector.md#request)

### Methods

- [addResponseEvent](utils_ResponseCollector.ResponseCollector.md#addresponseevent)
- [getMillisSinceStart](utils_ResponseCollector.ResponseCollector.md#getmillissincestart)
- [getResponseFinalInternResponse](utils_ResponseCollector.ResponseCollector.md#getresponsefinalinternresponse)
- [getResponseFinalOutputs](utils_ResponseCollector.ResponseCollector.md#getresponsefinaloutputs)

## Constructors

### constructor

• **new ResponseCollector**(`request`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`Request`](../interfaces/api_models_Request.Request.md) |

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/utils/ResponseCollector.ts:12](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/utils/ResponseCollector.ts#L12)

## Properties

### lastObservedEngineId

• **lastObservedEngineId**: `undefined` \| `string`

service specific engine/model ID

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/utils/ResponseCollector.ts:10](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/utils/ResponseCollector.ts#L10)

___

### request

• **request**: [`Request`](../interfaces/api_models_Request.Request.md)

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/utils/ResponseCollector.ts:12](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/utils/ResponseCollector.ts#L12)

## Methods

### addResponseEvent

▸ **addResponseEvent**(`responseEvent`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `responseEvent` | [`ResponseEvent`](../interfaces/api_models_ResponseEvent.ResponseEvent.md) |

#### Returns

`void`

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/utils/ResponseCollector.ts:15](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/utils/ResponseCollector.ts#L15)

___

### getMillisSinceStart

▸ **getMillisSinceStart**(): `number`

#### Returns

`number`

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/utils/ResponseCollector.ts:141](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/utils/ResponseCollector.ts#L141)

___

### getResponseFinalInternResponse

▸ **getResponseFinalInternResponse**(): `any`

Create a final response from the collected response events

#### Returns

`any`

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/utils/ResponseCollector.ts:129](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/utils/ResponseCollector.ts#L129)

___

### getResponseFinalOutputs

▸ **getResponseFinalOutputs**(): [`Output`](../interfaces/api_models_Output.Output.md)[]

Create a final response from the collected response events

#### Returns

[`Output`](../interfaces/api_models_Output.Output.md)[]

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/utils/ResponseCollector.ts:113](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/utils/ResponseCollector.ts#L113)
