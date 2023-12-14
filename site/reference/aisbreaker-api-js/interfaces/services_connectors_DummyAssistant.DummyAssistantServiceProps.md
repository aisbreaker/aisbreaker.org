[aisbreaker-api-js - v0.1.15](../README.md) / [services/connectors/DummyAssistant](../modules/services_connectors_DummyAssistant.md) / DummyAssistantServiceProps

# Interface: DummyAssistantServiceProps

[services/connectors/DummyAssistant](../modules/services_connectors_DummyAssistant.md).DummyAssistantServiceProps

Every AIsService can be parameterized with these 
or (in very rare cases) with a service-specific extention of these properties.

## Hierarchy

- [`AIsServiceProps`](api_AIsService.AIsServiceProps.md)

  ↳ **`DummyAssistantServiceProps`**

## Table of contents

### Properties

- [greeting](services_connectors_DummyAssistant.DummyAssistantServiceProps.md#greeting)
- [internServiceOptions](services_connectors_DummyAssistant.DummyAssistantServiceProps.md#internserviceoptions)
- [serviceId](services_connectors_DummyAssistant.DummyAssistantServiceProps.md#serviceid)
- [url](services_connectors_DummyAssistant.DummyAssistantServiceProps.md#url)

## Properties

### greeting

• `Optional` **greeting**: `string`

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/services/connectors/DummyAssistant.ts:33](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/services/connectors/DummyAssistant.ts#L33)

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
