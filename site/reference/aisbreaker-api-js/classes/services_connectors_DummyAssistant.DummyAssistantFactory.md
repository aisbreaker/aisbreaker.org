[aisbreaker-api-js - v0.1.15](../README.md) / [services/connectors/DummyAssistant](../modules/services_connectors_DummyAssistant.md) / DummyAssistantFactory

# Class: DummyAssistantFactory

[services/connectors/DummyAssistant](../modules/services_connectors_DummyAssistant.md).DummyAssistantFactory

Factory for creating a service API.

## Implements

- [`AIsAPIFactory`](../interfaces/api_AIsService.AIsAPIFactory.md)<[`DummyAssistantServiceProps`](../interfaces/services_connectors_DummyAssistant.DummyAssistantServiceProps.md), [`DummyAssistantService`](services_connectors_DummyAssistant.DummyAssistantService.md)\>

## Table of contents

### Constructors

- [constructor](services_connectors_DummyAssistant.DummyAssistantFactory.md#constructor)

### Methods

- [createAIsService](services_connectors_DummyAssistant.DummyAssistantFactory.md#createaisservice)

## Constructors

### constructor

• **new DummyAssistantFactory**()

## Methods

### createAIsService

▸ **createAIsService**(`props`, `auth?`): [`DummyAssistantService`](services_connectors_DummyAssistant.DummyAssistantService.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`DummyAssistantServiceProps`](../interfaces/services_connectors_DummyAssistant.DummyAssistantServiceProps.md) |
| `auth?` | [`Auth`](../interfaces/api_models_Auth.Auth.md) |

#### Returns

[`DummyAssistantService`](services_connectors_DummyAssistant.DummyAssistantService.md)

#### Implementation of

[AIsAPIFactory](../interfaces/api_AIsService.AIsAPIFactory.md).[createAIsService](../interfaces/api_AIsService.AIsAPIFactory.md#createaisservice)

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/services/connectors/DummyAssistant.ts:127](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/services/connectors/DummyAssistant.ts#L127)
