[aisbreaker-api-js - v0.1.15](../README.md) / [api/AIsService](../modules/api_AIsService.md) / AIsAPIFactory

# Interface: AIsAPIFactory<PROPS_T, SERVICE_T\>

[api/AIsService](../modules/api_AIsService.md).AIsAPIFactory

Factory for creating a service API.

## Type parameters

| Name | Type |
| :------ | :------ |
| `PROPS_T` | extends [`AIsServiceProps`](api_AIsService.AIsServiceProps.md) |
| `SERVICE_T` | extends [`AIsService`](api_AIsService.AIsService.md) |

## Implemented by

- [`AIsNetworkClientFactory`](../classes/services_connectors_AIsNetworkClient.AIsNetworkClientFactory.md)
- [`BaseAIsServiceFactory`](../classes/base_BaseAIsService.BaseAIsServiceFactory.md)
- [`DummyAssistantFactory`](../classes/services_connectors_DummyAssistant.DummyAssistantFactory.md)
- [`EchoFactory`](../classes/services_features_EchoService.EchoFactory.md)
- [`LoggingFilterFactory`](../classes/services_filters_LoggingFilter.LoggingFilterFactory.md)
- [`MirrorFilterFactory`](../classes/services_filters_MirrorFilter.MirrorFilterFactory.md)
- [`NopFilterFactory`](../classes/services_filters_NopFilter.NopFilterFactory.md)

## Table of contents

### Methods

- [createAIsService](api_AIsService.AIsAPIFactory.md#createaisservice)

## Methods

### createAIsService

▸ **createAIsService**(`props`, `auth?`): `SERVICE_T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `PROPS_T` |
| `auth?` | [`Auth`](api_models_Auth.Auth.md) |

#### Returns

`SERVICE_T`

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/api/AIsService.ts:54](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/api/AIsService.ts#L54)
