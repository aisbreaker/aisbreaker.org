[aisbreaker-api-js - v0.1.15](../README.md) / [services/filters/LoggingFilter](../modules/services_filters_LoggingFilter.md) / LoggingFilterFactory

# Class: LoggingFilterFactory

[services/filters/LoggingFilter](../modules/services_filters_LoggingFilter.md).LoggingFilterFactory

Factory for creating a service API.

## Implements

- [`AIsAPIFactory`](../interfaces/api_AIsService.AIsAPIFactory.md)<[`LoggingFilterProps`](../interfaces/services_filters_LoggingFilter.LoggingFilterProps.md), [`LoggingFilter`](services_filters_LoggingFilter.LoggingFilter.md)\>

## Table of contents

### Constructors

- [constructor](services_filters_LoggingFilter.LoggingFilterFactory.md#constructor)

### Methods

- [createAIsService](services_filters_LoggingFilter.LoggingFilterFactory.md#createaisservice)

## Constructors

### constructor

• **new LoggingFilterFactory**()

## Methods

### createAIsService

▸ **createAIsService**(`props`, `auth?`): [`LoggingFilter`](services_filters_LoggingFilter.LoggingFilter.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`LoggingFilterProps`](../interfaces/services_filters_LoggingFilter.LoggingFilterProps.md) |
| `auth?` | [`Auth`](../interfaces/api_models_Auth.Auth.md) |

#### Returns

[`LoggingFilter`](services_filters_LoggingFilter.LoggingFilter.md)

#### Implementation of

[AIsAPIFactory](../interfaces/api_AIsService.AIsAPIFactory.md).[createAIsService](../interfaces/api_AIsService.AIsAPIFactory.md#createaisservice)

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/services/filters/LoggingFilter.ts:50](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/services/filters/LoggingFilter.ts#L50)
