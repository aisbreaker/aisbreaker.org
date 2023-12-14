[aisbreaker-api-js - v0.1.15](../README.md) / [services/filters/MirrorFilter](../modules/services_filters_MirrorFilter.md) / MirrorFilter

# Class: MirrorFilter

[services/filters/MirrorFilter](../modules/services_filters_MirrorFilter.md).MirrorFilter

Every service API must implement this interface.

## Hierarchy

- [`BaseAIsFilter`](base_BaseAIsFilter.BaseAIsFilter.md)<[`FilterProps`](../interfaces/base_BaseAIsFilter.FilterProps.md)\>

  ↳ **`MirrorFilter`**

## Table of contents

### Constructors

- [constructor](services_filters_MirrorFilter.MirrorFilter.md#constructor)

### Properties

- [auth](services_filters_MirrorFilter.MirrorFilter.md#auth)
- [serviceProps](services_filters_MirrorFilter.MirrorFilter.md#serviceprops)

### Methods

- [getForward2Service](services_filters_MirrorFilter.MirrorFilter.md#getforward2service)
- [getMirroredServiceId](services_filters_MirrorFilter.MirrorFilter.md#getmirroredserviceid)
- [getMirroredStreamProgressFunction](services_filters_MirrorFilter.MirrorFilter.md#getmirroredstreamprogressfunction)
- [getMirroredUsage](services_filters_MirrorFilter.MirrorFilter.md#getmirroredusage)
- [mirrorOutputs](services_filters_MirrorFilter.MirrorFilter.md#mirroroutputs)
- [mirrorString](services_filters_MirrorFilter.MirrorFilter.md#mirrorstring)
- [process](services_filters_MirrorFilter.MirrorFilter.md#process)

## Constructors

### constructor

• **new MirrorFilter**(`serviceProps`, `auth?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `serviceProps` | [`FilterProps`](../interfaces/base_BaseAIsFilter.FilterProps.md) |
| `auth?` | [`Auth`](../interfaces/api_models_Auth.Auth.md) |

#### Overrides

[BaseAIsFilter](base_BaseAIsFilter.BaseAIsFilter.md).[constructor](base_BaseAIsFilter.BaseAIsFilter.md#constructor)

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/services/filters/MirrorFilter.ts:14](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/services/filters/MirrorFilter.ts#L14)

## Properties

### auth

• `Optional` **auth**: [`Auth`](../interfaces/api_models_Auth.Auth.md)

#### Inherited from

[BaseAIsFilter](base_BaseAIsFilter.BaseAIsFilter.md).[auth](base_BaseAIsFilter.BaseAIsFilter.md#auth)

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/base/BaseAIsFilter.ts:24](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/base/BaseAIsFilter.ts#L24)

___

### serviceProps

• **serviceProps**: [`FilterProps`](../interfaces/base_BaseAIsFilter.FilterProps.md)

set in constructor

#### Inherited from

[BaseAIsFilter](base_BaseAIsFilter.BaseAIsFilter.md).[serviceProps](base_BaseAIsFilter.BaseAIsFilter.md#serviceprops)

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/base/BaseAIsFilter.ts:23](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/base/BaseAIsFilter.ts#L23)

## Methods

### getForward2Service

▸ **getForward2Service**(): [`AIsService`](../interfaces/api_AIsService.AIsService.md)

#### Returns

[`AIsService`](../interfaces/api_AIsService.AIsService.md)

#### Inherited from

[BaseAIsFilter](base_BaseAIsFilter.BaseAIsFilter.md).[getForward2Service](base_BaseAIsFilter.BaseAIsFilter.md#getforward2service)

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/base/BaseAIsFilter.ts:33](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/base/BaseAIsFilter.ts#L33)

___

### getMirroredServiceId

▸ `Protected` **getMirroredServiceId**(`origServiceId`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `origServiceId` | `string` |

#### Returns

`string`

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/services/filters/MirrorFilter.ts:115](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/services/filters/MirrorFilter.ts#L115)

___

### getMirroredStreamProgressFunction

▸ `Protected` **getMirroredStreamProgressFunction**(`origFunc?`): `undefined` \| [`StreamProgressFunction`](../modules/api_models_Request.md#streamprogressfunction)

#### Parameters

| Name | Type |
| :------ | :------ |
| `origFunc?` | [`StreamProgressFunction`](../modules/api_models_Request.md#streamprogressfunction) |

#### Returns

`undefined` \| [`StreamProgressFunction`](../modules/api_models_Request.md#streamprogressfunction)

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/services/filters/MirrorFilter.ts:86](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/services/filters/MirrorFilter.ts#L86)

___

### getMirroredUsage

▸ `Protected` **getMirroredUsage**(`origUsage`): [`Usage`](../interfaces/api_models_Usage.Usage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `origUsage` | [`Usage`](../interfaces/api_models_Usage.Usage.md) |

#### Returns

[`Usage`](../interfaces/api_models_Usage.Usage.md)

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/services/filters/MirrorFilter.ts:107](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/services/filters/MirrorFilter.ts#L107)

___

### mirrorOutputs

▸ `Protected` **mirrorOutputs**(`origOutputs`): [`Output`](../interfaces/api_models_Output.Output.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `origOutputs` | [`Output`](../interfaces/api_models_Output.Output.md)[] |

#### Returns

[`Output`](../interfaces/api_models_Output.Output.md)[]

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/services/filters/MirrorFilter.ts:48](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/services/filters/MirrorFilter.ts#L48)

___

### mirrorString

▸ `Protected` **mirrorString**(`s`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `string` |

#### Returns

`string`

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/services/filters/MirrorFilter.ts:81](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/services/filters/MirrorFilter.ts#L81)

___

### process

▸ **process**(`request`): `Promise`<[`ResponseFinal`](../interfaces/api_models_ResponseFinal.ResponseFinal.md)\>

Let the service do its work.

Alternative names: infer, derive, task, reply, respond, process, ...

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`Request`](../interfaces/api_models_Request.Request.md) |

#### Returns

`Promise`<[`ResponseFinal`](../interfaces/api_models_ResponseFinal.ResponseFinal.md)\>

#### Overrides

[BaseAIsFilter](base_BaseAIsFilter.BaseAIsFilter.md).[process](base_BaseAIsFilter.BaseAIsFilter.md#process)

#### Defined in

[aisbreaker-js/packages/aisbreaker-api-js/src/services/filters/MirrorFilter.ts:18](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-api-js/src/services/filters/MirrorFilter.ts#L18)
