[aisbreaker-api-js - v0.0.42](../README.md) / [services/filters/LoggingFilter](../modules/services_filters_LoggingFilter.md) / LoggingFilter

# Class: LoggingFilter

[services/filters/LoggingFilter](../modules/services_filters_LoggingFilter.md).LoggingFilter

Every service API must implement this interface.

## Hierarchy

- [`BaseAIsFilter`](base_BaseAIsFilter.BaseAIsFilter.md)<[`LoggingFilterProps`](../interfaces/services_filters_LoggingFilter.LoggingFilterProps.md)\>

  ↳ **`LoggingFilter`**

## Table of contents

### Constructors

- [constructor](services_filters_LoggingFilter.LoggingFilter.md#constructor)

### Properties

- [auth](services_filters_LoggingFilter.LoggingFilter.md#auth)
- [serviceProps](services_filters_LoggingFilter.LoggingFilter.md#serviceprops)

### Methods

- [getForward2Service](services_filters_LoggingFilter.LoggingFilter.md#getforward2service)
- [process](services_filters_LoggingFilter.LoggingFilter.md#process)

## Constructors

### constructor

• **new LoggingFilter**(`serviceProps`, `auth?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `serviceProps` | [`LoggingFilterProps`](../interfaces/services_filters_LoggingFilter.LoggingFilterProps.md) |
| `auth?` | [`Auth`](../interfaces/api_models_Auth.Auth.md) |

#### Overrides

[BaseAIsFilter](base_BaseAIsFilter.BaseAIsFilter.md).[constructor](base_BaseAIsFilter.BaseAIsFilter.md#constructor)

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/services/filters/LoggingFilter.ts:28](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/services/filters/LoggingFilter.ts#L28)

## Properties

### auth

• `Optional` **auth**: [`Auth`](../interfaces/api_models_Auth.Auth.md)

#### Inherited from

[BaseAIsFilter](base_BaseAIsFilter.BaseAIsFilter.md).[auth](base_BaseAIsFilter.BaseAIsFilter.md#auth)

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/base/BaseAIsFilter.ts:24](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/base/BaseAIsFilter.ts#L24)

___

### serviceProps

• **serviceProps**: [`LoggingFilterProps`](../interfaces/services_filters_LoggingFilter.LoggingFilterProps.md)

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

[aisbreaker-js/packages/aisbreaker-api-js/src/services/filters/LoggingFilter.ts:32](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/services/filters/LoggingFilter.ts#L32)
