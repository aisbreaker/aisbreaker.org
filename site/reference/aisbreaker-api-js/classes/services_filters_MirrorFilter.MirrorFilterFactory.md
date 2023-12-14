[aisbreaker-api-js - v0.1.15](../README.md) / [services/filters/MirrorFilter](../modules/services_filters_MirrorFilter.md) / MirrorFilterFactory

# Class: MirrorFilterFactory

[services/filters/MirrorFilter](../modules/services_filters_MirrorFilter.md).MirrorFilterFactory

Factory for creating a service API.

## Implements

- [`AIsAPIFactory`](../interfaces/api_AIsService.AIsAPIFactory.md)<[`FilterProps`](../interfaces/base_BaseAIsFilter.FilterProps.md), [`MirrorFilter`](services_filters_MirrorFilter.MirrorFilter.md)\>

## Table of contents

### Constructors

- [constructor](services_filters_MirrorFilter.MirrorFilterFactory.md#constructor)

### Methods

- [createAIsService](services_filters_MirrorFilter.MirrorFilterFactory.md#createaisservice)

## Constructors

### constructor

• **new MirrorFilterFactory**()

## Methods

### createAIsService

▸ **createAIsService**(`props`, `auth?`): [`MirrorFilter`](services_filters_MirrorFilter.MirrorFilter.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`FilterProps`](../interfaces/base_BaseAIsFilter.FilterProps.md) |
| `auth?` | [`Auth`](../interfaces/api_models_Auth.Auth.md) |

#### Returns

[`MirrorFilter`](services_filters_MirrorFilter.MirrorFilter.md)

#### Implementation of

[AIsAPIFactory](../interfaces/api_AIsService.AIsAPIFactory.md).[createAIsService](../interfaces/api_AIsService.AIsAPIFactory.md#createaisservice)

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/services/filters/MirrorFilter.ts:126](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/services/filters/MirrorFilter.ts#L126)
