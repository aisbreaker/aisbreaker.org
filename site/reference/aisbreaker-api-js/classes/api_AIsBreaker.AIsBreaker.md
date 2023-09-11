[aisbreaker-api-js - v0.0.42](../README.md) / [api/AIsBreaker](../modules/api_AIsBreaker.md) / AIsBreaker

# Class: AIsBreaker

[api/AIsBreaker](../modules/api_AIsBreaker.md).AIsBreaker

Class to create and manage service APIs.

Starting point for app code / for code using the AIs framework.

## Table of contents

### Constructors

- [constructor](api_AIsBreaker.AIsBreaker.md#constructor)

### Methods

- [getAIsService](api_AIsBreaker.AIsBreaker.md#getaisservice)
- [getRemoteAIsService](api_AIsBreaker.AIsBreaker.md#getremoteaisservice)
- [pingRemoteAIsService](api_AIsBreaker.AIsBreaker.md#pingremoteaisservice)
- [registerFactory](api_AIsBreaker.AIsBreaker.md#registerfactory)
- [getAIsService](api_AIsBreaker.AIsBreaker.md#getaisservice-1)
- [getInstance](api_AIsBreaker.AIsBreaker.md#getinstance)
- [getRemoteAIsService](api_AIsBreaker.AIsBreaker.md#getremoteaisservice-1)
- [pingRemoteAIsService](api_AIsBreaker.AIsBreaker.md#pingremoteaisservice-1)

## Constructors

### constructor

• **new AIsBreaker**()

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/api/AIsBreaker.ts:19](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/api/AIsBreaker.ts#L19)

## Methods

### getAIsService

▸ **getAIsService**(`props`, `auth?`): [`AIsService`](../interfaces/api_AIsService.AIsService.md)

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

[aisbreaker-js/packages/aisbreaker-api-js/src/api/AIsBreaker.ts:66](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/api/AIsBreaker.ts#L66)

___

### getRemoteAIsService

▸ **getRemoteAIsService**(`aisbreakerServerURL`, `props`, `auth?`): [`AIsService`](../interfaces/api_AIsService.AIsService.md)

Get a service API for the given props (which include the serviceId)
from a remote AIsBreaker server.

Inclusive all default filters. They will be added here during creation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `aisbreakerServerURL` | `string` | - |
| `props` | [`AIsServiceProps`](../interfaces/api_AIsService.AIsServiceProps.md) | of the requested service (incl. propos.serviceId) |
| `auth?` | [`Auth`](../interfaces/api_models_Auth.Auth.md) | optional auth object |

#### Returns

[`AIsService`](../interfaces/api_AIsService.AIsService.md)

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/api/AIsBreaker.ts:93](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/api/AIsBreaker.ts#L93)

___

### pingRemoteAIsService

▸ **pingRemoteAIsService**(`aisbreakerServerURL`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `aisbreakerServerURL` | `string` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/api/AIsBreaker.ts:109](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/api/AIsBreaker.ts#L109)

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

▸ `Static` **getAIsService**(`props`, `auth?`): [`AIsService`](../interfaces/api_AIsService.AIsService.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`AIsServiceProps`](../interfaces/api_AIsService.AIsServiceProps.md) |
| `auth?` | [`Auth`](../interfaces/api_models_Auth.Auth.md) |

#### Returns

[`AIsService`](../interfaces/api_AIsService.AIsService.md)

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/api/AIsBreaker.ts:77](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/api/AIsBreaker.ts#L77)

___

### getInstance

▸ `Static` **getInstance**(): [`AIsBreaker`](api_AIsBreaker.AIsBreaker.md)

#### Returns

[`AIsBreaker`](api_AIsBreaker.AIsBreaker.md)

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/api/AIsBreaker.ts:22](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/api/AIsBreaker.ts#L22)

___

### getRemoteAIsService

▸ `Static` **getRemoteAIsService**(`aisbreakerServerURL`, `props`, `auth?`): [`AIsService`](../interfaces/api_AIsService.AIsService.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `aisbreakerServerURL` | `string` |
| `props` | [`AIsServiceProps`](../interfaces/api_AIsService.AIsServiceProps.md) |
| `auth?` | [`Auth`](../interfaces/api_models_Auth.Auth.md) |

#### Returns

[`AIsService`](../interfaces/api_AIsService.AIsService.md)

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/api/AIsBreaker.ts:104](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/api/AIsBreaker.ts#L104)

___

### pingRemoteAIsService

▸ `Static` **pingRemoteAIsService**(`aisbreakerServerURL`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `aisbreakerServerURL` | `string` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/api/AIsBreaker.ts:131](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/api/AIsBreaker.ts#L131)
