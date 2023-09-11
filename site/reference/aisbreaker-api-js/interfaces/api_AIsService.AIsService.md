[aisbreaker-api-js - v0.0.42](../README.md) / [api/AIsService](../modules/api_AIsService.md) / AIsService

# Interface: AIsService

[api/AIsService](../modules/api_AIsService.md).AIsService

Every service API must implement this interface.

## Implemented by

- [`BaseAIsFilter`](../classes/base_BaseAIsFilter.BaseAIsFilter.md)
- [`BaseAIsService`](../classes/base_BaseAIsService.BaseAIsService.md)

## Table of contents

### Properties

- [serviceProps](api_AIsService.AIsService.md#serviceprops)

### Methods

- [process](api_AIsService.AIsService.md#process)

## Properties

### serviceProps

• **serviceProps**: [`AIsServiceProps`](api_AIsService.AIsServiceProps.md)

set in constructor

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/api/AIsService.ts:9](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/api/AIsService.ts#L9)

## Methods

### process

▸ **process**(`request`): `Promise`<[`ResponseFinal`](api_models_ResponseFinal.ResponseFinal.md)\>

Let the service do its work.

Alternative names: infer, derive, task, reply, respond, process, ...

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`Request`](api_models_Request.Request.md) |

#### Returns

`Promise`<[`ResponseFinal`](api_models_ResponseFinal.ResponseFinal.md)\>

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/api/AIsService.ts:19](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/api/AIsService.ts#L19)
