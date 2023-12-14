[aisbreaker-api-js - v0.1.15](../README.md) / [services/filters/NormalizeFilter](../modules/services_filters_NormalizeFilter.md) / NormalizeFilterProps

# Interface: NormalizeFilterProps

[services/filters/NormalizeFilter](../modules/services_filters_NormalizeFilter.md).NormalizeFilterProps

Every AIsService can be parameterized with these 
or (in very rare cases) with a service-specific extention of these properties.

## Hierarchy

- [`AIsServiceProps`](api_AIsService.AIsServiceProps.md)

  ↳ **`NormalizeFilterProps`**

## Table of contents

### Properties

- [forward2Service](services_filters_NormalizeFilter.NormalizeFilterProps.md#forward2service)
- [internServiceOptions](services_filters_NormalizeFilter.NormalizeFilterProps.md#internserviceoptions)
- [serviceId](services_filters_NormalizeFilter.NormalizeFilterProps.md#serviceid)
- [url](services_filters_NormalizeFilter.NormalizeFilterProps.md#url)

## Properties

### forward2Service

• **forward2Service**: [`AIsService`](api_AIsService.AIsService.md)

the actual service; this filter will forward to this service

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/services/filters/NormalizeFilter.ts:12](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/services/filters/NormalizeFilter.ts#L12)

___

### internServiceOptions

• `Optional` **internServiceOptions**: `any`

Service implementation specific opts.
Try to avoid using them because they are NOT portable!!!

#### Inherited from

[AIsServiceProps](api_AIsService.AIsServiceProps.md).[internServiceOptions](api_AIsService.AIsServiceProps.md#internserviceoptions)

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/api/AIsService.ts:42](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/api/AIsService.ts#L42)

___

### serviceId

• **serviceId**: `string`

Unique identified of the AIsBreaker service,
see: https://aisbreaker.org/docs/serviceId

#### Inherited from

[AIsServiceProps](api_AIsService.AIsServiceProps.md).[serviceId](api_AIsService.AIsServiceProps.md#serviceid)

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/api/AIsService.ts:31](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/api/AIsService.ts#L31)

___

### url

• `Optional` **url**: `string`

URL of the AI service (optional).

#### Inherited from

[AIsServiceProps](api_AIsService.AIsServiceProps.md).[url](api_AIsService.AIsServiceProps.md#url)

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/api/AIsService.ts:36](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/api/AIsService.ts#L36)
