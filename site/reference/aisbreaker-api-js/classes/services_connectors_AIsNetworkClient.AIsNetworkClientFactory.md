[aisbreaker-api-js - v0.0.42](../README.md) / [services/connectors/AIsNetworkClient](../modules/services_connectors_AIsNetworkClient.md) / AIsNetworkClientFactory

# Class: AIsNetworkClientFactory

[services/connectors/AIsNetworkClient](../modules/services_connectors_AIsNetworkClient.md).AIsNetworkClientFactory

Factory for creating a service API.

## Implements

- [`AIsAPIFactory`](../interfaces/api_AIsService.AIsAPIFactory.md)<[`AIsNetworkClientProps`](../interfaces/services_connectors_AIsNetworkClient.AIsNetworkClientProps.md), [`AIsNetworkClientService`](services_connectors_AIsNetworkClient.AIsNetworkClientService.md)\>

## Table of contents

### Constructors

- [constructor](services_connectors_AIsNetworkClient.AIsNetworkClientFactory.md#constructor)

### Methods

- [createAIsService](services_connectors_AIsNetworkClient.AIsNetworkClientFactory.md#createaisservice)

## Constructors

### constructor

• **new AIsNetworkClientFactory**()

## Methods

### createAIsService

▸ **createAIsService**(`props`, `auth?`): [`AIsNetworkClientService`](services_connectors_AIsNetworkClient.AIsNetworkClientService.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`AIsNetworkClientProps`](../interfaces/services_connectors_AIsNetworkClient.AIsNetworkClientProps.md) |
| `auth?` | [`Auth`](../interfaces/api_models_Auth.Auth.md) |

#### Returns

[`AIsNetworkClientService`](services_connectors_AIsNetworkClient.AIsNetworkClientService.md)

#### Implementation of

[AIsAPIFactory](../interfaces/api_AIsService.AIsAPIFactory.md).[createAIsService](../interfaces/api_AIsService.AIsAPIFactory.md#createaisservice)

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/services/connectors/AIsNetworkClient.ts:197](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/services/connectors/AIsNetworkClient.ts#L197)
