[aisbreaker-api-js - v0.1.15](../README.md) / [services/filters/NormalizeFilter](../modules/services_filters_NormalizeFilter.md) / NormalizeFilter

# Class: NormalizeFilter

[services/filters/NormalizeFilter](../modules/services_filters_NormalizeFilter.md).NormalizeFilter

Every service API must implement this interface.

## Hierarchy

- [`BaseAIsFilter`](base_BaseAIsFilter.BaseAIsFilter.md)<[`FilterProps`](../interfaces/base_BaseAIsFilter.FilterProps.md)\>

  ↳ **`NormalizeFilter`**

## Table of contents

### Constructors

- [constructor](services_filters_NormalizeFilter.NormalizeFilter.md#constructor)

### Properties

- [auth](services_filters_NormalizeFilter.NormalizeFilter.md#auth)
- [serviceProps](services_filters_NormalizeFilter.NormalizeFilter.md#serviceprops)

### Methods

- [getForward2Service](services_filters_NormalizeFilter.NormalizeFilter.md#getforward2service)
- [process](services_filters_NormalizeFilter.NormalizeFilter.md#process)

## Constructors

### constructor

• **new NormalizeFilter**(`serviceProps`, `auth?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `serviceProps` | [`FilterProps`](../interfaces/base_BaseAIsFilter.FilterProps.md) |
| `auth?` | [`Auth`](../interfaces/api_models_Auth.Auth.md) |

#### Overrides

[BaseAIsFilter](base_BaseAIsFilter.BaseAIsFilter.md).[constructor](base_BaseAIsFilter.BaseAIsFilter.md#constructor)

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/services/filters/NormalizeFilter.ts:16](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/services/filters/NormalizeFilter.ts#L16)

## Properties

### auth

• `Optional` **auth**: [`Auth`](../interfaces/api_models_Auth.Auth.md)

#### Inherited from

[BaseAIsFilter](base_BaseAIsFilter.BaseAIsFilter.md).[auth](base_BaseAIsFilter.BaseAIsFilter.md#auth)

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/base/BaseAIsFilter.ts:24](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/base/BaseAIsFilter.ts#L24)

___

### serviceProps

• **serviceProps**: [`FilterProps`](../interfaces/base_BaseAIsFilter.FilterProps.md)

set in constructor

#### Inherited from

[BaseAIsFilter](base_BaseAIsFilter.BaseAIsFilter.md).[serviceProps](base_BaseAIsFilter.BaseAIsFilter.md#serviceprops)

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/base/BaseAIsFilter.ts:23](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/base/BaseAIsFilter.ts#L23)

## Methods

### getForward2Service

▸ **getForward2Service**(): [`AIsService`](../interfaces/api_AIsService.AIsService.md)

#### Returns

[`AIsService`](../interfaces/api_AIsService.AIsService.md)

#### Inherited from

[BaseAIsFilter](base_BaseAIsFilter.BaseAIsFilter.md).[getForward2Service](base_BaseAIsFilter.BaseAIsFilter.md#getforward2service)

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/base/BaseAIsFilter.ts:33](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/base/BaseAIsFilter.ts#L33)

___

### process

▸ **process**(`request`): `Promise`<[`ResponseFinal`](../interfaces/api_models_ResponseFinal.ResponseFinal.md)\>

Let the service do its work.

Alternative names: infer, derive, task, reply, respond, process, ...

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`Request`](../interfaces/api_models_Request.Request.md) |

#### Returns

`Promise`<[`ResponseFinal`](../interfaces/api_models_ResponseFinal.ResponseFinal.md)\>

#### Overrides

[BaseAIsFilter](base_BaseAIsFilter.BaseAIsFilter.md).[process](base_BaseAIsFilter.BaseAIsFilter.md#process)

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/services/filters/NormalizeFilter.ts:20](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/services/filters/NormalizeFilter.ts#L20)
