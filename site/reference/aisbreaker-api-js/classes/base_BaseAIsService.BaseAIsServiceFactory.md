[aisbreaker-api-js - v0.0.42](../README.md) / [base/BaseAIsService](../modules/base_BaseAIsService.md) / BaseAIsServiceFactory

# Class: BaseAIsServiceFactory<SERVICE_T\>

[base/BaseAIsService](../modules/base_BaseAIsService.md).BaseAIsServiceFactory

Factory for creating a service API.

## Type parameters

| Name | Type |
| :------ | :------ |
| `SERVICE_T` | extends [`AIsService`](../interfaces/api_AIsService.AIsService.md) |

## Implements

- [`AIsAPIFactory`](../interfaces/api_AIsService.AIsAPIFactory.md)<[`AIsServiceProps`](../interfaces/api_AIsService.AIsServiceProps.md), `SERVICE_T`\>

## Table of contents

### Constructors

- [constructor](base_BaseAIsService.BaseAIsServiceFactory.md#constructor)

### Methods

- [createAIsService](base_BaseAIsService.BaseAIsServiceFactory.md#createaisservice)

## Constructors

### constructor

• **new BaseAIsServiceFactory**<`SERVICE_T`\>()

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SERVICE_T` | extends [`AIsService`](../interfaces/api_AIsService.AIsService.md) |

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/base/BaseAIsService.ts:264](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/base/BaseAIsService.ts#L264)

## Methods

### createAIsService

▸ `Abstract` **createAIsService**(`props`, `auth?`): `SERVICE_T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`AIsServiceProps`](../interfaces/api_AIsService.AIsServiceProps.md) |
| `auth?` | [`Auth`](../interfaces/api_models_Auth.Auth.md) |

#### Returns

`SERVICE_T`

#### Implementation of

[AIsAPIFactory](../interfaces/api_AIsService.AIsAPIFactory.md).[createAIsService](../interfaces/api_AIsService.AIsAPIFactory.md#createaisservice)

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/base/BaseAIsService.ts:267](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/base/BaseAIsService.ts#L267)
