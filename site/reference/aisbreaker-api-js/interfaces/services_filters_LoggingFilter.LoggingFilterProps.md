[aisbreaker-api-js - v0.0.42](../README.md) / [services/filters/LoggingFilter](../modules/services_filters_LoggingFilter.md) / LoggingFilterProps

# Interface: LoggingFilterProps

[services/filters/LoggingFilter](../modules/services_filters_LoggingFilter.md).LoggingFilterProps

Every AIsService can be parameterized with these 
or (in very rare cases) with a service-specific extention of these properties.

## Hierarchy

- [`FilterProps`](base_BaseAIsFilter.FilterProps.md)

  ↳ **`LoggingFilterProps`**

## Table of contents

### Properties

- [forward2Service](services_filters_LoggingFilter.LoggingFilterProps.md#forward2service)
- [forward2ServiceProps](services_filters_LoggingFilter.LoggingFilterProps.md#forward2serviceprops)
- [internServiceOptions](services_filters_LoggingFilter.LoggingFilterProps.md#internserviceoptions)
- [logLevel](services_filters_LoggingFilter.LoggingFilterProps.md#loglevel)
- [serviceId](services_filters_LoggingFilter.LoggingFilterProps.md#serviceid)
- [url](services_filters_LoggingFilter.LoggingFilterProps.md#url)

## Properties

### forward2Service

• `Optional` **forward2Service**: [`AIsService`](api_AIsService.AIsService.md)

The actual service instance; this filter will forward to this service.
Either forward2ServiceProps or forward2Service must be set.

#### Inherited from

[FilterProps](base_BaseAIsFilter.FilterProps.md).[forward2Service](base_BaseAIsFilter.FilterProps.md#forward2service)

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/base/BaseAIsFilter.ts:19](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/base/BaseAIsFilter.ts#L19)

___

### forward2ServiceProps

• `Optional` **forward2ServiceProps**: [`AIsServiceProps`](api_AIsService.AIsServiceProps.md)

The actual service; this filter will forward to this service.
Either forward2ServiceProps or forward2Service must be set.

#### Inherited from

[FilterProps](base_BaseAIsFilter.FilterProps.md).[forward2ServiceProps](base_BaseAIsFilter.FilterProps.md#forward2serviceprops)

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/base/BaseAIsFilter.ts:14](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/base/BaseAIsFilter.ts#L14)

___

### internServiceOptions

• `Optional` **internServiceOptions**: `any`

Service implementation specific opts.
Try to avoid using them because they are NOT portable!!!

#### Inherited from

[FilterProps](base_BaseAIsFilter.FilterProps.md).[internServiceOptions](base_BaseAIsFilter.FilterProps.md#internserviceoptions)

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/api/AIsService.ts:42](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/api/AIsService.ts#L42)

___

### logLevel

• **logLevel**: `number`

LogLevels  = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  verbose: 4,
  debug: 5,
  silly: 6,

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/services/filters/LoggingFilter.ts:23](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/services/filters/LoggingFilter.ts#L23)

___

### serviceId

• **serviceId**: `string`

Unique identified of the AIsBreaker service,
see: https://aisbreaker.org/docs/serviceId

#### Inherited from

[FilterProps](base_BaseAIsFilter.FilterProps.md).[serviceId](base_BaseAIsFilter.FilterProps.md#serviceid)

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/api/AIsService.ts:31](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/api/AIsService.ts#L31)

___

### url

• `Optional` **url**: `string`

URL of the AI service (optional).

#### Inherited from

[FilterProps](base_BaseAIsFilter.FilterProps.md).[url](base_BaseAIsFilter.FilterProps.md#url)

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/api/AIsService.ts:36](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/api/AIsService.ts#L36)
