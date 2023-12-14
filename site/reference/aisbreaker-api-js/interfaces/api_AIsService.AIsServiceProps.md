[aisbreaker-api-js - v0.1.15](../README.md) / [api/AIsService](../modules/api_AIsService.md) / AIsServiceProps

# Interface: AIsServiceProps

[api/AIsService](../modules/api_AIsService.md).AIsServiceProps

Every AIsService can be parameterized with these 
or (in very rare cases) with a service-specific extention of these properties.

## Hierarchy

- **`AIsServiceProps`**

  ↳ [`FilterProps`](base_BaseAIsFilter.FilterProps.md)

  ↳ [`AIsNetworkClientProps`](services_connectors_AIsNetworkClient.AIsNetworkClientProps.md)

  ↳ [`DummyAssistantServiceProps`](services_connectors_DummyAssistant.DummyAssistantServiceProps.md)

  ↳ [`NormalizeFilterProps`](services_filters_NormalizeFilter.NormalizeFilterProps.md)

## Table of contents

### Properties

- [internServiceOptions](api_AIsService.AIsServiceProps.md#internserviceoptions)
- [serviceId](api_AIsService.AIsServiceProps.md#serviceid)
- [url](api_AIsService.AIsServiceProps.md#url)

## Properties

### internServiceOptions

• `Optional` **internServiceOptions**: `any`

Service implementation specific opts.
Try to avoid using them because they are NOT portable!!!

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/api/AIsService.ts:42](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/api/AIsService.ts#L42)

___

### serviceId

• **serviceId**: `string`

Unique identified of the AIsBreaker service,
see: https://aisbreaker.org/docs/serviceId

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/api/AIsService.ts:31](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/api/AIsService.ts#L31)

___

### url

• `Optional` **url**: `string`

URL of the AI service (optional).

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/api/AIsService.ts:36](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/api/AIsService.ts#L36)
