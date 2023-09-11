[aisbreaker-api-js - v0.0.42](../README.md) / [base/BaseAIsFilter](../modules/base_BaseAIsFilter.md) / FilterProps

# Interface: FilterProps

[base/BaseAIsFilter](../modules/base_BaseAIsFilter.md).FilterProps

Every AIsService can be parameterized with these 
or (in very rare cases) with a service-specific extention of these properties.

## Hierarchy

- [`AIsServiceProps`](api_AIsService.AIsServiceProps.md)

  ↳ **`FilterProps`**

  ↳↳ [`LoggingFilterProps`](services_filters_LoggingFilter.LoggingFilterProps.md)

## Table of contents

### Properties

- [forward2Service](base_BaseAIsFilter.FilterProps.md#forward2service)
- [forward2ServiceProps](base_BaseAIsFilter.FilterProps.md#forward2serviceprops)
- [internServiceOptions](base_BaseAIsFilter.FilterProps.md#internserviceoptions)
- [serviceId](base_BaseAIsFilter.FilterProps.md#serviceid)
- [url](base_BaseAIsFilter.FilterProps.md#url)

## Properties

### forward2Service

• `Optional` **forward2Service**: [`AIsService`](api_AIsService.AIsService.md)

The actual service instance; this filter will forward to this service.
Either forward2ServiceProps or forward2Service must be set.

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/base/BaseAIsFilter.ts:19](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/base/BaseAIsFilter.ts#L19)

___

### forward2ServiceProps

• `Optional` **forward2ServiceProps**: [`AIsServiceProps`](api_AIsService.AIsServiceProps.md)

The actual service; this filter will forward to this service.
Either forward2ServiceProps or forward2Service must be set.

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/base/BaseAIsFilter.ts:14](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/base/BaseAIsFilter.ts#L14)

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
