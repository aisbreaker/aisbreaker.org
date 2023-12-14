[aisbreaker-api-js - v0.1.15](../README.md) / [services/connectors/AIsNetworkClient](../modules/services_connectors_AIsNetworkClient.md) / AIsNetworkClientProps

# Interface: AIsNetworkClientProps

[services/connectors/AIsNetworkClient](../modules/services_connectors_AIsNetworkClient.md).AIsNetworkClientProps

Every AIsService can be parameterized with these 
or (in very rare cases) with a service-specific extention of these properties.

## Hierarchy

- [`AIsServiceProps`](api_AIsService.AIsServiceProps.md)

  ↳ **`AIsNetworkClientProps`**

## Table of contents

### Properties

- [forward2ServiceProps](services_connectors_AIsNetworkClient.AIsNetworkClientProps.md#forward2serviceprops)
- [internServiceOptions](services_connectors_AIsNetworkClient.AIsNetworkClientProps.md#internserviceoptions)
- [serviceId](services_connectors_AIsNetworkClient.AIsNetworkClientProps.md#serviceid)
- [url](services_connectors_AIsNetworkClient.AIsNetworkClientProps.md#url)

## Properties

### forward2ServiceProps

• **forward2ServiceProps**: [`AIsServiceProps`](api_AIsService.AIsServiceProps.md)

the actual service; this filter will forward to this service

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/services/connectors/AIsNetworkClient.ts:38](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/services/connectors/AIsNetworkClient.ts#L38)

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

• **url**: `string`

access this AIsBreaker server

#### Overrides

[AIsServiceProps](api_AIsService.AIsServiceProps.md).[url](api_AIsService.AIsServiceProps.md#url)

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/services/connectors/AIsNetworkClient.ts:35](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/services/connectors/AIsNetworkClient.ts#L35)
