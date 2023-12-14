[aisbreaker-api-js - v0.1.15](../README.md) / [services/features/EchoService](../modules/services_features_EchoService.md) / EchoFactory

# Class: EchoFactory

[services/features/EchoService](../modules/services_features_EchoService.md).EchoFactory

Factory for creating a service API.

## Implements

- [`AIsAPIFactory`](../interfaces/api_AIsService.AIsAPIFactory.md)<[`AIsServiceProps`](../interfaces/api_AIsService.AIsServiceProps.md), [`EchoService`](services_features_EchoService.EchoService.md)\>

## Table of contents

### Constructors

- [constructor](services_features_EchoService.EchoFactory.md#constructor)

### Methods

- [createAIsService](services_features_EchoService.EchoFactory.md#createaisservice)

## Constructors

### constructor

• **new EchoFactory**()

## Methods

### createAIsService

▸ **createAIsService**(`props`, `auth?`): [`EchoService`](services_features_EchoService.EchoService.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`AIsServiceProps`](../interfaces/api_AIsService.AIsServiceProps.md) |
| `auth?` | [`Auth`](../interfaces/api_models_Auth.Auth.md) |

#### Returns

[`EchoService`](services_features_EchoService.EchoService.md)

#### Implementation of

[AIsAPIFactory](../interfaces/api_AIsService.AIsAPIFactory.md).[createAIsService](../interfaces/api_AIsService.AIsAPIFactory.md#createaisservice)

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/services/features/EchoService.ts:67](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/services/features/EchoService.ts#L67)
