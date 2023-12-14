[aisbreaker-api-js - v0.1.15](../README.md) / [api/AIsBreaker](../modules/api_AIsBreaker.md) / AIsBreaker

# Class: AIsBreaker

[api/AIsBreaker](../modules/api_AIsBreaker.md).AIsBreaker

Class to create and manage service APIs.

Starting point for app code / for code using the AIs framework.

## Table of contents

### Constructors

- [constructor](api_AIsBreaker.AIsBreaker.md#constructor)

### Methods

- [getAIsService](api_AIsBreaker.AIsBreaker.md#getaisservice)
- [getFactory](api_AIsBreaker.AIsBreaker.md#getfactory)
- [getLocalAIsService](api_AIsBreaker.AIsBreaker.md#getlocalaisservice)
- [pingAIsService](api_AIsBreaker.AIsBreaker.md#pingaisservice)
- [registerFactory](api_AIsBreaker.AIsBreaker.md#registerfactory)
- [getAIsService](api_AIsBreaker.AIsBreaker.md#getaisservice-1)
- [getInstance](api_AIsBreaker.AIsBreaker.md#getinstance)
- [getLocalAIsService](api_AIsBreaker.AIsBreaker.md#getlocalaisservice-1)
- [pingAIsService](api_AIsBreaker.AIsBreaker.md#pingaisservice-1)

## Constructors

### constructor

• **new AIsBreaker**()

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/api/AIsBreaker.ts:19](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/api/AIsBreaker.ts#L19)

## Methods

### getAIsService

▸ **getAIsService**(`aisbreakerServerURL`, `props`, `auth?`): [`AIsService`](../interfaces/api_AIsService.AIsService.md)

Get a service API for the given props (which include the serviceId)
from a remote AIsBreaker server.

Inclusive all default filters. They will be added here during creation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `aisbreakerServerURL` | `string` | URL of the remote AIsBreaker server |
| `props` | [`AIsServiceProps`](../interfaces/api_AIsService.AIsServiceProps.md) | of the requested service (incl. propos.serviceId) |
| `auth?` | [`Auth`](../interfaces/api_models_Auth.Auth.md) | optional auth object |

#### Returns

[`AIsService`](../interfaces/api_AIsService.AIsService.md)

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/api/AIsBreaker.ts:105](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/api/AIsBreaker.ts#L105)

___

### getFactory

▸ **getFactory**(`props`): [`AIsAPIFactory`](../interfaces/api_AIsService.AIsAPIFactory.md)<[`AIsServiceProps`](../interfaces/api_AIsService.AIsServiceProps.md), [`AIsService`](../interfaces/api_AIsService.AIsService.md)\>

TODO: make this more intelligent to find services that do not exactly match the given serviceId

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`AIsServiceProps`](../interfaces/api_AIsService.AIsServiceProps.md) |

#### Returns

[`AIsAPIFactory`](../interfaces/api_AIsService.AIsAPIFactory.md)<[`AIsServiceProps`](../interfaces/api_AIsService.AIsServiceProps.md), [`AIsService`](../interfaces/api_AIsService.AIsService.md)\>

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/api/AIsBreaker.ts:40](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/api/AIsBreaker.ts#L40)

___

### getLocalAIsService

▸ **getLocalAIsService**(`props`, `auth?`): [`AIsService`](../interfaces/api_AIsService.AIsService.md)

Get a service API for the given props (which include the serviceId).

Inclusive all default filters. They will be added here during creation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `props` | [`AIsServiceProps`](../interfaces/api_AIsService.AIsServiceProps.md) | of the requested service (incl. propos.serviceId) |
| `auth?` | [`Auth`](../interfaces/api_models_Auth.Auth.md) | optional auth object |

#### Returns

[`AIsService`](../interfaces/api_AIsService.AIsService.md)

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/api/AIsBreaker.ts:78](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/api/AIsBreaker.ts#L78)

___

### pingAIsService

▸ **pingAIsService**(`aisbreakerServerURL`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `aisbreakerServerURL` | `string` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/api/AIsBreaker.ts:121](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/api/AIsBreaker.ts#L121)

___

### registerFactory

▸ **registerFactory**(`param`): `void`

Register a service API factory with its serviceId.

#### Parameters

| Name | Type |
| :------ | :------ |
| `param` | `Object` |
| `param.factory` | [`AIsAPIFactory`](../interfaces/api_AIsService.AIsAPIFactory.md)<[`AIsServiceProps`](../interfaces/api_AIsService.AIsServiceProps.md), [`AIsService`](../interfaces/api_AIsService.AIsService.md)\> |
| `param.serviceId` | `string` |

#### Returns

`void`

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/api/AIsBreaker.ts:32](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/api/AIsBreaker.ts#L32)

___

### getAIsService

▸ `Static` **getAIsService**(`aisbreakerServerURL`, `props`, `auth?`): [`AIsService`](../interfaces/api_AIsService.AIsService.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `aisbreakerServerURL` | `string` |
| `props` | [`AIsServiceProps`](../interfaces/api_AIsService.AIsServiceProps.md) |
| `auth?` | [`Auth`](../interfaces/api_models_Auth.Auth.md) |

#### Returns

[`AIsService`](../interfaces/api_AIsService.AIsService.md)

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/api/AIsBreaker.ts:116](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/api/AIsBreaker.ts#L116)

___

### getInstance

▸ `Static` **getInstance**(): [`AIsBreaker`](api_AIsBreaker.AIsBreaker.md)

#### Returns

[`AIsBreaker`](api_AIsBreaker.AIsBreaker.md)

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/api/AIsBreaker.ts:22](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/api/AIsBreaker.ts#L22)

___

### getLocalAIsService

▸ `Static` **getLocalAIsService**(`props`, `auth?`): [`AIsService`](../interfaces/api_AIsService.AIsService.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`AIsServiceProps`](../interfaces/api_AIsService.AIsServiceProps.md) |
| `auth?` | [`Auth`](../interfaces/api_models_Auth.Auth.md) |

#### Returns

[`AIsService`](../interfaces/api_AIsService.AIsService.md)

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/api/AIsBreaker.ts:89](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/api/AIsBreaker.ts#L89)

___

### pingAIsService

▸ `Static` **pingAIsService**(`aisbreakerServerURL`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `aisbreakerServerURL` | `string` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/api/AIsBreaker.ts:143](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/api/AIsBreaker.ts#L143)
