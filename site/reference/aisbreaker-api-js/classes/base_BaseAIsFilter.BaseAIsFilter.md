[aisbreaker-api-js - v0.1.15](../README.md) / [base/BaseAIsFilter](../modules/base_BaseAIsFilter.md) / BaseAIsFilter

# Class: BaseAIsFilter<PROPS_T\>

[base/BaseAIsFilter](../modules/base_BaseAIsFilter.md).BaseAIsFilter

Every service API must implement this interface.

## Type parameters

| Name | Type |
| :------ | :------ |
| `PROPS_T` | extends [`FilterProps`](../interfaces/base_BaseAIsFilter.FilterProps.md) |

## Hierarchy

- **`BaseAIsFilter`**

  ↳ [`LoggingFilter`](services_filters_LoggingFilter.LoggingFilter.md)

  ↳ [`MirrorFilter`](services_filters_MirrorFilter.MirrorFilter.md)

  ↳ [`NopFilter`](services_filters_NopFilter.NopFilter.md)

  ↳ [`NormalizeFilter`](services_filters_NormalizeFilter.NormalizeFilter.md)

## Implements

- [`AIsService`](../interfaces/api_AIsService.AIsService.md)

## Table of contents

### Constructors

- [constructor](base_BaseAIsFilter.BaseAIsFilter.md#constructor)

### Properties

- [auth](base_BaseAIsFilter.BaseAIsFilter.md#auth)
- [serviceProps](base_BaseAIsFilter.BaseAIsFilter.md#serviceprops)

### Methods

- [getForward2Service](base_BaseAIsFilter.BaseAIsFilter.md#getforward2service)
- [process](base_BaseAIsFilter.BaseAIsFilter.md#process)

## Constructors

### constructor

• **new BaseAIsFilter**<`PROPS_T`\>(`serviceProps`, `auth?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `PROPS_T` | extends [`FilterProps`](../interfaces/base_BaseAIsFilter.FilterProps.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `serviceProps` | `PROPS_T` |
| `auth?` | [`Auth`](../interfaces/api_models_Auth.Auth.md) |

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/base/BaseAIsFilter.ts:26](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/base/BaseAIsFilter.ts#L26)

## Properties

### auth

• `Optional` **auth**: [`Auth`](../interfaces/api_models_Auth.Auth.md)

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/base/BaseAIsFilter.ts:24](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/base/BaseAIsFilter.ts#L24)

___

### serviceProps

• **serviceProps**: `PROPS_T`

set in constructor

#### Implementation of

[AIsService](../interfaces/api_AIsService.AIsService.md).[serviceProps](../interfaces/api_AIsService.AIsService.md#serviceprops)

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/base/BaseAIsFilter.ts:23](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/base/BaseAIsFilter.ts#L23)

## Methods

### getForward2Service

▸ **getForward2Service**(): [`AIsService`](../interfaces/api_AIsService.AIsService.md)

#### Returns

[`AIsService`](../interfaces/api_AIsService.AIsService.md)

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/base/BaseAIsFilter.ts:33](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/base/BaseAIsFilter.ts#L33)

___

### process

▸ `Abstract` **process**(`request`): `Promise`<[`ResponseFinal`](../interfaces/api_models_ResponseFinal.ResponseFinal.md)\>

Let the service do its work.

Alternative names: infer, derive, task, reply, respond, process, ...

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`Request`](../interfaces/api_models_Request.Request.md) |

#### Returns

`Promise`<[`ResponseFinal`](../interfaces/api_models_ResponseFinal.ResponseFinal.md)\>

#### Implementation of

[AIsService](../interfaces/api_AIsService.AIsService.md).[process](../interfaces/api_AIsService.AIsService.md#process)

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/base/BaseAIsFilter.ts:31](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/base/BaseAIsFilter.ts#L31)
