[aisbreaker-api-js - v0.1.15](../README.md) / [services/filters/NopFilter](../modules/services_filters_NopFilter.md) / NopFilterFactory

# Class: NopFilterFactory

[services/filters/NopFilter](../modules/services_filters_NopFilter.md).NopFilterFactory

Factory for creating a service API.

## Implements

- [`AIsAPIFactory`](../interfaces/api_AIsService.AIsAPIFactory.md)<[`FilterProps`](../interfaces/base_BaseAIsFilter.FilterProps.md), [`NopFilter`](services_filters_NopFilter.NopFilter.md)\>

## Table of contents

### Constructors

- [constructor](services_filters_NopFilter.NopFilterFactory.md#constructor)

### Methods

- [createAIsService](services_filters_NopFilter.NopFilterFactory.md#createaisservice)

## Constructors

### constructor

• **new NopFilterFactory**()

## Methods

### createAIsService

▸ **createAIsService**(`props`, `auth?`): [`NopFilter`](services_filters_NopFilter.NopFilter.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`FilterProps`](../interfaces/base_BaseAIsFilter.FilterProps.md) |
| `auth?` | [`Auth`](../interfaces/api_models_Auth.Auth.md) |

#### Returns

[`NopFilter`](services_filters_NopFilter.NopFilter.md)

#### Implementation of

[AIsAPIFactory](../interfaces/api_AIsService.AIsAPIFactory.md).[createAIsService](../interfaces/api_AIsService.AIsAPIFactory.md#createaisservice)

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/services/filters/NopFilter.ts:28](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/services/filters/NopFilter.ts#L28)
